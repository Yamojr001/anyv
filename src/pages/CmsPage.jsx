import { useState } from 'react'
import {
  LockSimple,
  ShieldCheck,
  SignIn,
  ArrowRight,
  EnvelopeSimple,
  WarningCircle,
  CheckCircle,
  Buildings
} from '@phosphor-icons/react'
import SEO from '../components/SEO'
import { adminLoginApi } from '../services/api'

const CMS_DESTINATION = import.meta.env.VITE_CMS_URL || 
  import.meta.env.VITE_BACKEND_URL || 
  (typeof window !== 'undefined' && window.location.port === '5173' ? 'http://localhost:8000' : '/')

export default function CmsPage() {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [authStatus, setAuthStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setAuthStatus(null)

    const email = emailInput.trim().toLowerCase()
    const password = passwordInput.trim()

    if (!email || !password) {
      setAuthStatus({
        success: false,
        message: 'Please enter both your official email address and security password.'
      })
      setIsLoading(false)
      return
    }

    try {
      const res = await adminLoginApi(email, password)

      if (res.success && res.user) {
        localStorage.setItem('anyv_admin_token', res.token || 'auth')
        localStorage.setItem('anyv_admin_user', JSON.stringify(res.user))
        
        setAuthStatus({
          success: true,
          message: `Authentication verified for ${res.user.name}. Redirecting to Secretariat CMS...`,
          user: res.user
        })

        // Redirect to CMS dashboard
        setTimeout(() => {
          window.location.href = CMS_DESTINATION
        }, 1200)
      } else {
        setAuthStatus({
          success: false,
          message: res.message || 'Access denied: Invalid administrator credentials or unauthorized email.'
        })
      }
    } catch (err) {
      setAuthStatus({
        success: false,
        message: err.message || 'Unable to reach the Secretariat Authentication Server. Please verify the backend service is running.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-0">
      <SEO
        title="Secretariat Access Gateway | Atiku Northern Youth Vanguard"
        description="Confidential administrative access gateway for authorized ANYV National Secretariat personnel and State Chapter Directors."
        keywords="ANYV Secretariat login, admin portal, Atiku youth vanguard administration"
      />

      {/* Archival Banner */}
      <section className="bg-[#10241f] text-[#f1ecde] py-14 sm:py-16 border-b border-[#1f3f37] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9963c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[11px] text-[#c9963c] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9963c] animate-pulse"></span>
            <span>NATIONAL SECRETARIAT &bull; CENTRAL ACCESS GATEWAY</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#fffdf7] font-bold leading-tight">
            Secretariat Management Portal
          </h1>
          <p className="text-[#aebf9e] text-sm sm:text-base max-w-xl mx-auto font-light mt-3 leading-relaxed">
            Restricted administrative gateway for the National Executive Council and 20 State Chapter Coordinators across Northern Nigeria.
          </p>
        </div>
      </section>

      {/* Main Authentication Portal */}
      <section className="py-12 sm:py-16 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-md mx-auto px-6">
          <div className="bg-[#fffdf7] border-2 border-[#10241f] p-6 sm:p-8 rounded-[2px] shadow-[6px_6px_0px_rgba(16,36,31,0.5)]">
            
            {/* Crest & Title */}
            <div className="text-center pb-6 border-b border-[#cfc6a6] space-y-3">
              <img
                src="/logo.png"
                alt="ANYV Seal"
                className="w-14 h-14 mx-auto object-contain drop-shadow-[2px_2px_0px_rgba(182,132,42,0.6)]"
              />
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#10241f]">
                  Official Administrator Login
                </h2>
                <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block font-semibold mt-1">
                  Confidential &bull; Authorized Personnel Only
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4 pt-6 text-xs font-mono">
              <div>
                <label className="block text-[#10241f] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                  Official Email Address
                </label>
                <div className="relative">
                  <EnvelopeSimple size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7c9473]" />
                  <input
                    type="email"
                    required
                    placeholder="official.email@anyv.org"
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] text-xs font-mono text-[#10241f] focus:outline-none focus:border-[#10241f]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#10241f] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                  Confidential Password Key
                </label>
                <div className="relative">
                  <LockSimple size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7c9473]" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] text-xs font-mono text-[#10241f] focus:outline-none focus:border-[#10241f]"
                  />
                </div>
              </div>

              {/* Status Alerts */}
              {authStatus && (
                <div className={`p-3.5 rounded-[2px] border text-xs flex items-start gap-2.5 ${
                  authStatus.success
                    ? 'bg-[#f5f8f3] border-[#7c9473] text-[#10241f]'
                    : 'bg-red-50 border-red-300 text-red-900'
                }`}>
                  {authStatus.success ? (
                    <CheckCircle size={18} weight="fill" className="text-[#5c7255] shrink-0 mt-0.5" />
                  ) : (
                    <WarningCircle size={18} weight="fill" className="text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <strong className="block font-mono text-[11px] leading-snug">{authStatus.message}</strong>
                    {authStatus.success && (
                      <a
                        href="http://localhost:8000"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#b6842a] underline font-bold"
                      >
                        Click here if not redirected automatically
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] text-xs font-mono uppercase tracking-wider font-bold transition flex items-center justify-center gap-2 border border-[#10241f] shadow-[3px_3px_0px_rgba(182,132,42,0.6)] cursor-pointer"
              >
                <SignIn size={16} weight="bold" />
                <span>{isLoading ? 'Verifying Credentials...' : 'Authenticate & Enter CMS'}</span>
              </button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 pt-4 border-t border-[#cfc6a6] text-center space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#7c9473] uppercase tracking-wider font-semibold">
                <ShieldCheck size={14} weight="bold" className="text-[#b6842a]" />
                <span>Brute-Force Protected &bull; Encrypted Session</span>
              </div>
              <p className="text-[10px] text-[#666c5c] font-sans leading-relaxed">
                Administrative credentials for state chapters and LGA coordinators are issued exclusively by the National Secretariat.
              </p>
            </div>

          </div>

          {/* Help & Support Footnote */}
          <div className="mt-6 text-center text-xs font-mono text-[#7c9473] space-y-1">
            <p>Need access assistance or credential reset?</p>
            <p className="text-[#10241f] font-semibold">registry@atikunorthernyouthvanguard.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}
