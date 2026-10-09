import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Scroll, 
  Newspaper, 
  Clock, 
  Sparkle, 
  ArrowRight, 
  Bell, 
  MapPin, 
  MagnifyingGlass, 
  Eye, 
  CalendarBlank, 
  X, 
  ShareNetwork, 
  CheckCircle, 
  EnvelopeSimple,
  Images,
  CaretLeft,
  CaretRight 
} from '@phosphor-icons/react'
import SEO from '../components/SEO'
import { fetchStates, fetchNews, subscribeNewsletterApi, NEWS_CATEGORIES } from '../services/api'

export default function NewsPage() {
  const [selectedState, setSelectedState] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [searchQuery, setSearchQuery] = useState('')
  const [articles, setArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [states, setStates] = useState([])

  // Subscription state
  const [subEmail, setSubEmail] = useState('')
  const [subState, setSubState] = useState('All 19 States')
  const [subSuccess, setSubSuccess] = useState(false)

  // Load states from API
  useEffect(() => {
    let isMounted = true
    fetchStates()
      .then(apiStates => {
        if (isMounted && Array.isArray(apiStates) && apiStates.length > 0) {
          setStates(apiStates)
        }
      })
      .catch(err => console.warn('NewsPage states API notice:', err))
    return () => { isMounted = false }
  }, [])

  // Load articles (with backend sync attempt)
  useEffect(() => {
    let isMounted = true
    setIsLoading(true)
    fetchNews({ state: selectedState, category: selectedCategory })
      .then(res => {
        if (isMounted && Array.isArray(res)) setArticles(res)
      })
      .catch(err => console.warn('NewsPage fetch news notice:', err))
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })
    return () => { isMounted = false }
  }, [selectedState, selectedCategory])

  // Filter articles
  const filteredArticles = articles.filter(a => {
    const matchesState = selectedState === 'All' || 
                         (a.state && a.state.toLowerCase() === selectedState.toLowerCase())
    const matchesCategory = selectedCategory === 'All Categories' || a.category === selectedCategory
    const matchesSearch = !searchQuery.trim() || 
                          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.state?.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesState && matchesCategory && matchesSearch
  })

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!subEmail.trim()) return
    setSubSuccess(true)
    try {
      await subscribeNewsletterApi(subEmail, subState)
    } catch (e) {
      // Offline fallback handled
    }
  }

  return (
    <div className="space-y-0">
      <SEO
        title="Official Gazette & 19 Northern States Newsfeed"
        description="Live news dispatches, regional communiqués, policy white papers, and grassroots chapter updates across all 19 Northern States and the FCT for Atiku Northern Youth Vanguard (ANYV)."
        keywords="ANYV news, Northern Nigeria youth news, state chapter news ANYV, Bauchi ANYV news, Benue ANYV news, Katsina ANYV news, Arewa youth gazette, Atiku Youth Vanguard press releases"
      />

      {/* Header */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9963c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="eyebrow text-[#c9963c]">NATIONAL PRESS BUREAU &bull; 19 STATES GAZETTE</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-[2px] bg-[#1f3f37] text-[#aebf9e] border border-[#2c5347]">
              LIVE UPDATES
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium leading-tight max-w-3xl">
            Official Gazette &amp; State Newsfeed
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            Verified press dispatches, executive communiqués, youth economic summits, and state chapter bulletins across Northern Nigeria.
          </p>
        </div>
      </section>

      {/* State Filter & Search Navigation Bar */}
      <section className="sticky top-20 z-30 bg-[#fffdf7] border-b border-[#cfc6a6] shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-6 space-y-3">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlass size={16} className="absolute left-3.5 top-3 text-[#666c5c]" />
              <input
                type="text"
                placeholder="Search headlines, communiqués, keywords..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] text-xs focus:outline-none focus:border-[#b6842a]"
              />
            </div>

            {/* Quick State Selector Dropdown & Category */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[#10241f] font-mono">
                <MapPin size={14} className="text-[#b6842a]" />
                <span className="hidden sm:inline">State:</span>
              </div>
              <select
                value={selectedState}
                onChange={e => setSelectedState(e.target.value)}
                className="px-3 py-2 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] text-xs font-mono text-[#10241f] focus:outline-none focus:border-[#b6842a] cursor-pointer"
              >
                <option value="All">All 19 States &amp; National</option>
                <option value="National">National Communiqués Only</option>
                {states.map((s, idx) => (
                  <option key={idx} value={s.name}>{s.name} State</option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="px-3 py-2 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] text-xs font-mono text-[#10241f] focus:outline-none focus:border-[#b6842a] cursor-pointer"
              >
                {NEWS_CATEGORIES.map((c, idx) => (
                  <option key={idx} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 19 Northern States Quick Pills Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin text-xs">
            <span className="font-mono text-[10px] text-[#666c5c] uppercase shrink-0 mr-1">
              Select State:
            </span>
            <button
              onClick={() => setSelectedState('All')}
              className={`px-3 py-1 rounded-[2px] font-mono text-xs transition-all whitespace-nowrap ${
                selectedState === 'All'
                  ? 'bg-[#10241f] text-[#f1ecde] font-semibold shadow-[2px_2px_0px_rgba(182,132,42,0.6)]'
                  : 'bg-[#faf7ef] text-[#3c4136] border border-[#cfc6a6] hover:border-[#b6842a]'
              }`}
            >
              All States
            </button>
            {states.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedState(s.name)}
                className={`px-2.5 py-1 rounded-[2px] font-mono text-xs transition-all whitespace-nowrap flex items-center gap-1 ${
                  selectedState.toLowerCase() === s.name.toLowerCase()
                    ? 'bg-[#10241f] text-[#f1ecde] font-semibold shadow-[2px_2px_0px_rgba(182,132,42,0.6)]'
                    : 'bg-[#faf7ef] text-[#3c4136] border border-[#cfc6a6] hover:border-[#b6842a]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9963c]" />
                {s.name}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Main Articles Grid Section */}
      <section className="py-12 sm:py-16 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          
          {/* Active Filter Title */}
          <div className="flex items-center justify-between border-b border-[#cfc6a6] pb-3">
            <div>
              <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block">
                {selectedState === 'All' ? 'REGIONAL DIGEST' : `${selectedState.toUpperCase()} STATE CHAPTER BULLETINS`}
              </span>
              <h2 className="font-display text-2xl font-semibold text-[#10241f]">
                {selectedState === 'All' ? 'Recent Dispatches Across Northern Nigeria' : `News & Communiqués for ${selectedState} State`}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#666c5c]">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'Dispatch' : 'Dispatches'}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => {
              const cardImages = Array.isArray(article.images) && article.images.length > 0 
                ? article.images 
                : [article.image];

              return (
                <article
                  key={article.id}
                  onClick={() => {
                    setActiveArticle(article);
                    setActiveImageIndex(0);
                  }}
                  className="bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] specimen-shadow hover:border-[#b6842a] transition-all hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Article Banner Image */}
                    <div className="h-48 overflow-hidden bg-[#10241f] relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2 py-0.5 rounded-[2px] bg-[#10241f]/90 text-[#f1ecde] font-mono text-[10px] font-semibold uppercase tracking-wider border border-[#1f3f37] flex items-center gap-1 backdrop-blur-sm">
                          <MapPin size={11} className="text-[#c9963c]" />
                          {article.state} Chapter
                        </span>
                      </div>

                      {/* Multiple Photos Badge */}
                      {cardImages.length > 1 && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-[2px] bg-[#10241f]/90 text-[#e3c375] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#1f3f37] backdrop-blur-sm shadow">
                          <Images size={12} weight="fill" />
                          <span>{cardImages.length} Photos</span>
                        </div>
                      )}
                    </div>

                    {/* Additional Photos Mini Strip */}
                    {cardImages.length > 1 && (
                      <div className="bg-[#10241f] px-4 py-1.5 border-b border-[#1f3f37] flex items-center gap-1.5 overflow-hidden">
                        <span className="text-[9px] font-mono text-[#aebf9e] uppercase tracking-wider">Gallery:</span>
                        {cardImages.slice(0, 4).map((img, i) => (
                          <img key={i} src={img} alt="" className="w-5 h-5 rounded-[1px] object-cover border border-[#1f3f37] opacity-80" />
                        ))}
                        {cardImages.length > 4 && (
                          <span className="text-[9px] font-mono text-[#e3c375]">+{cardImages.length - 4}</span>
                        )}
                      </div>
                    )}

                    {/* Body Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#666c5c]">
                        <span className="text-[#b6842a] font-semibold">{article.category}</span>
                        <span className="flex items-center gap-1">
                          <CalendarBlank size={12} />
                          {article.date}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-semibold text-[#10241f] leading-snug group-hover:text-[#b6842a] transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-xs text-[#666c5c] leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Meta */}
                  <div className="px-6 py-3.5 bg-[#faf7ef] border-t border-[#cfc6a6] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#666c5c] text-[11px] truncate max-w-[160px]">
                      {article.author}
                    </span>
                    <span className="text-[#10241f] font-semibold flex items-center gap-1 group-hover:text-[#b6842a]">
                      <span>Read Record</span>
                      <ArrowRight size={13} weight="bold" />
                    </span>
                  </div>
                </article>
              );
            })}

            {filteredArticles.length === 0 && (
              <div className="col-span-full py-16 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] text-center space-y-3 p-8">
                <Newspaper size={36} className="mx-auto text-[#666c5c]" />
                <h3 className="font-display text-xl font-semibold text-[#10241f]">
                  No news dispatches found for this selection
                </h3>
                <p className="text-xs text-[#666c5c] max-w-md mx-auto">
                  Try clearing your search query or selecting "All States" to view the regional news archive.
                </p>
                <button
                  onClick={() => { setSelectedState('All'); setSearchQuery(''); setSelectedCategory('All Categories'); }}
                  className="px-4 py-2 rounded-[2px] bg-[#10241f] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Interactive Article Detail Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10241f]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#fffdf7] border border-[#10241f] rounded-[2px] specimen-shadow max-w-3xl w-full max-h-[90vh] overflow-y-auto relative text-[#20241d]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#10241f]/80 hover:bg-[#10241f] text-[#f1ecde] flex items-center justify-center transition-colors"
                aria-label="Close article"
              >
                <X size={18} weight="bold" />
              </button>

              {/* Modal Image Carousel / Multi-Picture Gallery */}
              {(() => {
                const articleImages = Array.isArray(activeArticle.images) && activeArticle.images.length > 0 
                  ? activeArticle.images 
                  : [activeArticle.image];
                const currentPhoto = articleImages[activeImageIndex] || articleImages[0];

                return (
                  <div>
                    <div className="h-72 sm:h-96 w-full overflow-hidden bg-[#10241f] relative group">
                      <img
                        src={currentPhoto}
                        alt={activeArticle.title}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10241f] via-transparent to-transparent opacity-80" />

                      {/* Prev / Next controls if multiple photos */}
                      {articleImages.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageIndex(prev => (prev === 0 ? articleImages.length - 1 : prev - 1));
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition backdrop-blur-sm shadow-lg z-10"
                            aria-label="Previous photo"
                          >
                            <CaretLeft size={20} weight="bold" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageIndex(prev => (prev === articleImages.length - 1 ? 0 : prev + 1));
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition backdrop-blur-sm shadow-lg z-10"
                            aria-label="Next photo"
                          >
                            <CaretRight size={20} weight="bold" />
                          </button>

                          <div className="absolute top-4 left-4 px-2.5 py-1 rounded-[2px] bg-black/70 text-[#e3c375] font-mono text-[10px] font-bold border border-black/40 flex items-center gap-1.5 backdrop-blur-md">
                            <Images size={13} weight="fill" />
                            <span>PHOTO {activeImageIndex + 1} OF {articleImages.length}</span>
                          </div>
                        </>
                      )}

                      <div className="absolute bottom-4 left-6 right-6">
                        <span className="px-2.5 py-1 rounded-[2px] bg-[#c9963c] text-[#10241f] font-mono text-xs font-bold uppercase tracking-wider shadow">
                          {activeArticle.state} State Chapter &bull; {activeArticle.category}
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail gallery strip */}
                    {articleImages.length > 1 && (
                      <div className="bg-[#10241f] px-6 py-2.5 border-b border-[#1f3f37] flex items-center gap-2 overflow-x-auto">
                        <span className="text-[10px] font-mono text-[#aebf9e] uppercase font-bold tracking-wider whitespace-nowrap mr-1">
                          Press Photos ({articleImages.length}):
                        </span>
                        {articleImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`relative w-14 h-11 rounded-[2px] overflow-hidden border-2 transition shrink-0 ${
                              activeImageIndex === idx ? 'border-[#c9963c] scale-105 shadow-md' : 'border-[#1f3f37] opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#666c5c] pb-3 border-b border-[#e7e0cb] gap-2">
                  <div className="flex items-center gap-2">
                    <CalendarBlank size={14} className="text-[#b6842a]" />
                    <span>{activeArticle.date}</span>
                    <span>&bull;</span>
                    <span>{activeArticle.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold text-[#10241f]">
                    <Eye size={14} className="text-[#b6842a]" />
                    <span>{activeArticle.views} Readers</span>
                  </div>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f] leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="font-mono text-xs text-[#b6842a] uppercase tracking-wider">
                  OFFICIAL DISPATCH FROM: {activeArticle.author}
                </div>

                <div className="text-sm text-[#3c4136] leading-relaxed whitespace-pre-line space-y-4 font-serif">
                  {activeArticle.content}
                </div>

                {/* State Contact / Action Desk */}
                <div className="p-4 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
                  <div>
                    <span className="text-[#b6842a] block text-[10px] uppercase">OFFICIAL INQUIRIES</span>
                    <span className="font-semibold text-[#10241f]">ANYV {activeArticle.state} State Directorate</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to="/state-dashboard"
                      className="px-3 py-1.5 bg-[#10241f] text-[#f1ecde] rounded-[2px] hover:bg-[#16302b] transition-colors"
                    >
                      View State Dashboard
                    </Link>
                    <Link
                      to="/membership"
                      className="px-3 py-1.5 bg-transparent border border-[#10241f] text-[#10241f] rounded-[2px] hover:bg-[#10241f] hover:text-[#fffdf7] transition-colors"
                    >
                      Enlist in Chapter
                    </Link>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 rounded-[2px] bg-[#10241f] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-semibold"
                  >
                    Close Gazette Reader
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Subscription Box Section */}
      <section className="py-16 bg-[#fffdf7] border-b border-[#cfc6a6]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#faf7ef] border border-[#cfc6a6] p-8 sm:p-12 rounded-[2px] specimen-shadow space-y-6">
            <div className="max-w-xl space-y-2">
              <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider block">
                NEWSLETTER &bull; INSTANT DISPATCH ALERTS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f]">
                Subscribe for Verified State Chapter Bulletins
              </h2>
              <p className="text-xs text-[#666c5c] leading-relaxed">
                Receive official communiqués, youth summit invitations, and chapter resolutions directly into your inbox. Select your state of interest:
              </p>
            </div>

            {subSuccess ? (
              <div className="p-5 bg-[#f5f8f3] border border-[#7c9473]/40 rounded-[2px] text-xs flex items-center gap-3 text-[#10241f]">
                <CheckCircle size={22} weight="fill" className="text-[#7c9473] shrink-0" />
                <div>
                  <strong className="block font-display text-sm">Accredited to Gazette Distribution!</strong>
                  <span>You will receive subsequent regional dispatches for {subState}.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-6">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={subEmail}
                      onChange={e => setSubEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] text-xs focus:outline-none focus:border-[#b6842a]"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <select
                      value={subState}
                      onChange={e => setSubState(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] text-xs font-mono text-[#10241f] focus:outline-none focus:border-[#b6842a] cursor-pointer"
                    >
                      <option value="All 19 States">All 19 Northern States</option>
                      {states.map((s, idx) => (
                        <option key={idx} value={s.name}>{s.name} State</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold border border-[#10241f] transition-all hover:shadow-[2px_2px_0px_rgba(182,132,42,0.6)]"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-[#666c5c] block">
                  Official dispatches strictly adhere to the ANYV communication code. Zero spam guarantee.
                </span>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
