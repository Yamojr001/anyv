import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MagnifyingGlass, CheckCircle, WarningCircle, IdentificationBadge } from '@phosphor-icons/react'

export default function TrackingModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // Mock accreditation record
      setResult({
        found: true,
        memberId: `ANYV-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        name: query.includes('@') ? query.split('@')[0].toUpperCase() : query.toUpperCase(),
        state: 'Kaduna State Chapter',
        zone: 'North-West Geopolitical Zone',
        status: 'Accredited & Ratified',
        track: 'Policy, Governance & Regional Strategy',
        issuedDate: 'September 2026',
        liaisonOfficer: 'Malam U. Faruk (Zonal Secretariat)'
      })
    }, 600)
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
          Enter your registered email address, phone number, or ANYV membership ID to verify your status in the national gazette.
        </p>

        <form onSubmit={handleSearch} className="space-y-4 text-xs mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              required
              placeholder="e.g., name@example.com or ANYV-2026-..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="flex-1 px-3 py-2.5 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
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

        {result && (
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-5 rounded-[2px] space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#e7e0cb]">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} weight="fill" className="text-[#7c9473]" />
                <span className="font-mono text-xs font-semibold text-[#10241f]">
                  ACCREDITATION VERIFIED
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#b6842a]">
                {result.memberId}
              </span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between py-1 border-b border-[#e7e0cb]">
                <span className="text-[#666c5c]">Delegate Record</span>
                <span className="font-semibold text-[#10241f]">{result.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#e7e0cb]">
                <span className="text-[#666c5c]">Chapter</span>
                <span className="font-medium text-[#10241f]">{result.state}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#e7e0cb]">
                <span className="text-[#666c5c]">Geopolitical Zone</span>
                <span className="font-mono text-[#10241f]">{result.zone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#e7e0cb]">
                <span className="text-[#666c5c]">Focus Track</span>
                <span className="text-[#10241f]">{result.track}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#666c5c]">Liaison Officer</span>
                <span className="font-mono text-[#7c9473]">{result.liaisonOfficer}</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
