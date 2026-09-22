import { motion } from 'framer-motion'
import { programsData } from '../data/programsData'
import { Sparkle, ArrowRight, CaretRight } from '@phosphor-icons/react'

export default function ProgramsSection({ onApplyClick }) {
  return (
    <section id="programs" className="py-20 bg-[#f1ecde] border-b border-[#cfc6a6]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-[#b6842a]">ACTION VEHICLES &bull; 2026&ndash;2027</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#10241f] mt-1">
            Programs &amp; Development Initiatives
          </h2>
          <p className="text-sm text-[#666c5c] mt-2 leading-relaxed">
            Tangible platforms providing mentorship, seed venture funding, public policy fellowships, and leadership incubation.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programsData.map((prg, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between specimen-shadow hover:border-[#b6842a] transition-all"
            >
              <div>
                {/* Program Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e7e0cb]">
                  <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider font-semibold">
                    {prg.code} &bull; {prg.category}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-[2px] bg-[#f2f7f5] text-[#1f3f37] border border-[#7c9473]/40 font-medium">
                    {prg.status}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#10241f] mb-1.5 leading-snug">
                  {prg.title}
                </h3>
                <p className="font-mono text-xs text-[#7c9473] font-medium mb-4">
                  {prg.tagline}
                </p>

                <p className="text-xs text-[#666c5c] leading-relaxed mb-6">
                  {prg.desc}
                </p>
              </div>

              <div>
                {/* Metadata Strip */}
                <div className="grid grid-cols-2 gap-3 py-3 border-t border-b border-[#e7e0cb] mb-5 text-xs font-mono">
                  <div>
                    <span className="text-[#666c5c] block text-[9px] uppercase">COHORT CAPACITY</span>
                    <span className="text-[#10241f] font-semibold">{prg.cohortSize}</span>
                  </div>
                  <div>
                    <span className="text-[#666c5c] block text-[9px] uppercase">ENGAGEMENT CYCLE</span>
                    <span className="text-[#10241f] font-semibold">{prg.timeline}</span>
                  </div>
                </div>

                <button
                  onClick={onApplyClick}
                  className="w-full py-2.5 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-semibold border border-[#10241f] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Apply for Fellow / Grant Roster</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
