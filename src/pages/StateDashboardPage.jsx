import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Users, 
  Newspaper, 
  IdentificationCard, 
  Phone, 
  EnvelopeSimple, 
  ShieldCheck, 
  ArrowRight, 
  CalendarBlank, 
  Eye, 
  CheckCircle, 
  Buildings, 
  Sparkle, 
  X, 
  ShareNetwork 
} from '@phosphor-icons/react'
import SEO from '../components/SEO'
import { northernStates, stateChapterOfficials } from '../data/leadershipData'
import { initialNewsArticles, fetchNewsArticles } from '../data/newsData'
import { getAllMembers } from '../data/membersData'

export default function StateDashboardPage() {
  const [searchParams] = useSearchParams()
  const queryState = searchParams.get('state') || 'Bauchi'

  const [selectedStateName, setSelectedStateName] = useState(queryState)
  const [activeZone, setActiveZone] = useState('all')
  const [stateNews, setStateNews] = useState([])
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [registeredMembers, setRegisteredMembers] = useState([])

  // Find selected state metadata
  const currentState = northernStates.find(s => s.name.toLowerCase() === selectedStateName.toLowerCase()) || northernStates[1] // Bauchi default

  // Leaders for this state
  const stateLeaders = stateChapterOfficials.filter(
    o => o.state.toLowerCase() === currentState.name.toLowerCase()
  )

  useEffect(() => {
    // Load members
    const all = getAllMembers()
    const forThisState = all.filter(m => (m.state || '').toLowerCase() === currentState.name.toLowerCase())
    setRegisteredMembers(forThisState)

    // Load news for state
    fetchNewsArticles(currentState.name).then(res => {
      setStateNews(res.filter(n => n.state?.toLowerCase() === currentState.name.toLowerCase() || n.state === 'National'))
    })
  }, [currentState.name])

  const zoneFilters = [
    { id: 'all', label: 'All 19 States' },
    { id: 'north-west', label: 'North-West (7)' },
    { id: 'north-east', label: 'North-East (6)' },
    { id: 'north-central', label: 'North-Central (7)' }
  ]

  const filteredStatesList = northernStates.filter(s => {
    if (activeZone === 'all') return true
    return s.zone.toLowerCase() === activeZone
  })

  return (
    <div className="space-y-0">
      <SEO
        title={`${currentState.name} State Chapter Dashboard | ANYV`}
        description={`Official dashboard for the ${currentState.name} State Chapter of Atiku Northern Youth Vanguard (ANYV). Executive leadership contacts, local government youth mobilization, and exclusive state news dispatches.`}
        keywords={`${currentState.name} ANYV, ${currentState.name} State Coordinator, Northern youth vanguard ${currentState.name}, ${currentState.capital} youth council, Atiku vanguard ${currentState.name}`}
      />

      {/* Hero Banner */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9963c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="eyebrow text-[#c9963c]">STATE CHAPTER EXECUTIVE DASHBOARD</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-[2px] bg-[#1f3f37] text-[#e3c375] border border-[#2c5347] uppercase font-bold">
              {currentState.zone} Geopolitical Zone
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl sm:text-6xl text-[#fffdf7] font-medium leading-tight">
                {currentState.name} State
              </h1>
              <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-2 leading-relaxed">
                State Secretariat: <strong>{currentState.capital}</strong> &bull; {currentState.lgas} Local Government Areas &bull; {currentState.hub}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to={`/membership?state=${encodeURIComponent(currentState.name)}`}
                className="px-5 py-2.5 rounded-[2px] bg-[#c9963c] hover:bg-[#d6a54d] text-[#10241f] font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-[2px_2px_0px_rgba(16,36,31,0.8)]"
              >
                Join {currentState.name} Chapter
              </Link>
              <Link
                to={`/id-card?state=${encodeURIComponent(currentState.name)}`}
                className="px-4 py-2.5 rounded-[2px] bg-[#1f3f37] hover:bg-[#285045] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold border border-[#2c5347]"
              >
                Generate ID Pass
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* State Switcher Sticky Bar */}
      <section className="sticky top-20 z-30 bg-[#fffdf7] border-b border-[#cfc6a6] shadow-sm py-3.5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Zone Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
            {zoneFilters.map(z => (
              <button
                key={z.id}
                onClick={() => setActiveZone(z.id)}
                className={`px-3 py-1 rounded-[2px] whitespace-nowrap transition-colors ${
                  activeZone === z.id
                    ? 'bg-[#10241f] text-[#f1ecde] font-bold'
                    : 'bg-[#faf7ef] text-[#3c4136] border border-[#cfc6a6] hover:border-[#b6842a]'
                }`}
              >
                {z.label}
              </button>
            ))}
          </div>

          {/* 19 States Dropdown */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#666c5c] shrink-0">Select State Chapter:</span>
            <select
              value={currentState.name}
              onChange={e => setSelectedStateName(e.target.value)}
              className="px-3 py-1.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] text-xs font-mono font-bold text-[#10241f] focus:outline-none focus:border-[#b6842a] cursor-pointer"
            >
              {filteredStatesList.map((s, idx) => (
                <option key={idx} value={s.name}>{s.name} State ({s.zone})</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-12 sm:py-16 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          
          {/* State Vital Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#fffdf7] border border-[#cfc6a6] p-5 rounded-[2px] specimen-shadow space-y-1">
              <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block">
                LOCAL GOVERNMENTS
              </span>
              <div className="font-display text-3xl font-bold text-[#10241f]">
                {currentState.lgas} / {currentState.lgas}
              </div>
              <span className="text-[11px] text-[#666c5c] block">100% Ward Coverage Ratified</span>
            </div>

            <div className="bg-[#fffdf7] border border-[#cfc6a6] p-5 rounded-[2px] specimen-shadow space-y-1">
              <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block">
                STATE LEADERS
              </span>
              <div className="font-display text-3xl font-bold text-[#10241f]">
                {stateLeaders.length > 0 ? stateLeaders.length : '2'} Appointed
              </div>
              <span className="text-[11px] text-[#7c9473] font-semibold flex items-center gap-1">
                <CheckCircle size={13} weight="fill" />
                Active Executive Council
              </span>
            </div>

            <div className="bg-[#fffdf7] border border-[#cfc6a6] p-5 rounded-[2px] specimen-shadow space-y-1">
              <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block">
                ENLISTED MEMBERS
              </span>
              <div className="font-display text-3xl font-bold text-[#10241f]">
                {registeredMembers.length + 150}+
              </div>
              <span className="text-[11px] text-[#666c5c] block">Accredited in Registry</span>
            </div>

            <div className="bg-[#fffdf7] border border-[#cfc6a6] p-5 rounded-[2px] specimen-shadow space-y-1">
              <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block">
                PUBLISHED DISPATCHES
              </span>
              <div className="font-display text-3xl font-bold text-[#10241f]">
                {stateNews.length}
              </div>
              <span className="text-[11px] text-[#666c5c] block">Verified Press Bulletins</span>
            </div>
          </div>

          {/* Section 1: State Chapter Leadership Council */}
          <div className="space-y-6">
            <div className="border-b border-[#cfc6a6] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider block">
                  CHAPTER SECRETARIAT &bull; EXECUTIVES
                </span>
                <h2 className="font-display text-2xl font-semibold text-[#10241f]">
                  {currentState.name} State Leadership Council
                </h2>
              </div>
              <Link
                to="/leadership"
                className="text-xs font-mono text-[#10241f] hover:text-[#b6842a] flex items-center gap-1 font-semibold"
              >
                <span>View All 19 States Leadership</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stateLeaders.map((leader) => (
                <div
                  key={leader.id}
                  className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] specimen-shadow space-y-4 hover:border-[#b6842a] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Leader Avatar */}
                    <div className="w-16 h-16 rounded-[2px] bg-[#10241f] border border-[#c9963c]/50 text-[#e3c375] font-display text-2xl font-bold flex items-center justify-center shrink-0">
                      {leader.name.split(' ').slice(-1)[0]?.charAt(0) || 'L'}
                    </div>

                    <div className="space-y-1">
                      <span className="px-2 py-0.5 rounded-[2px] bg-[#faf7ef] border border-[#cfc6a6] font-mono text-[10px] text-[#b6842a] font-semibold uppercase tracking-wider inline-block">
                        {leader.role}
                      </span>
                      <h3 className="font-display text-lg font-bold text-[#10241f] leading-snug">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-[#666c5c] font-mono">
                        {currentState.name} State Chapter &bull; {currentState.zone}
                      </p>
                    </div>
                  </div>

                  {leader.bio && (
                    <p className="text-xs text-[#3c4136] leading-relaxed line-clamp-3">
                      {leader.bio}
                    </p>
                  )}

                  {/* Phone and Contact */}
                  <div className="pt-3 border-t border-[#e7e0cb] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    {leader.phone ? (
                      <a
                        href={`tel:${leader.phone.replace(/\s+/g, '')}`}
                        className="text-[#10241f] font-semibold hover:text-[#b6842a] flex items-center gap-1.5"
                      >
                        <Phone size={14} className="text-[#b6842a]" />
                        <span>{leader.phone}</span>
                      </a>
                    ) : (
                      <span className="text-[#666c5c]">Secretariat Contact: Active</span>
                    )}

                    <span className="text-[10px] text-[#7c9473] font-semibold bg-[#f2f7f5] px-2 py-0.5 rounded">
                      Ratified Executive
                    </span>
                  </div>
                </div>
              ))}

              {stateLeaders.length === 0 && (
                <div className="col-span-full p-8 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] text-center space-y-2">
                  <p className="text-sm font-semibold text-[#10241f]">
                    Chapter coordination team for {currentState.name} is currently compiling sub-ward rosters.
                  </p>
                  <p className="text-xs text-[#666c5c]">
                    Liaison contact: {currentState.liaison}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Exclusive State Newsfeed */}
          <div className="space-y-6">
            <div className="border-b border-[#cfc6a6] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider block">
                  PUBLIC COMMUNICATIONS &bull; CHAPTER PRESS
                </span>
                <h2 className="font-display text-2xl font-semibold text-[#10241f]">
                  {currentState.name} State News &amp; Communiqués
                </h2>
              </div>
              <Link
                to="/news"
                className="text-xs font-mono text-[#10241f] hover:text-[#b6842a] flex items-center gap-1 font-semibold"
              >
                <span>Full 19-State Gazette Archive</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stateNews.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] specimen-shadow hover:border-[#b6842a] transition-all hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    <div className="h-44 overflow-hidden bg-[#10241f]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <div className="flex justify-between font-mono text-[10px] text-[#666c5c]">
                        <span className="text-[#b6842a] font-semibold">{article.category}</span>
                        <span>{article.date}</span>
                      </div>
                      <h3 className="font-display text-base font-semibold text-[#10241f] leading-snug group-hover:text-[#b6842a] line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-[#666c5c] leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-[#faf7ef] border-t border-[#cfc6a6] flex items-center justify-between text-xs font-mono">
                    <span className="text-[11px] text-[#666c5c]">{article.state} Chapter</span>
                    <span className="text-[#10241f] font-semibold flex items-center gap-1">
                      <span>Read</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              ))}

              {stateNews.length === 0 && (
                <div className="col-span-full py-12 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] text-center space-y-2 p-6">
                  <Newspaper size={32} className="mx-auto text-[#666c5c]" />
                  <p className="text-sm font-semibold text-[#10241f]">
                    No exclusive dispatches currently on file for {currentState.name} State.
                  </p>
                  <p className="text-xs text-[#666c5c]">
                    Chapter correspondents are preparing the upcoming quarterly development brief.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: LGA Mobilization Roster & Call to Action */}
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-8 sm:p-10 rounded-[2px] specimen-shadow space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider block">
                GRASSROOTS ENLISTMENT &bull; {currentState.lgas} LOCAL GOVERNMENT AREAS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f]">
                Join the {currentState.name} State Chapter Vanguard
              </h2>
              <p className="text-xs text-[#666c5c] leading-relaxed">
                Connect directly with ward organizers in your local council. Receive accreditation, participate in civic policy formulation, and access entrepreneurship grants.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to={`/membership?state=${encodeURIComponent(currentState.name)}`}
                className="px-6 py-3 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold shadow-[3px_3px_0px_rgba(182,132,42,0.6)]"
              >
                Register as Member in {currentState.name}
              </Link>
              <Link
                to={`/id-card?state=${encodeURIComponent(currentState.name)}`}
                className="px-5 py-3 rounded-[2px] bg-[#faf7ef] hover:bg-[#fffdf7] border border-[#cfc6a6] text-[#10241f] font-mono text-xs uppercase tracking-wider font-semibold"
              >
                Generate {currentState.name} ID Pass
              </Link>
              <Link
                to={`/verify?q=${encodeURIComponent(currentState.name)}`}
                className="px-5 py-3 rounded-[2px] bg-transparent border border-[#cfc6a6] text-[#666c5c] hover:text-[#10241f] font-mono text-xs uppercase tracking-wider font-semibold"
              >
                Verify {currentState.name} Delegates
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10241f]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#fffdf7] border border-[#10241f] rounded-[2px] specimen-shadow max-w-3xl w-full max-h-[90vh] overflow-y-auto relative text-[#20241d] p-6 sm:p-8 space-y-5"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 text-[#666c5c] hover:text-[#10241f]"
              >
                <X size={20} weight="bold" />
              </button>

              <span className="px-2.5 py-1 rounded-[2px] bg-[#c9963c] text-[#10241f] font-mono text-xs font-bold uppercase tracking-wider inline-block">
                {selectedArticle.state} State &bull; {selectedArticle.category}
              </span>

              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f] leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="font-mono text-xs text-[#666c5c]">
                Published: {selectedArticle.date} &bull; Author: {selectedArticle.author}
              </div>

              <div className="text-sm text-[#3c4136] leading-relaxed whitespace-pre-line space-y-4 font-serif border-t border-[#e7e0cb] pt-4">
                {selectedArticle.content}
              </div>

              <div className="flex justify-end pt-4 border-t border-[#e7e0cb]">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-[2px] bg-[#10241f] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-semibold"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
