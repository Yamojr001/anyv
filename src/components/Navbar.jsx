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
      <div className="print:hidden bg-[#10241f] text-[#aebf9e] border-b border-[#1f3f37] text-[10px] sm:text-[11px] py-1 px-2.5 sm:px-4 lg:px-5">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 font-mono">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="inline-block w-1.5 h-1.5 bg-[#c9963c] animate-pulse"></span>
            <span className="tracking-wider text-[10px] sm:text-[10.5px] font-semibold text-[#f1ecde] whitespace-nowrap">
              OFFICIAL YOUTH CHARTER &bull; 19 NORTHERN STATES &amp; FCT
            </span>
          </div>
          <div className="flex items-center gap-3 text-[#7c9473] text-[10px] sm:text-[10.5px] shrink-0">
            <span className="hidden md:inline whitespace-nowrap">FOUNDATION: CONTINUOUS ENGAGEMENT</span>
            <span className="hidden md:inline">&bull;</span>
            <button
              onClick={onVerifyClick}
              className="text-[#e3c375] hover:underline flex items-center gap-1 font-mono whitespace-nowrap"
            >
              <MagnifyingGlass size={11} weight="bold" />
              <span>Verify Member Pass</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="print:hidden sticky top-0 z-40 bg-[#f1ecde]/95 backdrop-blur-md border-b border-[#cfc6a6]">
        <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 lg:px-5 h-15 sm:h-16 flex items-center justify-between gap-1.5 xl:gap-3">
          
          {/* Logo & Brand (Compact, never squeezes nav tabs) */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <img
              src="/logo.png"
              alt="Atiku Northern Youth Vanguard Logo"
              className="w-8 h-8 sm:w-8.5 sm:h-8.5 object-contain drop-shadow-[2px_2px_0px_rgba(182,132,42,0.6)] group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="min-w-0">
              <span className="font-display font-bold text-xs sm:text-sm lg:text-[12.5px] xl:text-[14.5px] 2xl:text-[16px] text-[#10241f] tracking-tight block leading-tight whitespace-nowrap">
                Atiku Northern Youth Vanguard
              </span>
              <span className="font-mono text-[7.5px] sm:text-[8px] xl:text-[8.5px] tracking-widest text-[#b6842a] uppercase block font-semibold leading-none mt-0.5">
                Organise &bull; Mobilise &bull; Lead
              </span>
            </div>
          </Link>

          {/* Desktop Links (Visible from lg: 1024px upwards, compact font size, zero horizontal overflow) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2 text-[#3c4136]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors flex items-center gap-1 px-1 py-1 xl:px-1.5 xl:py-1 2xl:px-2 rounded-[2px] whitespace-nowrap text-[9.5px] xl:text-[10.5px] 2xl:text-[11.5px] tracking-tight ${
                    isActive
                      ? 'text-[#10241f] font-bold bg-[#e7e0cb] border-b-2 border-[#10241f]'
                      : 'font-medium hover:text-[#10241f] hover:bg-[#e7e0cb]/50'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="font-mono text-[7px] xl:text-[7.5px] 2xl:text-[8px] px-0.5 xl:px-1 py-px rounded-[2px] bg-[#10241f] text-[#c9963c] uppercase font-bold shrink-0">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-1.5 xl:gap-2 shrink-0">
            <button
              onClick={onVerifyClick}
              className="hidden 2xl:inline-block px-2 py-1 rounded-[2px] bg-transparent border border-[#cfc6a6] hover:border-[#10241f] text-[#10241f] text-[10px] font-mono uppercase tracking-wider font-semibold transition-colors"
            >
              Verify Pass
            </button>

            <Link
              to="/membership"
              className="btn bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] text-[10px] xl:text-[11px] font-mono uppercase tracking-wider font-semibold border border-[#10241f] shadow-[2px_2px_0px_rgba(182,132,42,0.6)] py-1 px-2 xl:py-1.5 xl:px-2.5 flex items-center gap-1 whitespace-nowrap"
            >
              <span>Join Vanguard</span>
              <ArrowUpRight size={12} weight="bold" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden p-1.5 rounded-[2px] bg-[#faf7ef] hover:bg-[#e7e0cb] border border-[#cfc6a6] text-[#10241f]"
            aria-label="Toggle navigation"
          >
            {navOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
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
