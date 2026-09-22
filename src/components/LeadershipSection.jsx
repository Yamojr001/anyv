import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  leadershipCategories,
  leadershipOfficials
} from '../data/leadershipData'
import {
  Sparkle,
  IdentificationBadge,
  EnvelopeSimple,
  Globe,
  ShareNetwork,
  Info,
  LinkedinLogo,
  InstagramLogo,
  X,
  At
} from '@phosphor-icons/react'

export default function LeadershipSection({ onEnlistClick }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredOfficials = activeCategory === 'all'
    ? leadershipOfficials
    : leadershipOfficials.filter(o => o.category === activeCategory)

  return (
    <section id="leadership" className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="eyebrow text-[#b6842a]">EXECUTIVE HIERARCHY &bull; 2026&ndash;2027</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#10241f] mt-1">
              Leadership &amp; National Directorate
            </h2>
            <p className="text-sm text-[#666c5c] mt-2 max-w-xl">
              Eminent champions, regional coordinators, and sector directors steering the vanguard across the 19 Northern states.
            </p>
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

        {/* Informational Banner */}
        <div className="mb-10 p-4 bg-[#f1ecde] border border-[#cfc6a6] rounded-[2px] flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-[2px] bg-[#10241f] text-[#e3c375] flex items-center justify-center shrink-0">
              <Info size={14} weight="bold" />
            </div>
            <span className="text-[#3c4136]">
              <strong>Official Gazette Notice:</strong> The executive portfolio roster is structured and ready for official verification. State chapter liaison councils are being accredited.
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider shrink-0 hidden sm:inline">
            SECRETARIAT GAZETTE
          </span>
        </div>

        {/* Officials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOfficials.map((official) => (
            <motion.div
              key={official.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow"
            >
              <div>
                {/* Header bar of official card */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e7e0cb]">
                  <span className="font-mono text-[10px] text-[#b6842a] font-semibold tracking-wider uppercase">
                    {official.badgeCode} &bull; {official.state} Chapter
                  </span>
                  <span className="font-mono text-[10px] text-[#7c9473] flex items-center gap-1 uppercase">
                    <Sparkle size={12} weight="fill" className="text-[#b6842a]" />
                    Accredited
                  </span>
                </div>

                {/* Profile Avatar + Titles */}
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

                {/* Quote or Bio */}
                {official.quote && (
                  <p className="text-xs text-[#10241f] italic font-serif bg-[#f5f8f3] p-3 border-l-2 border-[#7c9473] mb-4 leading-relaxed">
                    &ldquo;{official.quote}&rdquo;
                  </p>
                )}

                <p className="text-xs text-[#666c5c] leading-relaxed">
                  {official.bio}
                </p>
              </div>

              {/* Card Footer with Socials & Verification */}
              <div className="mt-6 pt-4 border-t border-[#e7e0cb] flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-[#7c9473] uppercase tracking-wider font-semibold">
                  Verified Executive
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

        {/* State Coordinators Banner */}
        <div className="mt-12 p-8 bg-[#10241f] text-[#f1ecde] rounded-[2px] border border-[#10241f] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#e3c375] uppercase tracking-widest block">
              STATE CHAPTER COUNCIL APPOINTMENTS
            </span>
            <h3 className="font-display text-2xl font-semibold text-[#fffdf7]">
              Are you an appointed State Coordinator or Ward Liaison?
            </h3>
            <p className="text-xs text-[#aebf9e] max-w-xl leading-relaxed">
              State and local government chapter executives can submit their verification documentation to the National Secretariat for formal gazette inclusion.
            </p>
          </div>

          <button
            onClick={onEnlistClick}
            className="px-6 py-3 rounded-[2px] bg-[#b6842a] hover:bg-[#c9963c] text-[#10241f] font-semibold text-xs font-mono uppercase tracking-wider transition-all hover:shadow-[3px_3px_0px_rgba(255,253,247,0.8)] shrink-0"
          >
            Submit Coordinator Credentials
          </button>
        </div>

      </div>
    </section>
  )
}
