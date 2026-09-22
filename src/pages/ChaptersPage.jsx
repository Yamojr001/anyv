import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, MagnifyingGlass, CheckCircle, ArrowRight } from '@phosphor-icons/react'

export default function ChaptersPage() {
  const [activeZone, setActiveZone] = useState('all')
  const [search, setSearch] = useState('')

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
            {filteredStates.map((state, idx) => (
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

                  <div className="mt-4 pt-3 border-t border-[#e7e0cb] space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#666c5c] text-[11px]">Local Govts:</span>
                      <span className="font-mono font-medium text-[#10241f]">{state.lgas} LGAs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666c5c] text-[11px]">Role:</span>
                      <span className="font-medium text-[#10241f]">{state.hub}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#e7e0cb]">
                  <Link
                    to="/membership"
                    className="w-full py-2 rounded-[2px] bg-[#f5f8f3] hover:bg-[#10241f] hover:text-[#fffdf7] text-[#10241f] text-xs font-mono uppercase tracking-wider font-semibold border border-[#cfc6a6] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Connect Chapter</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
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

    </div>
  )
}
