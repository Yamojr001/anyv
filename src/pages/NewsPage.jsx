import { Link } from 'react-router-dom'
import { Scroll, Newspaper, Clock, Sparkle, ArrowRight, Bell } from '@phosphor-icons/react'

export default function NewsPage() {
  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow text-[#c9963c]">PUBLIC COMMUNICATIONS &bull; DISPATCHES</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium mt-2 leading-tight">
            Official Gazette &amp; News
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            The official record of public communiques, executive resolutions, regional youth summits, and state chapter press briefings.
          </p>
        </div>
      </section>

      {/* Coming Soon Notice & Upcoming Archive */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Main Coming Soon Banner */}
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-10 sm:p-14 rounded-[2px] specimen-shadow text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-[2px] bg-[#fdfaf2] border border-[#c9963c]/40 text-[#b6842a] flex items-center justify-center">
              <Scroll size={32} weight="duotone" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] bg-[#10241f] text-[#e3c375] font-mono text-xs uppercase tracking-wider">
              <Clock size={14} weight="bold" />
              <span>Gazette Publication &bull; Coming Soon</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#10241f] max-w-lg mx-auto leading-tight">
              The Official ANYV Gazette is Currently in Editorial Preparation
            </h2>

            <p className="text-sm text-[#666c5c] max-w-lg mx-auto leading-relaxed">
              The Directorate of Media and Strategic Communications is compiling the inaugural issue of the National Youth Gazette, featuring regional communiques, policy white papers, and state chapter dispatches.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/membership"
                className="px-6 py-3 rounded-[2px] bg-[#10241f] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#16302b] transition-colors"
              >
                Subscribe via Membership Registry
              </Link>
              <Link
                to="/"
                className="px-6 py-3 rounded-[2px] bg-transparent border border-[#cfc6a6] text-[#10241f] text-xs font-mono uppercase tracking-wider font-semibold hover:border-[#10241f] transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>

          {/* Planned Editorial Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2">
              <span className="font-mono text-[10px] text-[#b6842a] uppercase font-semibold">SCHEDULED &bull; Q4</span>
              <h3 className="font-display text-lg font-semibold text-[#10241f]">Regional Communique</h3>
              <p className="text-xs text-[#666c5c] leading-relaxed">
                Official declarations from the Inaugural 19-State Youth Leadership Congress in Abuja.
              </p>
            </div>

            <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2">
              <span className="font-mono text-[10px] text-[#b6842a] uppercase font-semibold">SCHEDULED &bull; Q4</span>
              <h3 className="font-display text-lg font-semibold text-[#10241f]">Policy White Papers</h3>
              <p className="text-xs text-[#666c5c] leading-relaxed">
                Evidence-based research publications on dryland agriculture, youth unemployment, and education reform.
              </p>
            </div>

            <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2">
              <span className="font-mono text-[10px] text-[#b6842a] uppercase font-semibold">SCHEDULED &bull; Q4</span>
              <h3 className="font-display text-lg font-semibold text-[#10241f]">Chapter Spotlights</h3>
              <p className="text-xs text-[#666c5c] leading-relaxed">
                Grassroots profiles of young innovators and community volunteers transforming their local government areas.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
