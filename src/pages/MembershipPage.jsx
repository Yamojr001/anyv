import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  IdentificationCard,
  CheckCircle,
  MagnifyingGlass,
  Sparkle,
  Printer,
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
  QrCode
} from '@phosphor-icons/react'
import MembershipCardPreview from '../components/MembershipCardPreview'
import SEO from '../components/SEO'
import { northernStates } from '../data/leadershipData'
import { registerNewMember, verifyMember } from '../data/membersData'

export default function MembershipPage() {
  const [searchParams] = useSearchParams()
  const defaultState = searchParams.get('state') || 'Bauchi'

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    stateOfOrigin: defaultState,
    lga: '',
    ward: '',
    qualification: 'Higher Education / Graduate',
    interest: 'Leadership & Policy'
  })

  const [registeredMember, setRegisteredMember] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Verification lookup
  const [verifyQuery, setVerifyQuery] = useState('')
  const [verifyResult, setVerifyResult] = useState(null)
  const [verifyLoading, setVerifyLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const saved = await registerNewMember({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        state: formData.stateOfOrigin,
        lga: formData.lga || 'Central',
        ward: formData.ward || 'Ward 01',
        qualification: formData.qualification,
        interest: formData.interest
      })
      setRegisteredMember(saved)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVerify = async (e) => {
    e.preventDefault()
    if (!verifyQuery.trim()) return
    setVerifyLoading(true)
    try {
      const res = await verifyMember(verifyQuery)
      setVerifyResult(res)
    } finally {
      setVerifyLoading(false)
    }
  }

  return (
    <div className="space-y-0">
      <SEO
        title="Membership Accreditation & Digital Card Registry"
        description="Official membership registration and digital card verification for the Atiku Northern Youth Vanguard (ANYV). Join the vanguard across 19 Northern states and the FCT with your phone, state, and LGA."
        keywords="ANYV membership registration, digital ID card ANYV, Atiku Youth Vanguard accreditation, Northern Nigeria youth membership, verify ANYV certificate, phone state lga ANYV"
      />
      
      {/* Header */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9963c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="eyebrow text-[#c9963c]">NATIONAL REGISTRY &bull; 19 NORTHERN STATES &amp; FCT</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium mt-2 leading-tight">
            Membership Accreditation &amp; Digital Pass
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            Register your membership with your phone number, state of origin, and LGA to receive an official ANYV digital pass and state council accreditation.
          </p>
        </div>
      </section>

      {/* Main Form & Digital Card Section */}
      <section className="py-16 sm:py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
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
                Accreditation is open to all Northern youths residing in Nigeria or in the diaspora committed to regional development.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                  FULL LEGAL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Usman Aliyu Garba"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    EMAIL ADDRESS *
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
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0803 123 4567"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] font-mono focus:outline-none focus:border-[#b6842a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    STATE OF ORIGIN / RESIDENCE *
                  </label>
                  <select
                    value={formData.stateOfOrigin}
                    onChange={e => setFormData({ ...formData, stateOfOrigin: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                  >
                    {northernStates.map((s, idx) => (
                      <option key={idx} value={s.name}>{s.name} State</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    LOCAL GOV AREA (LGA) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Bauchi Central, Makurdi"
                    value={formData.lga}
                    onChange={e => setFormData({ ...formData, lga: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    WARD / COMMUNITY (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dan Iya Ward"
                    value={formData.ward}
                    onChange={e => setFormData({ ...formData, ward: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                  />
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
                    <option value="Agricultural Enterprise">Agricultural Enterprise &amp; Food Security</option>
                    <option value="Technology & Digital Skills">Technology &amp; Digital Skills</option>
                    <option value="Education & Civic Mobilization">Education &amp; Civic Mobilization</option>
                    <option value="Women in Governance">Women in Governance</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#fffdf7] font-mono text-xs uppercase tracking-wider font-semibold border border-[#10241f] transition-all hover:shadow-[3px_3px_0px_rgba(182,132,42,0.6)] flex items-center justify-center gap-2"
                >
                  <IdentificationCard size={18} />
                  <span>{isSubmitting ? 'Enlisting in Registry...' : 'Enlist & Generate Official Pass'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Live Digital Pass or Verification Lookups */}
          <div className="lg:col-span-6 space-y-8">
            {registeredMember ? (
              <div className="space-y-4">
                <div className="p-4 bg-[#f5f8f3] border border-[#7c9473]/40 rounded-[2px] text-xs flex items-center gap-3 text-[#10241f]">
                  <CheckCircle size={22} weight="fill" className="text-[#7c9473] shrink-0" />
                  <div>
                    <span className="font-bold block">Accreditation successfully issued and codified into the ANYV National Register!</span>
                    <span className="font-mono text-[11px] text-[#b6842a]">Membership ID: {registeredMember.membershipNumber}</span>
                  </div>
                </div>

                {/* Card Preview Component */}
                <MembershipCardPreview member={registeredMember} />

                {/* Direct link to Full ID Card Studio */}
                <div className="p-4 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-[#666c5c]">Want full card customization with passport photo?</span>
                  <Link
                    to={`/id-card?memberId=${encodeURIComponent(registeredMember.membershipNumber)}`}
                    className="px-3 py-1.5 rounded-[2px] bg-[#10241f] text-[#f1ecde] font-semibold hover:bg-[#16302b] flex items-center gap-1"
                  >
                    <span>Open ID Studio</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
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
                  Fill out the accreditation application on the left with your phone number, state, and LGA to instantly generate your customized, print-ready digital credential pass.
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
              <div className="flex items-center justify-between border-b border-[#e7e0cb] pb-2">
                <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider block font-semibold">
                  VERIFY EXISTING ACCREDITATION
                </span>
                <Link to="/verify" className="text-[11px] font-mono text-[#10241f] hover:text-[#b6842a] underline">
                  Open Full Verifier
                </Link>
              </div>

              <p className="text-xs text-[#666c5c]">
                Already registered? Search by email, phone, or membership number (e.g. <code>ANYV/BAU/0001</code>) to verify your record in the national gazette.
              </p>

              <form onSubmit={handleVerify} className="flex gap-2 text-xs">
                <input
                  type="text"
                  required
                  placeholder="Enter ANYV/BAU/0001, phone, or email..."
                  value={verifyQuery}
                  onChange={e => setVerifyQuery(e.target.value)}
                  className="flex-1 px-3 py-2 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] font-mono focus:outline-none focus:border-[#b6842a]"
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
                <div className={`mt-4 p-4 rounded-[2px] text-xs space-y-1.5 ${
                  verifyResult.found 
                    ? 'bg-[#f5f8f3] border border-[#7c9473]/30' 
                    : 'bg-[#fdf5f5] border border-[#b93838]/30'
                }`}>
                  {verifyResult.found ? (
                    <>
                      <div className="flex justify-between font-mono font-semibold text-[#10241f]">
                        <span className="flex items-center gap-1 text-[#7c9473]">
                          <CheckCircle size={14} weight="fill" />
                          VERIFIED RECORD
                        </span>
                        <span className="text-[#b6842a]">{verifyResult.membershipNumber}</span>
                      </div>
                      <p className="text-[#3c4136]">Delegate: <strong>{verifyResult.fullName}</strong></p>
                      <p className="text-[#666c5c] text-[11px]">{verifyResult.state} State &bull; {verifyResult.lga} LGA</p>
                      <div className="pt-1 flex gap-2 font-mono text-[11px]">
                        <Link
                          to={`/id-card?memberId=${encodeURIComponent(verifyResult.membershipNumber)}`}
                          className="text-[#10241f] underline font-semibold hover:text-[#b6842a]"
                        >
                          Generate ID Card &rarr;
                        </Link>
                      </div>
                    </>
                  ) : (
                    <p className="text-[#b93838] font-mono text-[11px]">
                      No active accreditation found for "{verifyQuery}". Please verify your details or register on the left.
                    </p>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
