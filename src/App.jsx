import { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const v = localStorage.getItem('darkMode')
      return v === null ? true : JSON.parse(v)
    } catch {
      return true
    }
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const rootClass = darkMode
    ? 'bg-[#0f172a] text-white'
    : 'bg-white text-gray-900';

  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className={`${rootClass} font-sans transition-colors duration-300`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172acc] backdrop-blur-md border-b border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hello"
            onClick={() => setMobileOpen(false)}
            className="flex items-center text-xl font-bold tracking-wide text-[#A4AA7C] cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Go to top"
          >
            <img
              src="/mjkl-logo-2025.png"
              alt="Melglenn logo"
              className="h-8 w-8 mr-2"
            />
            <span>&lt;mel-dev&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 text-sm text-gray-300 font-medium">
            <li>
              <a href="#hello" className="hover:text-[#065F89] transition-colors duration-200">
                Hi <span role="img" aria-label="waving hand">👋</span>
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#065F89] transition-colors duration-200">
                About <span role="img" aria-label="information">ℹ️</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#065F89] transition-colors duration-200">
                Projects <span role="img" aria-label="rocket">🚀</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#065F89] transition-colors duration-200">
                Contact <span role="img" aria-label="envelope">✉️</span>
              </a>
            </li>
          </ul>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden p-2 rounded hover:bg-gray-700/50 transition-colors"
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                /* X icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                /* Hamburger icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>

            {/* Theme toggle switch */}
            <label className="inline-flex items-center cursor-pointer relative">
              {/* Hidden checkbox */}
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(dm => !dm)}
                className="sr-only peer"
                aria-label="Toggle light/dark mode"
              />

              {/* Track */}
              <div
                className={`
                  w-12 h-6 rounded-full
                  bg-gray-300 peer-checked:bg-gray-600
                  transition-colors duration-200
                `}
              />

              {/* Thumb */}
              <div
                className={`
                  absolute top-0.5 left-0.5
                  w-5 h-5 bg-white rounded-full shadow
                  transition-transform duration-200
                  peer-checked:translate-x-6
                `}
              />
            </label>
          </div>
        </div>

        {/* Mobile menu (animated dropdown) */}
        <div
          className={`
            md:hidden
            bg-[#0f172acc] backdrop-blur-md border-t border-white/10
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${mobileOpen ? 'max-h-screen' : 'max-h-0'}
          `}
        >
          <ul
            className={`
              flex flex-col items-center gap-4 px-6
              transition-[opacity, padding] duration-300 ease-in-out
              ${mobileOpen ? 'py-4 opacity-100' : 'py-0 opacity-0'}
              text-gray-300
            `}
          >
            {['hello','about','projects','contact'].map((id, idx) => {
              const labels = [
                <>Hi <span role="img" aria-label="waving">👋</span></>,
                <>About <span role="img" aria-label="info">ℹ️</span></>,
                <>Projects <span role="img" aria-label="rocket">🚀</span></>,
                <>Contact <span role="img" aria-label="mail">✉️</span></>,
              ];
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="block hover:text-[#065F89] transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {labels[idx]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <Hello darkMode={darkMode} />
      <About darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />

    </div>
  );
}

// Hello Section
function Hello({ darkMode }) {
  const bg            = darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-gray-900';
  const bgColor       = darkMode ? 'text-white' : 'text-[#263350]';
  const subtitleColor = darkMode ? 'text-gray-400' : 'text-gray-700';
  const btnBg         = darkMode
    ? 'bg-[#065F89] hover:bg-[#05486b] text-white'
    : 'bg-[#065F89]/80 hover:bg-[#065F89] text-white';

  return (
    <section
      id="hello"
      className={`${bg} min-h-screen flex items-center justify-center transition-colors duration-300`}
    >
      <div className="max-w-3xl mx-auto text-center px-6 pt-24 pb-16 space-y-6">
        {/* Animated Blob Photo */}
        <div className="w-[350px] h-[300px] mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#065F89] to-[#A4AA7C] p-[4px] shadow-lg animate-blob" style={{ borderRadius: '44% 62% 32% 30%' }}>
            <div className="w-full h-full bg-[#0f172a] overflow-hidden" style={{ borderRadius: 'inherit' }}>
              <img
                src="/mjkl-picture-2023.png"
                alt="Melglenn James"
                className="w-full h-full object-cover"
                style={{ borderRadius: 'inherit' }}
              />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold">
          <span className={bgColor}>Hi, I’m</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065F89] to-[#A4AA7C]">
            Melglenn James K. Lonogan
          </span>
        </h1>

        {/* Subtitle */}
        <h2
          className={`relative inline-block text-2xl sm:text-3xl font-semibold ${bgColor}`}
        >
          <span className="relative inline-block">
            Full-Stack Developer

            {/* Full-width hand-drawn underline */}
            <svg
              className="sketch-underline absolute left-0 right-0 mx-auto bottom-[-10px] w-full h-[20px] pointer-events-none"
              viewBox="0 0 400 40"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="underlineGrad" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%"  stopColor="#065F89"/>
                  <stop offset="100%" stopColor="#A4AA7C"/>
                </linearGradient>
              </defs>
              {/* Longer wavy path spanning entire width */}
              <path
                d="M5 25 C 80 45, 320 5, 395 25"
                stroke="url(#underlineGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="100"
              />
            </svg>
          </span>
        </h2>

        {/* Short Description */}
        <p className={`${subtitleColor} text-lg max-w-lg mx-auto`}>
          Building end-to-end solutions, from intuitive interfaces to backend services and data persistence, ensuring seamless experiences across platforms.
        </p>

        <a
          href="#projects"
          className={`inline-block px-6 py-3 rounded-full transition duration-300 ${btnBg}`}
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

// About Section
function About({ darkMode }) {
  const bg        = darkMode ? 'bg-[#0f1c2e] text-white' : 'bg-gray-100 text-gray-900';
  const highlight = darkMode ? 'text-[#A4AA7C]' : 'text-[#065F89]';
  const textColor = darkMode ? 'text-gray-300' : 'text-gray-700';

  return (
    <section
      id="about"
      className={`${bg} relative overflow-hidden py-24 px-6 text-center transition-colors duration-300`}
    >
      {/* Animated Blob3 Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[950px] h-[350px] bg-[#065F89]/10 animate-blob3"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${highlight}`}>
          About Me{' '}
          <span role="img" aria-label="technologist" className="inline-block ml-2">
            🧑‍💻
          </span>
        </h2>
        <p className={`leading-relaxed ${textColor}`}>
          I’m a <span className={highlight}>Bachelor of Science in Computer Science</span> graduate from the{' '}
          <span className={highlight}>University of Baguio</span> (Class of 2024). Currently, I serve as an{' '}
          <span className={highlight}>IT Support Specialist</span> and designated <span className={highlight}>Programmer</span> at{' '}
          <span className={highlight}>Treasure Link Cooperative Society</span>. In this role, I deliver hands-on <span className={highlight}>technical support</span> and actively{' '}
          <span className={highlight}>build full-stack solutions</span>, crafting intuitive user interfaces and developing robust back-end services and databases. Eager to embrace new challenges, I’m committed to ongoing growth, continually expanding my knowledge and sharpening my skills.
        </p>
      </div>
    </section>
  );
}


// Projects Section
function ProjectsSection({ darkMode }) {
  // Types of Projects
  const types = [
    { label: 'All',       value: 'all' },
    { label: 'College',   value: 'college' },
    { label: 'Online Courses',   value: 'courses' },
    { label: 'Employment',value: 'employment' },
  ];

  // Tech Filter Groups
  const techGroups = [
    // Styling/CSS frameworks
    ['HTML','CSS','Tailwind','Bootstrap','Alpine'],
    // JavaScript ecosystem
    ['JavaScript','React','Express','TypeScript'],
    // Back-end & CMS
    ['WordPress','PHP','Laravel','Livewire','MySQL'],
    // Other Skills
    ['Photoshop','Web Design','Trello','Docker','WooCommerce']
  ];

  // Project Data
  const projects = [
    {
      id: 1,
      type: 'employment',
      title: 'TLCS-INVMS',
      description: 'As my first professional project, I assisted in developing a full-stack inventory management system, implementing user authentication, CRUD operations, PDF export, end-to-end database integration, and all other necessary system features. We successfully containerized and deployed the application company-wide via Docker.',
      image: '/tlcs-invms.png',
      tags: ['React','Express','Tailwind','MySQL','Docker'],
      github: null,
      demo: null
    },
    {
      id: 2,
      type: 'employment',
      title: 'TLCS BCO Attendance',
      description: 'For my second project, I built an attendance system featuring user authentication and full CRUD functionality. I started with the Laravel starter kit integrated with React, then customized its scaffold and implemented all necessary modules to deliver a robust attendance management solution.',
      image: '/tlcs-bco-attendance.png',
      tags: ['Laravel','React','TypeScript','Tailwind','MySQL','Docker'],
      github: null,
      demo: null
    },
    {
      id: 3,
      type: 'college',
      title: 'E-commerce Website',
      description: 'Created using WordPress and PHP during my OJT at Linkage Web Development. I began by designing the site layout in Photoshop and gathering assets, then proceeded to code the website using a template provided by the company.',
      image: '/strapped-ecommerce.png',
      tags: ['WordPress','PHP','Photoshop','Web Design','WooCommerce','CSS'],
      github: null,
      demo: 'https://strapped.customadesign.info/'
    },
    {
      id: 4,
      type: 'college',
      title: 'Academic Management System',
      description: 'Serving as one of the developers on a four-person team, I helped build our 4th-Year Capstone project using the TALL stack. I then represented our team at our research colloquium, where I was awarded second-best presenter.',
      image: '/academic-management-system.png',
      tags: ['Tailwind','Alpine','Laravel','Livewire','MySQL','Trello','PHP'],
      github: 'https://github.com/Judaemon/Academic-Management-System',
      demo: null
    },
    {
      id: 5,
      type: 'college',
      title: 'Ganduyan Taxi Tours Management',
      description: 'Developed as a 3rd-year Software Engineering project in hopes of supporting my family’s taxi business, our four-person team created a management system. Though never deployed or actively used, I served as project manager, leveraging my understanding of taxi operations to guide development.',
      image: '/ganduyan-taxi-management-system.png',
      tags: ['Laravel','Bootstrap','MySQL','PHP'],
      github: null,
      demo: null
    },
    {
      id: 6,
      type: 'courses',
      title: 'Survey Form',
      description: 'As my first project in the freeCodeCamp Responsive Web Design Certificate, I designed and developed a simple, responsive survey form.',
      image: '/survey-form.png',
      tags: ['HTML','CSS'],
      github: null,
      demo: 'https://www.freecodecamp.org/certification/mjkl21/responsive-web-design'
    },
    {
      id: 7,
      type: 'courses',
      title: 'Tribute Page',
      description: 'For the second project in the freeCodeCamp Responsive Web Design Certificate, I developed a fully responsive tribute page showcasing a mock “coding journey” of my own.',
      image: '/tribute-page.png',
      tags: ['HTML','CSS'],
      github: null,
      demo: 'https://www.freecodecamp.org/certification/mjkl21/responsive-web-design'
    },
    {
      id: 8,
      type: 'courses',
      title: 'Technical Documentation',
      description: 'As my third project in the freeCodeCamp Responsive Web Design Certificate, I built a technical documentation page that explores the history and evolution of the “Hello World” tradition.',
      image: '/technical-documentation.png',
      tags: ['HTML','CSS'],
      github: null,
      demo: 'https://www.freecodecamp.org/certification/mjkl21/responsive-web-design'
    },
    {
      id: 9,
      type: 'courses',
      title: 'Product Landing Page',
      description: 'For the fourth project in the freeCodeCamp Responsive Web Design Certificate, I created a simple and responsive product landing page that endorses a Computer Science course.',
      image: '/product-landing-page.png',
      tags: ['HTML','CSS'],
      github: null,
      demo: 'https://www.freecodecamp.org/certification/mjkl21/responsive-web-design'
    },
    {
      id: 10,
      type: 'courses',
      title: 'Personal Portfolio Webpage',
      description: 'As the fifth and final project in the freeCodeCamp Responsive Web Design Certificate, I designed a responsive personal portfolio webpage showing the sections needed in a portfolio.',
      image: '/personal-portfolio-webpage.png',
      tags: ['HTML','CSS'],
      github: null,
      demo: 'https://www.freecodecamp.org/certification/mjkl21/responsive-web-design'
    },
  ];

  // State
  const [selectedType,   setSelectedType]   = useState('all');
  const [selectedTechs,  setSelectedTechs]  = useState([]);
  const [currentPage,    setCurrentPage]    = useState(1);
  const itemsPerPage = 6;

  // Filters
  const byType = selectedType === 'all'
    ? projects
    : projects.filter(p => p.type === selectedType);

  const byTech = selectedTechs.length === 0
    ? byType
    : byType.filter(p =>
        p.tags.some(tag => selectedTechs.includes(tag))
      );

  // Pagination
  const totalPages = Math.ceil(byTech.length / itemsPerPage);
  const start      = (currentPage - 1) * itemsPerPage;
  const paginated  = byTech.slice(start, start + itemsPerPage);

  // Theming Classes
  const sectionBg       = darkMode ? 'bg-[#0f172a]'    : 'bg-white';
  const headingColor    = darkMode ? 'text-[#A4AA7C]'  : 'text-[#065F89]';
  const cardBg          = darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900';
  const descColor       = darkMode ? 'text-gray-400'  : 'text-gray-700';
  const tagBg           = darkMode ? 'bg-[#A4AA7C]/50 text-white' : 'bg-[#A4AA7C]/50 text-gray-900';
  const linkOff         = darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900';
  const selectBg        = darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900';
  const btnOff          = darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  const btnOn           = 'bg-[#065F89] text-white';
  const paginationBtn   = darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900';
  const paginationActive= 'bg-[#065F89] text-white';

  // Handlers
  const toggleTech = tech => {
    setCurrentPage(1);
    setSelectedTechs(s =>
      s.includes(tech) ? s.filter(x => x !== tech) : [...s, tech]
    );
  };
  const resetAll = () => {
    setCurrentPage(1);
    setSelectedTechs([]);
    setSelectedType('all');
  };

  const [modalSrc, setModalSrc] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = (src) => {
    setModalSrc(src);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setModalSrc(null);
    }, 200);
  };

  return (
    <section id="projects" className={`${sectionBg} py-24 px-6 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center ${headingColor}`}>
          My Projects <span role="img" aria-label="rocket">🛠️</span>
        </h2>

        {/* Type Dropdown */}
        <div className="flex justify-center mb-4">
          <select
            className={`px-4 py-2 rounded mb-4 ${selectBg} focus:outline-none`}
            value={selectedType}
            onChange={e => { setSelectedType(e.target.value); setCurrentPage(1); }}
          >
            {types.map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        {/* Grouped Tech Filters */}
        <div className="space-y-2 mb-6">
          {techGroups.map((group, gi) => (
            <div key={gi} className="flex flex-wrap gap-2 justify-center">
              {group.map(tech => {
                const active = selectedTechs.includes(tech);
                return (
                  <button
                    key={tech}
                    onClick={() => toggleTech(tech)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition ${active ? btnOn : btnOff}`}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>
          ))}
          <div className="flex justify-center">
            <button
              onClick={resetAll}
              className={`px-4 py-1 mt-4 rounded text-sm font-medium transition ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-300'}`}
            >
              Reset All Filters
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map(p => (
            <div
              key={p.id}
              className="relative rounded-xl p-[3px] glow-border transition-transform duration-300 hover:-translate-y-2"
              style={{ minHeight: '460px' }}
            >
              <div
                className={`${cardBg} h-full flex flex-col rounded-lg overflow-hidden cursor-pointer`}
                onClick={() => openModal(p.image)}
              >
                {/* Image */}
                <img src={p.image} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />

                {/* Content */}
                <div className="flex flex-col justify-between flex-grow p-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className={`${descColor} text-sm mb-3`}>{p.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map(tag => (
                        <span key={tag} className={`px-2 py-1 ${tagBg} text-xs rounded-full`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center ${linkOff}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58
                              0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73
                              1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.31 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93
                              0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3
                              .4c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49
                              5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                            />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex items-center ${linkOff}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3z" />
                            <path d="M5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 
                                    2-2v-7h-2v7H5V5z" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button
                key={n}
                onClick={() => setCurrentPage(n)}
                className={`px-3 py-1 rounded ${n === currentPage ? paginationActive : paginationBtn}`}
              >
                {n}
              </button>
            ))}
          </div>
        )}

        {/* Image Modal */}
        {modalSrc && (
          <div
            className={`
              fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4
              transition-opacity duration-200 ease-out
              ${isAnimating ? 'opacity-100' : 'opacity-0'}
            `}
            onClick={closeModal}
          >
            <div
              className={`
                relative max-w-full max-h-full overflow-auto
                transition-transform duration-200 ease-out
                ${isAnimating ? 'scale-100' : 'scale-95'}
              `}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={modalSrc}
                alt="Project Screenshot"
                className="block max-w-full max-h-full"
              />
              <button
                className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Contact Section
function ContactSection({ darkMode }) {
  const sectionBg    = darkMode ? 'bg-[#0f1c2e]' : 'bg-gray-100';
  const iconColor    = darkMode ? 'text-gray-300' : 'text-gray-700';
  const hoverColor   = 'hover:text-[#065F89]';
  const footerColor  = darkMode ? 'text-gray-500' : 'text-gray-600';
  const headingColor = darkMode ? 'text-[#A4AA7C]' : 'text-[#065F89]';

  return (
    <section
      id="contact"
      className={`${sectionBg} relative overflow-hidden py-16 px-6 transition-colors duration-300`}
    >
      {/* Animated Blob2 background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="
            w-[1150px] h-[250px]
            bg-[#A4AA7C]/20
            animate-blob2
          "
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
        <h2 className={`text-3xl font-bold ${headingColor}`}>
          Get in Touch{' '}
          <span role="img" aria-label="handshake" className="inline-block ml-2">
            🤝
          </span>
        </h2>

        {/* Contact Section Elements */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 ${iconColor} justify-items-center`}>
          {/* GitHub */}
          <a
            href="https://github.com/mjklench"
            title="GitHub: mjklench"
            aria-label="GitHub: mjklench"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center ${hoverColor} transition`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 
                   0-.285-.011-1.041-.017-2.044-3.338.726-4.042-1.61-4.042-1.61-.546-1.387
                   -1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 
                   1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.774.418
                   -1.305.76-1.605-2.665-.303-5.466-1.333-5.466-5.932 0-1.31.468
                   -2.381 1.235-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008
                   -.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005
                   2.047.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.656
                   1.653.244 2.873.12 3.176.77.84 1.232 1.911 1.232 
                   3.221 0 4.61-2.807 5.625-5.48 5.921.43.372.823 
                   1.102.823 2.222 0 1.606-.015 2.901-.015 
                   3.293 0 .319.216.694.825.576C20.565 21.796 24 
                   17.298 24 12 24 5.371 18.627 0 12 0z"
              />
            </svg>
            <span className="text-sm">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mjklonogan21/"
            title="LinkedIn: mjklonogan21"
            aria-label="LinkedIn: mjklonogan21"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center ${hoverColor} transition`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 5 3.72 6.25 2.23 6.25 0.72 6.25-.53 5-.53 3.5
                       S0.72.75 2.23.75c1.49 0 2.75 1.25 2.75
                       2.75zM.5 8.5H3.95v12H.5v-12zm8.5 0h3.44v1.65h.05
                       c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.32 2.4 
                       4.32 5.52v6.68H16.5v-5.92c0-1.41-.03
                       -3.22-1.97-3.22-1.97 0-2.27 1.54-2.27 
                       3.12v6.02H8.5v-12z" />
            </svg>
            <span className="text-sm">LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:lonogan.melglennjk@gmail.com"
            title="Email: lonogan.melglennjk@gmail.com"
            aria-label="Email: lonogan.melglennjk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center ${hoverColor} transition`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 4.27C2.01 2.88 3.02 1.75 4.4
                       1.75h15.2c1.38 0 2.39 1.13 2.39 
                       2.52v14.96c0 1.38-1.01 2.52-2.39
                       2.52H4.4c-1.38 0-2.39-1.13-2.39
                       -2.52V4.27zm2.02.23v.04l8
                       6.34 8-6.34v-.04H4.03zm0 2.11l7.71 
                       6.12c.19.15.44.15.63 0L20 
                       6.38v12.18l-16-.01V6.61z" />
            </svg>
            <span className="text-sm">lonogan.melglennjk@gmail.com</span>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/4wZgRmTYk2uDCXyQ7"
            title="Baguio, Philippines"
            aria-label="Baguio, Philippines"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center ${hoverColor} transition`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
              />
            </svg>
            <span className="text-sm">Baguio, Philippines</span>
          </a>
        </div>

        {/* Copyright */}
        <p className={`${footerColor} text-xs`}>
          &copy; {new Date().getFullYear()} Melglenn James Kiley Lonogan. All rights reserved.
        </p>
      </div>
    </section>
  );
}
