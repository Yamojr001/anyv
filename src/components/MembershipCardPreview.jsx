import { useRef } from 'react'
import { Sparkle, ShieldCheck, Printer, CheckCircle } from '@phosphor-icons/react'

export default function MembershipCardPreview({ member, onPrint }) {
  const cardRef = useRef(null)

  return (
    <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] specimen-shadow space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#e7e0cb]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#7c9473] inline-block"></span>
          <span className="font-mono text-[11px] text-[#10241f] font-semibold uppercase tracking-wider">
            DIGITAL CREDENTIAL PASS &bull; OFFICIAL
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider">
          SERIES 2026/2027
        </span>
      </div>

      {/* The Actual ID Card */}
      <div
        ref={cardRef}
        className="bg-gradient-to-br from-[#10241f] via-[#16302b] to-[#10241f] text-[#f1ecde] p-6 rounded-[2px] border border-[#1f3f37] relative overflow-hidden shadow-lg"
      >
        {/* Subtle decorative security watermarks */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full border border-[#c9963c]/10 pointer-events-none" />
        <div className="absolute right-8 top-8 opacity-5 text-[#c9963c] pointer-events-none font-display text-8xl font-bold">
          ANYV
        </div>

        {/* Card Top Row */}
        <div className="flex items-start justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[2px] bg-[#b6842a] text-[#10241f] flex items-center justify-center font-mono font-bold text-xs shadow-sm">
              ANYV
            </div>
            <div>
              <span className="font-display font-semibold text-sm text-[#fffdf7] block leading-tight">
                Atiku Northern Youth Vanguard
              </span>
              <span className="font-mono text-[9px] text-[#e3c375] uppercase tracking-widest block">
                Federal Republic of Nigeria
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded-[2px] bg-[#1f3f37] text-[#aebf9e] border border-[#2c5347]">
            ACCREDITED
          </span>
        </div>

        {/* Member Details */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6 relative z-10">
          {/* Avatar Box */}
          <div className="sm:col-span-3">
            <div className="w-20 h-20 bg-[#16302b] border border-[#c9963c]/50 rounded-[2px] flex items-center justify-center text-[#e3c375] font-display text-2xl font-bold shadow-inner">
              {member.fullName ? member.fullName.charAt(0).toUpperCase() : 'M'}
            </div>
          </div>

          {/* Details */}
          <div className="sm:col-span-9 space-y-1">
            <div className="font-mono text-[9px] text-[#aebf9e] uppercase tracking-wider">
              OFFICIAL MEMBER NAME
            </div>
            <div className="font-display text-xl text-[#fffdf7] font-semibold leading-tight">
              {member.fullName || 'Vanguard Delegate'}
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
              <div>
                <span className="text-[#aebf9e] block text-[9px]">STATE CHAPTER</span>
                <span className="text-[#e3c375] font-medium">{member.stateOfOrigin || 'Northern Nigeria'}</span>
              </div>
              <div>
                <span className="text-[#aebf9e] block text-[9px]">SECTOR TRACK</span>
                <span className="text-[#fffdf7] font-medium truncate block">{member.interest || 'Leadership & Policy'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer Bar */}
        <div className="pt-3 border-t border-[#1f3f37] flex items-center justify-between font-mono text-[10px] text-[#aebf9e] relative z-10">
          <div>
            <span className="text-[#7c9473] block text-[8px]">MEMBERSHIP NUMBER</span>
            <span className="text-[#e3c375] font-semibold">
              ANYV-2026-{Math.floor(1000 + Math.random() * 9000)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[#7c9473] block text-[8px]">SECURITY VALIDATION</span>
            <span className="text-[#aebf9e]">AUTHENTICATED RECORD</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs pt-1">
        <span className="text-[#666c5c] font-mono text-[10px]">
          PRESENT THIS PASS AT WARD &amp; STATE CONGRESSES
        </span>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-[2px] bg-[#10241f] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#16302b] flex items-center gap-1.5 transition-colors"
        >
          <Printer size={14} />
          <span>Print / Save Pass</span>
        </button>
      </div>
    </div>
  )
}
