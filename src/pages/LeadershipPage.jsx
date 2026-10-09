import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fetchLeaders, LEADERSHIP_CATEGORIES } from '../services/api'
import SEO from '../components/SEO'
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
  Globe,
  X,
  At,
  Phone,
  GithubLogo,
  MapPin
} from '@phosphor-icons/react'

function OfficialCard({ official }) {
  return (
    <motion.div
      key={official.id}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow"
    >
      <div>
        {/* State Name Header Banner for State Members */}
        {official.category === 'state' && official.state && (
          <div className="mb-3.5 px-3 py-1.5 bg-[#10241f] text-[#e3c375] font-mono text-xs uppercase tracking-wider font-bold rounded-[2px] flex items-center justify-between border border-[#1f3f37] shadow-sm">
            <div className="flex items-center gap-1.5">
              <MapPin size={13} weight="fill" className="text-[#b6842a]" />
              <span>{official.state} STATE CHAPTER</span>
            </div>
            <span className="text-[10px] text-[#aebf9e] font-normal">State Official</span>
          </div>
        )}

        {/* Official Card Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e7e0cb]">
          <span className="font-mono text-[10px] text-[#b6842a] font-semibold tracking-wider uppercase">
            {official.badgeCode} &bull; {official.category === 'executive' ? 'National Executive' : official.category === 'state' ? `${official.state} Chapter` : official.state}
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
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(official.name)}&background=10241f&color=c9963c`;
              }}
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
          {official.category === 'state' ? `${official.state} Chapter` : official.category.toUpperCase()}
        </span>

        <div className="flex items-center gap-2.5 text-[#10241f]">
          {official.socials?.phone && (
            <a
              href={`tel:${official.socials.phone}`}
              className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
              title={`Phone: ${official.socials.phone}`}
            >
              <Phone size={15} weight="bold" />
            </a>
          )}
          {official.socials?.linkedin && official.socials.linkedin !== '#' && (
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
          {official.socials?.github && (
            <a
              href={official.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
              title="GitHub Profile"
            >
              <GithubLogo size={16} weight="bold" />
            </a>
          )}
          {official.socials?.website && (
            <a
              href={official.socials.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-[2px] hover:bg-[#10241f] hover:text-[#e3c375] transition-colors"
              title="Personal/Product Website"
            >
              <Globe size={16} weight="bold" />
            </a>
          )}
          {official.socials?.twitter && official.socials.twitter !== '#' && (
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
          {official.socials?.facebook && official.socials.facebook !== '#' && (
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
          {official.socials?.instagram && official.socials.instagram !== '#' && (
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
          {official.socials?.threads && official.socials.threads !== '#' && (
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
          {official.socials?.email && (
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
  )
}

export default function LeadershipPage() {
  const [searchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || searchParams.get('state') || '')
  const [principals, setPrincipals] = useState([])
  const [nationalOfficials, setNationalOfficials] = useState([])
  const [stateOfficials, setStateOfficials] = useState([])

  useEffect(() => {
    let isMounted = true
    fetchLeaders()
      .then(data => {
        if (!isMounted || !Array.isArray(data) || data.length === 0) return
        const p = data.filter(l => l.category === 'principal')
          .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
        const s = data.filter(l => l.category === 'state')
          .sort((a, b) => {
            const stateComp = (a.state || '').localeCompare(b.state || '')
            if (stateComp !== 0) return stateComp
            return (a.order ?? 99) - (b.order ?? 99)
          })
        const n = data.filter(l => l.category !== 'principal' && l.category !== 'state')
          .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
        setPrincipals(p)
        setStateOfficials(s)
        setNationalOfficials(n)
      })
      .catch(err => console.warn('LeadershipPage API notice:', err))
    return () => { isMounted = false }
  }, [])

  useEffect(() => {
    const q = searchParams.get('search') || searchParams.get('state')
    if (q) {
      setSearchQuery(q)
    }
  }, [searchParams])

  const filteredNationalOfficials = nationalOfficials.filter((official) => {
    const matchesCategory = activeCategory === 'all' || official.category === activeCategory
    const matchesSearch =
      (official.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (official.rankTitle || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (official.state || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (official.badgeCode || '').toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const filteredStateOfficials = stateOfficials.filter((official) => {
    const matchesCategory = activeCategory === 'all' || activeCategory === 'state'
    const matchesSearch =
      (official.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (official.rankTitle || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (official.state || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (official.badgeCode || '').toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const stateOfficialsByState = filteredStateOfficials.reduce((acc, official) => {
    const stateName = official.state || 'Other'
    if (!acc[stateName]) {
      acc[stateName] = []
    }
    acc[stateName].push(official)
    return acc
  }, {})

  const totalFilteredCount = filteredNationalOfficials.length + filteredStateOfficials.length

  return (
    <div className="space-y-0">
      <SEO
        title="Official Leadership & State Executives Registry"
        description="Comprehensive leadership directory of the Atiku Northern Youth Vanguard (ANYV). National executive council, state coordinators, and secretariat leadership across Northern Nigeria."
        keywords="ANYV leadership directory, Atiku Youth Vanguard executives, Hon. Dr. Levi Aondohemba Orhii, Hon. Babayo Musa, Zechariah Nehemiah, Adam Ustaz Ubaidullah, Salihu Sumaiya, Zakari Idozi, Smart Olaitan, Idris Usman Mohammed, Jejelola Abdulganiyu O., Halliru Ibrahim Sk, Abubakar Ibrahim Marke, Ahmad Abdulrazak Bakori, Saifullahi Sule Sanda, Hidayatu Lawal, Samaila Sani Janbako, Jamilu Yusuf Musa, Rukayya Musa Muhammad, Hon. Sulaiman Uwaisu Idris, Comrade Nasiru Abdulhamid, Engr. Salim Sharubutu Yusuf, Dr. Benjamin Maina, Nafiu Sani Gulumbe, Ibrahim Akibu Jaafaru, Zaharadeen Ismail Sabo, QS Salisu Adamu, Micah Musa, Samuel Christopher Daleng, Aisha Muhammad Kachalla"
      />
      
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

      {/* Presidential Principals Ticket Showcase */}
      <section className="py-16 bg-[#f7f3e8] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="eyebrow text-[#b6842a]">PRESIDENTIAL TICKET &bull; 2027</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#10241f] font-semibold mt-1">
              Our Presidential Principals
            </h2>
            <p className="text-xs sm:text-sm text-[#666c5c] mt-2 leading-relaxed">
              The national standard bearers anchoring the vision, democratic ethos, and economic renaissance championed by the Atiku Northern Youth Vanguard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {principals.map((principal) => (
              <motion.div
                key={principal.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] p-6 sm:p-7 flex flex-col sm:flex-row gap-6 hover:border-[#b6842a] transition-all specimen-shadow"
              >
                {/* Large Portrait Frame */}
                <div className="sm:w-52 sm:h-72 w-full h-64 shrink-0">
                  {principal.photoUrl ? (
                    <img
                      src={principal.photoUrl}
                      alt={principal.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(principal.name)}&background=10241f&color=c9963c`;
                      }}
                      className="w-full h-full object-cover object-top rounded-[2px] border border-[#10241f] shadow-[3px_3px_0px_rgba(182,132,42,0.6)]"
                    />
                  ) : (
                    <div className="w-full h-full rounded-[2px] bg-[#10241f] text-[#e3c375] flex flex-col items-center justify-center p-4 border border-[#10241f] shadow-[3px_3px_0px_rgba(182,132,42,0.6)] text-center">
                      <span className="font-display text-4xl sm:text-5xl font-bold tracking-wider">{principal.initials}</span>
                      <span className="font-mono text-[9px] text-[#aebf9e] uppercase tracking-widest mt-3">
                        Accredited Principal
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#e7e0cb]">
                      <span className="font-mono text-[10px] text-[#b6842a] font-bold tracking-wider uppercase">
                        {principal.roleLabel}
                      </span>
                      <span className="font-mono text-[9px] text-[#7c9473] flex items-center gap-1 uppercase font-semibold">
                        <Sparkle size={11} weight="fill" className="text-[#b6842a]" />
                        {principal.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#10241f] leading-snug">
                      {principal.name}
                    </h3>
                    <p className="font-mono text-xs text-[#b6842a] font-medium mt-1">
                      {principal.rankTitle}
                    </p>

                    <div className="mt-2 inline-block px-2.5 py-0.5 bg-[#f1ecde] text-[#10241f] font-mono text-[10px] rounded-[2px] border border-[#cfc6a6]">
                      {principal.state}
                    </div>

                    {principal.quote && (
                      <p className="text-xs text-[#10241f] italic font-serif bg-[#f5f8f3] p-2.5 border-l-2 border-[#7c9473] my-3 leading-relaxed">
                        &ldquo;{principal.quote}&rdquo;
                      </p>
                    )}

                    <p className="text-xs text-[#666c5c] leading-relaxed">
                      {principal.bio}
                    </p>
                  </div>

                  {/* Social Logos commented out for now as requested */}
                  <div className="mt-4 pt-3 border-t border-[#e7e0cb] flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#7c9473] uppercase tracking-wider font-semibold">
                      Standard Bearer
                    </span>
                    <span className="font-mono text-[9px] text-[#b6842a] uppercase tracking-wider font-semibold">
                      Presidency &bull; 2027
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              {LEADERSHIP_CATEGORIES.map(cat => (
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

          {/* National Governing Councils Section */}
          {filteredNationalOfficials.length > 0 && (
            <div className="mb-16">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#cfc6a6]">
                <div>
                  <span className="eyebrow text-[#b6842a]">NATIONAL GOVERNING BODIES</span>
                  <h3 className="font-display text-2xl font-bold text-[#10241f] mt-0.5">
                    National Executive Council &amp; Directorates
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#666c5c]">
                  {filteredNationalOfficials.length} Accredited National Officials
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNationalOfficials.map(official => (
                  <OfficialCard key={official.id} official={official} />
                ))}
              </div>
            </div>
          )}

          {/* State Chapter Executives Section (Grouped by State with State Name prominently written above members) */}
          {filteredStateOfficials.length > 0 && (
            <div className="mb-16">
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#cfc6a6]">
                <div>
                  <span className="eyebrow text-[#b6842a]">GRASSROOTS CHAPTER LEADERSHIP</span>
                  <h3 className="font-display text-2xl font-bold text-[#10241f] mt-0.5">
                    State Chapter Executive Councils
                  </h3>
                  <p className="text-xs text-[#666c5c] mt-0.5">
                    Accredited State Coordinators, Deputy Coordinators, and Secretaries organized by State Chapter.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#b6842a] font-semibold bg-[#fcf8ed] px-2.5 py-1 border border-[#cfc6a6] rounded-[2px] self-start sm:self-auto">
                  {filteredStateOfficials.length} State Chapter Executives &bull; {Object.keys(stateOfficialsByState).length} Active States
                </span>
              </div>

              {/* State Groups: State Name written clearly above each state's members */}
              <div className="space-y-12">
                {Object.entries(stateOfficialsByState).map(([stateName, officials]) => (
                  <div key={stateName} className="space-y-4">
                    {/* State Header above state members */}
                    <div className="flex items-center justify-between pb-3 border-b-2 border-[#b6842a] bg-[#f7f3e8] px-4 py-3 rounded-[2px] border border-[#cfc6a6]">
                      <div className="flex items-center gap-2.5">
                        <MapPin size={20} weight="fill" className="text-[#b6842a]" />
                        <h4 className="font-display text-xl sm:text-2xl font-bold text-[#10241f]">
                          {stateName} State Chapter Leadership
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-[#b6842a] font-semibold bg-[#fffdf7] px-3 py-1 border border-[#cfc6a6] rounded-[2px]">
                        {officials.length}/3 Appointed Executives
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {officials.map(official => (
                        <OfficialCard key={official.id} official={official} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {totalFilteredCount === 0 && (
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
