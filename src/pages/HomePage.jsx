import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CaretRight,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  UsersThree,
  GraduationCap,
  Briefcase,
  Scales,
  HeartStraight,
  ArrowUpRight,
  MagnifyingGlass,
  MapPin,
  Phone,
  IdentificationBadge,
  Question,
  CheckCircle,
  CaretDown,
  CaretUp,
  Tag,
  Buildings,
  ShareNetwork,
  IdentificationCard,
  Newspaper
} from '@phosphor-icons/react'
import { northernStates, stateChapterOfficials } from '../data/leadershipData'
import SEO from '../components/SEO'

export default function HomePage({ onOpenReg }) {
  const [activeZone, setActiveZone] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState(0)

  const getStateOfficials = (stateName) => {
    return stateChapterOfficials.filter(
      (o) => o.state.toLowerCase() === stateName.toLowerCase()
    )
  }

  const filteredStates = northernStates.filter((s) => {
    const matchesZone = activeZone === 'all' || s.zone.toLowerCase().replace('-', '') === activeZone
    const leaders = getStateOfficials(s.name)
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.hub.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leaders.some(
        (o) =>
          o.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (o.socials?.phone && o.socials.phone.includes(searchQuery))
      )
    return matchesZone && matchesSearch
  })

  const faqItems = [
    {
      q: 'What is the Atiku Northern Youth Vanguard (ANYV)?',
      a: 'The Atiku Northern Youth Vanguard (ANYV) is the official grassroots youth mobilization and civic leadership movement uniting progressive young citizens across the 19 Northern Nigerian States and the Federal Capital Territory (FCT). Founded on the democratic principles and visionary leadership of His Excellency Alhaji Atiku Abubakar, GCON (Wazirin Adamawa), ANYV mobilizes youth for good governance, economic enterprise, digital skills, and peaceful political participation.'
    },
    {
      q: 'Who are the official ANYV State Coordinators across Northern Nigeria?',
      a: 'Appointed state coordinators and secretaries include: Hon. Dr. Levi Aondohemba Orhii (Benue State Coordinator, 08035023507) with State Secretary Pius Monday; Hon. Babayo Musa (Bauchi State Coordinator, 08031844595) with State Secretary Zechariah Nehemiah (08036398658); Halliru Ibrahim Sk (Katsina State Coordinator, 08035337510); Saifullahi Sule Sanda (Zamfara State Coordinator, 07079220159); Jamilu Yusuf Musa (Jigawa State Coordinator, +2349018710083) with Deputy Rukayya Musa Muhammad and Secretary Hon. Sulaiman Uwaisu Idris; Smart Olaitan (Kwara State Coordinator, 07068995671); Adam Ustaz Ubaidullah (Kogi State Coordinator, 08140337306) with Assistant Salihu Sumaiya and Secretary Zakari Idozi; Comrade Nasiru Abdulhamid (Kaduna State Coordinator), alongside executive leaders across all other Northern state chapters.'
    },
    {
      q: 'How can Northern youths register and get their official ANYV Digital Membership Pass?',
      a: 'Membership registration is open to all Northern youths aged 18 to 40. Navigate to the Membership Accreditation Portal at atikunorthernyouthvanguard.com/membership, complete the 60-second verification form with your name, state of origin, LGA, and area of civic interest, and instantly generate your accredited digital membership pass complete with an official QR verification badge.'
    },
    {
      q: 'What are the core development programs and grants offered by ANYV?',
      a: 'ANYV executes four flagship initiatives: (1) Northern Youth Leadership Academy (NYLA) offering ethical governance and public administration fellowships; (2) Agro-Tech Incubator Grants supporting youth agripreneurs with seed venture funding; (3) Civic Participation & Voter Education mobilizing grassroots communities; and (4) Digital Skills and Technology Fellowships equipping young leaders for high-demand digital careers.'
    },
    {
      q: 'Which states and Local Government Areas (LGAs) are covered by ANYV?',
      a: 'ANYV has active chapter structures across all 19 Northern States and the FCT, covering 419 Local Government Areas: North-Central (Benue, Kogi, Kwara, Nasarawa, Niger, Plateau, FCT Abuja), North-East (Adamawa, Bauchi, Borno, Gombe, Taraba, Yobe), and North-West (Jigawa, Kaduna, Kano, Katsina, Kebbi, Sokoto, Zamfara).'
    },
    {
      q: 'How does ANYV promote youth political inclusion and representation?',
      a: 'ANYV advocates for youth representation across legislative and executive councils, mentorship for student union leaders (including SUG, NAUS, and NANS alumni), and grassroots mobilization to ensure young people take center stage in policy formulation, community development, and democratic decision-making.'
    }
  ]
  return (
    <div className="space-y-0">
      <SEO
        title="Official National Platform | Organise. Mobilise. Lead."
        description="Official digital portal of the Atiku Northern Youth Vanguard (ANYV). Uniting Northern Nigerian youths across 19 Northern states and the FCT into a continuous force for grassroots mobilization, civic leadership, youth inclusion, and national progress. Explore state coordinators, leadership registries, digital membership, and development programs."
        keywords="atikunorthernyouthvanguard.com, www.atikunorthernyouthvanguard.com, Atiku Northern Youth Vanguard, ANYV, anyv.ng, Atiku Abubakar, Atiku Abubakar 2027, Atiku Youth Vanguard, Northern Youth Vanguard, Arewa Youths for Atiku, Atiku Campaign Organisation, Wazirin Adamawa, Hon. Dr. Levi Aondohemba Orhii, Hon. Babayo Musa, Zechariah Nehemiah, Adam Ustaz Ubaidullah, Salihu Sumaiya, Zakari Idozi, Smart Olaitan, Idris Usman Mohammed, Jejelola Abdulganiyu O., Halliru Ibrahim Sk, Abubakar Ibrahim Marke, Ahmad Abdulrazak Bakori, Saifullahi Sule Sanda, Hidayatu Lawal, Samaila Sani Janbako, Jamilu Yusuf Musa, Rukayya Musa Muhammad, Hon. Sulaiman Uwaisu Idris, Comrade Nasiru Abdulhamid, Gaddafi Adamu, Veronica James, Engr. Salim Sharubutu Yusuf, Dr. Benjamin Maina, Nafiu Sani Gulumbe, Ibrahim Akibu Jaafaru, Zaharadeen Ismail Sabo, QS Salisu Adamu, Micah Musa, Samuel Christopher Daleng, Aisha Muhammad Kachalla, Kano ANYV, Kaduna ANYV, Katsina ANYV, Jigawa ANYV, Bauchi ANYV, Benue ANYV, Kogi ANYV, Kwara ANYV, Zamfara ANYV, Sokoto ANYV, Kebbi ANYV, Plateau ANYV, Taraba ANYV, Adamawa ANYV, Borno ANYV, Yobe ANYV, Gombe ANYV, Niger ANYV, Nasarawa ANYV, Abuja FCT ANYV"
      />
      
      {/* Hero Section — 5 Essentials Immediately Established */}
      <section className="relative overflow-hidden bg-[#10241f] text-[#f1ecde] py-16 lg:py-24 border-b border-[#1f3f37]">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#c9963c]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#7c9473]/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Immediate Narrative Answers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* WHO Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#1f3f37] border border-[#2c5347] text-[#e3c375] font-mono text-xs uppercase tracking-wider">
                <span className="font-bold text-[#b6842a]">WHO:</span>
                <span>Atiku Northern Youth Vanguard (ANYV)</span>
              </div>

              {/* WHAT & WHERE Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#fffdf7] font-medium leading-[1.1] tracking-tight">
                A youth-focused platform connecting young people across the 19 Northern States.
              </h1>

              {/* WHAT DOES IT DO Description */}
              <div className="bg-[#1f3f37]/40 border-l-2 border-[#b6842a] pl-4 py-1">
                <span className="font-mono text-[10px] text-[#c9963c] uppercase tracking-wider block font-semibold mb-1">
                  WHAT DOES IT DO?
                </span>
                <p className="text-[#aebf9e] text-sm sm:text-base leading-relaxed font-light">
                  Advancing <strong className="text-[#fffdf7] font-medium">leadership</strong>, <strong className="text-[#fffdf7] font-medium">mentorship</strong>, <strong className="text-[#fffdf7] font-medium">human capital development</strong>, <strong className="text-[#fffdf7] font-medium">innovation</strong>, <strong className="text-[#fffdf7] font-medium">youth participation</strong>, and <strong className="text-[#fffdf7] font-medium">community development</strong> across Northern Nigeria.
                </p>
              </div>

              {/* WHAT CAN I DO? Action Suite */}
              <div className="pt-2 space-y-2.5">
                <span className="font-mono text-[10px] text-[#c9963c] uppercase tracking-wider block font-semibold">
                  WHAT CAN I DO? (CHOOSE YOUR PATHWAY)
                </span>
                <div className="flex flex-wrap gap-2.5 items-center">
                  <Link
                    to="/membership"
                    className="px-5 py-3 rounded-[2px] bg-[#b6842a] hover:bg-[#c9963c] text-[#10241f] font-semibold text-xs font-mono uppercase tracking-wider transition-all hover:shadow-[3px_3px_0px_rgba(255,253,247,0.85)] hover:-translate-y-0.5 flex items-center gap-1.5"
                  >
                    <span>1. Join</span>
                    <CaretRight size={14} weight="bold" />
                  </Link>

                  <Link
                    to="/chapters"
                    className="px-5 py-3 rounded-[2px] bg-[#1f3f37] hover:bg-[#2c5347] text-[#fffdf7] border border-[#2c5347] font-semibold text-xs font-mono uppercase tracking-wider transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
                  >
                    <span>2. Connect</span>
                    <ShareNetwork size={14} weight="bold" />
                  </Link>

                  <Link
                    to="/about"
                    className="px-5 py-3 rounded-[2px] bg-transparent border border-[#aebf9e]/40 hover:border-[#fffdf7] text-[#fffdf7] font-medium text-xs font-mono uppercase tracking-wider transition-all hover:-translate-y-0.5 inline-flex items-center gap-1.5"
                  >
                    <span>3. Learn More</span>
                  </Link>

                  <Link
                    to="/leadership"
                    className="px-5 py-3 rounded-[2px] bg-transparent border border-[#aebf9e]/40 hover:border-[#fffdf7] text-[#e3c375] font-medium text-xs font-mono uppercase tracking-wider transition-all hover:-translate-y-0.5 inline-flex items-center gap-1.5"
                  >
                    <span>4. Contact</span>
                    <ArrowUpRight size={13} weight="bold" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 5 Questions Instant-Read Overview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-[#fffdf7] text-[#20241d] p-6 sm:p-7 border border-[#10241f] specimen-shadow rounded-[2px] relative">
                {/* Card Header */}
                <div className="font-mono text-[11px] text-[#b6842a] tracking-widest uppercase pb-3 mb-4 border-b border-dashed border-[#cfc6a6] flex justify-between items-center font-semibold">
                  <span>EXECUTIVE BRIEF &bull; 5 ESSENTIALS</span>
                  <span className="flex items-center gap-1 text-[#10241f]">
                    <Sparkle size={12} weight="fill" className="text-[#b6842a]" />
                    <span>Instant Overview</span>
                  </span>
                </div>

                {/* 5 Questions Structured Stack */}
                <div className="space-y-3 text-xs">
                  {/* WHO */}
                  <div className="p-2.5 rounded-[2px] bg-[#faf7ef] border border-[#e7e0cb]">
                    <span className="font-mono text-[10px] text-[#b6842a] uppercase font-bold tracking-wider block">
                      WHO?
                    </span>
                    <div className="font-display text-base font-bold text-[#10241f] mt-0.5">
                      Atiku Northern Youth Vanguard (ANYV)
                    </div>
                  </div>

                  {/* WHAT */}
                  <div className="p-2.5 rounded-[2px] bg-[#faf7ef] border border-[#e7e0cb]">
                    <span className="font-mono text-[10px] text-[#b6842a] uppercase font-bold tracking-wider block">
                      WHAT?
                    </span>
                    <p className="font-semibold text-[#10241f] text-xs mt-0.5 leading-snug">
                      A youth-focused platform connecting young people across Northern Nigeria.
                    </p>
                  </div>

                  {/* WHERE */}
                  <div className="p-2.5 rounded-[2px] bg-[#faf7ef] border border-[#e7e0cb]">
                    <span className="font-mono text-[10px] text-[#b6842a] uppercase font-bold tracking-wider block">
                      WHERE?
                    </span>
                    <div className="font-bold text-[#10241f] text-xs mt-0.5">
                      The 19 Northern States &amp; FCT
                    </div>
                    <span className="text-[10px] font-mono text-[#666c5c] block mt-0.5">
                      Covering 419 Local Government Areas (North-West, North-East, North-Central).
                    </span>
                  </div>

                  {/* WHAT DOES IT DO? */}
                  <div className="p-2.5 rounded-[2px] bg-[#faf7ef] border border-[#e7e0cb]">
                    <span className="font-mono text-[10px] text-[#b6842a] uppercase font-bold tracking-wider block mb-1">
                      WHAT DOES IT DO?
                    </span>
                    <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                      <span className="bg-[#fffdf7] border border-[#cfc6a6] px-1.5 py-0.5 rounded-[2px] text-[#10241f] font-medium">Leadership</span>
                      <span className="bg-[#fffdf7] border border-[#cfc6a6] px-1.5 py-0.5 rounded-[2px] text-[#10241f] font-medium">Mentorship</span>
                      <span className="bg-[#fffdf7] border border-[#cfc6a6] px-1.5 py-0.5 rounded-[2px] text-[#10241f] font-medium">Human Capital</span>
                      <span className="bg-[#fffdf7] border border-[#cfc6a6] px-1.5 py-0.5 rounded-[2px] text-[#10241f] font-medium">Innovation</span>
                      <span className="bg-[#fffdf7] border border-[#cfc6a6] px-1.5 py-0.5 rounded-[2px] text-[#10241f] font-medium">Youth Participation</span>
                      <span className="bg-[#fffdf7] border border-[#cfc6a6] px-1.5 py-0.5 rounded-[2px] text-[#10241f] font-medium">Community Development</span>
                    </div>
                  </div>

                  {/* WHAT CAN I DO? */}
                  <div className="p-3 rounded-[2px] bg-[#10241f] text-[#f1ecde] border border-[#10241f]">
                    <span className="font-mono text-[10px] text-[#e3c375] uppercase font-bold tracking-wider block mb-2">
                      WHAT CAN I DO?
                    </span>
                    <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                      <Link
                        to="/membership"
                        className="py-1.5 px-2 rounded-[2px] bg-[#b6842a] hover:bg-[#c9963c] text-[#10241f] font-bold text-center transition-colors flex items-center justify-center gap-1"
                      >
                        <span>Join</span>
                        <ArrowRight size={12} weight="bold" />
                      </Link>
                      <Link
                        to="/chapters"
                        className="py-1.5 px-2 rounded-[2px] bg-[#1f3f37] hover:bg-[#2c5347] text-[#fffdf7] border border-[#2c5347] text-center transition-colors flex items-center justify-center gap-1"
                      >
                        <span>Connect</span>
                        <ArrowRight size={12} weight="bold" />
                      </Link>
                      <Link
                        to="/about"
                        className="py-1.5 px-2 rounded-[2px] bg-transparent hover:bg-[#1f3f37] text-[#aebf9e] hover:text-[#fffdf7] border border-[#2c5347] text-center transition-colors"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/leadership"
                        className="py-1.5 px-2 rounded-[2px] bg-transparent hover:bg-[#1f3f37] text-[#e3c375] border border-[#2c5347] text-center transition-colors"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Quick-Scan Strip across Base of Screen */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-[#cfc6a6]/20 border border-[#cfc6a6]/20 mt-12 rounded-[2px] overflow-hidden text-xs">
            <div className="bg-[#10241f] p-3.5">
              <span className="font-mono text-[10px] text-[#c9963c] uppercase block font-semibold">1. WHO</span>
              <strong className="text-[#fffdf7] font-display text-sm block mt-0.5">ANYV Vanguard</strong>
              <span className="text-[10px] text-[#aebf9e] font-mono">Youth Mobilization</span>
            </div>
            <div className="bg-[#10241f] p-3.5">
              <span className="font-mono text-[10px] text-[#c9963c] uppercase block font-semibold">2. WHAT</span>
              <strong className="text-[#fffdf7] font-display text-sm block mt-0.5">Youth Platform</strong>
              <span className="text-[10px] text-[#aebf9e] font-mono">Connecting Leaders</span>
            </div>
            <div className="bg-[#10241f] p-3.5">
              <span className="font-mono text-[10px] text-[#c9963c] uppercase block font-semibold">3. WHERE</span>
              <strong className="text-[#fffdf7] font-display text-sm block mt-0.5">19 Northern States</strong>
              <span className="text-[10px] text-[#aebf9e] font-mono">419 LGAs &amp; FCT</span>
            </div>
            <div className="bg-[#10241f] p-3.5">
              <span className="font-mono text-[10px] text-[#c9963c] uppercase block font-semibold">4. WHAT IT DOES</span>
              <strong className="text-[#fffdf7] font-display text-sm block mt-0.5">Leadership &bull; Dev</strong>
              <span className="text-[10px] text-[#aebf9e] font-mono">Mentorship &amp; Innovation</span>
            </div>
            <div className="bg-[#10241f] p-3.5 col-span-2 sm:col-span-1">
              <span className="font-mono text-[10px] text-[#c9963c] uppercase block font-semibold">5. WHAT YOU CAN DO</span>
              <strong className="text-[#e3c375] font-display text-sm block mt-0.5">Join &bull; Connect</strong>
              <span className="text-[10px] text-[#aebf9e] font-mono">Learn More &bull; Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Shift Manifesto Highlight */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="eyebrow text-[#b6842a]">BEYOND ELECTION-CYCLE POLITICS</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#10241f] leading-tight">
                Continuous engagement. Long-term regional impact.
              </h2>
              <p className="text-base text-[#3c4136] leading-relaxed">
                We do not believe young people should be mobilized only during election campaigns and forgotten afterwards. ANYV exists to build lasting institutional networks across all 19 Northern states.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#b6842a] hover:text-[#10241f] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Full Founding Charter</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2.5 specimen-shadow">
                <div className="w-8 h-8 rounded-[2px] bg-[#f2f7f5] border border-[#7c9473]/30 text-[#1f3f37] flex items-center justify-center">
                  <UsersThree size={18} weight="duotone" />
                </div>
                <h3 className="font-display text-base font-semibold text-[#10241f]">Connecting Northern Youths</h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  From Plateau to Gombe, Kwara to Kebbi, Kaduna to Borno, creating a unified network where young people discover and empower one another.
                </p>
              </div>

              <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2.5 specimen-shadow">
                <div className="w-8 h-8 rounded-[2px] bg-[#fdfaf2] border border-[#c9963c]/30 text-[#b6842a] flex items-center justify-center">
                  <ShieldCheck size={18} weight="duotone" />
                </div>
                <h3 className="font-display text-base font-semibold text-[#10241f]">Leaders, Not Followers</h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Leadership development must begin before holding public office—through service, mentorship, knowledge, and ethical responsibility.
                </p>
              </div>

              <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2.5 specimen-shadow">
                <div className="w-8 h-8 rounded-[2px] bg-[#fdfaf2] border border-[#c9963c]/30 text-[#b6842a] flex items-center justify-center">
                  <GraduationCap size={18} weight="duotone" />
                </div>
                <h3 className="font-display text-base font-semibold text-[#10241f]">Creating Real Opportunities</h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Promoting partnerships in skills, technology, enterprise funding, education, and youth employment across all geopolitical zones.
                </p>
              </div>

              <div className="bg-[#fffdf7] border border-[#cfc6a6] p-6 rounded-[2px] space-y-2.5 specimen-shadow">
                <div className="w-8 h-8 rounded-[2px] bg-[#f2f7f5] border border-[#7c9473]/30 text-[#1f3f37] flex items-center justify-center">
                  <HeartStraight size={18} weight="duotone" />
                </div>
                <h3 className="font-display text-base font-semibold text-[#10241f]">Inclusive Representation</h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Championing young women, underrepresented communities, and grassroots organizers across local government areas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Navigation Cards to Dedicated Portals */}
      <section className="py-20 bg-[#f1ecde] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow text-[#b6842a] justify-center">STRUCTURE &amp; PORTALS</span>
            <h2 className="font-display text-3xl font-semibold text-[#10241f] mt-1">
              Explore the Vanguard Directory
            </h2>
            <p className="text-sm text-[#666c5c] mt-2">
              Access specialized registries, regional coordination councils, and official development programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. State Chapter Dashboard */}
            <Link
              to="/state-dashboard"
              className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow group"
            >
              <div>
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block mb-1">PORTAL &bull; 01</span>
                <h3 className="font-display text-xl font-semibold text-[#10241f] group-hover:text-[#b6842a] transition-colors mb-2">
                  State Chapter Dashboard
                </h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Interactive state-by-state dashboard covering all 19 Northern states: executive coordinators, verified phone contacts, and local LGA rosters.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e7e0cb] flex items-center justify-between font-mono text-xs text-[#10241f]">
                <span>Explore 19 States</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 2. Official Gazette & News */}
            <Link
              to="/news"
              className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow group"
            >
              <div>
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block mb-1">PORTAL &bull; 02</span>
                <h3 className="font-display text-xl font-semibold text-[#10241f] group-hover:text-[#b6842a] transition-colors mb-2">
                  Official Gazette &amp; News
                </h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Filter and read exclusive news dispatches from any single state or regional national communiqués with real-time updates.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e7e0cb] flex items-center justify-between font-mono text-xs text-[#10241f]">
                <span>Read Dispatches</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 3. Membership Accreditation Verifier */}
            <Link
              to="/verify"
              className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow group"
            >
              <div>
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block mb-1">PORTAL &bull; 03</span>
                <h3 className="font-display text-xl font-semibold text-[#10241f] group-hover:text-[#b6842a] transition-colors mb-2">
                  Membership Verifier
                </h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Instantly verify official ANYV accreditation numbers, chapter delegates, and executive ratified credentials in the national registry.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e7e0cb] flex items-center justify-between font-mono text-xs text-[#10241f]">
                <span>Verify Credential</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 4. Digital ID Card Studio */}
            <Link
              to="/id-card"
              className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow group"
            >
              <div>
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block mb-1">PORTAL &bull; 04</span>
                <h3 className="font-display text-xl font-semibold text-[#10241f] group-hover:text-[#b6842a] transition-colors mb-2">
                  Digital ID Card Studio
                </h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Generate, customize with your photograph, and print your security-encoded CR80 wallet pass with official QR verification.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e7e0cb] flex items-center justify-between font-mono text-xs text-[#10241f]">
                <span>Generate ID Pass</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 5. Executive Leadership Directory */}
            <Link
              to="/leadership"
              className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow group"
            >
              <div>
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block mb-1">PORTAL &bull; 05</span>
                <h3 className="font-display text-xl font-semibold text-[#10241f] group-hover:text-[#b6842a] transition-colors mb-2">
                  Leadership Directory
                </h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Directory of national executive officers, state coordinators, secretaries, directorates, and the board of patrons.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e7e0cb] flex items-center justify-between font-mono text-xs text-[#10241f]">
                <span>View Officials</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 6. Action Programs & Grants */}
            <Link
              to="/programs"
              className="bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] flex flex-col justify-between hover:border-[#b6842a] transition-all specimen-shadow group"
            >
              <div>
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block mb-1">PORTAL &bull; 06</span>
                <h3 className="font-display text-xl font-semibold text-[#10241f] group-hover:text-[#b6842a] transition-colors mb-2">
                  Action Programs
                </h3>
                <p className="text-xs text-[#666c5c] leading-relaxed">
                  Apply for the Northern Youth Leadership Academy, Agro-Tech incubator grants, and policy research think tanks.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e7e0cb] flex items-center justify-between font-mono text-xs text-[#10241f]">
                <span>Apply for Grants</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Northern Regional Chapter Directory & Executive Index (Extreme SEO Section) */}
      <section className="py-20 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="eyebrow text-[#b6842a] justify-center">REGIONAL DIRECTORY &bull; 19 NORTHERN STATES &amp; FCT</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#10241f] mt-2">
              Northern Nigeria State Chapters &amp; Executive Leadership Index
            </h2>
            <p className="text-sm text-[#666c5c] mt-3 leading-relaxed">
              Official roster of Atiku Northern Youth Vanguard (ANYV) chapters spanning 419 Local Government Areas across North-West, North-East, and North-Central geopolitical zones. Explore state coordinators, secretariat liaisons, and grassroots councils.
            </p>
          </div>

          {/* Interactive Search & Filter Controls */}
          <div className="bg-[#fffdf7] border border-[#cfc6a6] p-4 sm:p-5 rounded-[2px] specimen-shadow mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full sm:max-w-md">
                <MagnifyingGlass size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8b9180]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by state, capital, coordinator name, or phone..."
                  className="w-full pl-9 pr-4 py-2 text-xs bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] text-[#10241f] placeholder:text-[#8b9180] focus:outline-none focus:border-[#b6842a] font-mono"
                />
              </div>

              {/* Zone Filter Tabs */}
              <div className="flex items-center gap-1.5 flex-wrap w-full sm:w-auto">
                {[
                  { id: 'all', label: 'All Zones (20)' },
                  { id: 'northwest', label: 'North-West (7)' },
                  { id: 'northeast', label: 'North-East (6)' },
                  { id: 'northcentral', label: 'North-Central (7)' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveZone(tab.id)}
                    className={`px-3 py-1.5 rounded-[2px] text-xs font-mono transition-all ${
                      activeZone === tab.id
                        ? 'bg-[#10241f] text-[#e3c375] font-semibold'
                        : 'bg-[#faf7ef] text-[#666c5c] hover:text-[#10241f] border border-[#cfc6a6]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Filter Counts */}
            <div className="text-[11px] font-mono text-[#8b9180] flex items-center justify-between border-t border-[#e7e0cb] pt-3">
              <span>Displaying {filteredStates.length} State Chapter Directories</span>
              <span>Constitutional Standard: 3 Executives Per Council</span>
            </div>
          </div>

          {/* State Chapters Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStates.map((state) => {
              const officials = getStateOfficials(state.name)
              const coordinator = officials.find((o) => o.roleType === 'coordinator')
              const viceCoordinator = officials.find((o) => o.roleType === 'vice_coordinator')
              const secretary = officials.find((o) => o.roleType === 'secretary')
              const isFormed = officials.length === 3

              return (
                <div
                  key={state.name}
                  className="bg-[#fffdf7] border border-[#cfc6a6] p-5 rounded-[2px] specimen-shadow flex flex-col justify-between hover:border-[#b6842a] transition-all"
                >
                  <div>
                    {/* Top Bar */}
                    <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#e7e0cb]">
                      <span className="font-mono text-[10px] text-[#b6842a] uppercase font-semibold">
                        {state.zone}
                      </span>
                      <span
                        className={`font-mono text-[9px] px-2 py-0.5 rounded-[2px] font-medium uppercase ${
                          isFormed
                            ? 'bg-[#10241f] text-[#e3c375]'
                            : officials.length > 0
                            ? 'bg-[#f7f3e8] text-[#b6842a] border border-[#cfc6a6]'
                            : 'bg-[#f1ecde] text-[#8b9180]'
                        }`}
                      >
                        {officials.length > 0 ? `${officials.length}/3 Appointed` : 'Forming Council'}
                      </span>
                    </div>

                    {/* State Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-lg font-bold text-[#10241f]">
                          {state.name} State
                        </h3>
                        <p className="text-xs text-[#666c5c] font-mono mt-0.5">
                          Capital: {state.capital} &bull; {state.lgas} LGAs
                        </p>
                      </div>
                      <span className="text-[10px] font-mono bg-[#faf7ef] border border-[#cfc6a6] px-2 py-1 rounded-[2px] text-[#666c5c]">
                        {state.hub}
                      </span>
                    </div>

                    {/* State Leadership Snapshot */}
                    <div className="bg-[#faf7ef] border border-[#e7e0cb] p-3 rounded-[2px] space-y-2 mb-4 text-xs">
                      <div>
                        <span className="text-[10px] font-mono text-[#8b9180] uppercase block">State Coordinator</span>
                        <div className="font-semibold text-[#10241f] mt-0.5">
                          {coordinator ? coordinator.name : <span className="text-[#8b9180] italic">Appointment Pending</span>}
                        </div>
                        {coordinator?.socials?.phone && (
                          <div className="text-[11px] text-[#b6842a] font-mono flex items-center gap-1 mt-0.5">
                            <Phone size={11} />
                            <span>{coordinator.socials.phone}</span>
                          </div>
                        )}
                      </div>

                      {secretary && (
                        <div className="border-t border-[#e7e0cb] pt-1.5">
                          <span className="text-[10px] font-mono text-[#8b9180] uppercase block">State Secretary</span>
                          <div className="font-medium text-[#10241f] mt-0.5">
                            {secretary.name}
                          </div>
                          {secretary.socials?.phone && (
                            <div className="text-[11px] text-[#b6842a] font-mono flex items-center gap-1 mt-0.5">
                              <Phone size={11} />
                              <span>{secretary.socials.phone}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <Link
                    to={`/chapters?search=${encodeURIComponent(state.name)}`}
                    className="pt-3 border-t border-[#e7e0cb] flex items-center justify-between font-mono text-xs text-[#10241f] hover:text-[#b6842a] transition-colors"
                  >
                    <span>View Chapter Roster</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              )
            })}
          </div>

          {filteredStates.length === 0 && (
            <div className="text-center py-12 bg-[#fffdf7] border border-dashed border-[#cfc6a6] rounded-[2px] p-6">
              <p className="text-sm text-[#10241f] font-semibold mb-1">No matching state chapters found</p>
              <p className="text-xs text-[#666c5c]">Try clearing your search query or switching zone filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) & Knowledge Base (Extreme SEO Section) */}
      <section className="py-20 bg-[#f1ecde] border-b border-[#cfc6a6]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow text-[#b6842a] justify-center">CIVIC KNOWLEDGE BASE &bull; FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#10241f] mt-2">
              Everything You Need to Know About ANYV
            </h2>
            <p className="text-sm text-[#666c5c] mt-2">
              Verified answers to common inquiries regarding the movement, state chapters, membership accreditation, and youth empowerment mandates.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="bg-[#fffdf7] border border-[#cfc6a6] rounded-[2px] specimen-shadow overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#faf7ef] transition-colors"
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-[#10241f]">
                      {item.q}
                    </span>
                    <span className="w-7 h-7 rounded-[2px] bg-[#f7f3e8] border border-[#cfc6a6] text-[#b6842a] flex items-center justify-center shrink-0">
                      {isOpen ? <CaretUp size={16} weight="bold" /> : <CaretDown size={16} weight="bold" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#666c5c] leading-relaxed border-t border-[#e7e0cb] pt-4 font-sans">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vanguard Civic Taxonomy & Regional Index (Extreme SEO Semantic Tags) */}
      <section className="py-16 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="eyebrow text-[#b6842a] justify-center">REGIONAL CIVIC INDEX &bull; TOPICAL TAXONOMY</span>
            <h3 className="font-display text-2xl font-semibold text-[#10241f] mt-1">
              Explore Northern Mobilization by State &amp; Focus Area
            </h3>
            <p className="text-xs text-[#666c5c] mt-1.5">
              Comprehensive index connecting state councils, appointed leaders, university liaisons, and grassroots policy directorates.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
            {[
              { label: 'Atiku Abubakar 2027 Vision', link: '/about' },
              { label: 'Benue State (Hon. Dr. Levi Aondohemba Orhii)', link: '/chapters?search=Benue' },
              { label: 'Bauchi State (Hon. Babayo Musa)', link: '/chapters?search=Bauchi' },
              { label: 'Katsina State (Halliru Ibrahim Sk)', link: '/chapters?search=Katsina' },
              { label: 'Zamfara State (Saifullahi Sule Sanda)', link: '/chapters?search=Zamfara' },
              { label: 'Jigawa State (Jamilu Yusuf Musa)', link: '/chapters?search=Jigawa' },
              { label: 'Kwara State (Smart Olaitan)', link: '/chapters?search=Kwara' },
              { label: 'Kogi State (Adam Ustaz Ubaidullah)', link: '/chapters?search=Kogi' },
              { label: 'Kaduna State (Comrade Nasiru Abdulhamid)', link: '/chapters?search=Kaduna' },
              { label: 'Kano Central Youth Enterprise Hub', link: '/chapters?search=Kano' },
              { label: 'Sokoto Caliphate Civic Council', link: '/chapters?search=Sokoto' },
              { label: 'Plateau Youth Peace Council Jos', link: '/chapters?search=Plateau' },
              { label: 'Taraba Jalingo Organizing Council', link: '/chapters?search=Taraba' },
              { label: 'Adamawa Yola Mobilisation Hub', link: '/chapters?search=Adamawa' },
              { label: 'Borno Maiduguri Community Council', link: '/chapters?search=Borno' },
              { label: 'Yobe Damaturu Resilience Hub', link: '/chapters?search=Yobe' },
              { label: 'Gombe State Development Hub', link: '/chapters?search=Gombe' },
              { label: 'Niger State Minna Youth Council', link: '/chapters?search=Niger' },
              { label: 'Nasarawa Lafia Innovation Circle', link: '/chapters?search=Nasarawa' },
              { label: 'Kebbi Birnin Kebbi Agro-Allied Council', link: '/chapters?search=Kebbi' },
              { label: 'FCT Abuja National Secretariat', link: '/chapters?search=Abuja' },
              { label: 'Northern Youth Leadership Academy', link: '/programs' },
              { label: 'Agro-Tech Incubator Grants', link: '/programs' },
              { label: 'Digital Membership ID Card', link: '/membership' },
              { label: 'Student Union Governance (SUG FUD, NAUS, NANS)', link: '/about' },
              { label: '419 Northern Local Governments', link: '/chapters' },
              { label: 'Women Leadership & Inclusion', link: '/leadership' }
            ].map((tag, i) => (
              <Link
                key={i}
                to={tag.link}
                className="px-3 py-1.5 rounded-[2px] bg-[#fffdf7] hover:bg-[#10241f] text-[#10241f] hover:text-[#e3c375] border border-[#cfc6a6] hover:border-[#10241f] text-xs font-mono transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Tag size={11} className="text-[#b6842a]" />
                <span>{tag.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enlistment Call to Action Banner */}
      <section className="py-20 bg-[#10241f] text-[#f1ecde] border-b border-[#1f3f37]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="eyebrow text-[#e3c375] justify-center mb-3">JOIN THE CONSTITUTIONAL REGISTRY</span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#fffdf7] font-semibold max-w-2xl mx-auto leading-tight">
            The future of Northern Nigeria belongs to its people—and its young people must build it.
          </h2>
          <p className="text-sm text-[#aebf9e] max-w-xl mx-auto mt-4 leading-relaxed">
            Register today to receive your official digital membership credential, connect with your state coordinator, and participate in regional development circles.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/membership"
              className="px-8 py-3.5 rounded-[2px] bg-[#b6842a] hover:bg-[#c9963c] text-[#10241f] font-mono text-xs uppercase tracking-wider font-semibold shadow-[3px_3px_0px_rgba(255,253,247,0.85)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            >
              <span>Accredit as an ANYV Member</span>
              <ArrowUpRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
