import { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const val = localStorage.getItem('darkMode');
    return val === null ? true : JSON.parse(val);
  });

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
          <div className="flex items-center text-xl font-bold tracking-wide text-[#A4AA7C]">
            <img
              src="/mjkl-logo-2025.png"
              alt="Melglenn logo"
              className="h-8 w-8 mr-2"
            />
            <span>mel.dev</span>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 text-sm text-gray-300 font-medium">
            <li>
              <a href="#hero" className="hover:text-[#065F89] transition-colors duration-200">
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
          <div className="flex items-center">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden p-2 rounded hover:bg-gray-700/50 transition-colors"
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

            {/* Theme toggle */}
            <button
              onClick={() => setDarkMode(dm => !dm)}
              className="ml-2 p-2 rounded hover:bg-gray-700/50 transition-colors"
              aria-label="Toggle light/dark mode"
            >
              {darkMode ? (
                /* Sun icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a7.646 7.646 0 100 15.292 7.646 7.646 0 000-15.292zM12 2v2.5M12 19.5V22M4.354 12H2m19.5 0h-2.5M5.636 5.636l-1.768-1.768m15.364 15.364l-1.768-1.768M18.364 5.636l1.768-1.768M2.596 19.364l1.768-1.768"/>
                </svg>
              ) : (
                /* Moon icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                </svg>
              )}
            </button>
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
              flex flex-col gap-4 px-6
              transition-[opacity, padding] duration-300 ease-in-out
              ${mobileOpen ? 'py-4 opacity-100' : 'py-0 opacity-0'}
              text-gray-300
            `}
          >
            {['hero','about','projects','contact'].map((id, idx) => {
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

      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />

    </div>
  );
}

// Hero Section
function Hero({ darkMode }) {
  const bg = darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-gray-900';
  const hiColor = darkMode ? 'text-white' : 'text-[#263350]';
  return (
    <section
      id="hero"
      className={`${bg} min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 text-center transition-colors duration-300`}
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
        <span className={hiColor}>Hi, I’m</span>{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065F89] to-[#A4AA7C]">
          Melglenn James
        </span>
      </h1>
      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-xl text-lg mb-6`}>
        Full-stack developer crafting sleek, scalable web apps with React, Tailwind, Laravel & MySQL.
      </p>
      <a
        href="#projects"
        className={`px-6 py-3 mt-4 rounded-full transition duration-300
          ${darkMode
            ? 'bg-[#065F89] hover:bg-[#05486b] text-white'
            : 'bg-[#065F89]/80 hover:bg-[#065F89] text-white'}
        `}
      >
        View My Work
      </a>
    </section>
  );
}

// About Section
function About({ darkMode }) {
  const bg = darkMode ? 'bg-[#0f1c2e] text-white' : 'bg-gray-100 text-gray-900';
  const highlight = darkMode ? 'text-[#A4AA7C]' : 'text-[#065F89]';
  return (
    <section id="about" className={`${bg} py-24 px-6 text-center transition-colors duration-300`}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${highlight}`}>About Me</h2>
        <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          I’m a passionate full-stack developer with experience in{' '}
          <span className={highlight}>React</span>,{' '}
          <span className={highlight}>Laravel</span>,{' '}
          <span className={highlight}>MySQL</span>, and{' '}
          <span className={highlight}>Tailwind CSS</span>. I love building elegant UIs…
        </p>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection({ darkMode }) {
  const allTechs = ['PHP','CSS','MySQL','JavaScript','React','Tailwind'];
  const [selected, setSelected] = useState([]);
  const [view, setView] = useState('grid');

  const projects = [
    {
      id: 1, title: 'Project A',
      desc: 'A CRUD app built with PHP & MySQL.',
      img: 'https://via.placeholder.com/400x250',
      github: 'https://github.com/username/project-a',
      live:   'https://example.com/a',
      tech: ['PHP','MySQL']
    },
    {
      id: 2, title: 'Project B',
      desc: 'A single-page React app styled with Tailwind.',
      img: 'https://via.placeholder.com/400x250',
      github: 'https://github.com/username/project-b',
      live:   null,
      tech: ['React','Tailwind','JavaScript']
    },
  ];

  const toggleTech = tech => {
    setSelected(sel =>
      sel.includes(tech)
        ? sel.filter(t => t !== tech)
        : [...sel, tech]
    );
  };

  const shown = selected.length === 0
    ? projects
    : projects.filter(p => p.tech.some(t => selected.includes(t)));

  const sectionBg = darkMode ? 'bg-[#0f172a]' : 'bg-white';
  const headingColor = darkMode ? 'text-[#A4AA7C]' : 'text-[#065F89]';
  const btnOff = darkMode
    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
    : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  const btnOn  = 'bg-[#065F89] text-white';
  const cardBg = darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900';
  const descColor = darkMode ? 'text-gray-400' : 'text-gray-700';
  const tagBg = `${darkMode ? 'bg-[#A4AA7C]/50 text-white' : 'bg-[#A4AA7C]/50 text-gray-900'}`;
  const linkOff = darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900';
  const viewBtnOff = darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-300';

  return (
    <section
      id="projects"
      className={`${sectionBg} py-24 px-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-8 text-center ${headingColor}`}
        >
          My Projects
        </h2>

        {/* Tech filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {allTechs.map(tech => {
            const isOn = selected.includes(tech);
            return (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  isOn ? btnOn : btnOff
                }`}
              >
                {tech}
              </button>
            );
          })}
          <button
            onClick={() => setSelected([])}
            className={`ml-4 px-3 py-1 rounded-full text-sm transition ${
              darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-300'
            }`}
          >
            Reset
          </button>
        </div>

        {/* View toggle */}
        <div className="flex justify-end mb-4 space-x-2">
          <button
            onClick={() => setView('grid')}
            className={`p-2 rounded ${
              view === 'grid' ? btnOn : viewBtnOff
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h6v6H4V4zm0 8h6v6H4v-6zm8-8h6v6h-6V4zm0 8h6v6h-6v-6z"/>
            </svg>
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 rounded ${
              view === 'list' ? btnOn : viewBtnOff
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
            </svg>
          </button>
        </div>

        {/* Grid or List */}
        {view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map(p => (
              <div key={p.id} className={`${cardBg} rounded-lg overflow-hidden shadow-lg`}>
                <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className={`${descColor} text-sm mb-3`}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tech.map(t => (
                      <span key={t} className={`px-2 py-1 ${tagBg} text-xs rounded-full`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center ${linkOff}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
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
                        GitHub
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#065F89] hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-6">
            {shown.map(p => (
              <li key={p.id} className={`${cardBg} rounded-lg p-4 flex items-center gap-4 shadow-md`}>
                <img src={p.img} alt={p.title} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className={`${descColor} text-sm mb-2`}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-1">
                    {p.tech.map(t => (
                      <span key={t} className={`px-2 py-1 ${tagBg} text-xs rounded-full`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center ${linkOff}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
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
                        GitHub
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#065F89] hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

// Contact Section
function ContactSection({ darkMode }) {
  const sectionBg = darkMode ? 'bg-[#0f1c2e]' : 'bg-gray-100';
  const textBase  = darkMode ? 'text-white' : 'text-gray-900';
  const iconColor = darkMode ? 'text-gray-300' : 'text-gray-700';
  const hoverColor= 'hover:text-[#065F89]';
  const footerColor = darkMode ? 'text-gray-500' : 'text-gray-600';
  const headingColor = darkMode ? 'text-[#A4AA7C]' : 'text-[#065F89]';

  return (
    <section
      id="contact"
      className={`${sectionBg} py-24 px-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className={`text-3xl font-bold ${headingColor}`}>
          Get in Touch
        </h2>

        {/* Social Icons */}
        <div className={`flex justify-center gap-8 ${iconColor}`}>
          <a
            href="https://github.com/mjklench"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center ${hoverColor} transition`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mb-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
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

          <a
            href="https://www.linkedin.com/in/mjklonogan21/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center ${hoverColor} transition`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mb-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
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

          <a
            href="mailto:lonogan.melglennjk@gmail.com"
            className={`flex flex-col items-center ${hoverColor} transition`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mb-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 4.27C2.01 2.88 3.02 1.75 4.4
                       1.75h15.2c1.38 0 2.39 1.13 2.39 
                       2.52v14.96c0 1.38-1.01 2.52-2.39
                       2.52H4.4c-1.38 0-2.39-1.13-2.39
                       -2.52V4.27zm2.02.23v.04l8
                       6.34 8-6.34v-.04H4.03zm0 2.11l7.71 
                       6.12c.19.15.44.15.63 0L20 
                       6.38v12.18l-16-.01V6.61z" />
            </svg>
            <span className="text-sm">Email</span>
          </a>
        </div>

        <p className={`${footerColor} text-xs`}>
          &copy; {new Date().getFullYear()} Melglenn James Kiley Lonogan. All rights reserved.
        </p>
      </div>
    </section>
  );
}
