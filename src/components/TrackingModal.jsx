import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X, MagnifyingGlass, CheckCircle, WarningCircle, IdentificationBadge, IdentificationCard, ArrowRight } from '@phosphor-icons/react'
import { verifyMemberApi } from '../services/api'

export default function TrackingModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setSearched(true)
    try {
      const data = await verifyMemberApi(query)
      setResult(data)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10241f]/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#f1ecde] text-[#20241d] border border-[#10241f] rounded-[2px] specimen-shadow max-w-lg w-full p-6 sm:p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#666c5c] hover:text-[#10241f]"
          aria-label="Close modal"
        >
          <X size={20} weight="bold" />
        </button>

        <div className="font-mono text-[10px] text-[#b6842a] tracking-widest uppercase mb-1">
          REGISTRY VERIFICATION &bull; NATIONAL SECRETARIAT
        </div>
        <h3 className="font-display text-2xl font-semibold text-[#10241f] mb-1">
          Verify Membership Accreditation
        </h3>
        <p className="text-xs text-[#666c5c] mb-6">
          Enter an official Membership Number (e.g. <code>ANYV/BAU/0001</code>), registered phone number, or email to verify credentials.
        </p>

        <form onSubmit={handleSearch} className="space-y-4 text-xs mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              required
              placeholder="e.g., ANYV/BAU/0001 or phone number..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="flex-1 px-3 py-2.5 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] font-mono focus:outline-none focus:border-[#b6842a]"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold border border-[#10241f] transition-colors flex items-center gap-1.5 shrink-0"
            >
              <MagnifyingGlass size={14} weight="bold" />
              <span>{loading ? 'Searching...' : 'Verify'}</span>
            </button>
          </div>
        </form>

        {searched && (
          <div>
            {result && result.found ? (
              <div className="bg-[#fffdf7] border border-[#7c9473]/50 p-5 rounded-[2px] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#e7e0cb]">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} weight="fill" className="text-[#7c9473]" />
                    <span className="font-mono text-xs font-semibold text-[#10241f]">
                      ACCREDITATION VERIFIED
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#b6842a] font-bold">
                    {result.membershipNumber}
                  </span>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#e7e0cb]">
                    <span className="text-[#666c5c]">Delegate Record</span>
                    <span className="font-semibold text-[#10241f]">{result.fullName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#e7e0cb]">
                    <span className="text-[#666c5c]">Chapter &amp; LGA</span>
                    <span className="font-medium text-[#10241f]">{result.state} State &bull; {result.lga} LGA</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#e7e0cb]">
                    <span className="text-[#666c5c]">Contact</span>
                    <span className="font-mono text-[#10241f]">{result.phone || result.email}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#666c5c]">Focus Track</span>
                    <span className="text-[#10241f]">{result.track}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs font-mono border-t border-[#e7e0cb]">
                  <Link
                    to={`/verify?q=${encodeURIComponent(result.membershipNumber)}`}
                    onClick={onClose}
                    className="text-[#666c5c] hover:underline"
                  >
                    View Official Certificate &rarr;
                  </Link>
                  <Link
                    to={`/id-card?memberId=${encodeURIComponent(result.membershipNumber)}`}
                    onClick={onClose}
                    className="px-3 py-1.5 rounded-[2px] bg-[#10241f] text-[#f1ecde] font-semibold flex items-center gap-1.5 hover:bg-[#16302b]"
                  >
                    <IdentificationCard size={14} />
                    <span>Generate ID Pass</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-[#fffdf7] border border-[#b93838]/40 p-4 rounded-[2px] text-center space-y-2 text-xs">
                <WarningCircle size={24} className="mx-auto text-[#b93838]" />
                <p className="font-semibold text-[#10241f]">Record Not Found in National Gazette</p>
                <p className="text-[#666c5c] text-[11px]">
                  No accreditation matches "{query}". You can register as an official Vanguard member below:
                </p>
                <Link
                  to="/membership"
                  onClick={onClose}
                  className="inline-block mt-1 px-4 py-1.5 bg-[#10241f] text-[#f1ecde] font-mono text-[11px] uppercase rounded-[2px]"
                >
                  Enlist in Registry
                </Link>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}
