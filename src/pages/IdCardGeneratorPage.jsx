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
import { fetchStates, verifyMemberApi, uploadImageApi } from '../services/api'

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
  const [states, setStates] = useState([])

  // Load states from API
  useEffect(() => {
    let isMounted = true
    fetchStates()
      .then(apiStates => {
        if (isMounted && Array.isArray(apiStates) && apiStates.length > 0) {
          setStates(apiStates)
        }
      })
      .catch(err => console.warn('IdCardGenerator states notice:', err))
    return () => { isMounted = false }
  }, [])

  // Look up member if memberIdParam passed (querying live backend first)
  useEffect(() => {
    if (memberIdParam) {
      verifyMemberApi(memberIdParam).then(found => {
        if (found && (found.found || found.fullName)) {
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
      })
    }
  }, [memberIdParam])


  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false)

  // Handle Photo Upload via POST /api/upload
  const handlePhotoUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Fast local preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setCardData(prev => ({ ...prev, photoUrl: reader.result }))
    }
    reader.readAsDataURL(file)

    // Persist upload via POST /api/upload
    try {
      setIsUploadingPhoto(true)
      const res = await uploadImageApi(file, 'cards')
      if (res.success && res.url) {
        setCardData(prev => ({ ...prev, photoUrl: res.url }))
      }
    } catch (err) {
      console.warn('Server image upload fallback to local preview:', err)
    } finally {
      setIsUploadingPhoto(false)
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

  // ====================================================
  // REUSABLE CARD RENDERERS (SCREEN & PRINT)
  // ====================================================
  const renderCardFront = (isPrint = false) => (
    <div className="h-full flex flex-col justify-between relative z-10 select-none">
      {/* Holographic Guilloche Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center font-display text-8xl font-extrabold text-[#c9963c] rotate-12">
        ANYV
      </div>

      {/* Top Row: National Seal & Organization Title (Clean, NO top-right circle icon) */}
      <div className={`flex items-center ${isPrint ? 'gap-2.5 pb-1.5' : 'gap-3 sm:gap-3.5 pb-3'} border-b border-[#c9963c]/30`}>
        <img
          src="/logo.png"
          alt="ANYV Crest"
          className={`${isPrint ? 'w-9 h-9' : 'w-14 h-14 sm:w-15 sm:h-15'} rounded-full object-cover border-2 border-[#c9963c] shadow-[0_2px_8px_rgba(0,0,0,0.6)] shrink-0`}
        />
        <div className="min-w-0 flex-1">
          <span className={`font-display font-bold ${isPrint ? 'text-[11px]' : 'text-sm sm:text-base'} tracking-tight text-[#fffdf7] block leading-tight`}>
            Atiku Northern Youth Vanguard
          </span>
          <span className={`font-mono ${isPrint ? 'text-[6.5px]' : 'text-[9px]'} text-[#e3c375] uppercase tracking-widest block font-medium mt-0.5`}>
            Federal Republic of Nigeria &bull; National Registry
          </span>
        </div>
      </div>

      {/* Middle Section: Photo & Member Bio */}
      <div className={`flex items-center ${isPrint ? 'gap-2.5 py-1' : 'gap-4 sm:gap-5 py-2'} my-auto`}>
        {/* Portrait Photo Frame */}
        <div className={`${isPrint ? 'w-17 h-21 rounded-lg' : 'w-24 sm:w-28 h-28 sm:h-32 rounded-xl'} overflow-hidden bg-[#10241f] border-2 border-[#c9963c]/80 shadow-md shrink-0 relative`}>
          {cardData.photoUrl ? (
            <img src={cardData.photoUrl} alt={cardData.fullName} className="w-full h-full object-cover" />
          ) : (
            <div className={`w-full h-full flex flex-col items-center justify-center text-[#e3c375] font-display ${isPrint ? 'text-2xl' : 'text-4xl'} font-extrabold bg-[#16302b]`}>
              {cardData.fullName?.charAt(0) || 'M'}
              <span className={`${isPrint ? 'text-[6px]' : 'text-[8px]'} font-mono text-[#aebf9e] uppercase mt-0.5 tracking-wider`}>OFFICIAL</span>
            </div>
          )}
          <div className={`absolute bottom-0 inset-x-0 bg-[#0c1c18]/90 ${isPrint ? 'text-[6px] py-0.2' : 'text-[7px] py-0.5'} font-mono text-center text-[#e3c375] border-t border-[#c9963c]/40 font-bold`}>
            VERIFIED
          </div>
        </div>

        {/* Bio Meta */}
        <div className="space-y-1 flex-1 min-w-0">
          <div>
            <span className={`${isPrint ? 'text-[6.5px]' : 'text-[8px]'} font-mono text-[#aebf9e] uppercase tracking-wider block`}>
              NAME OF DELEGATE
            </span>
            <h3 className={`font-display ${isPrint ? 'text-xs' : 'text-lg sm:text-xl'} font-bold text-white leading-tight truncate`}>
              {cardData.fullName}
            </h3>
          </div>

          <div className={`grid grid-cols-2 gap-1.5 ${isPrint ? 'text-[8px]' : 'text-[10px]'} font-mono`}>
            <div>
              <span className={`text-[#aebf9e] block ${isPrint ? 'text-[6.5px]' : 'text-[8px]'}`}>STATE CHAPTER</span>
              <span className="text-[#e3c375] font-bold truncate block">{cardData.state} State</span>
            </div>
            <div>
              <span className={`text-[#aebf9e] block ${isPrint ? 'text-[6.5px]' : 'text-[8px]'}`}>LGA / WARD</span>
              <span className="text-white truncate block">{cardData.lga} LGA</span>
            </div>
          </div>

          <div className={`${isPrint ? 'text-[8px]' : 'text-[10px]'} font-mono pt-0.5`}>
            <span className={`text-[#aebf9e] block ${isPrint ? 'text-[6.5px]' : 'text-[8px]'}`}>DESIGNATION / TRACK</span>
            <span className="text-[#7c9473] font-semibold truncate block">{cardData.role}</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Membership ID & Security Barcode */}
      <div className={`flex items-end justify-between border-t border-[#c9963c]/30 ${isPrint ? 'pt-1 text-[7.5px]' : 'pt-2 text-[9px]'} font-mono`}>
        <div>
          <span className={`text-[#aebf9e] block ${isPrint ? 'text-[6.5px]' : 'text-[8px]'}`}>MEMBERSHIP NUMBER</span>
          <span className={`font-bold ${isPrint ? 'text-[10px]' : 'text-xs sm:text-sm'} text-[#e3c375] tracking-wider`}>
            {cardData.membershipNumber}
          </span>
        </div>

        {/* Barcode Simulator */}
        <div className="text-right">
          <div className={`font-mono ${isPrint ? 'text-[6.5px] tracking-[2px] h-3' : 'text-[8px] tracking-[3px] h-4'} text-white opacity-80 flex items-center justify-end`}>
            ||| | |||| | || ||| |||| |
          </div>
          <span className={`${isPrint ? 'text-[6px]' : 'text-[7px]'} text-[#aebf9e] block`}>
            EXP: {cardData.expiryDate}
          </span>
        </div>
      </div>
    </div>
  )

  const renderCardBack = (isPrint = false) => (
    <div className={`h-full flex flex-col justify-between relative z-10 ${isPrint ? 'text-[8px]' : 'text-xs'} select-none`}>
      {/* Magnetic Stripe Simulator */}
      <div className={`${isPrint ? '-mx-3.5 -mt-3.5 h-6' : '-mx-7 -mt-7 h-10'} bg-slate-950 border-b border-[#c9963c]/30`} />

      <div className={`${isPrint ? 'space-y-1.5 py-1' : 'space-y-3 py-2'}`}>
        <div className={`flex items-center justify-between ${isPrint ? 'text-[7.5px] pb-1' : 'text-[9px] pb-1.5'} font-mono border-b border-[#1f3f37]`}>
          <span className="text-[#e3c375] font-semibold">TERMS OF ACCREDITATION</span>
          <span className="text-[#aebf9e]">SERIES 2026/2028</span>
        </div>

        <p className={`${isPrint ? 'text-[6.5px]' : 'text-[8px]'} text-[#cfc6a6] leading-relaxed`}>
          This digital credential certifies official enlistment into the Atiku Northern Youth Vanguard. The holder is authorized to represent their local chapter and participate in constitutional congresses. If found, please return to any ANYV State Secretariat or email secretariat@atikunorthernyouthvanguard.com.
        </p>

        <div className={`grid grid-cols-2 gap-2 ${isPrint ? 'text-[6.5px] pt-0.5' : 'text-[8px] pt-1'} font-mono text-[#aebf9e]`}>
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
      <div className={`flex items-center justify-between border-t border-[#c9963c]/30 ${isPrint ? 'pt-1' : 'pt-2'} font-mono`}>
        <div className="flex items-center gap-2">
          <div className={`${isPrint ? 'w-8 h-8' : 'w-10 h-10'} bg-white rounded p-0.5 shrink-0 flex items-center justify-center`}>
            <QrCode size={isPrint ? 28 : 36} className="text-black" />
          </div>
          <div className={`${isPrint ? 'text-[6px]' : 'text-[7px]'} text-[#aebf9e]`}>
            <span>SCAN TO VALIDATE</span>
            <span className="block text-white font-bold">{cardData.membershipNumber}</span>
          </div>
        </div>

        <div className="text-right">
          <div className={`font-serif italic ${isPrint ? 'text-[10px]' : 'text-xs'} text-[#e3c375] font-bold`}>
            Faruk A.
          </div>
          <span className={`${isPrint ? 'text-[6px]' : 'text-[7px]'} text-[#aebf9e] block border-t border-[#c9963c]/40 pt-0.5`}>
            DIRECTOR OF ACCREDITATION
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-0">
      <SEO
        title="Official ANYV Digital Membership ID Card Generator"
        description="Generate, customize, and print your official Atiku Northern Youth Vanguard (ANYV) digital membership card with security QR verification and national ratification seal."
        keywords="ANYV ID card generator, digital membership card ANYV, Atiku Youth Vanguard delegate pass, Northern Nigeria youth identity card, print ANYV card"
      />

      {/* Header Banner (Hidden in Print) */}
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

      {/* Interactive Workspace (Hidden in Print) */}
      <section className="py-16 bg-[#faf7ef] border-b border-[#cfc6a6] print:hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Card Customization Controls */}
          <div className="lg:col-span-5 bg-[#fffdf7] border border-[#cfc6a6] p-7 rounded-[2px] specimen-shadow space-y-6">
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
                    {isUploadingPhoto ? (
                      <ArrowsClockwise size={14} className="animate-spin text-[#b6842a]" />
                    ) : (
                      <UploadSimple size={14} />
                    )}
                    <span>{isUploadingPhoto ? 'Uploading...' : 'Upload Photo'}</span>
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" disabled={isUploadingPhoto} />
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
                    {states.map((s, idx) => (
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
                  onClick={handlePrint}
                  className="flex-1 py-2.5 rounded-[2px] bg-[#10241f] hover:bg-[#16302b] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-all shadow-[2px_2px_0px_rgba(182,132,42,0.6)] cursor-pointer"
                >
                  <Printer size={15} weight="bold" />
                  <span>Print ID Pass (Front &amp; Back)</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopyLink}
                className="w-full py-2 text-[11px] font-mono text-[#666c5c] hover:text-[#10241f] flex items-center justify-center gap-1 cursor-pointer"
              >
                <Copy size={13} />
                <span>{copiedLink ? 'Card verification URL copied!' : 'Copy Permanent Card Link'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Screen Preview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between font-mono text-xs text-[#666c5c] pb-2 border-b border-[#cfc6a6]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#7c9473]" />
                <span>CR80 FORMAT SPECIFICATION &bull; OFFICIAL EMERALD PASS</span>
              </span>
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="text-[#b6842a] underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>{isFlipped ? 'View Front Side' : 'View Back Side'}</span>
                <ArrowsClockwise size={13} weight="bold" />
              </button>
            </div>

            {/* Screen ID Card Element */}
            <div className="flex justify-center">
              <div 
                ref={cardRef}
                className="w-full max-w-[480px] aspect-[1.586/1] rounded-2xl p-6 sm:p-7 relative overflow-hidden text-white shadow-2xl transition-all duration-500 bg-gradient-to-br from-[#0c1c18] via-[#132c25] to-[#0c1c18] border-2 border-[#c9963c]/60 select-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 10% 20%, rgba(201, 150, 60, 0.12) 0%, transparent 40%),
                                    radial-gradient(circle at 90% 80%, rgba(124, 148, 115, 0.15) 0%, transparent 50%)`
                }}
              >
                {!isFlipped ? renderCardFront(false) : renderCardBack(false)}
              </div>
            </div>

            {/* Printing Tips */}
            <div className="bg-[#fffdf7] border border-[#cfc6a6] p-5 rounded-[2px] specimen-shadow text-xs space-y-2">
              <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block font-semibold">
                PRINTING &amp; PRESERVATION GUIDELINES
              </span>
              <ul className="text-[#666c5c] space-y-1 text-[11px] list-disc list-inside">
                <li>Click <strong>Print ID Pass</strong> to print both Front and Back on cardstock or save directly as PDF.</li>
                <li>Website menus, footers, and controls are automatically excluded during printing.</li>
                <li>Printed pass matches standard CR80 wallet card dimensions (85.6mm &times; 54mm).</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* DEDICATED PRINT SHEET: PRINTS ONLY FRONT & BACK     */}
      {/* ==================================================== */}
      <div className="hidden print:flex print:flex-col print:items-center print:justify-center print:w-full print:min-h-screen print:p-6 bg-white text-black font-sans">
        
        {/* Printable Pair Layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 print:flex-row print:justify-center print:gap-8 print:items-center">
          
          {/* Card Front Block */}
          <div className="flex flex-col items-center">
            <span className="font-mono text-[8.5px] font-bold text-[#10241f] uppercase tracking-wider mb-2">
              ✂ FRONT SIDE (CUT ALONG BORDER)
            </span>
            <div 
              className="w-[85.6mm] h-[54mm] rounded-xl p-3.5 relative overflow-hidden text-white bg-gradient-to-br from-[#0c1c18] via-[#132c25] to-[#0c1c18] border-2 border-[#c9963c] shadow-none select-none print:w-[85.6mm] print:h-[54mm] print:rounded-xl print:p-3.5 print:border-[#c9963c]"
              style={{
                backgroundImage: `radial-gradient(circle at 10% 20%, rgba(201, 150, 60, 0.12) 0%, transparent 40%),
                                  radial-gradient(circle at 90% 80%, rgba(124, 148, 115, 0.15) 0%, transparent 50%)`
              }}
            >
              {renderCardFront(true)}
            </div>
          </div>

          {/* Card Back Block */}
          <div className="flex flex-col items-center">
            <span className="font-mono text-[8.5px] font-bold text-[#10241f] uppercase tracking-wider mb-2">
              ✂ BACK SIDE (CUT ALONG BORDER)
            </span>
            <div 
              className="w-[85.6mm] h-[54mm] rounded-xl p-3.5 relative overflow-hidden text-white bg-gradient-to-br from-[#0c1c18] via-[#132c25] to-[#0c1c18] border-2 border-[#c9963c] shadow-none select-none print:w-[85.6mm] print:h-[54mm] print:rounded-xl print:p-3.5 print:border-[#c9963c]"
              style={{
                backgroundImage: `radial-gradient(circle at 10% 20%, rgba(201, 150, 60, 0.12) 0%, transparent 40%),
                                  radial-gradient(circle at 90% 80%, rgba(124, 148, 115, 0.15) 0%, transparent 50%)`
              }}
            >
              {renderCardBack(true)}
            </div>
          </div>

        </div>

        {/* Print Guideline Footnote */}
        <div className="mt-8 pt-3 border-t border-dashed border-gray-400 text-center font-mono text-[8px] text-gray-600 space-y-0.5">
          <p className="font-bold text-[#10241f]">
            OFFICIAL ANYV DIGITAL MEMBERSHIP PASS &bull; CR80 STANDARD (85.6mm &times; 54mm)
          </p>
          <p>
            Cut along borders. Fold or mount back-to-back and laminate for wallet presentation.
          </p>
          <p className="text-gray-400">
            Verify at atikunorthernyouthvanguard.com/verify &bull; Issued by ANYV National Secretariat
          </p>
        </div>
      </div>

    </div>
  )
}
