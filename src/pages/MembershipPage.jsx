import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  IdentificationCard,
  CheckCircle,
  MagnifyingGlass,
  Sparkle,
  Printer
} from '@phosphor-icons/react'
import MembershipCardPreview from '../components/MembershipCardPreview'

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    stateOfOrigin: 'Kaduna',
    qualification: 'Higher Education / Graduate',
    interest: 'Leadership & Policy'
  })

  const [registeredMember, setRegisteredMember] = useState(null)
  const [verifyQuery, setVerifyQuery] = useState('')
  const [verifyResult, setVerifyResult] = useState(null)
  const [verifyLoading, setVerifyLoading] = useState(false)

  const northernStates = [
    'Adamawa', 'Bauchi', 'Benue', 'Borno', 'Gombe', 'Jigawa',
    'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
    'Nasarawa', 'Niger', 'Plateau', 'Sokoto', 'Taraba', 'Yobe',
    'Zamfara', 'FCT Abuja'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setRegisteredMember({ ...formData })
  }

  const handleVerify = (e) => {
    e.preventDefault()
    if (!verifyQuery.trim()) return
    setVerifyLoading(true)
    setTimeout(() => {
      setVerifyLoading(false)
      setVerifyResult({
        memberId: `ANYV-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        name: verifyQuery.includes('@') ? verifyQuery.split('@')[0].toUpperCase() : verifyQuery.toUpperCase(),
        state: 'Kano State Chapter',
        zone: 'North-West Geopolitical Zone',
        status: 'Accredited & Ratified',
        track: 'Entrepreneurship & Enterprise Development',
        issuedDate: 'September 2026'
      })
    }, 600)
  }

  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow text-[#c9963c]">NATIONAL REGISTRY &bull; 19 NORTHERN STATES &amp; FCT</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium mt-2 leading-tight">
            Membership Accreditation &amp; Digital Pass
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            Register your membership to obtain an official ANYV digital pass, connect with your state coordinator, and access leadership cohorts.
          </p>
        </div>
      </section>

      {/* Main Form & Digital Card Section */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Registration Form */}
          <div className="lg:col-span-6 bg-[#fffdf7] border border-[#cfc6a6] p-8 rounded-[2px] specimen-shadow space-y-6">
            <div>
              <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider block mb-1">
                OFFICIAL ENLISTMENT APPLICATION
              </span>
              <h2 className="font-display text-2xl font-semibold text-[#10241f]">
                Join the Vanguard Registry
              </h2>
              <p className="text-xs text-[#666c5c] mt-1 leading-relaxed">
                Accreditation is open to all Northern youths residing in Nigeria or in the diaspora committed to regional progress.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                  FULL LEGAL NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Amina Bello or Ibrahim Yusuf"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                  />
                </div>
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234..."
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    STATE OF ORIGIN / RESIDENCE
                  </label>
                  <select
                    value={formData.stateOfOrigin}
                    onChange={e => setFormData({ ...formData, stateOfOrigin: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                  >
                    {northernStates.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    PRIMARY ACTION TRACK
                  </label>
                  <select
                    value={formData.interest}
                    onChange={e => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                  >
                    <option value="Leadership & Policy">Leadership &amp; Policy</option>
                    <option value="Entrepreneurship & Enterprise">Entrepreneurship &amp; Enterprise</option>
                    <option value="Technology & Innovation">Technology &amp; Innovation</option>
                    <option value="Education & Skills Development">Education &amp; Skills Development</option>
                    <option value="Women in Governance">Women in Governance</option>
                    <option value="Community & Ward Mobilization">Community &amp; Ward Mobilization</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#fffdf7] font-mono text-xs uppercase tracking-wider font-semibold border border-[#10241f] transition-all hover:shadow-[3px_3px_0px_rgba(182,132,42,0.6)] flex items-center justify-center gap-2"
                >
                  <IdentificationCard size={16} />
                  <span>Generate Official Pass</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Live Digital Pass or Status */}
          <div className="lg:col-span-6 space-y-8">
            {registeredMember ? (
              <div className="space-y-4">
                <div className="p-4 bg-[#f5f8f3] border border-[#7c9473]/40 rounded-[2px] text-xs flex items-center gap-2 text-[#10241f]">
                  <CheckCircle size={18} weight="fill" className="text-[#7c9473] shrink-0" />
                  <span>Accreditation successfully issued and codified into the ANYV National Register.</span>
                </div>
                <MembershipCardPreview member={registeredMember} />
              </div>
            ) : (
              <div className="bg-[#fffdf7] border border-[#cfc6a6] p-8 rounded-[2px] specimen-shadow space-y-4 text-center">
                <div className="w-14 h-14 mx-auto rounded-[2px] bg-[#f2f7f5] border border-[#7c9473]/30 text-[#1f3f37] flex items-center justify-center">
                  <IdentificationCard size={28} weight="duotone" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#10241f]">
                  Your Digital Member Pass Preview
                </h3>
                <p className="text-xs text-[#666c5c] max-w-sm mx-auto leading-relaxed">
                  Fill out the accreditation application on the left to instantly generate your customized, print-ready digital credential pass.
                </p>
                <div className="pt-2">
                  <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block">
                    STATUS: AWAITING SUBMISSION
                  </span>
                </div>
              </div>
            )}

            {/* Quick Verification Lookup Box */}
            <div className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] specimen-shadow space-y-4">
              <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider block border-b border-[#e7e0cb] pb-2">
                VERIFY EXISTING ACCREDITATION
              </span>
              <p className="text-xs text-[#666c5c]">
                Already registered? Search by email or membership number to verify your record in the gazette.
              </p>

              <form onSubmit={handleVerify} className="flex gap-2 text-xs">
                <input
                  type="text"
                  required
                  placeholder="Enter email or ANYV-2026-..."
                  value={verifyQuery}
                  onChange={e => setVerifyQuery(e.target.value)}
                  className="flex-1 px-3 py-2 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                />
                <button
                  type="submit"
                  disabled={verifyLoading}
                  className="px-4 py-2 rounded-[2px] bg-[#10241f] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold border border-[#10241f] hover:bg-[#16302b]"
                >
                  {verifyLoading ? 'Searching...' : 'Lookup'}
                </button>
              </form>

              {verifyResult && (
                <div className="mt-4 p-4 bg-[#f5f8f3] border border-[#7c9473]/30 rounded-[2px] text-xs space-y-1">
                  <div className="flex justify-between font-mono font-semibold text-[#10241f]">
                    <span>STATUS: {verifyResult.status}</span>
                    <span className="text-[#b6842a]">{verifyResult.memberId}</span>
                  </div>
                  <p className="text-[#3c4136]">Delegate: <strong>{verifyResult.name}</strong></p>
                  <p className="text-[#666c5c] text-[11px]">{verifyResult.state} &bull; {verifyResult.track}</p>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
