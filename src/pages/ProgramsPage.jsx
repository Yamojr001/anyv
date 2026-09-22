import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { programsData } from '../data/programsData'
import { ArrowRight, CheckCircle, Sparkle, CaretRight } from '@phosphor-icons/react'

export default function ProgramsPage() {
  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow text-[#c9963c]">ACTION INITIATIVES &bull; 2026&ndash;2027</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium mt-2 leading-tight">
            Programs &amp; Development Initiatives
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            Institutional frameworks connecting Northern youths with leadership mentorship, technology innovation, seed venture funding, and public policy fellowships.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {programsData.map((prg, idx) => (
            <div
              key={idx}
              className="bg-[#fffdf7] border border-[#cfc6a6] p-8 sm:p-10 rounded-[2px] specimen-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider font-semibold">
                    {prg.code} &bull; {prg.category}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-[2px] bg-[#f2f7f5] text-[#1f3f37] border border-[#7c9473]/40 font-medium">
                    {prg.status}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f]">
                  {prg.title}
                </h2>
                <p className="font-mono text-xs text-[#7c9473] font-medium">
                  {prg.tagline}
                </p>
                <p className="text-sm text-[#666c5c] leading-relaxed">
                  {prg.desc}
                </p>

                <div className="pt-2">
                  <h4 className="font-mono text-xs text-[#10241f] uppercase tracking-wider mb-2 font-semibold">
                    Core Learning &amp; Impact Modules:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3c4136]">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-[#7c9473] shrink-0" weight="fill" />
                      <span>Executive Mentorship with Senior Civil Servants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-[#7c9473] shrink-0" weight="fill" />
                      <span>Legislative &amp; Public Policy Drafting Clinics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-[#7c9473] shrink-0" weight="fill" />
                      <span>Venture Incubator &amp; Seed Grant Linkage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-[#7c9473] shrink-0" weight="fill" />
                      <span>Zonal Presentation at Annual Youth Congress</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Metadata Sidebar */}
              <div className="lg:col-span-4 bg-[#f5f8f3] border border-[#cfc6a6] p-6 rounded-[2px] space-y-4">
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block border-b border-[#cfc6a6] pb-2">
                  COHORT SPECIFICATIONS
                </span>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[#666c5c] block text-[10px] font-mono uppercase">TARGET COHORT</span>
                    <span className="font-semibold text-[#10241f]">{prg.cohortSize}</span>
                  </div>
                  <div>
                    <span className="text-[#666c5c] block text-[10px] font-mono uppercase">PROGRAM DURATION</span>
                    <span className="font-semibold text-[#10241f]">{prg.timeline}</span>
                  </div>
                  <div>
                    <span className="text-[#666c5c] block text-[10px] font-mono uppercase">GEOGRAPHIC ELIGIBILITY</span>
                    <span className="font-medium text-[#10241f]">19 Northern States &amp; FCT</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#cfc6a6]">
                  <Link
                    to="/membership"
                    className="w-full py-2.5 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-semibold border border-[#10241f] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Register for Cohort</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
