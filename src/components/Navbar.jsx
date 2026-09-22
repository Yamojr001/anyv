import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  MagnifyingGlass,
  List,
  X,
  Sparkle
} from '@phosphor-icons/react'

export default function Navbar({ onVerifyClick }) {
  const [navOpen, setNavOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About & Charter' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/programs', label: 'Programs' },
    { to: '/chapters', label: 'State Chapters' },
    { to: '/news', label: 'Gazette & News', badge: 'Soon' },
    { to: '/cms', label: 'Secretariat CMS', badge: 'Portal' }
  ]

  return (
    <>
      {/* Top Archival Gazette Bar */}
      <div className="bg-[#10241f] text-[#aebf9e] border-b border-[#1f3f37] text-xs py-2 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-[#c9963c] animate-pulse"></span>
            <span className="tracking-wider">OFFICIAL YOUTH CHARTER &bull; 19 NORTHERN STATES &amp; FCT</span>
          </div>
          <div className="flex items-center gap-4 text-[#7c9473] text-[11px]">
            <span>FOUNDATION: CONTINUOUS ENGAGEMENT</span>
            <span className="hidden md:inline">&bull;</span>
            <button
              onClick={onVerifyClick}
              className="text-[#e3c375] hover:underline flex items-center gap-1 font-mono"
            >
              <MagnifyingGlass size={12} weight="bold" />
              <span>Verify Member Pass</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-[#f1ecde]/92 backdrop-blur-md border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/logo.png"
              alt="Atiku Northern Youth Vanguard Logo"
              className="w-12 h-12 object-contain drop-shadow-[2px_2px_0px_rgba(182,132,42,0.6)] group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="font-display font-semibold text-lg sm:text-xl text-[#10241f] tracking-tight block leading-tight">
                Atiku Northern Youth Vanguard
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#b6842a] uppercase block font-medium">
                Organise &bull; Mobilise &bull; Lead
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-medium text-[#3c4136]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors flex items-center gap-1.5 py-1 ${
                    isActive
                      ? 'text-[#10241f] font-semibold border-b border-[#10241f]'
                      : 'hover:text-[#b6842a]'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="font-mono text-[9px] px-1.5 py-0.2 rounded-[2px] bg-[#e7e0cb] text-[#10241f] uppercase">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onVerifyClick}
              className="px-3 py-2 rounded-[2px] bg-transparent border border-[#cfc6a6] hover:border-[#10241f] text-[#10241f] text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
            >
              Verify Pass
            </button>

            <Link
              to="/membership"
              className="btn bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-semibold border border-[#10241f] shadow-[3px_3px_0px_rgba(182,132,42,0.6)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Join Vanguard</span>
              <ArrowUpRight size={14} weight="bold" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="xl:hidden p-2 text-[#10241f] hover:text-[#b6842a]"
            aria-label="Toggle navigation"
          >
            {navOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-t border-[#cfc6a6] bg-[#f1ecde] px-6 py-6 space-y-4"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setNavOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between text-sm py-1.5 ${
                      isActive ? 'font-semibold text-[#10241f]' : 'text-[#3c4136]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-[2px] bg-[#e7e0cb] text-[#10241f] uppercase">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-[#cfc6a6] space-y-2">
                <button
                  onClick={() => { setNavOpen(false); onVerifyClick(); }}
                  className="w-full py-2.5 rounded-[2px] bg-transparent border border-[#cfc6a6] text-[#10241f] text-xs font-mono uppercase tracking-wider font-semibold"
                >
                  Verify Member Pass
                </button>
                <Link
                  to="/membership"
                  onClick={() => setNavOpen(false)}
                  className="w-full py-3 rounded-[2px] bg-[#10241f] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-semibold border border-[#10241f] flex items-center justify-center gap-2"
                >
                  <span>Join Vanguard</span>
                  <ArrowUpRight size={14} weight="bold" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
