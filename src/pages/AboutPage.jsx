import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  UsersThree,
  GraduationCap,
  Briefcase,
  Scales,
  Lightbulb,
  HeartStraight,
  ShieldCheck,
  Scroll,
  MapPin,
  CheckCircle,
  ArrowRight
} from '@phosphor-icons/react'

export default function AboutPage() {
  const missionDirectives = [
    {
      code: 'DIR-01',
      title: 'Leadership Mentorship & Capacity',
      desc: 'Develop young leaders through structured mentorship, masterclasses, and hands-on governance exposure prior to holding public office.',
      icon: UsersThree
    },
    {
      code: 'DIR-02',
      title: 'Human Capital & Education',
      desc: 'Promote technical education, digital competencies, professional certifications, and competitive skill acquisition for the modern economy.',
      icon: GraduationCap
    },
    {
      code: 'DIR-03',
      title: 'Cross-State Youth Connectivity',
      desc: 'Connect young people across states, professions, faiths, and communities from Kwara to Borno to build lasting alliances.',
      icon: MapPin
    },
    {
      code: 'DIR-04',
      title: 'Entrepreneurship & Self-Reliance',
      desc: 'Encourage enterprise creation and technological innovation as tangible pathways to sustainable youth employment and regional independence.',
      icon: Briefcase
    },
    {
      code: 'DIR-05',
      title: 'Civic Affairs & Public Policy',
      desc: 'Channel youth intellect into formal policy dialogues, legislative drafting reviews, and constructive community development.',
      icon: Scales
    },
    {
      code: 'DIR-06',
      title: 'Women’s Leadership & Inclusion',
      desc: 'Build dedicated institutional frameworks for young women to take front-row seats in business, technology, policy, and party governance.',
      icon: HeartStraight
    },
    {
      code: 'DIR-07',
      title: 'Regional Unity & Collaboration',
      desc: 'Transform Northern diversity into a catalyst for progress, mutual trust, and national solidarity rather than political division.',
      icon: ShieldCheck
    },
    {
      code: 'DIR-08',
      title: 'Culture of Service Over Partisanship',
      desc: 'Champion a culture of civic responsibility, public accountability, and long-term nation-building rather than ephemeral election-cycle mobilization.',
      icon: Scroll
    }
  ]

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="eyebrow text-[#c9963c]">CONSTITUTIONAL FOUNDATION &bull; CHARTER 2026</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium mt-2 leading-tight">
            Why ANYV Was Created
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            Building a credible platform for Northern youths to connect, grow, and lead across 19 states and the FCT.
          </p>
        </div>
      </section>

      {/* Main Founding Document */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Article 1 */}
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-8 sm:p-10 rounded-[2px] specimen-shadow space-y-4">
            <div className="font-mono text-xs text-[#b6842a] uppercase tracking-wider pb-2 border-b border-[#e7e0cb]">
              SECTION I &bull; THE REGIONAL IMPERATIVE
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f]">
              Northern Youths as Active Architects, Not Observers
            </h2>
            <div className="text-sm text-[#3c4136] space-y-3 leading-relaxed">
              <p>
                Northern Nigeria has one of the largest and most dynamic youth populations in Africa. Across the region are young people with remarkable ideas, talents, professional expertise, entrepreneurial ambition, and a strong desire to contribute to society.
              </p>
              <p>
                Yet, too often, these young people operate separately—with limited opportunities to connect across states, exchange ideas, access mentorship, develop leadership capacity, and participate meaningfully in decisions that affect their communities.
              </p>
              <p className="font-medium text-[#10241f] border-l-2 border-[#b6842a] pl-4 py-1 italic">
                &ldquo;The Atiku Northern Youth Vanguard (ANYV) was created to help change that. ANYV emerged from a simple conviction: Northern youths must become active participants in shaping the future of Northern Nigeria and Nigeria as a whole.&rdquo;
              </p>
            </div>
          </div>

          {/* Article 2: Beyond Politics */}
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-8 sm:p-10 rounded-[2px] specimen-shadow space-y-4">
            <div className="font-mono text-xs text-[#b6842a] uppercase tracking-wider pb-2 border-b border-[#e7e0cb]">
              SECTION II &bull; BEYOND TRANSIENT POLITICS
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f]">
              Continuous Engagement vs. Election-Cycle Mobilization
            </h2>
            <div className="text-sm text-[#3c4136] space-y-3 leading-relaxed">
              <p>
                While ANYV emerged in the context of the 2027 political project of Alhaji Atiku Abubakar, our broader objective is youth development and meaningful civic participation.
              </p>
              <p>
                We do not believe that young people should be mobilised only during elections and forgotten afterwards. Youth engagement should be continuous.
              </p>
              <p>
                It should involve mentorship, leadership development, education, innovation, entrepreneurship, policy conversations, community development, and the creation of networks that remain useful beyond any single political cycle.
              </p>
              <p className="font-mono text-xs text-[#7c9473] font-semibold pt-2">
                ANYV therefore seeks to contribute to the emergence of a generation of Northern youths who are informed, connected, skilled, responsible, and prepared to lead.
              </p>
            </div>
          </div>

          {/* Article 3: Connecting the North */}
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-8 sm:p-10 rounded-[2px] specimen-shadow space-y-4">
            <div className="font-mono text-xs text-[#b6842a] uppercase tracking-wider pb-2 border-b border-[#e7e0cb]">
              SECTION III &bull; REGIONAL DIVERSITY &amp; UNITY
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f]">
              Connecting the North &bull; From Plateau to Borno
            </h2>
            <div className="text-sm text-[#3c4136] space-y-3 leading-relaxed">
              <p>
                Northern Nigeria is diverse. Its states, communities, cultures, languages, faiths, and professional communities represent different experiences and perspectives. ANYV sees this diversity as an opportunity for collaboration rather than division.
              </p>
              <p>
                Our goal is to build bridges. From Plateau to Gombe, from Kwara to Kebbi, from Kaduna to Borno, from Niger to Adamawa and across the entire Northern region, we want young people to discover one another, exchange ideas, and build relationships that can produce lasting impact.
              </p>
            </div>
          </div>

          {/* Article 4: Leaders, Not Followers */}
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-8 sm:p-10 rounded-[2px] specimen-shadow space-y-4">
            <div className="font-mono text-xs text-[#b6842a] uppercase tracking-wider pb-2 border-b border-[#e7e0cb]">
              SECTION IV &bull; LEADERSHIP ETHOS
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f]">
              Developing Leaders, Not Followers
            </h2>
            <div className="text-sm text-[#3c4136] space-y-3 leading-relaxed">
              <p>
                ANYV believes that leadership development must begin before young people occupy public office. Leadership is built through knowledge, experience, mentorship, service, responsibility, and exposure.
              </p>
              <p>
                We therefore seek to encourage young people to develop the capacity to lead in government, business, civil society, technology, academia, professional institutions, and their communities.
              </p>
              <p className="font-mono text-xs text-[#10241f] font-semibold">
                &ldquo;Our ambition is not simply to produce more young participants. It is to help develop more young people who are prepared to take responsibility.&rdquo;
              </p>
            </div>
          </div>

          {/* Article 5: Creating Opportunities & People */}
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-8 sm:p-10 rounded-[2px] specimen-shadow space-y-4">
            <div className="font-mono text-xs text-[#b6842a] uppercase tracking-wider pb-2 border-b border-[#e7e0cb]">
              SECTION V &bull; HUMAN CAPITAL &amp; COMMITMENT
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#10241f]">
              Our Bigger Picture: It Is About People
            </h2>
            <div className="text-sm text-[#3c4136] space-y-3 leading-relaxed">
              <p>
                ANYV is ultimately about people:
              </p>
              <ul className="space-y-1.5 pl-4 text-xs font-mono text-[#10241f]">
                <li>&bull; The young Northern Nigerian who has an idea but needs mentorship</li>
                <li>&bull; The graduate who needs an opportunity to develop professionally</li>
                <li>&bull; The entrepreneur looking for a network and venture capital</li>
                <li>&bull; The young woman who wants a stronger voice in policy and leadership</li>
                <li>&bull; The community volunteer who wants to scale their local impact</li>
                <li>&bull; The emerging leader who believes public service is about responsibility, not privilege</li>
              </ul>
              <p className="pt-2">
                We believe the strength of the platform will not be measured by the number of names on a list, but by the quality of people it connects, the opportunities it creates, and the impact its members make in their communities.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission Dual Tablets */}
      <section className="py-20 bg-[#f1ecde] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Vision */}
            <div className="lg:col-span-5 bg-[#10241f] text-[#f1ecde] p-8 border border-[#10241f] rounded-[2px] shadow-[4px_4px_0px_rgba(182,132,42,0.4)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#e3c375] uppercase tracking-widest block mb-3">OUR VISION</span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#fffdf7] font-semibold mb-4 leading-snug">
                  A Northern Youth Generation Ready to Lead, Innovate and Build
                </h3>
                <p className="text-sm text-[#aebf9e] leading-relaxed font-light mb-6">
                  We envision a Northern Nigeria where young people are not merely spectators in the affairs of society, but active participants, innovators, community builders, and leaders shaping the region’s future.
                </p>
                <div className="border-t border-[#1f3f37] pt-4 text-xs font-serif italic text-[#fffdf7]">
                  &ldquo;To inspire, connect and prepare Northern youths to rise, lead and build a more prosperous, peaceful and united region.&rdquo;
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-[#1f3f37] font-mono text-[10px] text-[#7c9473]">
                19 NORTHERN STATES &bull; CONSTITUTIONAL VISION
              </div>
            </div>

            {/* Mission */}
            <div className="lg:col-span-7 bg-[#fffdf7] border border-[#cfc6a6] p-8 rounded-[2px] specimen-shadow flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#b6842a] uppercase tracking-widest block mb-3">OUR MISSION</span>
                <h3 className="font-display text-2xl font-semibold text-[#10241f] mb-3">
                  The Mission Mandate
                </h3>
                <p className="text-xs text-[#666c5c] leading-relaxed mb-6">
                  The mission of the Atiku Northern Youth Vanguard (ANYV) is to create a credible platform through which young people across Northern Nigeria can connect, learn, collaborate, and contribute to the development of their communities and the region.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#3c4136]">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} weight="fill" className="text-[#7c9473] shrink-0 mt-0.5" />
                    <span>Mentorship, capacity building, and leadership opportunities.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} weight="fill" className="text-[#7c9473] shrink-0 mt-0.5" />
                    <span>Human capital development through skills, education, and innovation.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} weight="fill" className="text-[#7c9473] shrink-0 mt-0.5" />
                    <span>Cross-state networks spanning sectors and communities.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} weight="fill" className="text-[#7c9473] shrink-0 mt-0.5" />
                    <span>Entrepreneurship for economic self-reliance.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} weight="fill" className="text-[#7c9473] shrink-0 mt-0.5" />
                    <span>Youth participation in public policy and governance.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} weight="fill" className="text-[#7c9473] shrink-0 mt-0.5" />
                    <span>Executive opportunities for young women.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#e7e0cb] font-mono text-[10px] text-[#666c5c] flex items-center justify-between">
                <span>RATIFIED BY NATIONAL SECRETARIAT</span>
                <span className="text-[#10241f] font-semibold">100% REGIONAL INCLUSION</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8 Directives Full Grid */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow text-[#b6842a]">ACTIONABLE MANDATES</span>
            <h2 className="font-display text-3xl font-semibold text-[#10241f] mt-1">
              The 8 Strategic Directives
            </h2>
            <p className="text-sm text-[#666c5c] mt-2">
              Transforming Northern youth capacity into measured community transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionDirectives.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-[#b6842a] uppercase font-semibold">
                        {item.code}
                      </span>
                      <div className="w-8 h-8 rounded-[2px] bg-[#f2f7f5] border border-[#7c9473]/30 text-[#1f3f37] flex items-center justify-center">
                        <IconComp size={18} weight="duotone" />
                      </div>
                    </div>
                    <h3 className="font-display text-base font-semibold text-[#10241f] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#666c5c] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#e7e0cb] font-mono text-[10px] text-[#7c9473]">
                    &bull; Codified Mandate
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-[#10241f] text-[#f1ecde]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h3 className="font-display text-2xl sm:text-3xl text-[#fffdf7] font-semibold">
            Ready to be an active participant in Northern Nigeria’s future?
          </h3>
          <p className="text-xs text-[#aebf9e] max-w-lg mx-auto">
            Enlist with the Vanguard today. Receive your digital member credentials and connect with your state coordinator.
          </p>
          <div className="pt-2">
            <Link
              to="/membership"
              className="px-6 py-3 rounded-[2px] bg-[#b6842a] hover:bg-[#c9963c] text-[#10241f] font-mono text-xs uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2"
            >
              <span>Accredit As A Member</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
