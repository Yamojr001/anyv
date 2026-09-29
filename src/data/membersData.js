// Centralized Membership Registry & Verification Data Store

export const initialVerifiedMembers = [
  {
    id: 1,
    membershipNumber: 'ANYV/BAU/0001',
    fullName: 'Usman Aliyu Garba',
    email: 'usman.garba@gmail.com',
    phone: '0803 123 4567',
    state: 'Bauchi',
    lga: 'Bauchi Central',
    ward: 'Dan Iya Ward',
    role: 'Accredited Youth Delegate',
    track: 'Agricultural Enterprise & Food Security',
    status: 'Ratified & Active',
    issuedDate: 'September 2026',
    expiryDate: 'September 2028',
    zonalOfficer: 'Hon. Babayo Musa (State Coordinator)'
  },
  {
    id: 2,
    membershipNumber: 'ANYV/BEN/0002',
    fullName: 'Terna Terseer Joshua',
    email: 'terna.joshua@gmail.com',
    phone: '0803 987 6543',
    state: 'Benue',
    lga: 'Makurdi',
    ward: 'High Level Ward',
    role: 'Accredited Youth Delegate',
    track: 'Civil Infrastructure & Community Advocacy',
    status: 'Ratified & Active',
    issuedDate: 'September 2026',
    expiryDate: 'September 2028',
    zonalOfficer: 'Pius Monday (State Secretary)'
  },
  {
    id: 3,
    membershipNumber: 'ANYV/KAT/0003',
    fullName: 'Fatima Aminu Katsina',
    email: 'fatima.aminu@gmail.com',
    phone: '0802 345 6789',
    state: 'Katsina',
    lga: 'Katsina',
    ward: 'Wakilin Kudu',
    role: 'Women Leadership Envoy',
    track: 'Digital Literacy & Girl-Child Education',
    status: 'Ratified & Active',
    issuedDate: 'September 2026',
    expiryDate: 'September 2028',
    zonalOfficer: 'Hon. Ibrahim Sani (State Coordinator)'
  },
  {
    id: 4,
    membershipNumber: 'ANYV/BAU/0004',
    fullName: 'Amina Bello',
    email: 'amina@test.com',
    phone: '0809 111 2233',
    state: 'Bauchi',
    lga: 'Tafawa Balewa',
    ward: 'Central Ward',
    role: 'Youth Volunteer',
    track: 'Leadership & Policy',
    status: 'Ratified & Active',
    issuedDate: 'September 2026',
    expiryDate: 'September 2028',
    zonalOfficer: 'Zechariah Nehemiah (State Secretary)'
  },
  {
    id: 5,
    membershipNumber: 'ANYV/KAN/0005',
    fullName: 'Musa Abdullahi Kano',
    email: 'musa.abdullahi@gmail.com',
    phone: '0803 555 7788',
    state: 'Kano',
    lga: 'Nassarawa',
    ward: 'Kaura Goje',
    role: 'Commercial Mobilizer',
    track: 'Youth Commercial & Digital Trade',
    status: 'Ratified & Active',
    issuedDate: 'September 2026',
    expiryDate: 'September 2028',
    zonalOfficer: 'Kano Zonal Directorate'
  }
]

// Get all members (combining localStorage cache with initial records)
export function getAllMembers() {
  try {
    const saved = localStorage.getItem('anyv_registered_members')
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return [...parsed, ...initialVerifiedMembers]
      }
    }
  } catch (e) {
    // ignore
  }
  return initialVerifiedMembers
}

// Verify a member by membership number, email, or phone
export async function verifyMember(query) {
  if (!query || typeof query !== 'string') return null
  const clean = query.trim().toLowerCase().replace(/[\s\-\/]/g, '')

  // 1. First check local storage and initial list
  const localList = getAllMembers()
  const foundLocal = localList.find(m => {
    const mNum = (m.membershipNumber || '').toLowerCase().replace(/[\s\-\/]/g, '')
    const mEmail = (m.email || '').toLowerCase()
    const mPhone = (m.phone || '').replace(/[\s\-\/]/g, '')
    const mName = (m.fullName || '').toLowerCase()

    return mNum.includes(clean) || clean.includes(mNum) ||
           mEmail === clean ||
           mPhone.includes(clean) || clean.includes(mPhone) ||
           mName.includes(clean)
  })

  if (foundLocal) {
    return {
      found: true,
      ...foundLocal
    }
  }

  // 2. Try backend API if reachable
  try {
    const res = await fetch(`http://localhost:8000/api/members?q=${encodeURIComponent(query)}`)
    if (res.ok) {
      const json = await res.json()
      if (json.success && json.data && json.data.length > 0) {
        const item = json.data[0]
        return {
          found: true,
          membershipNumber: item.membership_number,
          fullName: item.full_name,
          email: item.email,
          phone: item.phone,
          state: item.state,
          lga: item.lga,
          ward: item.ward || 'General',
          role: item.occupation || 'Accredited Member',
          track: 'Vanguard Citizen Delegate',
          status: item.status === 'approved' ? 'Ratified & Active' : 'Under Review',
          issuedDate: new Date(item.registered_at || item.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
          expiryDate: 'September 2028',
          zonalOfficer: `${item.state} State Liaison`
        }
      }
    }
  } catch (err) {
    // Backend unavailable, fallback handled
  }

  return { found: false }
}

// Register a new member and persist
export async function registerNewMember(payload) {
  const stateCode = (payload.state || 'NG').slice(0, 3).toUpperCase()
  const randomSuffix = Math.floor(1000 + Math.random() * 9000)
  const generatedId = `ANYV/${stateCode}/${randomSuffix}`

  const newMember = {
    id: Date.now(),
    membershipNumber: generatedId,
    fullName: payload.fullName || payload.full_name,
    email: payload.email,
    phone: payload.phone,
    state: payload.state || payload.stateOfOrigin,
    lga: payload.lga || 'Central',
    ward: payload.ward || 'Ward 01',
    role: payload.qualification || payload.occupation || 'Accredited Delegate',
    track: payload.interest || 'Leadership & Policy',
    status: 'Ratified & Active',
    issuedDate: 'September 2026',
    expiryDate: 'September 2028',
    zonalOfficer: `${payload.state || 'State'} Chapter Liaison Desk`
  }

  // Save to localStorage
  try {
    const existing = JSON.parse(localStorage.getItem('anyv_registered_members') || '[]')
    existing.unshift(newMember)
    localStorage.setItem('anyv_registered_members', JSON.stringify(existing))
  } catch (e) {
    // ignore
  }

  // Attempt sync with backend API
  try {
    await fetch('http://localhost:8000/api/members/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: newMember.fullName,
        email: newMember.email,
        phone: newMember.phone,
        state: newMember.state,
        lga: newMember.lga,
        ward: newMember.ward,
        occupation: newMember.role
      })
    })
  } catch (e) {
    // Ignore backend connection errors
  }

  return newMember
}
