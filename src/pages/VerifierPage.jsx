import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  MagnifyingGlass, 
  CheckCircle, 
  WarningCircle, 
  IdentificationCard, 
  Copy, 
  Printer, 
  ArrowRight, 
  MapPin, 
  Phone, 
  CalendarBlank 
} from '@phosphor-icons/react'
import SEO from '../components/SEO'
import { verifyMemberApi } from '../services/api'

export default function VerifierPage() {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('id') || searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [result, setResult] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const performVerification = async (searchStr) => {
    if (!searchStr || !searchStr.trim()) return
    setLoading(true)
    setHasSearched(true)
    try {
      const data = await verifyMemberApi(searchStr)
      setResult(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!initialQuery) return
    let isMounted = true
    setLoading(true)
    setHasSearched(true)
    verifyMemberApi(initialQuery)
      .then(data => {
        if (isMounted) setResult(data)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })
    return () => { isMounted = false }
  }, [initialQuery])

  const handleSubmit = (e) => {
    e.preventDefault()
    performVerification(query)
  }

  const copyId = (id) => {
    navigator.clipboard.writeText(id)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="space-y-0">
      <SEO
        title="Official Membership Verifier & Registry Check"
        description="Verify the accreditation status of any Atiku Northern Youth Vanguard (ANYV) member, delegate, or chapter officer across 19 Northern states and the FCT."
        keywords="verify ANYV member, ANYV accreditation check, Atiku Youth Vanguard membership verification, verify Northern youth certificate, membership number lookup ANYV"
      />

      {/* Header */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#c9963c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="eyebrow text-[#c9963c]">PUBLIC ACCREDITATION SERVICE &bull; NATIONAL GAZETTE</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium mt-2 leading-tight">
            Official Membership Verifier
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            Validate official credentials, chapter delegates, and executive appointments registered in the national ANYV membership gazette.
          </p>
        </div>
      </section>

      {/* Verification Workspace */}
      <section className="py-16 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          
          {/* Main Lookup Box */}
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-8 sm:p-10 rounded-[2px] specimen-shadow space-y-6">
            <div>
              <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider block mb-1">
                REGISTRY DATABASE QUERY
              </span>
              <h2 className="font-display text-2xl font-semibold text-[#10241f]">
                Search National Accreditation Records
              </h2>
              <p className="text-xs text-[#666c5c] mt-1 leading-relaxed">
                Enter an official <strong>Membership Number</strong> (e.g. <code>ANYV/BAU/0001</code>), registered email address, or phone number to verify status:
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    required
                    placeholder="Enter ANYV/BAU/0001, phone number, or name..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] text-xs font-mono focus:outline-none focus:border-[#b6842a]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold border border-[#10241f] transition-all hover:shadow-[3px_3px_0px_rgba(182,132,42,0.6)] flex items-center justify-center gap-2 shrink-0"
                >
                  <MagnifyingGlass size={16} weight="bold" />
                  <span>{loading ? 'Verifying Registry...' : 'Verify Status'}</span>
                </button>
              </div>

              {/* Quick Sample Links for testing */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-mono text-[#666c5c]">
                <span>Sample Records:</span>
                {['ANYV/BAU/0001', 'ANYV/BEN/0002', 'ANYV/KAT/0003'].map(sampleId => (
                  <button
                    key={sampleId}
                    type="button"
                    onClick={() => { setQuery(sampleId); performVerification(sampleId); }}
                    className="underline text-[#10241f] hover:text-[#b6842a]"
                  >
                    {sampleId}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Verification Results Output */}
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {result && result.found ? (
                /* Verified Certificate Card */
                <div className="bg-[#fffdf7] border-2 border-[#7c9473]/60 p-8 sm:p-10 rounded-[2px] specimen-shadow space-y-6 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-[#7c9473]/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#e7e0cb] gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#f2f7f5] border border-[#7c9473] text-[#7c9473] flex items-center justify-center shrink-0">
                        <ShieldCheck size={28} weight="fill" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-[#7c9473] font-bold uppercase tracking-wider">
                          OFFICIAL RECORD CONFIRMED
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#10241f]">
                          Accredited Vanguard Member
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold bg-[#faf7ef] border border-[#cfc6a6] px-3 py-1.5 rounded-[2px] text-[#b6842a]">
                        {result.membershipNumber}
                      </span>
                      <button
                        onClick={() => copyId(result.membershipNumber)}
                        className="p-2 rounded-[2px] border border-[#cfc6a6] hover:bg-[#faf7ef] text-[#10241f] transition-colors"
                        title="Copy Membership ID"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>

                  {copied && (
                    <div className="text-right text-[11px] font-mono text-[#7c9473] -mt-4">
                      Copied membership number to clipboard!
                    </div>
                  )}

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                    <div className="space-y-3 bg-[#faf7ef] p-5 rounded-[2px] border border-[#cfc6a6]">
                      <div className="border-b border-[#e7e0cb] pb-2">
                        <span className="font-mono text-[10px] text-[#666c5c] uppercase block">DELEGATE FULL LEGAL NAME</span>
                        <span className="font-display text-base font-semibold text-[#10241f] block mt-0.5">{result.fullName}</span>
                      </div>
                      <div className="border-b border-[#e7e0cb] pb-2">
                        <span className="font-mono text-[10px] text-[#666c5c] uppercase block">STATE CHAPTER &bull; LGA</span>
                        <span className="font-semibold text-[#10241f] block mt-0.5">
                          {result.state} State &bull; {result.lga} LGA {result.ward ? `(${result.ward})` : ''}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#666c5c] uppercase block">CONTACT INFORMATION</span>
                        <span className="font-mono text-[#10241f] block mt-0.5">{result.phone || 'Phone on Record'}</span>
                        <span className="text-[#666c5c] text-[11px] block">{result.email}</span>
                      </div>
                      {(result.vinNumber || result.ninNumber || result.bankName) && (
                        <div className="pt-2 border-t border-[#e7e0cb] space-y-1 font-mono text-[11px]">
                          {result.vinNumber && (
                            <div>
                              <span className="text-[#666c5c]">INEC VIN: </span>
                              <span className="font-semibold text-[#10241f]">{result.vinNumber}</span>
                            </div>
                          )}
                          {result.ninNumber && (
                            <div>
                              <span className="text-[#666c5c]">NIN NUMBER: </span>
                              <span className="font-semibold text-[#10241f]">{result.ninNumber}</span>
                            </div>
                          )}
                          {result.bankName && (
                            <div>
                              <span className="text-[#666c5c]">SETTLEMENT BANK: </span>
                              <span className="font-semibold text-[#10241f]">
                                {result.bankName} {result.accountNumber ? `(${result.accountNumber})` : ''}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 bg-[#faf7ef] p-5 rounded-[2px] border border-[#cfc6a6]">
                      <div className="border-b border-[#e7e0cb] pb-2">
                        <span className="font-mono text-[10px] text-[#666c5c] uppercase block">ACCREDITATION ROLE / SECTOR</span>
                        <span className="font-semibold text-[#10241f] block mt-0.5">{result.role || 'Vanguard Member'}</span>
                        <span className="text-[11px] text-[#b6842a] block">{result.track}</span>
                      </div>
                      <div className="border-b border-[#e7e0cb] pb-2">
                        <span className="font-mono text-[10px] text-[#666c5c] uppercase block">RATIFICATION STATUS</span>
                        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-[#7c9473] mt-0.5">
                          <CheckCircle size={14} weight="fill" />
                          {result.status || 'Ratified & Active'}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#666c5c] uppercase block">LIAISON VERIFICATION</span>
                        <span className="font-mono text-[#10241f] text-[11px] block mt-0.5">
                          {result.zonalOfficer || 'National Secretariat Directorate'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[#e7e0cb] flex flex-wrap items-center justify-between gap-4">
                    <span className="font-mono text-[11px] text-[#666c5c]">
                      ACCREDITED IN THE GAZETTE &bull; SERIES 2026/2027
                    </span>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to={`/id-card?memberId=${encodeURIComponent(result.membershipNumber)}`}
                        className="px-5 py-2.5 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-[2px_2px_0px_rgba(182,132,42,0.6)]"
                      >
                        <IdentificationCard size={16} />
                        <span>Generate / Print ID Card</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                /* Not Found Card */
                <div className="bg-[#fffdf7] border border-[#cfc6a6] p-8 rounded-[2px] specimen-shadow text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#fdf5f5] text-[#b93838] flex items-center justify-center">
                    <WarningCircle size={32} weight="fill" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#10241f]">
                    Accreditation Record Not Located
                  </h3>
                  <p className="text-xs text-[#666c5c] max-w-md mx-auto leading-relaxed">
                    No active membership record corresponds to <code>"{query}"</code> in the current gazette. If you recently enlisted, please verify with your State Coordinator or register below:
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <Link
                      to="/membership"
                      className="px-5 py-2.5 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold"
                    >
                      Enlist in National Registry
                    </Link>
                    <button
                      onClick={() => setQuery('')}
                      className="px-4 py-2.5 rounded-[2px] border border-[#cfc6a6] text-[#10241f] font-mono text-xs uppercase"
                    >
                      Clear Search
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

        </div>
      </section>

    </div>
  )
}
