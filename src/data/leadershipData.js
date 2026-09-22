// Placeholder structure ready for official records
export const leadershipCategories = [
  { id: 'all', label: 'All Leadership' },
  { id: 'executive', label: 'National Executive Council' },
  { id: 'zonal', label: 'Zonal Vice Coordinators' },
  { id: 'directorate', label: 'National Directorates' },
  { id: 'advisory', label: 'Board of Patrons & Advisory' }
]

export const leadershipOfficials = [
  {
    id: 'patron-01',
    name: 'Alhaji Atiku Abubakar, GCON',
    rankTitle: 'Grand Patron & Inspiration',
    category: 'advisory',
    state: 'Adamawa',
    badgeCode: 'PAT-01',
    photoUrl: '', // Ready for official portrait
    initials: 'AA',
    quote: 'The youth of Northern Nigeria are not merely tomorrow’s leaders; they must become active architects of today’s governance and economic renaissance.',
    bio: 'Former Vice President of the Federal Republic of Nigeria, seasoned statesman, and champion of human capital development and youth empowerment.',
    socials: {
      twitter: 'https://twitter.com/atiku',
      facebook: 'https://facebook.com/atiku',
      linkedin: 'https://linkedin.com',
      email: 'patron@anyv.ng'
    }
  },
  {
    id: 'exec-salim-ontop',
    name: 'Engr. Salim Sharubutu Yusuf (Ontop)',
    popularName: 'Engr. Salim (ONTOP) Sharubutu',
    rankTitle: 'National Convener',
    category: 'executive',
    state: 'Plateau / Northern Liaison',
    badgeCode: 'NAT-01',
    // photoUrl: '/images/officials/salim-ontop.png', // Commented out for now
    photoUrl: '',
    initials: 'SO',
    portfolioRoles: [
      'Managing Director @ Tiptop Constructions',
      'Emerging Northern Youth Leader & Youth Advocate',
      'Ex-Nigerian Students President in Diaspora (Uni of Ostrava, Czech Republic)',
      'Alumnus of UniJos & Ex-D.O.S UniJos'
    ],
    quote: 'Northern Nigeria’s transformation rests upon building bridges between enterprise, education, and accountable youth leadership across all 19 states.',
    bio: 'Managing Director at Tiptop Constructions, renowned Northern youth advocate, and dynamic entrepreneur. Former Nigerian Students President in diaspora at the University of Ostrava, Czech Republic, and distinguished alumnus / ex-Director of Socials (D.O.S) at the University of Jos. Committed to regional connectivity, youth enterprise, and leadership development beyond transient election cycles.',
    socials: {
      email: 'Salimontop1@gmail.com',
      linkedin: 'https://www.linkedin.com/in/engr-salim-s-b56241233',
      instagram: 'https://www.instagram.com/saleem_ontop/',
      threads: 'https://www.threads.net/@Saleem_ontop',
      twitter: 'https://x.com/OntopSalim'
    }
  },
  {
    id: 'exec-benjamin-maina',
    name: 'Dr. Benjamin Maina, PhD',
    rankTitle: 'Vice National Coordinator / Convener',
    category: 'executive',
    state: 'National Leadership',
    badgeCode: 'NAT-02',
    // photoUrl: '/images/officials/benjamin-maina.png', // Commented out for now
    photoUrl: '',
    initials: 'BM',
    portfolioRoles: [
      'Lecturer, Researcher & Development Practitioner',
      'Team Lead @ Foundation for Community Empowerment Initiative (FOCEI)',
      'Deputy President @ University of Jos Alumni Association (UJAA)',
      'Secretary @ Gombe Network of Civil Society (GONET)',
      'PhD & M.Sc (UniJos) | B.Sc Hons (Gombe State University)'
    ],
    quote: 'Passionate about turning knowledge and evidence into practical solutions, strengthening citizen participation, and creating opportunities for young people to lead sustainable development.',
    bio: 'Lecturer, Researcher, Civil Society Advocate, and Development Practitioner with expertise in governance, social inclusion, youth development, environmental sustainability, peacebuilding, and community empowerment. Holds a B.Sc from GSU, and an M.Sc and PhD from the University of Jos. Former President of the Nigeria Association of Geography Students and Students’ Representative Council.',
    socials: {
      email: 'benjamin.maina@anyv.ng'
    }
  },
  {
    id: 'exec-nafiu-gulumbe',
    name: 'Nafiu Sani Gulumbe',
    rankTitle: 'National Secretary',
    category: 'executive',
    state: 'Kebbi / North-West',
    badgeCode: 'NAT-03',
    // photoUrl: '/images/officials/nafiu-gulumbe.png', // Commented out for now
    photoUrl: '',
    initials: 'NG',
    portfolioRoles: [
      'Polytechnic Lecturer & Applied Chemist',
      'McKinsey Fellow, ONE Champion & Climate Reality Leader',
      'Executive Director @ Kebbi Open Defecation Free Initiative (KOD-Fi)',
      'Co-founder & Sec. Gen. @ KIDCA | Lead Strategic Comms @ OGP Kebbi',
      'Ph.D. Candidate (UDUS) | EMBA (Quantic DC) | M.Sc (ABU) | B.Sc (AFUSTA)',
      'Youth Leader @ NASME Kebbi | Pioneer President @ JPI Kebbi'
    ],
    quote: 'Let\'s get to work... on establishing and strengthening a formidable, reliable, progressive, regionally strategic, and politically indispensable vanguard to reckon with for the development of Arewa and Nigeria.',
    bio: 'Applied chemist, environmentalist, youth development activist, ONE champion, climate reality leader, McKinsey Fellow, Electoral College of Nigeria (ECN) Associate, polytechnic lecturer, and Tony Elumelu Foundation mentor. Founder and Executive Director of KOD-Fi, Co-founder and Secretary General of KIDCA, and Lead Strategic Communications at the Open Government Partnership (OGP) Secretariat in Kebbi State. Holds an Executive MBA from the Quantic School of Business and Technology (Washington, DC), an M.Sc in Color Chemistry from ABU Zaria, and is pursuing a Ph.D. in Petroleum Chemistry at Usmanu Danfodiyo University Sokoto.',
    socials: {
      email: 'nsgulumbe@gmail.com',
      linkedin: 'https://www.linkedin.com/in/nafiu-sani-gulumbe-b3771057',
      facebook: 'https://www.facebook.com/nafiu.gulumbe',
      instagram: 'https://www.instagram.com/nsgulumbe/',
      twitter: 'https://twitter.com/nsgulumbe'
    }
  },
  {
    id: 'zonal-01',
    name: '[Official Name Pending]',
    rankTitle: 'Zonal Vice Coordinator (North-West)',
    category: 'zonal',
    state: 'Sokoto',
    badgeCode: 'ZON-NW',
    photoUrl: '',
    initials: 'NW',
    quote: 'Connecting 7 North-West states: Jigawa, Kaduna, Kano, Katsina, Kebbi, Sokoto, and Zamfara.',
    bio: 'Leads mobilization, grassroots ward councils, and economic forums across the North-West zone.',
    socials: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      email: 'northwest@anyv.ng'
    }
  },
  {
    id: 'zonal-02',
    name: '[Official Name Pending]',
    rankTitle: 'Zonal Vice Coordinator (North-East)',
    category: 'zonal',
    state: 'Gombe',
    badgeCode: 'ZON-NE',
    photoUrl: '',
    initials: 'NE',
    quote: 'Catalyzing reconstruction, youth innovation, and educational revival across the North-East.',
    bio: 'Coordinates chapters across Adamawa, Bauchi, Borno, Gombe, Taraba, and Yobe.',
    socials: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      email: 'northeast@anyv.ng'
    }
  },
  {
    id: 'zonal-03',
    name: '[Official Name Pending]',
    rankTitle: 'Zonal Vice Coordinator (North-Central)',
    category: 'zonal',
    state: 'Kwara',
    badgeCode: 'ZON-NC',
    photoUrl: '',
    initials: 'NC',
    quote: 'Promoting peacebuilding, civic engagement, and agricultural entrepreneurship in the Middle Belt.',
    bio: 'Oversees chapters in Benue, Kogi, Kwara, Nasarawa, Niger, Plateau, and FCT Abuja.',
    socials: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      email: 'northcentral@anyv.ng'
    }
  },
  {
    id: 'dir-01',
    name: '[Official Name Pending]',
    rankTitle: 'Director of Women Leadership & Inclusion',
    category: 'directorate',
    state: 'Borno',
    badgeCode: 'DIR-WLI',
    photoUrl: '',
    initials: 'WL',
    quote: 'Northern women are the backbone of community stability and economic resilience.',
    bio: 'Heads dedicated leadership incubators, mentoring programs, and advocacy for women across all 19 Northern states.',
    socials: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      email: 'women@anyv.ng'
    }
  },
  {
    id: 'dir-02',
    name: '[Official Name Pending]',
    rankTitle: 'Director of Policy, Research & Strategy',
    category: 'directorate',
    state: 'Niger',
    badgeCode: 'DIR-PRS',
    photoUrl: '',
    initials: 'PS',
    quote: 'Bridging grassroots citizen needs with evidence-based public policy proposals.',
    bio: 'Directs policy white papers, legislative monitoring, and the ANYV Think Tank.',
    socials: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      email: 'policy@anyv.ng'
    }
  },
  {
    id: 'dir-03',
    name: '[Official Name Pending]',
    rankTitle: 'Director of Media & Strategic Communications',
    category: 'directorate',
    state: 'Bauchi',
    badgeCode: 'DIR-MSC',
    photoUrl: '',
    initials: 'MC',
    quote: 'Telling the true story of Northern youth ingenuity, civic courage, and regional unity.',
    bio: 'Manages press relations, digital media operations, and official public communiques.',
    socials: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      email: 'media@anyv.ng'
    }
  }
]
