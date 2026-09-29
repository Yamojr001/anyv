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
    { to: '/state-dashboard', label: 'State Dashboard', badge: '19 States' },
    { to: '/news', label: 'News & Gazette', badge: 'Live' },
    { to: '/verify', label: 'Verify Member' },
    { to: '/id-card', label: 'ID Card Studio', badge: 'Pass' },
    { to: '/cms', label: 'Secretariat CMS', badge: 'Admin' }
  ]

  return (
    <>
      {/* Top Archival Gazette Bar */}
      <div className="bg-[#10241f] text-[#aebf9e] border-b border-[#1f3f37] text-xs py-1.5 px-3 sm:px-5 lg:px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-[#c9963c] animate-pulse"></span>
            <span className="tracking-wider text-[11px] font-semibold text-[#f1ecde]">
              OFFICIAL YOUTH CHARTER &bull; 19 NORTHERN STATES &amp; FCT
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#7c9473] text-[11px]">
            <span className="hidden md:inline">FOUNDATION: CONTINUOUS ENGAGEMENT</span>
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
      <header className="sticky top-0 z-40 bg-[#f1ecde]/95 backdrop-blur-md border-b border-[#cfc6a6]">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 h-16 sm:h-17 flex items-center justify-between gap-2 xl:gap-4">
          
          {/* Logo & Brand (Compact, never squeezes nav tabs) */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img
              src="/logo.png"
              alt="Atiku Northern Youth Vanguard Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[2px_2px_0px_rgba(182,132,42,0.6)] group-hover:scale-105 transition-transform"
            />
            <div className="min-w-0">
              <span className="font-display font-bold text-sm sm:text-base lg:text-[17px] text-[#10241f] tracking-tight block leading-tight whitespace-nowrap">
                Atiku Northern Youth Vanguard
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#b6842a] uppercase block font-semibold leading-none mt-0.5">
                Organise &bull; Mobilise &bull; Lead
              </span>
            </div>
          </Link>

          {/* Desktop Links (Visible from lg: 1024px upwards, reduced padding, no text wrapping) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 text-xs font-medium text-[#3c4136]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors flex items-center gap-1 px-1.5 py-1 xl:px-2 rounded-[2px] whitespace-nowrap ${
                    isActive
                      ? 'text-[#10241f] font-bold bg-[#e7e0cb] border-b-2 border-[#10241f]'
                      : 'hover:text-[#10241f] hover:bg-[#e7e0cb]/50'
                  }`
                }
              >
                <span className="text-[11px] xl:text-[12px]">{link.label}</span>
                {link.badge && (
                  <span className="font-mono text-[8px] xl:text-[9px] px-1 py-0.2 rounded-[2px] bg-[#10241f] text-[#c9963c] uppercase font-bold shrink-0">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={onVerifyClick}
              className="hidden 2xl:inline-block px-2.5 py-1.5 rounded-[2px] bg-transparent border border-[#cfc6a6] hover:border-[#10241f] text-[#10241f] text-[11px] font-mono uppercase tracking-wider font-semibold transition-colors"
            >
              Verify Pass
            </button>

            <Link
              to="/membership"
              className="btn bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-semibold border border-[#10241f] shadow-[2px_2px_0px_rgba(182,132,42,0.6)] py-1.5 px-3 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Join Vanguard</span>
              <ArrowUpRight size={13} weight="bold" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden p-2 rounded-[2px] bg-[#faf7ef] hover:bg-[#e7e0cb] border border-[#cfc6a6] text-[#10241f]"
            aria-label="Toggle navigation"
          >
            {navOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[#cfc6a6] bg-[#f1ecde] px-5 py-5 space-y-3"
            >
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setNavOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between text-xs py-2 px-3 rounded-[2px] font-medium transition ${
                        isActive 
                          ? 'font-bold text-[#10241f] bg-[#e7e0cb] border-l-4 border-l-[#b6842a]' 
                          : 'text-[#3c4136] hover:bg-[#e7e0cb]/50 hover:text-[#10241f]'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-[2px] bg-[#10241f] text-[#c9963c] uppercase font-bold">
                        {link.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>

              <div className="pt-3 border-t border-[#cfc6a6] space-y-2">
                <button
                  onClick={() => { setNavOpen(false); onVerifyClick(); }}
                  className="w-full py-2 rounded-[2px] bg-transparent border border-[#cfc6a6] text-[#10241f] text-xs font-mono uppercase tracking-wider font-semibold"
                >
                  Verify Member Pass
                </button>
                <Link
                  to="/membership"
                  onClick={() => setNavOpen(false)}
                  className="w-full py-2.5 rounded-[2px] bg-[#10241f] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-semibold border border-[#10241f] flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_rgba(182,132,42,0.6)]"
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
