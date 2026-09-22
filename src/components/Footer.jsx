import { Link } from 'react-router-dom'

export default function Footer({ onVerifyClick }) {
  return (
    <footer className="mt-auto bg-[#10241f] text-[#f1ecde] py-14 border-t border-[#1f3f37]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[2px] bg-[#b6842a] text-[#10241f] font-mono font-bold flex items-center justify-center text-xs">
                ANYV
              </div>
              <span className="font-display text-xl font-semibold text-[#fffdf7]">
                Atiku Northern Youth Vanguard
              </span>
            </div>
            <p className="text-xs text-[#aebf9e] max-w-md leading-relaxed">
              Building a credible platform for Northern youths to connect, grow, and lead. Continuous engagement in leadership development, human capital, entrepreneurship, and public policy.
            </p>
            <div className="font-mono text-[11px] text-[#e3c375]">
              MANDATE: 19 NORTHERN STATES &amp; FCT ABUJA
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#e3c375] uppercase tracking-wider mb-4">Dedicated Portals</h4>
            <ul className="space-y-2 text-xs text-[#aebf9e]">
              <li><Link to="/about" className="hover:text-[#fffdf7] transition-colors">Why ANYV Was Created</Link></li>
              <li><Link to="/leadership" className="hover:text-[#fffdf7] transition-colors">Executive Directory</Link></li>
              <li><Link to="/programs" className="hover:text-[#fffdf7] transition-colors">Programs &amp; Grants</Link></li>
              <li><Link to="/chapters" className="hover:text-[#fffdf7] transition-colors">19 State Chapters</Link></li>
              <li><Link to="/membership" className="hover:text-[#fffdf7] transition-colors">Membership Accreditation</Link></li>
              <li><Link to="/news" className="hover:text-[#fffdf7] transition-colors">Gazette &amp; Communiques (Soon)</Link></li>
              <li><Link to="/cms" className="hover:text-[#fffdf7] transition-colors">Secretariat CMS (Portal)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#e3c375] uppercase tracking-wider mb-4">Secretariat &bull; Registry</h4>
            <p className="text-xs text-[#aebf9e] leading-relaxed mb-3">
              National Coordination Office &bull; Northern Regional Secretariat
            </p>
            <p className="text-xs font-mono text-[#7c9473]">
              registry@anyv.ng<br />
              coordination@anyv.ng
            </p>
            <div className="mt-4">
              <button
                onClick={onVerifyClick}
                className="px-3 py-1.5 rounded-[2px] bg-[#1f3f37] hover:bg-[#2c5347] text-[#e3c375] border border-[#2c5347] font-mono text-[11px] transition-colors"
              >
                Verify Accreditation Record
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-[#1f3f37] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7c9473] font-mono gap-2">
          <span>&copy; 2026 Atiku Northern Youth Vanguard (ANYV). All rights reserved.</span>
          <span>Archival Editorial System &bull; Strictly 2px Radius</span>
        </div>
      </div>
    </footer>
  )
}
