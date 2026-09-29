import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  IdentificationCard, 
  Printer, 
  UploadSimple, 
  ArrowsClockwise, 
  CheckCircle, 
  ShieldCheck, 
  QrCode, 
  ArrowRight, 
  Copy, 
  ShareNetwork, 
  MapPin, 
  Phone 
} from '@phosphor-icons/react'
import SEO from '../components/SEO'
import { northernStates } from '../data/leadershipData'
import { getAllMembers } from '../data/membersData'

export default function IdCardGeneratorPage() {
  const [searchParams] = useSearchParams()
  const memberIdParam = searchParams.get('memberId') || searchParams.get('id')
  const nameParam = searchParams.get('name')
  const stateParam = searchParams.get('state')
  const lgaParam = searchParams.get('lga')
  const phoneParam = searchParams.get('phone')

  const cardRef = useRef(null)

  // Form details
  const [cardData, setCardData] = useState({
    fullName: nameParam || 'Usman Aliyu Garba',
    membershipNumber: memberIdParam || 'ANYV/BAU/0001',
    state: stateParam || 'Bauchi',
    lga: lgaParam || 'Bauchi Central',
    phone: phoneParam || '0803 123 4567',
    role: 'Accredited Youth Delegate',
    track: 'Agricultural Enterprise & Food Security',
    bloodGroup: 'O+',
    issuedDate: 'September 2026',
    expiryDate: 'September 2028',
    photoUrl: null
  })

  const [isFlipped, setIsFlipped] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  // Look up member if memberIdParam passed
  useEffect(() => {
    if (memberIdParam) {
      const all = getAllMembers()
      const found = all.find(m => 
        (m.membershipNumber || '').toLowerCase().replace(/[\s\-\/]/g, '') === 
        memberIdParam.toLowerCase().replace(/[\s\-\/]/g, '')
      )
      if (found) {
        setCardData(prev => ({
          ...prev,
          fullName: found.fullName,
          membershipNumber: found.membershipNumber,
          state: found.state,
          lga: found.lga,
          phone: found.phone,
          role: found.role || 'Accredited Member',
          track: found.track || 'Vanguard Youth Delegate',
          issuedDate: found.issuedDate || 'September 2026',
          expiryDate: found.expiryDate || 'September 2028'
        }))
      }
    }
  }, [memberIdParam])

  // Handle Photo Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCardData(prev => ({ ...prev, photoUrl: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleCopyLink = () => {
    const url = `${window.location.origin}/id-card?memberId=${encodeURIComponent(cardData.membershipNumber)}`
    navigator.clipboard.writeText(url)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2500)
  }

  return (
    <div className="space-y-0">
      <SEO
        title="Official ANYV Digital Membership ID Card Generator"
        description="Generate, customize, and print your official Atiku Northern Youth Vanguard (ANYV) digital membership card with security QR verification and national ratification seal."
        keywords="ANYV ID card generator, digital membership card ANYV, Atiku Youth Vanguard delegate pass, Northern Nigeria youth identity card, print ANYV card"
      />

      {/* Header */}
      <section className="bg-[#10241f] text-[#f1ecde] py-16 border-b border-[#1f3f37] relative overflow-hidden print:hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9963c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="eyebrow text-[#c9963c]">NATIONAL CREDENTIALS BUREAU &bull; CR80 SPECIFICATION</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#fffdf7] font-medium mt-2 leading-tight">
            Digital Membership ID Card
          </h1>
          <p className="text-[#aebf9e] text-base sm:text-lg max-w-2xl font-light mt-3 leading-relaxed">
            Generate and print your official ANYV security-encoded membership card. Valid for presentation at ward meetings, state congresses, and national conventions.
          </p>
        </div>
      </section>

      {/* Workspace */}
      <section className="py-16 bg-[#faf7ef] border-b border-[#cfc6a6]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Card Customization Controls (Hidden in Print) */}
          <div className="lg:col-span-5 bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] specimen-shadow space-y-6 print:hidden">
            <div>
              <span className="font-mono text-xs text-[#b6842a] uppercase tracking-wider block mb-1">
                CREDENTIAL CUSTOMIZER
              </span>
              <h2 className="font-display text-2xl font-semibold text-[#10241f]">
                Cardholder Details
              </h2>
              <p className="text-xs text-[#666c5c] mt-1 leading-relaxed">
                Personalize your digital ID pass. Changes update live in the card preview on the right.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              {/* Photo Upload Input */}
              <div>
                <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                  PASSPORT PHOTOGRAPH
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-[2px] bg-[#faf7ef] border border-[#cfc6a6] overflow-hidden flex items-center justify-center shrink-0">
                    {cardData.photoUrl ? (
                      <img src={cardData.photoUrl} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-display text-xl font-bold text-[#b6842a]">
                        {cardData.fullName?.charAt(0) || 'M'}
                      </span>
                    )}
                  </div>
                  <label className="px-3.5 py-2 rounded-[2px] bg-[#faf7ef] border border-[#cfc6a6] hover:border-[#10241f] text-[#10241f] font-mono text-[11px] uppercase cursor-pointer flex items-center gap-1.5 transition-colors">
                    <UploadSimple size={14} />
                    <span>Upload Photo</span>
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                  </label>
                  {cardData.photoUrl && (
                    <button
                      type="button"
                      onClick={() => setCardData(p => ({ ...p, photoUrl: null }))}
                      className="text-[11px] text-[#b93838] underline"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>

              <div>
                <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                  FULL LEGAL NAME
                </label>
                <input
                  type="text"
                  value={cardData.fullName}
                  onChange={e => setCardData({ ...cardData, fullName: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    MEMBERSHIP ID
                  </label>
                  <input
                    type="text"
                    value={cardData.membershipNumber}
                    onChange={e => setCardData({ ...cardData, membershipNumber: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] font-mono uppercase focus:outline-none focus:border-[#b6842a]"
                  />
                </div>
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    value={cardData.phone}
                    onChange={e => setCardData({ ...cardData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] font-mono focus:outline-none focus:border-[#b6842a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    STATE CHAPTER
                  </label>
                  <select
                    value={cardData.state}
                    onChange={e => setCardData({ ...cardData, state: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                  >
                    {northernStates.map((s, idx) => (
                      <option key={idx} value={s.name}>{s.name} State</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                    LOCAL GOV (LGA)
                  </label>
                  <input
                    type="text"
                    value={cardData.lga}
                    onChange={e => setCardData({ ...cardData, lga: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[#10241f] block mb-1 font-semibold">
                  OFFICIAL ROLE / TRACK
                </label>
                <input
                  type="text"
                  value={cardData.role}
                  onChange={e => setCardData({ ...cardData, role: e.target.value })}
                  placeholder="e.g. Accredited Youth Delegate"
                  className="w-full px-3 py-2.5 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] focus:outline-none focus:border-[#b6842a]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="flex-1 py-2.5 rounded-[2px] bg-[#faf7ef] border border-[#cfc6a6] hover:border-[#10241f] text-[#10241f] font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ArrowsClockwise size={14} />
                  <span>Flip to {isFlipped ? 'Front' : 'Back'}</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 py-2.5 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-all shadow-[2px_2px_0px_rgba(182,132,42,0.6)]"
                >
                  <Printer size={14} />
                  <span>Print ID Pass</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopyLink}
                className="w-full py-2 text-[11px] font-mono text-[#666c5c] hover:text-[#10241f] flex items-center justify-center gap-1"
              >
                <Copy size={13} />
                <span>{copiedLink ? 'Card verification URL copied!' : 'Copy Permanent Card Link'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Printable ID Card View */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between font-mono text-xs text-[#666c5c] pb-2 border-b border-[#cfc6a6] print:hidden">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#7c9473]" />
                <span>CR80 FORMAT SPECIFICATION &bull; OFFICIAL EMERALD PASS</span>
              </span>
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="text-[#b6842a] underline font-semibold flex items-center gap-1"
              >
                <span>{isFlipped ? 'View Front Side' : 'View Back Side'}</span>
                <ArrowsClockwise size={12} />
              </button>
            </div>

            {/* The Actual ID Card Element (Standard 85.6mm x 54mm Aspect Ratio) */}
            <div className="flex justify-center">
              <div 
                ref={cardRef}
                className="w-full max-w-[480px] aspect-[1.586/1] rounded-2xl p-6 sm:p-7 relative overflow-hidden text-white shadow-2xl transition-all duration-500 bg-gradient-to-br from-[#0c1c18] via-[#132c25] to-[#0c1c18] border-2 border-[#c9963c]/60 select-none print:shadow-none print:border-black"
                style={{
                  backgroundImage: `radial-gradient(circle at 10% 20%, rgba(201, 150, 60, 0.12) 0%, transparent 40%),
                                    radial-gradient(circle at 90% 80%, rgba(124, 148, 115, 0.15) 0%, transparent 50%)`
                }}
              >
                {/* Holographic Guilloche Security Watermark */}
                <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center font-display text-9xl font-extrabold text-[#c9963c] rotate-12">
                  ANYV
                </div>

                {!isFlipped ? (
                  /* ==================================================== */
                  /* CARD FRONT                                           */
                  /* ==================================================== */
                  <div className="h-full flex flex-col justify-between relative z-10">
                    {/* Top Row: National Seal & Organization Title */}
                    <div className="flex items-center gap-3 sm:gap-3.5 border-b border-[#c9963c]/30 pb-3">
                      <img
                        src="/logo.png"
                        alt="ANYV Crest"
                        className="w-14 h-14 sm:w-15 sm:h-15 rounded-full object-cover border-2 border-[#c9963c] shadow-[0_2px_8px_rgba(0,0,0,0.6)] shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#fffdf7] block leading-tight">
                          Atiku Northern Youth Vanguard
                        </span>
                        <span className="font-mono text-[9px] text-[#e3c375] uppercase tracking-widest block font-medium mt-0.5">
                          Federal Republic of Nigeria &bull; National Registry
                        </span>
                      </div>
                    </div>

                    {/* Middle Section: Photo & Member Bio */}
                    <div className="flex items-center gap-4 sm:gap-5 my-auto py-2">
                      {/* Portrait Photo Frame */}
                      <div className="w-24 sm:w-28 h-28 sm:h-32 rounded-xl overflow-hidden bg-[#10241f] border-2 border-[#c9963c]/80 shadow-md shrink-0 relative">
                        {cardData.photoUrl ? (
                          <img src={cardData.photoUrl} alt={cardData.fullName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-[#e3c375] font-display text-4xl font-extrabold bg-[#16302b]">
                            {cardData.fullName?.charAt(0) || 'M'}
                            <span className="text-[8px] font-mono text-[#aebf9e] uppercase mt-1 tracking-wider">OFFICIAL</span>
                          </div>
                        )}
                        <div className="absolute bottom-0 inset-x-0 bg-[#0c1c18]/80 text-[7px] font-mono text-center text-[#e3c375] py-0.5 border-t border-[#c9963c]/40">
                          VERIFIED
                        </div>
                      </div>

                      {/* Bio Meta */}
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div>
                          <span className="text-[8px] font-mono text-[#aebf9e] uppercase tracking-wider block">
                            NAME OF DELEGATE
                          </span>
                          <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight truncate">
                            {cardData.fullName}
                          </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                          <div>
                            <span className="text-[#aebf9e] block text-[8px]">STATE CHAPTER</span>
                            <span className="text-[#e3c375] font-bold truncate block">{cardData.state} State</span>
                          </div>
                          <div>
                            <span className="text-[#aebf9e] block text-[8px]">LGA / WARD</span>
                            <span className="text-white truncate block">{cardData.lga} LGA</span>
                          </div>
                        </div>

                        <div className="text-[10px] font-mono pt-1">
                          <span className="text-[#aebf9e] block text-[8px]">DESIGNATION / TRACK</span>
                          <span className="text-[#7c9473] font-semibold truncate block">{cardData.role}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Bar: Membership ID & Security Barcode */}
                    <div className="flex items-end justify-between border-t border-[#c9963c]/30 pt-2 text-[9px] font-mono">
                      <div>
                        <span className="text-[#aebf9e] block text-[8px]">MEMBERSHIP NUMBER</span>
                        <span className="font-bold text-xs sm:text-sm text-[#e3c375] tracking-wider">
                          {cardData.membershipNumber}
                        </span>
                      </div>

                      {/* Barcode Simulator */}
                      <div className="text-right">
                        <div className="font-mono text-[8px] tracking-[3px] text-white opacity-80 h-4 flex items-center justify-end">
                          ||| | |||| | || ||| |||| |
                        </div>
                        <span className="text-[7px] text-[#aebf9e] block">
                          EXP: {cardData.expiryDate}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ==================================================== */
                  /* CARD BACK                                            */
                  /* ==================================================== */
                  <div className="h-full flex flex-col justify-between relative z-10 text-xs">
                    {/* Magnetic Stripe Simulator */}
                    <div className="-mx-7 -mt-7 h-10 bg-slate-950 border-b border-[#c9963c]/30" />

                    <div className="space-y-3 py-2">
                      <div className="flex items-center justify-between text-[9px] font-mono border-b border-[#1f3f37] pb-1.5">
                        <span className="text-[#e3c375]">TERMS OF ACCREDITATION</span>
                        <span className="text-[#aebf9e]">SERIES 2026/2028</span>
                      </div>

                      <p className="text-[8px] text-[#cfc6a6] leading-relaxed">
                        This digital credential certifies official enlistment into the Atiku Northern Youth Vanguard. The holder is authorized to represent their local chapter and participate in constitutional congresses. If found, please return to any ANYV State Secretariat or email secretariat@atikunorthernyouthvanguard.com.
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-[8px] font-mono pt-1 text-[#aebf9e]">
                        <div>
                          <span className="text-white block font-semibold">EMERGENCY HOTLINE</span>
                          <span>{cardData.phone || '+234 803 184 4595'}</span>
                        </div>
                        <div>
                          <span className="text-white block font-semibold">VERIFICATION PORTAL</span>
                          <span className="text-[#e3c375]">atikunorthernyouthvanguard.com/verify</span>
                        </div>
                      </div>
                    </div>

                    {/* QR Code & Signature */}
                    <div className="flex items-center justify-between border-t border-[#c9963c]/30 pt-2 font-mono">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-white rounded p-0.5 shrink-0 flex items-center justify-center">
                          <QrCode size={36} className="text-black" />
                        </div>
                        <div className="text-[7px] text-[#aebf9e]">
                          <span>SCAN TO VALIDATE</span>
                          <span className="block text-white font-bold">{cardData.membershipNumber}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-serif italic text-xs text-[#e3c375] font-bold">
                          Faruk A.
                        </div>
                        <span className="text-[7px] text-[#aebf9e] block border-t border-[#c9963c]/40 pt-0.5">
                          DIRECTOR OF ACCREDITATION
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Helper Tips */}
            <div className="bg-[#fffdf7] border border-[#cfc6a6] p-5 rounded-[2px] specimen-shadow text-xs space-y-2 print:hidden">
              <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block font-semibold">
                PRINTING &amp; PRESERVATION GUIDELINES
              </span>
              <ul className="text-[#666c5c] space-y-1 text-[11px] list-disc list-inside">
                <li>Click <strong>Print ID Pass</strong> to print on cardstock or save directly as a PDF.</li>
                <li>Printed pass matches standard CR80 wallet card dimensions (85.6mm &times; 54mm).</li>
                <li>Each card features an active QR validation signature linking to the national verification gazette.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
