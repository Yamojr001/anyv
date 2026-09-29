// Centralized News & Gazette Data for ANYV (National & 19 Northern States)

export const newsCategories = [
  'All Categories',
  'National Communiqué',
  'Youth Summit',
  'Agri-Tech & Enterprise',
  'Policy & Governance',
  'Digital Skills',
  'Chapter Spotlight'
]

export const initialNewsArticles = [
  {
    id: 1,
    state: 'Bauchi',
    stateZone: 'North-East',
    title: 'Bauchi State ANYV Concludes 2,000-Youth Agri-Tech Empowerment Summit',
    slug: 'bauchi-agri-tech-summit-2026',
    category: 'Agri-Tech & Enterprise',
    date: 'September 27, 2026',
    readTime: '4 min read',
    author: 'Bauchi State Media Directorate',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'State Coordinator Hon. Babayo Musa and Secretary Zechariah Nehemiah led an intensive 3-day empowerment summit for young farmers across all 20 LGAs.',
    content: `The Bauchi State Chapter of the Atiku Northern Youth Vanguard (ANYV) has officially concluded its 2026 Northern Agri-Tech and Enterprise Empowerment Summit at the Bauchi Multi-Purpose Complex.

Presided over by Bauchi State Coordinator Hon. Babayo Musa (08031844595) and State Secretary Zechariah Nehemiah (08036398658), the summit equipped over 2,000 youth delegates representing all twenty (20) Local Government Areas with modern dry-season drip irrigation techniques, drone farm surveillance technologies, and grain storage cooperatives.

"Our mission in Bauchi is to transform Northern youth from job seekers into agricultural industrialists and wealth creators," remarked Hon. Babayo Musa during the closing communique.

The chapter also inaugurated local government action coordinators in Katagum, Alkaleri, Ningi, and Toro to ensure immediate rollout of cluster cooperatives.`,
    views: 1240,
    tags: ['Bauchi', 'AgriTech', 'YouthEmpowerment', 'Hon. Babayo Musa']
  },
  {
    id: 2,
    state: 'Benue',
    stateZone: 'North-Central',
    title: 'Benue Chapter Launches 23-LGA Civic Leadership & Peacebuilding Network',
    slug: 'benue-civic-leadership-network',
    category: 'Policy & Governance',
    date: 'September 25, 2026',
    readTime: '3 min read',
    author: 'Benue State Secretariat Press',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Benue State Secretary Pius Monday convened youth leaders in Makurdi to inaugurate ward-level peace councils and food security clusters.',
    content: `At a landmark youth dialogue held in Makurdi, the Benue State Chapter of the Atiku Northern Youth Vanguard convened representative delegates from across all twenty-three (23) local governments of the Food Basket State.

State Secretary Pius Monday (0803 502 3507) stressed that regional economic stability begins with youth-led community protection and grassroots food supply aggregation.

The Benue chapter announced an upcoming agro-processing workshop in Gboko and Otukpo, aimed at providing access to processing equipment for young yam and cassava producers.`,
    views: 980,
    tags: ['Benue', 'Makurdi', 'Pius Monday', 'Peacebuilding', 'FoodSecurity']
  },
  {
    id: 3,
    state: 'Katsina',
    stateZone: 'North-West',
    title: 'Katsina Youth Digital Innovation Labs Launched Across 3 Senatorial Districts',
    slug: 'katsina-digital-innovation-labs',
    category: 'Digital Skills',
    date: 'September 23, 2026',
    readTime: '5 min read',
    author: 'Katsina ICT Bureau',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'State Coordinator Hon. Ibrahim Sani unveiled free software engineering and artificial intelligence cohorts for 1,500 young Katsina residents.',
    content: `In line with the ANYV Human Capital Development pillar, the Katsina State Chapter has officially launched three Digital Innovation Centers located in Katsina Central, Daura, and Funtua senatorial zones.

Speaking at the launch, State Coordinator Hon. Ibrahim Sani highlighted that digital literacy and remote tech employment offer young people the most viable pathway toward economic independence.

"By providing free access to high-speed internet, solar workstations, and software engineering mentors, we are bridging the regional tech gap and positioning Katsina youths for global remote careers," he affirmed.`,
    views: 1450,
    tags: ['Katsina', 'Technology', 'DigitalSkills', 'Hon. Ibrahim Sani']
  },
  {
    id: 4,
    state: 'National',
    stateZone: 'All Zones',
    title: 'National Executive Council Announces Harmonized 19-State Leadership Convention in Abuja',
    slug: 'national-executive-council-19-states-convention',
    category: 'National Communiqué',
    date: 'September 28, 2026',
    readTime: '4 min read',
    author: 'National Secretariat, Abuja',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'All 19 Northern State Coordinators and Secretaries to gather in Abuja for the historic ratification of the ANYV Northern Youth Economic Charter.',
    content: `The National Executive Council of the Atiku Northern Youth Vanguard (ANYV) has formally issued a notification for the 2026 Northern Youth Unity and Leadership Convention, scheduled to take place at the International Conference Centre, Abuja.

The convention will host official delegations from all nineteen (19) Northern States and the FCT, bringing together state coordinators, women leaders, student representatives, and tech entrepreneurs.

Agenda highlights include the ratification of the 2026–2030 Northern Human Capital Manifesto, presentation of state chapter development scorecards, and the launch of the Vanguard Seed Capital Grant for young innovators.`,
    views: 3120,
    tags: ['National', 'Abuja', 'Convention', 'EconomicCharter', 'Unity']
  },
  {
    id: 5,
    state: 'Jigawa',
    stateZone: 'North-West',
    title: 'Jigawa Chapter Mobilizes 10,000 Youths for Solar Irrigation Cooperative Project',
    slug: 'jigawa-solar-irrigation-initiative',
    category: 'Agri-Tech & Enterprise',
    date: 'September 21, 2026',
    readTime: '3 min read',
    author: 'Jigawa ANYV Secretariat',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'State Coordinator Hon. Kabiru Haruna leads deployment of subsidised solar pumps across Hadejia and Dutse farm basins.',
    content: `To combat high fuel costs that impede young smallholder farmers, the Jigawa State Chapter of ANYV has facilitated the distribution of high-efficiency solar water pumps across Dutse, Hadejia, and Gumel agricultural belts.

State Coordinator Hon. Kabiru Haruna praised youth resilience, stating that clean energy adoption in agriculture guarantees year-round harvest and stable rural livelihoods.`,
    views: 890,
    tags: ['Jigawa', 'SolarIrrigation', 'CleanEnergy', 'Hon. Kabiru Haruna']
  },
  {
    id: 6,
    state: 'Kwara',
    stateZone: 'North-Central',
    title: 'Kwara Vanguard Hosts Creative Economy & Vocational Innovation Masterclass',
    slug: 'kwara-creative-economy-masterclass',
    category: 'Youth Summit',
    date: 'September 19, 2026',
    readTime: '4 min read',
    author: 'Kwara Media Directorate',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Hon. Abdulrasheed Ahmed gathers young designers, artisans, and tech founders in Ilorin to foster creative industry synergies.',
    content: `Over 800 young creators, UI/UX designers, textile artisans, and content innovators converged at the Ilorin Youth Innovation Hub for the Kwara State Creative Masterclass.

State Coordinator Hon. Abdulrasheed Ahmed reiterated that the digital economy is boundless and that Kwara youth are uniquely poised to lead regional content creation and creative entrepreneurship across West Africa.`,
    views: 1120,
    tags: ['Kwara', 'Ilorin', 'CreativeEconomy', 'Hon. Abdulrasheed Ahmed']
  },
  {
    id: 7,
    state: 'Kogi',
    stateZone: 'North-Central',
    title: 'Kogi State Chapter Establishes 21 LGA Mentorship Councils',
    slug: 'kogi-mentorship-councils-established',
    category: 'Policy & Governance',
    date: 'September 18, 2026',
    readTime: '3 min read',
    author: 'Kogi ANYV Desk',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'State Coordinator Hon. Yakubu Usman commissions grassroots leadership desks in Lokoja, Okene, and Idah.',
    content: `The Kogi State ANYV executive council, led by State Coordinator Hon. Yakubu Usman, has concluded the formation of LGA youth advisory boards in all twenty-one (21) local government areas.

The initiative connects university graduates and skilled young artisans with experienced mentors in public policy, legal advocacy, and agribusiness.`,
    views: 740,
    tags: ['Kogi', 'Lokoja', 'Mentorship', 'Hon. Yakubu Usman']
  },
  {
    id: 8,
    state: 'Zamfara',
    stateZone: 'North-West',
    title: 'Zamfara Chapter Spearheads Youth Peace Dialogue & Grassroots Skill Centers',
    slug: 'zamfara-peace-dialogue-grassroots-skills',
    category: 'Chapter Spotlight',
    date: 'September 16, 2026',
    readTime: '4 min read',
    author: 'Gusau Liaison Office',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Hon. Bello Aliyu coordinates peace reconciliation forums and vocational tailoring and welding hubs in Gusau.',
    content: `State Coordinator Hon. Bello Aliyu addressed hundreds of youth representatives in Gusau during the closing ceremony of the Zamfara Youth Peace Assembly.

The chapter commissioned two community training workshops where youths can acquire technical credentials in electrical installation, metal fabrication, and solar system assembly.`,
    views: 920,
    tags: ['Zamfara', 'Gusau', 'PeaceBuilding', 'Hon. Bello Aliyu']
  },
  {
    id: 9,
    state: 'Kano',
    stateZone: 'North-West',
    title: 'Kano Youth Commercial Alliance Enlists 5,000 Young Traders & Digital Merchants',
    slug: 'kano-youth-commercial-alliance',
    category: 'Agri-Tech & Enterprise',
    date: 'September 14, 2026',
    readTime: '4 min read',
    author: 'Kano Central Office',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Kano State Chapter rolls out zero-interest revolving fund and e-commerce training for youth market traders.',
    content: `Kano State ANYV has unveiled the Kano Youth Commercial Alliance, uniting young market traders across Kurmi, Kantin Kwari, and Singer markets with digital payment systems and inventory management tools.

The initiative facilitates direct supply partnerships between Northern grain producers and retail merchants across Southern Nigeria.`,
    views: 1840,
    tags: ['Kano', 'Commerce', 'DigitalTrade', 'YouthAlliance']
  },
  {
    id: 10,
    state: 'Kaduna',
    stateZone: 'North-West',
    title: 'Kaduna Strategic Council Hosts Northern Education & Scholarship Summit',
    slug: 'kaduna-education-scholarship-summit',
    category: 'Youth Summit',
    date: 'September 12, 2026',
    readTime: '5 min read',
    author: 'Kaduna Secretariat',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Over 1,200 tertiary students attend symposium on out-of-school children reintegration and STEM scholarships.',
    content: `The Kaduna State Chapter convened an educational roundtable featuring university vice chancellors, civil society leaders, and student union executives at the Arewa House, Kaduna.

The summit formulated a roadmap for community-funded tutoring centers targeting girl-child education and basic literacy in rural LGAs.`,
    views: 1620,
    tags: ['Kaduna', 'Education', 'Scholarships', 'STEM']
  }
]

export async function fetchNewsArticles(stateFilter = null) {
  try {
    const query = stateFilter && stateFilter !== 'All' ? `?state=${encodeURIComponent(stateFilter)}` : ''
    const response = await fetch(`http://localhost:8000/api/news${query}`, { method: 'GET' })
    if (response.ok) {
      const data = await response.json()
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        return data.data.map(item => ({
          id: item.id,
          state: item.state_name || 'National',
          title: item.title,
          slug: item.slug,
          category: item.category || 'General',
          date: new Date(item.published_at || item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          readTime: '4 min read',
          author: item.author || 'ANYV Press',
          image: item.image_url || 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80',
          excerpt: item.excerpt || item.content?.slice(0, 150) + '...',
          content: item.content,
          views: item.views_count || 120,
          tags: [item.state_name || 'National', item.category || 'News']
        }))
      }
    }
  } catch (err) {
    // Backend offline or unreachable: gracefully fall back to local rich dataset
  }

  if (stateFilter && stateFilter !== 'All') {
    return initialNewsArticles.filter(a => a.state.toLowerCase() === stateFilter.toLowerCase() || a.state === 'National')
  }
  return initialNewsArticles
}
