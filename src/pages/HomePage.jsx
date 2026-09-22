import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CaretRight,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  UsersThree,
  GraduationCap,
  Briefcase,
  Scales,
  HeartStraight,
  ArrowUpRight
} from '@phosphor-icons/react'

export default function HomePage({ onOpenReg }) {
  return (
    <div className="space-y-0">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#10241f] text-[#f1ecde] py-20 lg:py-28 border-b border-[#1f3f37]">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#c9963c]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#7c9473]/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="eyebrow text-[#c9963c]">
                <span>A NORTHERN YOUTH GENERATION READY TO LEAD</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#fffdf7] font-medium leading-[1.08] tracking-tight">
                Building a platform for Northern youths to connect, grow and lead.
              </h1>

              <p className="text-[#aebf9e] text-base sm:text-lg leading-relaxed max-w-xl font-light">
                Northern Nigeria has one of the largest and most dynamic youth populations in Africa.
                The Atiku Northern Youth Vanguard (ANYV) unites young leaders across 19 states and the FCT into an active, continuous force for development, innovation, and national progress.
              </p>

              <div className="pt-3 flex flex-wrap gap-4 items-center">
                <Link
                  to="/membership"
                  className="px-6 py-3.5 rounded-[2px] bg-[#b6842a] hover:bg-[#c9963c] text-[#10241f] font-semibold text-sm transition-all hover:shadow-[4px_4px_0px_rgba(255,253,247,0.85)] hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Enlist in the Vanguard</span>
                  <CaretRight size={16} weight="bold" />
                </Link>

                <Link
                  to="/about"
                  className="px-6 py-3.5 rounded-[2px] bg-transparent border border-[#aebf9e]/40 hover:border-[#fffdf7] text-[#fffdf7] font-medium text-sm transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Read The Charter</span>
                </Link>
              </div>

              {/* Metric Counters Strip */}
              <div className="grid grid-cols-3 gap-px bg-[#cfc6a6]/20 border border-[#cfc6a6]/20 mt-10 rounded-[2px] overflow-hidden">
                <div className="bg-[#10241f] p-4 text-center">
                  <div className="font-display text-2xl sm:text-3xl text-[#e3c375] font-semibold">19 + FCT</div>
                  <div className="font-mono text-[10px] text-[#aebf9e] uppercase tracking-wider mt-1">States Unified</div>
                </div>
                <div className="bg-[#10241f] p-4 text-center">
                  <div className="font-display text-2xl sm:text-3xl text-[#e3c375] font-semibold">365 Days</div>
                  <div className="font-mono text-[10px] text-[#aebf9e] uppercase tracking-wider mt-1">Continuous Action</div>
                </div>
                <div className="bg-[#10241f] p-4 text-center">
                  <div className="font-display text-2xl sm:text-3xl text-[#e3c375] font-semibold">8 Directives</div>
                  <div className="font-mono text-[10px] text-[#aebf9e] uppercase tracking-wider mt-1">Action Mandates</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Accreditation Specimen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-[#f1ecde] text-[#20241d] p-7 border border-[#10241f] specimen-shadow rounded-[2px] relative">
                <div className="font-mono text-[11px] text-[#b6842a] tracking-widest uppercase pb-3 mb-4 border-b border-dashed border-[#cfc6a6] flex justify-between items-center">
                  <span>REGISTRY RECORD: ANYV/2026/FUD-CHARTER</span>
                  <span className="flex items-center gap-1">
                    <Sparkle size={12} weight="fill" className="text-[#b6842a]" />
                    <span>Active</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/logo.png"
                    alt="ANYV Official Emblem"
                    className="w-12 h-12 object-contain drop-shadow-[1px_1px_0px_rgba(182,132,42,0.8)] shrink-0"
                  />
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-[#10241f] leading-tight">
                      The Atiku Northern Youth Vanguard
                    </h3>
                    <span className="font-mono text-[9px] text-[#b6842a] uppercase tracking-widest font-semibold block mt-0.5">
                      Organise &bull; Mobilise &bull; Lead
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#666c5c] mb-5 leading-relaxed">
                  A platform for Northern youths to transition from passive election observers to active contributors to governance, enterprise, and civic leadership.
                </p>

                <div className="space-y-2 text-xs border-t border-[#e7e0cb] pt-3">
                  <div className="flex justify-between py-1.5 border-b border-[#e7e0cb]">
                    <span className="text-[#666c5c]">Core Ethos</span>
                    <span className="font-semibold text-[#10241f]">Developing Leaders, Not Followers</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#e7e0cb]">
                    <span className="text-[#666c5c]">Regional Scope</span>
                    <span className="font-mono text-[#10241f]">19 Northern States &amp; FCT</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#e7e0cb]">
                    <span className="text-[#666c5c]">Operational Nature</span>
                    <span className="font-semibold text-[#10241f]">Civic, Development &amp; Forward-Looking</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#e7e0cb]">
                    <span className="text-[#666c5c]">Inspiration</span>
                    <span className="font-mono text-[#10241f]">Alhaji Atiku Abubakar 2027 Vision</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#e7e0cb]">
                    <span className="text-[#666c5c]">Key Priority</span>
                    <span className="font-semibold text-[#b6842a]">Education &bull; Skills &bull; Mentorship</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#666c5c]">Accreditation</span>
                    <span className="font-mono text-[#10241f]">Open to All Northern Youths</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#cfc6a6]">
                  <Link
                    to="/membership"
                    className="w-full py-2.5 rounded-[2px] bg-[#10241f] text-[#fffdf7] text-xs font-mono uppercase tracking-wider font-semibold border border-[#10241f] hover:bg-[#1f3f37] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Register Your Membership Pass</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Shift Manifesto Highlight */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="eyebrow text-[#b6842a]">BEYOND ELECTION-CYCLE POLITICS</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#10241f] leading-tight">
                Continuous engagement. Long-term regional impact.
              </h2>
              <p className="text-base text-[#3c4136] leading-relaxed">
                We do not believe young people should be mobilized only during election campaigns and forgotten afterwards. ANYV exists to build lasting institutional networks across all 19 Northern states.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#b6842a] hover:text-[#10241f] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Full Founding Charter</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2.5 specimen-shadow">
                <div className="w-8 h-8 rounded-[2px] bg-[#f2f7f5] border border-[#7c9473]/30 text-[#1f3f37] flex items-center justify-center">
                  <UsersThree size={18} weight="duotone" />
                </div>
                <h3 className="font-display text-base font-semibold text-[#10241f]">Connecting Northern Youths</h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  From Plateau to Gombe, Kwara to Kebbi, Kaduna to Borno, creating a unified network where young people discover and empower one another.
                </p>
              </div>

              <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2.5 specimen-shadow">
                <div className="w-8 h-8 rounded-[2px] bg-[#fdfaf2] border border-[#c9963c]/30 text-[#b6842a] flex items-center justify-center">
                  <ShieldCheck size={18} weight="duotone" />
                </div>
                <h3 className="font-display text-base font-semibold text-[#10241f]">Leaders, Not Followers</h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Leadership development must begin before holding public office—through service, mentorship, knowledge, and ethical responsibility.
                </p>
              </div>

              <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2.5 specimen-shadow">
                <div className="w-8 h-8 rounded-[2px] bg-[#fdfaf2] border border-[#c9963c]/30 text-[#b6842a] flex items-center justify-center">
                  <GraduationCap size={18} weight="duotone" />
                </div>
                <h3 className="font-display text-base font-semibold text-[#10241f]">Creating Real Opportunities</h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Promoting partnerships in skills, technology, enterprise funding, education, and youth employment across all geopolitical zones.
                </p>
              </div>

              <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2.5 specimen-shadow">
                <div className="w-8 h-8 rounded-[2px] bg-[#f2f7f5] border border-[#7c9473]/30 text-[#1f3f37] flex items-center justify-center">
                  <HeartStraight size={18} weight="duotone" />
                </div>
                <h3 className="font-display text-base font-semibold text-[#10241f]">Inclusive Representation</h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Championing young women, underrepresented communities, and grassroots organizers across local government areas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Navigation Cards to Dedicated Portals */}
      <section className="py-20 bg-[#f1ecde] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow text-[#b6842a] justify-center">STRUCTURE &amp; PORTALS</span>
            <h2 className="font-display text-3xl font-semibold text-[#10241f] mt-1">
              Explore the Vanguard Directory
            </h2>
            <p className="text-sm text-[#666c5c] mt-2">
              Access specialized registries, regional coordination councils, and official development programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Link
              to="/leadership"
              className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow group"
            >
              <div>
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block mb-1">PORTAL &bull; 01</span>
                <h3 className="font-display text-xl font-semibold text-[#10241f] group-hover:text-[#b6842a] transition-colors mb-2">
                  Leadership Directory
                </h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Full directory of national executive officers, zonal vice coordinators, directorates, and the board of patrons.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e7e0cb] flex items-center justify-between font-mono text-xs text-[#10241f]">
                <span>View Officials</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/chapters"
              className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow group"
            >
              <div>
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block mb-1">PORTAL &bull; 02</span>
                <h3 className="font-display text-xl font-semibold text-[#10241f] group-hover:text-[#b6842a] transition-colors mb-2">
                  19 State Chapters
                </h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Explore chapter liaison councils, regional innovation hubs, and contact details across the 19 Northern states and FCT.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e7e0cb] flex items-center justify-between font-mono text-xs text-[#10241f]">
                <span>Browse Chapters</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/programs"
              className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow group"
            >
              <div>
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block mb-1">PORTAL &bull; 03</span>
                <h3 className="font-display text-xl font-semibold text-[#10241f] group-hover:text-[#b6842a] transition-colors mb-2">
                  Action Programs
                </h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Apply for the Northern Youth Leadership Academy, Agro-Tech incubator grants, and policy research think tanks.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e7e0cb] flex items-center justify-between font-mono text-xs text-[#10241f]">
                <span>Apply for Grants</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Enlistment Call to Action Banner */}
      <section className="py-20 bg-[#10241f] text-[#f1ecde] border-b border-[#1f3f37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="eyebrow text-[#e3c375] justify-center mb-3">JOIN THE CONSTITUTIONAL REGISTRY</span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#fffdf7] font-semibold max-w-2xl mx-auto leading-tight">
            The future of Northern Nigeria belongs to its people—and its young people must build it.
          </h2>
          <p className="text-sm text-[#aebf9e] max-w-xl mx-auto mt-4 leading-relaxed">
            Register today to receive your official digital membership credential, connect with your state coordinator, and participate in regional development circles.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/membership"
              className="px-8 py-3.5 rounded-[2px] bg-[#b6842a] hover:bg-[#c9963c] text-[#10241f] font-mono text-xs uppercase tracking-wider font-semibold shadow-[3px_3px_0px_rgba(255,253,247,0.85)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            >
              <span>Accredit as an ANYV Member</span>
              <ArrowUpRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
