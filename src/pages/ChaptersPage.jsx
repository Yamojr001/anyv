import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  MagnifyingGlass,
  ArrowRight,
  IdentificationBadge,
  Users,
  Sparkle,
  EnvelopeSimple,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  At,
  X,
  Info,
  Phone,
  GithubLogo,
  Globe
} from '@phosphor-icons/react'
import {
  stateChapterOfficials
} from '../data/leadershipData'

export default function ChaptersPage() {
  const [activeZone, setActiveZone] = useState('all')
  const [search, setSearch] = useState('')
  const [selectedState, setSelectedState] = useState(null)

  const northernStates = [
    { name: 'Adamawa', zone: 'North-East', capital: 'Yola', hub: 'Active Chapter', lgas: 21, liaison: 'Yola Secretariat' },
    { name: 'Bauchi', zone: 'North-East', capital: 'Bauchi', hub: 'Active Chapter', lgas: 20, liaison: 'Bauchi Central' },
    { name: 'Benue', zone: 'North-Central', capital: 'Makurdi', hub: 'Organizing Council', lgas: 23, liaison: 'Makurdi Liaison' },
    { name: 'Borno', zone: 'North-East', capital: 'Maiduguri', hub: 'Active Chapter', lgas: 27, liaison: 'Maiduguri Chapter' },
    { name: 'Gombe', zone: 'North-East', capital: 'Gombe', hub: 'Innovation Hub', lgas: 11, liaison: 'Gombe State Council' },
    { name: 'Jigawa', zone: 'North-West', capital: 'Dutse', hub: 'Active Chapter', lgas: 27, liaison: 'Dutse Secretariat' },
    { name: 'Kaduna', zone: 'North-West', capital: 'Kaduna', hub: 'Regional Liaison', lgas: 23, liaison: 'Kaduna Regional Office' },
    { name: 'Kano', zone: 'North-West', capital: 'Kano', hub: 'Commerce & Enterprise Hub', lgas: 44, liaison: 'Kano Central Office' },
    { name: 'Katsina', zone: 'North-West', capital: 'Katsina', hub: 'Active Chapter', lgas: 34, liaison: 'Katsina Chapter' },
    { name: 'Kebbi', zone: 'North-West', capital: 'Birnin Kebbi', hub: 'Agri-Enterprise Hub', lgas: 21, liaison: 'Birnin Kebbi Council' },
    { name: 'Kogi', zone: 'North-Central', capital: 'Lokoja', hub: 'Active Chapter', lgas: 21, liaison: 'Lokoja Secretariat' },
    { name: 'Kwara', zone: 'North-Central', capital: 'Ilorin', hub: 'Active Chapter', lgas: 16, liaison: 'Ilorin Liaison' },
    { name: 'Nasarawa', zone: 'North-Central', capital: 'Lafia', hub: 'Active Chapter', lgas: 13, liaison: 'Lafia Chapter' },
    { name: 'Niger', zone: 'North-Central', capital: 'Minna', hub: 'Civic Chapter', lgas: 25, liaison: 'Minna Youth Council' },
    { name: 'Plateau', zone: 'North-Central', capital: 'Jos', hub: 'Youth Peace Forum', lgas: 17, liaison: 'Jos Regional Hub' },
    { name: 'Sokoto', zone: 'North-West', capital: 'Sokoto', hub: 'Active Chapter', lgas: 23, liaison: 'Sokoto Chapter' },
    { name: 'Taraba', zone: 'North-East', capital: 'Jalingo', hub: 'Active Chapter', lgas: 16, liaison: 'Jalingo Secretariat' },
    { name: 'Yobe', zone: 'North-East', capital: 'Damaturu', hub: 'Active Chapter', lgas: 17, liaison: 'Damaturu Chapter' },
    { name: 'Zamfara', zone: 'North-West', capital: 'Gusau', hub: 'Active Chapter', lgas: 14, liaison: 'Gusau Secretariat' },
    { name: 'FCT Abuja', zone: 'North-Central', capital: 'Abuja', hub: 'National Secretariat', lgas: 6, liaison: 'National HQ' }
  ]

  const getStateLeaders = (stateName) => {
    return stateChapterOfficials.filter(
      o => o.state.toLowerCase() === stateName.toLowerCase()
    )
  }

  const filteredStates = northernStates.filter(s => {
    const matchesZone = activeZone === 'all' || s.zone.toLowerCase().replace('-', '') === activeZone
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.capital.toLowerCase().includes(search.toLowerCase())
    return matchesZone && matchesSearch
  })

  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow text-[#c9963c]">19 NORTHERN STATES &bull; FEDERAL CAPITAL TERRITORY</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium mt-2 leading-tight">
            State Chapters Directory
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            Connecting grassroots youth networks across every local government area and senatorial district in Northern Nigeria.
          </p>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-[#cfc6a6]">
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Filter by state or capital city..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] text-xs focus:outline-none focus:border-[#b6842a]"
              />
              <MagnifyingGlass size={16} className="absolute left-3 top-3 text-[#666c5c]" />
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Chapters (20)' },
                { id: 'northwest', label: 'North-West (7)' },
                { id: 'northeast', label: 'North-East (6)' },
                { id: 'northcentral', label: 'North-Central (7)' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveZone(tab.id)}
                  className={`px-3.5 py-1.5 rounded-[2px] text-xs font-mono transition-all ${
                    activeZone === tab.id
                      ? 'bg-[#10241f] text-[#f1ecde] font-semibold shadow-[2px_2px_0px_rgba(182,132,42,0.6)]'
                      : 'bg-[#fffdf7] text-[#3c4136] border border-[#cfc6a6] hover:border-[#b6842a]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStates.map((state, idx) => {
              const stateLeaders = getStateLeaders(state.name)

              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.15 }}
                  className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] flex flex-col justify-between specimen-shadow hover:border-[#b6842a] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#e7e0cb]">
                      <span className="font-mono text-[9px] text-[#b6842a] uppercase font-semibold">
                        {state.zone}
                      </span>
                      <span className="font-mono text-[10px] text-[#7c9473] flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 bg-[#7c9473]"></span>
                        Active
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-[#10241f]">
                      {state.name}
                    </h3>
                    <p className="text-xs text-[#666c5c] mt-0.5">Capital: {state.capital}</p>

                    {/* Leaders indicator badge */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {stateLeaders.length > 0 ? (
                        <>
                          <span className="font-mono text-[10px] text-[#b6842a] bg-[#fcf8ed] px-2 py-0.5 rounded-[2px] border border-[#cfc6a6] font-semibold inline-flex items-center gap-1">
                            <Users size={11} weight="bold" />
                            {stateLeaders.length}/3 State Executives
                          </span>
                          {stateLeaders.length === 3 && (
                            <span className="font-mono text-[10px] text-[#7c9473] bg-[#f5f8f3] px-2 py-0.5 rounded-[2px] border border-[#7c9473]/40 font-semibold inline-flex items-center gap-1">
                              Council Formed
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="font-mono text-[10px] text-[#7c9473] bg-[#f5f8f3] px-2 py-0.5 rounded-[2px] border border-[#cfc6a6] font-semibold inline-flex items-center gap-1">
                          Council In Formation
                        </span>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#e7e0cb] space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#666c5c] text-[11px]">Local Govts:</span>
                        <span className="font-mono font-medium text-[#10241f]">{state.lgas} LGAs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#666c5c] text-[11px]">Liaison:</span>
                        <span className="font-medium text-[#10241f]">{state.liaison}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-3 border-t border-[#e7e0cb] space-y-2">
                    <button
                      onClick={() => setSelectedState(state)}
                      className="w-full py-2.5 rounded-[2px] bg-[#10241f] hover:bg-[#1a3831] text-[#fffdf7] text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_rgba(182,132,42,0.6)] cursor-pointer"
                    >
                      <IdentificationBadge size={15} weight="bold" className="text-[#e3c375]" />
                      <span>View Leadership</span>
                    </button>

                    <Link
                      to="/membership"
                      className="w-full py-1 text-center text-[11px] font-mono text-[#666c5c] hover:text-[#10241f] transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Connect Chapter</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {filteredStates.length === 0 && (
            <div className="text-center py-16 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] p-8">
              <p className="font-display text-lg text-[#10241f]">No state chapters found matching &ldquo;{search}&rdquo;</p>
              <button
                onClick={() => { setSearch(''); setActiveZone('all'); }}
                className="mt-4 px-4 py-2 rounded-[2px] bg-[#10241f] text-[#f1ecde] text-xs font-mono uppercase"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* State Leadership Modal */}
      <AnimatePresence>
        {selectedState && (
          <div className="fixed inset-0 z-50 bg-[#10241f]/75 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#fffdf7] border-2 border-[#10241f] rounded-[2px] max-w-3xl w-full p-6 sm:p-8 specimen-shadow max-h-[90vh] overflow-y-auto relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedState(null)}
                className="absolute top-5 right-5 p-1.5 rounded-[2px] text-[#10241f] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                title="Close modal"
              >
                <X size={18} weight="bold" />
              </button>

              {/* Modal State Header */}
              <div className="border-b border-[#cfc6a6] pb-5 mb-6 pr-8">
                <div className="flex items-center gap-2">
                  <span className="eyebrow text-[#b6842a]">
                    STATE CHAPTER LEADERSHIP &bull; {selectedState.zone.toUpperCase()} ZONE
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-[#10241f] font-bold mt-1">
                  {selectedState.name} State Leadership
                </h2>
                <p className="text-xs text-[#666c5c] mt-1.5">
                  Official leadership roster, state liaison coordination, and youth governance council for {selectedState.name} State.
                </p>

                {/* State Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-[#e7e0cb] text-xs">
                  <div className="bg-[#f7f3e8] p-2.5 rounded-[2px] border border-[#cfc6a6]">
                    <span className="text-[10px] font-mono text-[#666c5c] uppercase block">Capital City</span>
                    <strong className="text-[#10241f] font-display text-sm">{selectedState.capital}</strong>
                  </div>
                  <div className="bg-[#f7f3e8] p-2.5 rounded-[2px] border border-[#cfc6a6]">
                    <span className="text-[10px] font-mono text-[#666c5c] uppercase block">Local Govts</span>
                    <strong className="text-[#10241f] font-display text-sm">{selectedState.lgas} LGAs</strong>
                  </div>
                  <div className="bg-[#f7f3e8] p-2.5 rounded-[2px] border border-[#cfc6a6]">
                    <span className="text-[10px] font-mono text-[#666c5c] uppercase block">Strategic Role</span>
                    <strong className="text-[#10241f] font-display text-sm">{selectedState.hub}</strong>
                  </div>
                  <div className="bg-[#f7f3e8] p-2.5 rounded-[2px] border border-[#cfc6a6]">
                    <span className="text-[10px] font-mono text-[#666c5c] uppercase block">Liaison Office</span>
                    <strong className="text-[#10241f] font-display text-sm truncate block">{selectedState.liaison}</strong>
                  </div>
                </div>
              </div>

              {/* State Leaders Roster */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-bold text-[#10241f] flex items-center gap-2">
                    <span>State Chapter Executive Council</span>
                    <span className="font-mono text-xs text-[#b6842a] font-normal">
                      ({getStateLeaders(selectedState.name).length}/3 Appointed)
                    </span>
                  </h3>
                </div>

                {getStateLeaders(selectedState.name).length > 0 ? (
                  <div className="space-y-6">
                    {getStateLeaders(selectedState.name).map((leader) => (
                      <div
                        key={leader.id}
                        className="bg-[#faf7ef] border border-[#cfc6a6] p-5 sm:p-6 rounded-[2px] specimen-shadow space-y-4"
                      >
                        {/* Leader Top Bar */}
                        <div className="flex items-center justify-between pb-3 border-b border-[#e7e0cb]">
                          <span className="font-mono text-[10px] text-[#b6842a] font-semibold tracking-wider uppercase">
                            {leader.badgeCode || 'STA-REC'} &bull; {leader.state} Chapter
                          </span>
                          <span className="font-mono text-[10px] text-[#b6842a] flex items-center gap-1 uppercase font-semibold">
                            <Sparkle size={12} weight="fill" className="text-[#b6842a]" />
                            {leader.roleType === 'coordinator'
                              ? 'State Coordinator'
                              : leader.roleType === 'vice_coordinator'
                              ? 'Deputy State Coordinator'
                              : 'State Secretary'}
                          </span>
                        </div>

                        {/* Leader Profile Header */}
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-[2px] bg-[#10241f] text-[#e3c375] font-display font-bold text-xl flex items-center justify-center border border-[#10241f] shadow-[2px_2px_0px_rgba(182,132,42,0.6)] shrink-0">
                            {leader.initials || 'ANYV'}
                          </div>

                          <div>
                            <h4 className="font-display text-lg sm:text-xl font-bold text-[#10241f] leading-snug">
                              {leader.name}
                            </h4>
                            <p className="font-mono text-xs text-[#b6842a] font-semibold mt-0.5">
                              {leader.rankTitle}
                            </p>
                          </div>
                        </div>

                        {/* Portfolio Roles if present */}
                        {leader.portfolioRoles && leader.portfolioRoles.length > 0 && (
                          <div className="pt-2 border-t border-[#e7e0cb] space-y-1">
                            <span className="font-mono text-[10px] text-[#666c5c] uppercase tracking-wider block font-semibold mb-1">
                              Portfolio &bull; Credentials
                            </span>
                            {leader.portfolioRoles.map((role, rIdx) => (
                              <div key={rIdx} className="font-mono text-[10px] text-[#10241f] flex items-start gap-1.5">
                                <span className="text-[#b6842a] font-bold">&bull;</span>
                                <span className="leading-tight">{role}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Quote */}
                        {leader.quote && (
                          <blockquote className="text-xs text-[#10241f] italic font-serif bg-[#f5f8f3] p-3 border-l-2 border-[#7c9473] leading-relaxed">
                            &ldquo;{leader.quote}&rdquo;
                          </blockquote>
                        )}

                        {/* Bio */}
                        {leader.bio && (
                          <p className="text-xs text-[#666c5c] leading-relaxed">
                            {leader.bio}
                          </p>
                        )}

                        {/* Leader Contact Channels */}
                        {leader.socials && Object.keys(leader.socials).length > 0 && (
                          <div className="pt-3 border-t border-[#e7e0cb] flex items-center justify-between text-xs">
                            <span className="font-mono text-[10px] text-[#7c9473] uppercase tracking-wider font-semibold">
                              Direct Connect
                            </span>
                            <div className="flex items-center gap-2 text-[#10241f]">
                              {leader.socials.phone && (
                                <a
                                  href={`tel:${leader.socials.phone}`}
                                  className="px-2 py-1 rounded-[2px] bg-[#f1ecde] hover:bg-[#10241f] text-[#10241f] hover:text-[#e3c375] transition-colors flex items-center gap-1.5 font-mono text-[11px] font-semibold border border-[#cfc6a6]"
                                  title={`Call: ${leader.socials.phone}`}
                                >
                                  <Phone size={14} weight="bold" />
                                  <span>{leader.socials.phone}</span>
                                </a>
                              )}
                              {leader.socials.email && (
                                <a
                                  href={`mailto:${leader.socials.email}`}
                                  className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                                  title={`Email: ${leader.socials.email}`}
                                >
                                  <EnvelopeSimple size={16} weight="bold" />
                                </a>
                              )}
                              {leader.socials.linkedin && leader.socials.linkedin !== '#' && (
                                <a
                                  href={leader.socials.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                                  title="LinkedIn"
                                >
                                  <LinkedinLogo size={16} weight="bold" />
                                </a>
                              )}
                              {leader.socials.facebook && leader.socials.facebook !== '#' && (
                                <a
                                  href={leader.socials.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                                  title="Facebook"
                                >
                                  <FacebookLogo size={16} weight="bold" />
                                </a>
                              )}
                              {leader.socials.instagram && leader.socials.instagram !== '#' && (
                                <a
                                  href={leader.socials.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                                  title="Instagram"
                                >
                                  <InstagramLogo size={16} weight="bold" />
                                </a>
                              )}
                              {leader.socials.threads && leader.socials.threads !== '#' && (
                                <a
                                  href={leader.socials.threads}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors font-mono text-[11px] font-bold"
                                  title="Threads"
                                >
                                  <At size={16} weight="bold" />
                                </a>
                              )}
                              {leader.socials.github && (
                                <a
                                  href={leader.socials.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                                  title="GitHub"
                                >
                                  <GithubLogo size={16} weight="bold" />
                                </a>
                              )}
                              {leader.socials.website && (
                                <a
                                  href={leader.socials.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
                                  title="Personal/Product Website"
                                >
                                  <Globe size={16} weight="bold" />
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-[#f7f3e8] border border-[#cfc6a6] p-6 rounded-[2px] text-center space-y-3">
                    <div className="w-10 h-10 rounded-[2px] bg-[#10241f] text-[#e3c375] flex items-center justify-center mx-auto">
                      <Info size={20} weight="bold" />
                    </div>
                    <h4 className="font-display text-base font-semibold text-[#10241f]">
                      State Chapter Executive Council In Formation
                    </h4>
                    <p className="text-xs text-[#666c5c] max-w-md mx-auto leading-relaxed">
                      The three state chapter executive offices (State Coordinator, Deputy State Coordinator, and State Secretary) across all {selectedState.lgas} Local Government Areas in {selectedState.name} State are undergoing formal vetting and appointment by the National Secretariat in Abuja.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/membership"
                        className="px-4 py-2 rounded-[2px] bg-[#10241f] hover:bg-[#1a3831] text-[#fffdf7] font-mono text-xs uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Accredit as State Official</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Controls */}
              <div className="mt-8 pt-4 border-t border-[#cfc6a6] flex flex-col sm:flex-row items-center justify-between gap-3">
                <Link
                  to="/leadership"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-[2px] bg-[#b6842a] hover:bg-[#c9963c] text-[#10241f] font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <IdentificationBadge size={15} weight="bold" />
                  <span>View National Leadership Directory</span>
                </Link>

                <button
                  onClick={() => setSelectedState(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-[2px] bg-[#fffdf7] hover:bg-[#f1ecde] text-[#10241f] border border-[#cfc6a6] font-mono text-xs uppercase tracking-wider font-semibold transition-colors text-center"
                >
                  Close Window
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
