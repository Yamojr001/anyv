import { Link } from 'react-router-dom'
import {
  LockSimple,
  UsersThree,
  FileText,
  IdentificationBadge,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  CheckCircle
} from '@phosphor-icons/react'

export default function CmsPage() {
  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow text-[#c9963c]">NATIONAL SECRETARIAT &bull; ADMINISTRATIVE SYSTEM</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium mt-2 leading-tight">
            Secretariat CMS &amp; Roster Management
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            The centralized administration backend for managing executive officer profiles, accredited delegates, chapter liaisons, and gazette releases.
          </p>
        </div>
      </section>

      {/* Main CMS Coming Soon View */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Main Card */}
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-8 sm:p-12 rounded-[2px] specimen-shadow space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#e7e0cb] gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-[2px] bg-[#10241f] text-[#e3c375] flex items-center justify-center">
                  <LockSimple size={18} weight="bold" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#10241f] uppercase tracking-wider">
                  SECRETARIAT ADMINISTRATIVE PORTAL &bull; RESTRICTED
                </span>
              </div>
              <span className="font-mono text-[10px] px-2.5 py-1 rounded-[2px] bg-[#f5f8f3] text-[#7c9473] border border-[#7c9473]/30 font-semibold uppercase">
                CMS Architecture Coming Soon
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f]">
                Centralized Content &amp; Roster Management in Pipeline
              </h2>
              <p className="text-sm text-[#666c5c] leading-relaxed">
                As the official executive roster and state coordinator appointments are ratified by the National Secretariat, this dedicated CMS portal will enable administrators to directly update officer portfolios, rank details, social links, and chapter communiques.
              </p>
            </div>

            {/* CMS Features Matrix */}
            <div className="pt-4 border-t border-[#e7e0cb]">
              <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider block mb-4 font-semibold">
                PLANNED CMS CAPABILITIES:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] space-y-1.5">
                  <div className="flex items-center gap-2 font-display text-base font-semibold text-[#10241f]">
                    <IdentificationBadge size={18} className="text-[#b6842a]" weight="duotone" />
                    <span>Officials &amp; Rank Editor</span>
                  </div>
                  <p className="text-xs text-[#666c5c] leading-relaxed">
                    Directly add, modify, or reorder officials, assign rank categories (National, Zonal, Directorate), upload portraits, and manage social links.
                  </p>
                </div>

                <div className="p-4 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] space-y-1.5">
                  <div className="flex items-center gap-2 font-display text-base font-semibold text-[#10241f]">
                    <UsersThree size={18} className="text-[#b6842a]" weight="duotone" />
                    <span>Membership CRM &amp; Pass Records</span>
                  </div>
                  <p className="text-xs text-[#666c5c] leading-relaxed">
                    Access real-time member registrations, filter delegates across the 19 Northern states, and export official accreditation rolls for congresses.
                  </p>
                </div>

                <div className="p-4 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] space-y-1.5">
                  <div className="flex items-center gap-2 font-display text-base font-semibold text-[#10241f]">
                    <FileText size={18} className="text-[#b6842a]" weight="duotone" />
                    <span>Gazette &amp; Communique Publisher</span>
                  </div>
                  <p className="text-xs text-[#666c5c] leading-relaxed">
                    Draft, preview, and publish official communiques, resolutions, and press dispatches with instant archival indexing.
                  </p>
                </div>

                <div className="p-4 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] space-y-1.5">
                  <div className="flex items-center gap-2 font-display text-base font-semibold text-[#10241f]">
                    <ShieldCheck size={18} className="text-[#b6842a]" weight="duotone" />
                    <span>Security &amp; Role-Based Access</span>
                  </div>
                  <p className="text-xs text-[#666c5c] leading-relaxed">
                    Multi-tier administrator permissions for National Coordinators, Zonal Vice Coordinators, and State Chapter Secretaries.
                  </p>
                </div>
              </div>
            </div>

            {/* Mock Login Box */}
            <div className="p-6 bg-[#10241f] text-[#f1ecde] rounded-[2px] border border-[#1f3f37] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#e3c375] uppercase">ADMINISTRATIVE ACCESS GATEWAY</span>
                <span className="font-mono text-[10px] text-[#7c9473]">ENCRYPTED</span>
              </div>
              <p className="text-xs text-[#aebf9e]">
                Direct administrative credentials will be provisioned to verified National Secretariat personnel once authentication is enabled.
              </p>
              <div className="pt-2 flex gap-3">
                <input
                  type="text"
                  disabled
                  value="admin@secretariat.anyv.ng"
                  className="px-3 py-2 bg-[#16302b] border border-[#1f3f37] text-xs font-mono text-[#aebf9e] rounded-[2px] w-64 opacity-70 cursor-not-allowed"
                />
                <button
                  disabled
                  className="px-4 py-2 rounded-[2px] bg-[#b6842a] text-[#10241f] font-mono text-xs uppercase font-semibold opacity-60 cursor-not-allowed"
                >
                  Portal Locked (Coming Soon)
                </button>
              </div>
            </div>

          </div>

          <div className="text-center">
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#10241f] hover:text-[#b6842a] uppercase tracking-wider"
            >
              <span>View Current Verified Leadership Directory</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}
