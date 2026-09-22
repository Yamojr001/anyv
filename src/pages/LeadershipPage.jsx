import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  leadershipCategories,
  leadershipOfficials
} from '../data/leadershipData'
import {
  Sparkle,
  IdentificationBadge,
  EnvelopeSimple,
  ShareNetwork,
  Info,
  MagnifyingGlass,
  ArrowRight,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  X,
  At
} from '@phosphor-icons/react'

export default function LeadershipPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredOfficials = leadershipOfficials.filter((official) => {
    const matchesCategory = activeCategory === 'all' || official.category === activeCategory
    const matchesSearch =
      official.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      official.rankTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      official.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      official.badgeCode.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-0">
      
      {/* Page Header */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow text-[#c9963c]">NATIONAL SECRETARIAT ROSTER &bull; 2026&ndash;2027</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium mt-2 leading-tight">
            Leadership &amp; Executive Directory
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            The governing councils, zonal vice coordinators, directorates, and patrons steering the vanguard across the 19 Northern states.
          </p>
        </div>
      </section>

      {/* Roster Directory Section */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Controls Bar: Search & Category Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-[#cfc6a6]">
            
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search official by name, rank, or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] text-xs focus:outline-none focus:border-[#b6842a]"
              />
              <MagnifyingGlass size={16} className="absolute left-3 top-3 text-[#666c5c]" />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {leadershipCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-[2px] text-xs font-mono transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#10241f] text-[#f1ecde] font-semibold shadow-[2px_2px_0px_rgba(182,132,42,0.6)]'
                      : 'bg-[#fffdf7] text-[#3c4136] border border-[#cfc6a6] hover:border-[#b6842a]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          {/* Institutional Alert */}
          <div className="mb-10 p-5 bg-[#f1ecde] border border-[#cfc6a6] rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-6 h-6 rounded-[2px] bg-[#10241f] text-[#e3c375] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                <Info size={14} weight="bold" />
              </div>
              <span className="text-[#3c4136]">
                <strong>Official Directory Notice:</strong> Additional state coordinators, ward liaisons, and technical directorates are currently undergoing vetting by the National Secretariat. Their profiles and verified social handles will be published as they are confirmed.
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider shrink-0">
              ROSTER REVISION: 2026.09
            </span>
          </div>

          {/* Officials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOfficials.map((official) => (
              <motion.div
                key={official.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow"
              >
                <div>
                  {/* Official Card Top Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e7e0cb]">
                    <span className="font-mono text-[10px] text-[#b6842a] font-semibold tracking-wider uppercase">
                      {official.badgeCode} &bull; {official.category === 'executive' ? 'National Executive' : official.state}
                    </span>
                    <span className="font-mono text-[10px] text-[#7c9473] flex items-center gap-1 uppercase">
                      <Sparkle size={12} weight="fill" className="text-[#b6842a]" />
                      Accredited
                    </span>
                  </div>

                  {/* Profile Header */}
                  <div className="flex items-start gap-4 mb-4">
                    {official.photoUrl ? (
                      <img
                        src={official.photoUrl}
                        alt={official.name}
                        className="w-20 h-20 object-cover object-top rounded-[2px] border border-[#10241f] shadow-[2px_2px_0px_rgba(182,132,42,0.6)] shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-[2px] bg-[#10241f] text-[#e3c375] font-display font-bold text-xl flex items-center justify-center border border-[#10241f] shadow-[2px_2px_0px_rgba(182,132,42,0.6)] shrink-0">
                        {official.initials}
                      </div>
                    )}

                    <div>
                      <h3 className="font-display text-lg font-semibold text-[#10241f] leading-snug">
                        {official.name}
                      </h3>
                      <p className="font-mono text-xs text-[#b6842a] font-medium mt-0.5">
                        {official.rankTitle}
                      </p>
                    </div>
                  </div>

                  {/* Portfolio Highlights / Badges if present */}
                  {official.portfolioRoles && official.portfolioRoles.length > 0 && (
                    <div className="mb-4 pt-2 border-t border-[#e7e0cb] space-y-1">
                      {official.portfolioRoles.map((role, rIdx) => (
                        <div key={rIdx} className="font-mono text-[10px] text-[#10241f] flex items-start gap-1.5">
                          <span className="text-[#b6842a] font-bold">&bull;</span>
                          <span className="leading-tight">{role}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Quote Banner */}
                  {official.quote && (
                    <p className="text-xs text-[#10241f] italic font-serif bg-[#f5f8f3] p-3 border-l-2 border-[#7c9473] mb-4 leading-relaxed">
                      &ldquo;{official.quote}&rdquo;
                    </p>
                  )}

                  <p className="text-xs text-[#666c5c] leading-relaxed">
                    {official.bio}
                  </p>
                </div>

                {/* Footer Bar with Socials */}
                <div className="mt-6 pt-4 border-t border-[#e7e0cb] flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-[#7c9473] uppercase tracking-wider font-semibold">
                    {official.category.toUpperCase()}
                  </span>

                  <div className="flex items-center gap-2.5 text-[#10241f]">
                    {official.socials.linkedin && official.socials.linkedin !== '#' && (
                      <a
                        href={official.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                        title="LinkedIn Profile"
                      >
                        <LinkedinLogo size={16} weight="bold" />
                      </a>
                    )}
                    {official.socials.twitter && official.socials.twitter !== '#' && (
                      <a
                        href={official.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                        title="X (Twitter)"
                      >
                        <X size={15} weight="bold" />
                      </a>
                    )}
                    {official.socials.facebook && official.socials.facebook !== '#' && (
                      <a
                        href={official.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                        title="Facebook"
                      >
                        <FacebookLogo size={16} weight="bold" />
                      </a>
                    )}
                    {official.socials.instagram && official.socials.instagram !== '#' && (
                      <a
                        href={official.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                        title="Instagram"
                      >
                        <InstagramLogo size={16} weight="bold" />
                      </a>
                    )}
                    {official.socials.threads && official.socials.threads !== '#' && (
                      <a
                        href={official.socials.threads}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors font-mono text-[11px] font-bold"
                        title="Threads"
                      >
                        <At size={16} weight="bold" />
                      </a>
                    )}
                    {official.socials.email && (
                      <a
                        href={`mailto:${official.socials.email}`}
                        className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                        title={`Email: ${official.socials.email}`}
                      >
                        <EnvelopeSimple size={16} weight="bold" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredOfficials.length === 0 && (
            <div className="text-center py-16 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] p-8">
              <p className="font-display text-lg text-[#10241f]">No officials found matching &ldquo;{searchQuery}&rdquo;</p>
              <p className="text-xs text-[#666c5c] mt-1">Try another search term or reset category filters.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 px-4 py-2 rounded-[2px] bg-[#10241f] text-[#f1ecde] text-xs font-mono uppercase"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* State Coordinator Notice Banner */}
      <section className="py-16 bg-[#10241f] text-[#f1ecde]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="font-mono text-xs text-[#e3c375] uppercase tracking-widest block">
            REGIONAL LIAISON APPLICATION
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-[#fffdf7] font-semibold">
            Are you an appointed State Coordinator or Local Government Liaison?
          </h3>
          <p className="text-xs text-[#aebf9e] max-w-lg mx-auto leading-relaxed">
            Submit your accreditation documents directly to the National Coordination Office in Abuja for publication in the official gazette.
          </p>
          <div className="pt-2">
            <Link
              to="/membership"
              className="px-6 py-3 rounded-[2px] bg-[#b6842a] hover:bg-[#c9963c] text-[#10241f] font-mono text-xs uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2"
            >
              <span>Accredit as an Official</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
