/**
 * Centralized API Client & Service Layer for Atiku Northern Youth Vanguard (ANYV)
 * Connects frontend directly to the Laravel CMS Backend API
 */

const RAW_API_BASE = import.meta.env.VITE_API_URL || 
  (typeof window !== 'undefined' && window.location.port === '5173' ? 'http://localhost:8000/api' : '/api');

export const API_BASE = RAW_API_BASE.replace(/\/+$/, '');

/**
 * Universal fetch wrapper with error handling and JSON parsing
 */
export async function apiFetch(endpoint, options = {}) {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_BASE}${cleanEndpoint}`;
  const defaultHeaders = {
    'Accept': 'application/json',
    ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(options.headers || {})
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: defaultHeaders
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.message || `API Error: ${response.status} ${response.statusText}`);
    }
    return data;
  } catch (error) {
    console.warn(`[ANYV API Warning] ${endpoint}:`, error.message);
    throw error;
  }
}

/* =========================================================================
   ADAPTER HELPERS (Normalize backend API records to frontend component format)
   ========================================================================= */

export function getInitials(name = '') {
  if (!name) return 'AV';
  const cleaned = name.replace(/^(H\.E\.|Alhaji|Dr\.|Engr\.|Rt\.\s*Hon\.|Hon\.|QS|Comrade|Barr\.|Prof\.)\s+/i, '');
  const parts = cleaned.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'AV';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function adaptLeader(leader) {
  if (!leader) return null;
  const isPrincipal = leader.id === 1 || leader.id === 2 || 
    (leader.role && (leader.role.includes('Presidential') || leader.role.includes('Standard Bearer')));
  const isState = leader.state_id !== null || 
    (leader.state_name && !leader.state_name.startsWith('National')) ||
    (leader.role && leader.role.includes('State'));
  const isDirectorate = leader.role && leader.role.includes('Director');

  let category = 'executive';
  if (isPrincipal) category = 'principal';
  else if (isState) category = 'state';
  else if (isDirectorate) category = 'directorate';

  let roleType = 'coordinator';
  const roleLower = (leader.role || '').toLowerCase();
  if (roleLower.includes('vice') || roleLower.includes('deputy') || roleLower.includes('assistant')) {
    roleType = 'vice_coordinator';
  } else if (roleLower.includes('secretary')) {
    roleType = 'secretary';
  }

  let stateClean = leader.state_name || '';
  if (stateClean.includes('(')) {
    const m = stateClean.match(/\((.*?)\)/);
    stateClean = m ? m[1] : stateClean;
  }
  if (stateClean.toLowerCase() === 'national' || stateClean.toLowerCase() === 'national leadership') {
    stateClean = leader.id === 1 ? 'Adamawa' : (leader.id === 2 ? 'Rivers' : '');
  }

  return {
    id: leader.id,
    apiId: leader.id,
    name: leader.name,
    roleLabel: (leader.role || '').toUpperCase(),
    rankTitle: leader.role,
    badge: isPrincipal ? (leader.id === 1 ? 'STANDARD BEARER' : 'VICE PRESIDENTIAL TICKET') : undefined,
    badgeCode: isState 
      ? `STA-${(stateClean || 'NG').slice(0, 2).toUpperCase()}-0${leader.order || 1}`
      : `NEC-0${leader.order || 1}`,
    state: stateClean,
    category,
    roleType,
    photoUrl: leader.photo_url || '',
    initials: getInitials(leader.name),
    bio: leader.bio || '',
    quote: leader.quote || (leader.bio ? leader.bio.split('.')[0] + '.' : 'Championing youth empowerment, unity, and progress across Northern Nigeria.'),
    portfolioRoles: [
      `${leader.role} @ Atiku Northern Youth Vanguard`,
      isState ? `${stateClean} State Chapter Executive` : 'National Executive Council (HQ)',
      'Civic Mobilization & Youth Empowerment'
    ],
    socials: {
      phone: leader.phone || '',
      email: leader.email || ''
    }
  };
}

export function adaptState(state) {
  if (!state) return null;
  return {
    id: state.id,
    name: state.name,
    code: state.code || (state.name ? state.name.slice(0, 3).toUpperCase() : 'NG'),
    zone: state.zone || 'North',
    capital: state.capital || state.name,
    hub: state.description || `${state.name} Chapter Council`,
    lgas: state.lgas || 0,
    liaison: `${state.capital || state.name} Secretariat`,
    leadersCount: state.leaders_count || 0,
    newsCount: state.news_count || 0,
    isActive: state.is_active ?? true
  };
}

export function adaptNews(item) {
  if (!item) return null;
  const itemImages = Array.isArray(item.images) && item.images.length > 0
    ? item.images
    : (item.image_url ? [item.image_url] : []);
  const coverImage = item.image_url || itemImages[0] || '';

  return {
    id: item.id,
    state: item.state_name || 'National',
    title: item.title,
    slug: item.slug,
    category: item.category || 'National Communiqué',
    date: new Date(item.published_at || item.created_at).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    readTime: '4 min read',
    author: item.author || 'ANYV Secretariat',
    image: coverImage,
    images: itemImages,
    excerpt: item.excerpt || (item.content ? item.content.slice(0, 150) + '...' : ''),
    content: item.content || '',
    views: item.views_count || 120,
    tags: [item.state_name || 'National', item.category || 'News']
  };
}

export function adaptMember(member) {
  if (!member) return null;
  return {
    id: member.id,
    membershipNumber: member.membership_number,
    fullName: member.full_name,
    email: member.email,
    phone: member.phone,
    state: member.state,
    lga: member.lga,
    ward: member.ward || 'Central Ward',
    role: member.occupation || 'Accredited Member',
    address: member.address || '',
    vinNumber: member.vin_number || '',
    ninNumber: member.nin_number || '',
    accountNumber: member.account_number || '',
    bankName: member.bank_name || '',
    track: 'Youth Leadership & Community Empowerment',
    status: member.status === 'approved' ? 'Ratified & Active' : (member.status === 'rejected' ? 'Rejected' : 'Under Review'),
    issuedDate: new Date(member.registered_at || member.created_at || Date.now()).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    }),
    expiryDate: 'September 2028',
    zonalOfficer: `${member.state} Chapter Secretariat`
  };
}

/* =========================================================================
   PUBLIC CONSTANTS & UI CATEGORIES
   ========================================================================= */

export const LEADERSHIP_CATEGORIES = [
  { id: 'all', label: 'All Leadership' },
  { id: 'executive', label: 'National Executive Council' },
  { id: 'directorate', label: 'National Directorates' },
  { id: 'state', label: 'State Chapter Executives' }
];

export const NEWS_CATEGORIES = [
  'All Categories',
  'National Communiqué',
  'State Chapters',
  'Youth & Economy',
  'Policy & Governance',
  'Press Statements'
];

/* =========================================================================
   PUBLIC API SERVICE FUNCTIONS
   ========================================================================= */

/**
 * Fetch all 20 Northern States
 */
export async function fetchStates() {
  const res = await apiFetch('/states');
  const states = res.data || [];
  return states.map(adaptState);
}

/**
 * Fetch all programs
 */
export async function fetchPrograms() {
  const res = await apiFetch('/programs');
  return res.data || [];
}

/**
 * Fetch a single state with leaders, news, and member count
 */
export async function fetchStateById(id) {
  const res = await apiFetch(`/states/${id}`);
  const data = res.data;
  return {
    ...adaptState(data),
    leaders: (data.leaders || []).map(adaptLeader),
    news: (data.news || []).map(adaptNews),
    totalMembers: data.total_members || 0
  };
}

/**
 * Fetch all Leaders (Principals, NEC, Directorates, State Chapters)
 */
export async function fetchLeaders(params = {}) {
  const query = new URLSearchParams();
  if (params.state_id) query.append('state_id', params.state_id);
  const qs = query.toString() ? `?${query.toString()}` : '';
  const res = await apiFetch(`/leaders${qs}`);
  const leaders = res.data || [];
  return leaders.map(adaptLeader);
}

/**
 * Fetch News Dispatches with multi-picture support
 */
export async function fetchNews(params = {}) {
  const query = new URLSearchParams();
  if (params.state && params.state !== 'All') query.append('state', params.state);
  if (params.category && params.category !== 'All Categories') query.append('category', params.category);
  const qs = query.toString() ? `?${query.toString()}` : '';
  const res = await apiFetch(`/news${qs}`);
  const news = res.data || [];
  return news.map(adaptNews);
}

/**
 * Fetch Members list from backend
 */
export async function fetchMembers(params = {}) {
  const query = new URLSearchParams();
  if (params.state) query.append('state', params.state);
  if (params.q) query.append('q', params.q);
  const qs = query.toString() ? `?${query.toString()}` : '';
  const res = await apiFetch(`/members${qs}`);
  const members = res.data || [];
  return members.map(adaptMember);
}

/**
 * Verify a member by registration number, phone, email, or name
 */
export async function verifyMemberApi(query) {
  if (!query || typeof query !== 'string') return { found: false };
  try {
    const res = await apiFetch(`/members?q=${encodeURIComponent(query.trim())}`);
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return {
        found: true,
        ...adaptMember(res.data[0])
      };
    }
  } catch (e) {
    console.error('Member verification error:', e);
  }
  return { found: false };
}

/**
 * Register a new member in the database
 */
export async function registerMemberApi(payload) {
  const body = {
    full_name: payload.fullName || payload.full_name,
    email: payload.email,
    phone: payload.phone,
    state: payload.state || payload.stateOfOrigin,
    lga: payload.lga || 'Central',
    ward: payload.ward || '',
    occupation: payload.qualification || payload.occupation || 'Youth Volunteer',
    address: payload.address || '',
    vin_number: payload.vinNumber || payload.vin_number || '',
    nin_number: payload.ninNumber || payload.nin_number || '',
    account_number: payload.accountNumber || payload.account_number || '',
    bank_name: payload.bankName || payload.bank_name || ''
  };

  const res = await apiFetch('/members/register', {
    method: 'POST',
    body: JSON.stringify(body)
  });

  return {
    ...res,
    member: adaptMember(res.data)
  };
}

/**
 * Subscribe to newsletters and state news
 */
export async function subscribeNewsletterApi(email, stateInterest = 'All 19 States') {
  return await apiFetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email, state: stateInterest })
  });
}

/**
 * Submit contact message
 */
export async function submitContactApi(name, email, message, subject = '') {
  return await apiFetch('/contact', {
    method: 'POST',
    body: JSON.stringify({ name, email, message, subject })
  });
}

/**
 * Admin authentication
 */
export async function adminLoginApi(email, password) {
  return await apiFetch('/admin/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
}

/**
 * Upload single or multiple images using POST /api/upload
 * Supports file field aliases ('image', 'images[]', 'photo', 'file')
 * @param {File|File[]|FileList} fileOrFiles - Single file or array/FileList of images
 * @param {string} folder - Optional destination folder (e.g. 'uploads', 'leaders', 'news', 'cards')
 * @returns {Promise<{success: boolean, message: string, url?: string, urls?: string[], data?: any}>}
 */
export async function uploadImageApi(fileOrFiles, folder = 'uploads') {
  const formData = new FormData();
  formData.append('folder', folder);

  if (fileOrFiles instanceof FileList || Array.isArray(fileOrFiles)) {
    Array.from(fileOrFiles).forEach((file) => {
      formData.append('images[]', file);
    });
  } else if (fileOrFiles instanceof File) {
    formData.append('image', fileOrFiles);
  } else {
    throw new Error('Please provide a valid image File or FileList/Array.');
  }

  return await apiFetch('/upload', {
    method: 'POST',
    body: formData
  });
}

export default {
  API_BASE,
  apiFetch,
  fetchStates,
  fetchStateById,
  fetchLeaders,
  fetchNews,
  fetchMembers,
  verifyMemberApi,
  registerMemberApi,
  subscribeNewsletterApi,
  submitContactApi,
  adminLoginApi,
  uploadImageApi,
  adaptLeader,
  adaptState,
  adaptNews,
  adaptMember
};

