import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
  Plus,
  Minus,
  RotateCcw,
  Clock,
  MessageCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ── Carousel images ───────────────────────────────────────────────────────────
const carouselSlides = [
  {
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=85&auto=format&fit=crop",
    label: "Weddings & Celebrations",
    tag: "Destination",
  },
  {
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85&auto=format&fit=crop",
    label: "Brand Experiences",
    tag: "Activation",
  },
  {
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=85&auto=format&fit=crop",
    label: "Grand Productions",
    tag: "Live Event",
  },
  {
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=85&auto=format&fit=crop",
    label: "Corporate Galas",
    tag: "Executive",
  },
  {
    img: "https://images.unsplash.com/photo-1470229722913-7c090be5c5a4?w=900&q=85&auto=format&fit=crop",
    label: "Entertainment",
    tag: "Performance",
  },
];

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % carouselSlides.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (idx: number) => {
    setActive((idx + carouselSlides.length) % carouselSlides.length);
    startTimer();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 z-0 overflow-hidden"
    >
      {/* Images */}
      {carouselSlides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 1.5s ease",
            opacity: i === active ? 1 : 0,
            zIndex: i === active ? 1 : 0,
          }}
        >
          <img
            src={slide.img}
            alt={slide.label}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            className="filter grayscale contrast-110"
          />
          {/* Heavy gradient overlay to ensure text is fully readable */}
          <div className="absolute inset-0 bg-[#0F3A22]/70 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F3A22]/90 via-[#0F3A22]/40 to-transparent pointer-events-none"></div>
        </div>
      ))}

      {/* Removed Label and Dot indicators as per request */}

      {/* Prev / Next arrows */}
      <button
        onClick={() => go(active - 1)}
        style={{
          position: "absolute", top: "50%", left: "16px", transform: "translateY(-50%)",
          zIndex: 20, background: "rgba(7,23,14,0.55)", border: "1px solid rgba(243,176,82,0.25)",
          borderRadius: "50%", width: "38px", height: "38px", display: "flex", alignItems: "center",
          justifyContent: "center", cursor: "pointer", color: "#F3B052", backdropFilter: "blur(8px)",
          transition: "all 0.25s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(243,176,82,0.18)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(7,23,14,0.55)")}
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={() => go(active + 1)}
        style={{
          position: "absolute", top: "50%", right: "16px", transform: "translateY(-50%)",
          zIndex: 20, background: "rgba(7,23,14,0.55)", border: "1px solid rgba(243,176,82,0.25)",
          borderRadius: "50%", width: "38px", height: "38px", display: "flex", alignItems: "center",
          justifyContent: "center", cursor: "pointer", color: "#F3B052", backdropFilter: "blur(8px)",
          transition: "all 0.25s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(243,176,82,0.18)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(7,23,14,0.55)")}
      >
        <ChevronRight size={16} />
      </button>
    </motion.div>
  );
}



export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    venue: "",
    budget: "",
    vision: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Map interactive state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetMap = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#0F3A22] text-[#F5F5DC] overflow-hidden selection:bg-[#F3B052] selection:text-[#0F3A22]">
      
      {/* ─────────────────────────────────────────────────────────────
          02. HERO SECTION (Full Background Image Carousel)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] md:min-h-[86vh] flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-[#F3B052]/15 overflow-hidden w-full">
        
        <HeroCarousel />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
          
          <div className="max-w-3xl flex flex-col justify-center">
            
            {/* Small uppercase eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F3B052] shadow-[0_0_12px_#F3B052] animate-pulse"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#F3B052]">
                CONTACT / ENQUIRY
              </span>
            </motion.div>

            {/* Large editorial headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-serif italic tracking-tighter leading-[0.95] mb-8 text-[#F5F5DC]"
            >
              LET'S CREATE<br />
              SOMETHING<br />
              <span className="not-italic font-sans font-black tracking-tight text-[#F3B052] drop-shadow-[0_0_35px_rgba(243,176,82,0.4)]">
                UNFORGETTABLE.
              </span>
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#F5F5DC]/90 font-light leading-relaxed max-w-xl mb-10 drop-shadow-md"
            >
              Have an event in mind? Tell us about it and let's transform your vision into an extraordinary experience.
            </motion.p>

            {/* Primary Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <button
                onClick={scrollToEnquiry}
                className="group relative overflow-hidden inline-flex items-center gap-4 px-9 py-5 rounded-full bg-[#F3B052] text-[#0F3A22] text-xs font-black uppercase tracking-[0.25em] transition-all duration-300 hover:shadow-[0_0_40px_rgba(243,176,82,0.55)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-xl"
              >
                <span className="relative z-10">START AN ENQUIRY</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </button>

              <span className="hidden sm:inline-block text-[11px] font-bold tracking-widest text-[#F5F5DC] uppercase drop-shadow-md">
                Royal Celebrations &amp; Destination Weddings
              </span>
            </motion.div>

          </div>

        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          03. MAIN ENQUIRY AREA & 04. CONTACT INFORMATION PANEL
          12-column grid, max-w-[1400px], 65 / 35 split
      ───────────────────────────────────────────────────────────── */}
      <section id="enquiry-form" className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT 65% (8 cols on 12-grid) — ENQUIRY FORM */}
          <div className="lg:col-span-8 bg-[#0B2818]/90 border border-[#F3B052]/20 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-14 backdrop-blur-xl shadow-2xl">
            
            <div className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#F3B052] block mb-3">
                START YOUR EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif italic text-[#F5F5DC] tracking-tight leading-tight mb-4">
                Tell Us About Your Event
              </h2>
              <p className="text-sm sm:text-base text-[#F5F5DC]/70 font-light leading-relaxed">
                Every unforgettable Indian celebration begins with a cherished dream. Tell us yours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-16 text-center flex flex-col items-center bg-[#071E12] border border-[#F3B052]/30 rounded-2xl p-8">
                <CheckCircle2 className="w-16 h-16 text-[#F3B052] mb-5" />
                <h3 className="text-2xl sm:text-3xl font-serif italic text-[#F5F5DC] mb-3">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm sm:text-base text-[#F5F5DC]/80 max-w-md mx-auto leading-relaxed mb-8">
                  Your vision has been successfully delivered to Kabir Velyn and our executive design directors. We typically respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3.5 rounded-full border border-[#F3B052] text-[#F3B052] text-xs uppercase font-bold tracking-widest hover:bg-[#F3B052] hover:text-[#0F3A22] transition-all cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* FULL NAME */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-[#F3B052] mb-2">
                      FULL NAME*
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Priya Sharma"
                      className="w-full !bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/50 border border-[#F3B052]/30 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 focus:ring-[#F3B052] transition-all duration-300"
                    />
                  </div>

                  {/* EMAIL ADDRESS */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-[#F3B052] mb-2">
                      EMAIL ADDRESS*
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@example.com"
                      className="w-full !bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/50 border border-[#F3B052]/30 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 focus:ring-[#F3B052] transition-all duration-300"
                    />
                  </div>

                  {/* PHONE NUMBER */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-[#F3B052] mb-2">
                      PHONE NUMBER*
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full !bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/50 border border-[#F3B052]/30 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 focus:ring-[#F3B052] transition-all duration-300"
                    />
                  </div>

                  {/* EVENT TYPE */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-[#F3B052] mb-2">
                      EVENT TYPE*
                    </label>
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full !bg-[#FFFFFF] !text-[#0F3A22] border border-[#F3B052]/30 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 focus:ring-[#F3B052] transition-all duration-300 cursor-pointer"
                    >
                      <option value="" className="text-[#0F3A22]">Select event type</option>
                      <option value="Destination Wedding" className="text-[#0F3A22]">Destination Wedding (Palace / Coastal)</option>
                      <option value="Sangeet & Celebrations" className="text-[#0F3A22]">Sangeet &amp; Grand Celebrations</option>
                      <option value="Corporate Gala" className="text-[#0F3A22]">Corporate Gala &amp; Leadership Summit</option>
                      <option value="Private Soirée" className="text-[#0F3A22]">Exclusive Private Soirée</option>
                      <option value="Concert & Performance" className="text-[#0F3A22]">Concert &amp; Live Musical Production</option>
                      <option value="Fashion & Art Showcase" className="text-[#0F3A22]">Fashion &amp; Couture Showcase</option>
                      <option value="Luxury Celebration" className="text-[#0F3A22]">Anniversary &amp; Milestone Celebration</option>
                      <option value="Other" className="text-[#0F3A22]">Other Bespoke Concept</option>
                    </select>
                  </div>

                  {/* EVENT DATE */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-[#F3B052] mb-2">
                      EVENT DATE
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full !bg-[#FFFFFF] !text-[#0F3A22] border border-[#F3B052]/30 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 focus:ring-[#F3B052] transition-all duration-300"
                    />
                  </div>

                  {/* GUEST COUNT */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-[#F3B052] mb-2">
                      GUEST COUNT
                    </label>
                    <input
                      type="number"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      placeholder="e.g. 250"
                      className="w-full !bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/50 border border-[#F3B052]/30 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 focus:ring-[#F3B052] transition-all duration-300"
                    />
                  </div>

                  {/* EVENT LOCATION / VENUE */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-[#F3B052] mb-2">
                      EVENT LOCATION / VENUE
                    </label>
                    <input
                      type="text"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      placeholder="Udaipur, Jaipur, Goa, Mumbai, etc."
                      className="w-full !bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/50 border border-[#F3B052]/30 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 focus:ring-[#F3B052] transition-all duration-300"
                    />
                  </div>

                  {/* ESTIMATED BUDGET */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-[#F3B052] mb-2">
                      ESTIMATED BUDGET
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full !bg-[#FFFFFF] !text-[#0F3A22] border border-[#F3B052]/30 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 focus:ring-[#F3B052] transition-all duration-300 cursor-pointer"
                    >
                      <option value="" className="text-[#0F3A22]">Select budget tier</option>
                      <option value="Under ₹5L" className="text-[#0F3A22]">Under ₹5 Lakhs</option>
                      <option value="₹5L - ₹15L" className="text-[#0F3A22]">₹5 Lakhs – ₹15 Lakhs</option>
                      <option value="₹15L - ₹30L" className="text-[#0F3A22]">₹15 Lakhs – ₹30 Lakhs</option>
                      <option value="₹30L - ₹75L" className="text-[#0F3A22]">₹30 Lakhs – ₹75 Lakhs</option>
                      <option value="₹75L - ₹1.5Cr" className="text-[#0F3A22]">₹75 Lakhs – ₹1.5 Crore</option>
                      <option value="₹1.5Cr - ₹3Cr" className="text-[#0F3A22]">₹1.5 Crore – ₹3 Crore</option>
                      <option value="₹3Cr+" className="text-[#0F3A22]">₹3 Crore+ (Ultra Luxury / Royal)</option>
                      <option value="To be discussed" className="text-[#0F3A22]">To be discussed</option>
                    </select>
                  </div>

                </div>

                {/* Full-width Large Textarea */}
                <div className="flex flex-col pt-2">
                  <label className="text-[10px] uppercase font-black tracking-[0.2em] text-[#F3B052] mb-2">
                    TELL US ABOUT YOUR VISION
                  </label>
                  <textarea
                    rows={6}
                    value={formData.vision}
                    onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                    placeholder="Tell us about your celebration, ceremonies (Mehendi, Sangeet, Pheras), preferred destination, and any special hospitality requirements..."
                    className="w-full h-[160px] !bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/50 border border-[#F3B052]/30 rounded-xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#F3B052] transition-all duration-300 resize-none leading-relaxed"
                  ></textarea>
                </div>

                {/* Submit Area */}
                <div className="pt-6 flex flex-col items-stretch sm:flex-row sm:items-center justify-between gap-4 border-t border-[#F3B052]/20">
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs font-black uppercase tracking-[0.25em] transition-all duration-300 hover:shadow-[0_0_40px_rgba(243,176,82,0.55)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50 select-none"
                    style={{ background: "#F3B052", color: "#0F3A22" }}
                    onMouseDown={e => { const el = e.currentTarget; el.style.background = "#FFFFFF"; el.style.color = "#000000"; }}
                    onMouseUp={e => { const el = e.currentTarget; el.style.background = "#F3B052"; el.style.color = "#0F3A22"; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = "#F3B052"; el.style.color = "#0F3A22"; }}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "TRANSMITTING..." : "SEND ENQUIRY &rarr;"}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></span>
                  </button>

                  <p className="text-xs text-[#F5F5DC]/60 font-medium">
                    We usually respond within 24 hours.
                  </p>

                </div>

              </form>
            )}

          </div>

          {/* RIGHT 35% (4 cols on 12-grid) — CONTACT INFORMATION PANEL */}
          <div className="lg:col-span-4 bg-[#0B2818]/90 border border-[#F3B052]/20 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-2xl relative">
            
            <div className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F3B052] block mb-2">
                PREFER TO TALK DIRECTLY?
              </span>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Our team is always happy to discuss your next event.
              </p>
            </div>

            {/* 3 Stacked Contact Cards */}
            <div className="space-y-4 mb-8">
              
              {/* CONTACT CARD 01 - PHONE */}
              <a
                href="tel:+919876543210"
                className="group flex items-center justify-between p-5 rounded-2xl bg-[#0F3A22] border border-[#F3B052]/20 hover:border-[#F3B052] hover:bg-[#134428] hover:-translate-y-1 transition-all duration-300"
                style={{ textDecoration: "none" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F3B052]/15 border border-[#F3B052]/40 flex items-center justify-center text-[#F3B052] group-hover:bg-[#F3B052] group-hover:text-[#0F3A22] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] font-black text-[#F3B052] block">
                      CALL US
                    </span>
                    <span className="text-sm font-semibold tracking-wide text-[#F5F5DC] group-hover:text-[#F3B052] transition-colors">
                      +91 98765 43210
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#F3B052]/50 group-hover:text-[#F3B052] group-hover:translate-x-1 transition-all" />
              </a>

              {/* CONTACT CARD 02 - EMAIL */}
              <a
                href="mailto:hello@velyn.com"
                className="group flex items-center justify-between p-5 rounded-2xl bg-[#0F3A22] border border-[#F3B052]/20 hover:border-[#F3B052] hover:bg-[#134428] hover:-translate-y-1 transition-all duration-300"
                style={{ textDecoration: "none" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F3B052]/15 border border-[#F3B052]/40 flex items-center justify-center text-[#F3B052] group-hover:bg-[#F3B052] group-hover:text-[#0F3A22] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] font-black text-[#F3B052] block">
                      EMAIL US
                    </span>
                    <span className="text-sm font-semibold tracking-wide text-[#F5F5DC] group-hover:text-[#F3B052] transition-colors">
                      hello@velyn.com
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#F3B052]/50 group-hover:text-[#F3B052] group-hover:translate-x-1 transition-all" />
              </a>

              {/* CONTACT CARD 03 - LOCATION */}
              <a
                href="#map-section"
                className="group flex items-center justify-between p-5 rounded-2xl bg-[#0F3A22] border border-[#F3B052]/20 hover:border-[#F3B052] hover:bg-[#134428] hover:-translate-y-1 transition-all duration-300"
                style={{ textDecoration: "none" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F3B052]/15 border border-[#F3B052]/40 flex items-center justify-center text-[#F3B052] group-hover:bg-[#F3B052] group-hover:text-[#0F3A22] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] font-black text-[#F3B052] block">
                      VISIT US
                    </span>
                    <span className="text-sm font-semibold tracking-wide text-[#F5F5DC] group-hover:text-[#F3B052] transition-colors block">
                      VELYN Event Management
                    </span>
                    <span className="text-xs text-[#F5F5DC]/60">Mumbai, Maharashtra, India</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#F3B052]/50 group-hover:text-[#F3B052] group-hover:translate-x-1 transition-all" />
              </a>

            </div>

            {/* Bottom WhatsApp Button (Luxury Styled) */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full border border-[#F3B052]/40 bg-[#0F3A22] text-[#F5F5DC] hover:bg-[#F3B052] hover:!text-[#0F3A22] hover:border-[#F3B052] transition-all duration-300 text-xs font-black uppercase tracking-[0.25em] group"
              style={{ textDecoration: "none" }}
            >
              <MessageCircle className="w-4 h-4 text-[#F3B052] group-hover:text-[#0F3A22] transition-colors" />
              <span>WHATSAPP US &rarr;</span>
            </a>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          05. INTERACTIVE MAP SECTION & 06. FLOATING LOCATION CARD
      ───────────────────────────────────────────────────────────── */}
      <section id="map-section" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F3B052] block mb-3">
            FIND US
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif italic text-[#F5F5DC] tracking-tight mb-4">
            COME MEET US.
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5DC]/70 font-light leading-relaxed">
            Visit our studio and let's talk about your next unforgettable event.
          </p>
        </div>

        {/* Large Interactive Map Container — full height on mobile, overflow hidden, location card moved below on mobile */}
        <div className="relative w-full rounded-[20px] sm:rounded-[30px] border border-[#F3B052]/20 bg-[#071E12] shadow-[0_30px_90px_rgba(0,0,0,0.7)] overflow-hidden" style={{ height: 'clamp(300px, 55vw, 620px)' }}>
          
          {/* Draggable Map Canvas Surface */}
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`w-full h-full relative cursor-${isDragging ? "grabbing" : "grab"} select-none`}
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "center center",
              transition: isDragging ? "none" : "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Custom Luxury Forest Green Cartographic Vector Background */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1400 650"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Deep Water Feature on West */}
              <path
                d="M 0,0 L 320,0 Q 280,200 360,400 T 420,650 L 0,650 Z"
                fill="#04120A"
              />
              <path
                d="M 320,0 Q 280,200 360,400 T 420,650"
                stroke="#134428"
                strokeWidth="4"
                fill="none"
                opacity="0.5"
              />
              <text x="120" y="320" fill="#1B5534" fontSize="13" fontWeight="bold" letterSpacing="0.4em">
                BACK BAY / COASTLINE
              </text>

              {/* Urban Grid Blocks */}
              <g opacity="0.25">
                <rect x="420" y="40" width="180" height="120" fill="#0B2818" rx="8" />
                <rect x="630" y="40" width="220" height="120" fill="#0B2818" rx="8" />
                <rect x="880" y="40" width="240" height="120" fill="#0B2818" rx="8" />
                <rect x="1150" y="40" width="220" height="120" fill="#0B2818" rx="8" />

                <rect x="440" y="190" width="160" height="160" fill="#0B2818" rx="8" />
                <rect x="630" y="190" width="180" height="160" fill="#0B2818" rx="8" />
                <rect x="840" y="190" width="280" height="160" fill="#0B2818" rx="8" />
                <rect x="1150" y="190" width="220" height="160" fill="#0B2818" rx="8" />

                <rect x="460" y="380" width="200" height="220" fill="#0B2818" rx="8" />
                <rect x="690" y="380" width="200" height="220" fill="#0B2818" rx="8" />
                <rect x="920" y="380" width="200" height="220" fill="#0B2818" rx="8" />
                <rect x="1150" y="380" width="220" height="220" fill="#0B2818" rx="8" />
              </g>

              {/* Secondary Street Lines */}
              <g stroke="#1A4B2E" strokeWidth="1.5" opacity="0.4">
                <line x1="380" y1="170" x2="1400" y2="170" />
                <line x1="420" y1="360" x2="1400" y2="360" />
                <line x1="615" y1="0" x2="615" y2="650" />
                <line x1="860" y1="0" x2="860" y2="650" />
                <line x1="1135" y1="0" x2="1135" y2="650" />
              </g>

              {/* Arterial Highways / Royal Boulevards */}
              <path
                d="M 360,0 Q 320,200 400,400 T 460,650"
                stroke="#F3B052"
                strokeWidth="5"
                fill="none"
                opacity="0.4"
              />
              <line x1="350" y1="280" x2="1400" y2="280" stroke="#F3B052" strokeWidth="4" opacity="0.4" />

              {/* Street Names & Landmark Labels */}
              <text x="390" y="265" fill="#F5F5DC" opacity="0.8" fontSize="11" fontWeight="bold" letterSpacing="0.25em">
                MARINE DRIVE PROMENADE
              </text>
              <text x="635" y="270" fill="#F3B052" opacity="0.95" fontSize="11" fontWeight="900" letterSpacing="0.3em">
                ROYAL HERITAGE BOULEVARD
              </text>
              <text x="880" y="155" fill="#F5F5DC" opacity="0.6" fontSize="10" letterSpacing="0.2em">
                OPERA HOUSE WAY
              </text>
              <text x="1155" y="155" fill="#F5F5DC" opacity="0.6" fontSize="10" letterSpacing="0.2em">
                ATELIER ROW
              </text>

              {/* Landmark Pins */}
              <g opacity="0.75">
                <circle cx="510" cy="110" r="4" fill="#F3B052" />
                <text x="522" y="114" fill="#F5F5DC" fontSize="10" opacity="0.7">The Grand Opera</text>

                <circle cx="980" cy="110" r="4" fill="#F3B052" />
                <text x="992" y="114" fill="#F5F5DC" fontSize="10" opacity="0.7">Metropolitan Art Club</text>

                <circle cx="730" cy="460" r="4" fill="#F3B052" />
                <text x="742" y="464" fill="#F5F5DC" fontSize="10" opacity="0.7">Bayfront Pavilion</text>
              </g>
            </svg>

            {/* PRECISE VELYN LOCATION PIN WITH PULSING RIPPLE */}
            <div className="absolute top-[280px] left-[730px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-auto">
              {/* Outer Pulsing Waves */}
              <div className="absolute w-24 h-24 rounded-full bg-[#F3B052]/25 animate-ping"></div>
              <div className="absolute w-16 h-16 rounded-full bg-[#F3B052]/35 animate-pulse"></div>

              {/* V-Monogram Pin Emblem */}
              <div className="relative w-14 h-14 rounded-2xl bg-[#F3B052] p-0.5 shadow-[0_0_35px_rgba(243,176,82,0.85)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div className="w-full h-full bg-[#0F3A22] rounded-[14px] flex items-center justify-center">
                  <span className="font-serif italic font-black text-2xl text-[#F3B052]">V</span>
                </div>
              </div>

              {/* Pin Base / Shadow */}
              <div className="w-3 h-3 bg-[#F3B052] rotate-45 -mt-1.5 shadow-lg"></div>
              
              {/* Pin Label Banner */}
              <div className="mt-2 px-3 py-1 rounded-full bg-[#0F3A22] border border-[#F3B052] text-[9px] font-black tracking-[0.25em] text-[#F3B052] uppercase whitespace-nowrap shadow-xl">
                VELYN HEADQUARTERS
              </div>
            </div>

          </div>

          {/* Map Controls (Top Right) */}
          <div className="absolute top-6 right-6 z-30 flex flex-col gap-2">
            <button
              onClick={handleZoomIn}
              className="w-10 h-10 rounded-xl bg-[#0F3A22]/90 border border-[#F3B052]/30 text-[#F5F5DC] hover:text-[#F3B052] hover:border-[#F3B052] flex items-center justify-center backdrop-blur-md shadow-xl transition-all cursor-pointer"
              title="Zoom In"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="w-10 h-10 rounded-xl bg-[#0F3A22]/90 border border-[#F3B052]/30 text-[#F5F5DC] hover:text-[#F3B052] hover:border-[#F3B052] flex items-center justify-center backdrop-blur-md shadow-xl transition-all cursor-pointer"
              title="Zoom Out"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetMap}
              className="w-10 h-10 rounded-xl bg-[#0F3A22]/90 border border-[#F3B052]/30 text-[#F5F5DC] hover:text-[#F3B052] hover:border-[#F3B052] flex items-center justify-center backdrop-blur-md shadow-xl transition-all cursor-pointer"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              06. FLOATING MAP LOCATION CARD — hidden on mobile (shown below map instead)
          ───────────────────────────────────────────────────────────── */}
          <div className="hidden sm:block absolute bottom-6 left-6 z-30 max-w-[360px] w-full p-6 rounded-[22px] bg-[#0B2818]/95 border border-[#F3B052]/30 backdrop-blur-2xl shadow-2xl">
            
            <div className="flex items-center justify-between mb-4 border-b border-[#F3B052]/20 pb-3">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] font-black text-[#F3B052] block">
                  FLAGSHIP STUDIO
                </span>
                <h4 className="text-lg font-serif italic text-[#F5F5DC]">
                  VELYN Event Management
                </h4>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#F3B052] shadow-[0_0_10px_#F3B052]"></div>
            </div>

            <p className="text-xs text-[#F5F5DC]/80 leading-relaxed font-light mb-4">
              Pavilion 7, Royal Heritage Boulevard, Nariman Point, Mumbai 400021, India
            </p>

            <div className="flex items-center gap-3 text-xs text-[#F5F5DC]/70 mb-6 bg-[#0F3A22] p-3 rounded-xl border border-[#F3B052]/20">
              <Clock className="w-4 h-4 text-[#F3B052] shrink-0" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#F3B052]">OPENING HOURS</p>
                <p>Monday – Saturday · 10:00 AM – 7:00 PM</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <a
                href="https://maps.google.com/?q=Nariman+Point+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#F3B052] text-[#0F3A22] text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#F8D28B] hover:shadow-[0_0_20px_rgba(243,176,82,0.4)] transition-all cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleResetMap}
                className="py-3 px-4 rounded-full border border-[#F3B052]/40 text-[#F5F5DC] text-[10px] font-bold uppercase tracking-[0.2em] hover:border-[#F3B052] hover:text-[#F3B052] transition-colors cursor-pointer"
              >
                VIEW PIN ↗
              </button>
            </div>

          </div>

        </div>

        {/* ── Mobile-only Location Card (shown below map on small screens) ── */}
        <div className="sm:hidden mt-4 p-5 rounded-[18px] bg-[#0B2818]/95 border border-[#F3B052]/30 backdrop-blur-2xl shadow-2xl">
          <div className="flex items-center justify-between mb-3 border-b border-[#F3B052]/20 pb-3">
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] font-black text-[#F3B052] block">FLAGSHIP STUDIO</span>
              <h4 className="text-base font-serif italic text-[#F5F5DC]">VELYN Event Management</h4>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#F3B052] shadow-[0_0_10px_#F3B052]"></div>
          </div>
          <p className="text-xs text-[#F5F5DC]/80 leading-relaxed font-light mb-3">
            Pavilion 7, Royal Heritage Boulevard, Nariman Point, Mumbai 400021, India
          </p>
          <div className="flex items-center gap-3 text-xs text-[#F5F5DC]/70 mb-4 bg-[#0F3A22] p-3 rounded-xl border border-[#F3B052]/20">
            <Clock className="w-4 h-4 text-[#F3B052] shrink-0" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#F3B052]">OPENING HOURS</p>
              <p>Monday – Saturday · 10:00 AM – 7:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://maps.google.com/?q=Nariman+Point+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-full bg-[#F3B052] text-[#0F3A22] text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#F8D28B] transition-all cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <span>GET DIRECTIONS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={handleResetMap}
              className="py-3 px-4 rounded-full border border-[#F3B052]/40 text-[#F5F5DC] text-[10px] font-bold uppercase tracking-[0.2em] hover:border-[#F3B052] hover:text-[#F3B052] transition-colors cursor-pointer"
            >
              VIEW PIN ↗
            </button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            07. LOCATION DETAILS BELOW MAP (3 Horizontal Columns)
        ───────────────────────────────────────────────────────────── */}
        <div className="mt-14 pt-10 border-t border-[#F3B052]/20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Col 1: Location */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#F3B052] block">
              01. LOCATION
            </span>
            <p className="text-sm font-light text-[#F5F5DC]/80 leading-relaxed">
              Pavilion 7, Royal Heritage Boulevard,<br />
              Nariman Point, Mumbai 400021, India
            </p>
          </div>

          {/* Col 2: Hours */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#F3B052] block">
              02. HOURS
            </span>
            <p className="text-sm font-light text-[#F5F5DC]/80 leading-relaxed">
              Mon – Sat · 10:00 AM – 7:00 PM<br />
              <span className="text-[#F5F5DC]/50 text-xs">Sunday by private invitation</span>
            </p>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#F3B052] block">
              03. DIRECT CONTACT
            </span>
            <p className="text-sm font-light text-[#F5F5DC]/80 leading-relaxed">
              Phone: +91 98765 43210<br />
              Inquiries: hello@velyn.com
            </p>
          </div>

        </div>

      </section>



    </div>
  );
}
