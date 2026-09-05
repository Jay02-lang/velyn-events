import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';



const faqs = [
  { q: "How far in advance should we book?", a: "For grand destination weddings in Udaipur, Jaipur, or Goa, and multi-day celebrations, we recommend 8-14 months in advance. For intimate anniversary celebrations and corporate galas, 3-6 months is ideal." },
  { q: "Do you travel for destination events?", a: "Absolutely. From royal heritage palaces in Rajasthan and coastal retreats in Goa and Kerala, to international Indian destination weddings in Dubai, Thailand, and Europe, we manage complete guest hospitality and vendor curation." },
  { q: "What is your minimum investment?", a: "Our commissions begin from \u20B92,50,000 for intimate ceremonies, decor styling, and bespoke planning, scaling seamlessly for grand multi-day celebrations." }
];

const scrollingImages = [
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1533174000220-4ee05553b6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
];

const formCarouselImages = [
  "https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formImgIndex, setFormImgIndex] = useState(0);
  const [heroImgIndex, setHeroImgIndex] = useState(0);
  const [activePortfolioItem, setActivePortfolioItem] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFormImgIndex((prev) => (prev + 1) % formCarouselImages.length);
      setHeroImgIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let animationFrameId: number;
    
    const scroll = () => {
      if (!isHoveredRef.current) {
        el.scrollLeft += 1.5; // Smooth fast scrolling
        // When we reach half the scrollable width, cleanly reset by subtracting exactly half the total width
        if (el.scrollLeft >= el.scrollWidth / 2) {
           el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  
  return (
    <div className="w-full font-sans text-theme-text bg-[#F5F5DC]">
      
      {/* 1. TOP SECTION (SCATTERED IMAGES & ELEGANT TYPOGRAPHY HERO) */}
      {/* 1. TOP SECTION (FULLSCREEN CINEMATIC HERO) */}
      <section className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
        
        {/* Cinematic Crossfading Backgrounds */}
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={heroImgIndex}
            src={[
              "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
              "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            ][heroImgIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            alt="Luxury Event" 
            className="img-bg absolute inset-0 w-full h-full object-cover filter brightness-50 contrast-125"
          />
        </AnimatePresence>
        
        {/* Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0F3A22]/90 z-10 pointer-events-none"></div>

        {/* Central Typography Lockup - MODERN PREMIUM */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center pointer-events-none mt-16 md:mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-[clamp(5rem,22vw,350px)] font-black tracking-tighter uppercase text-[#F5F5DC] leading-[0.75] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              VELYN
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mt-6 md:mt-12 flex items-center justify-center"
          >
            <div className="w-8 md:w-24 h-px bg-[#F3B052]/50"></div>
            <h2 className="text-[clamp(1rem,4vw,35px)] font-bold tracking-[1em] md:tracking-[2em] uppercase text-[#F3B052] leading-none ml-2 md:ml-6 mx-4">
              EVENTS
            </h2>
            <div className="w-8 md:w-24 h-px bg-[#F3B052]/50"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 z-20 pointer-events-none w-full px-4"
        >
          <span className="text-sm md:text-lg lg:text-xl font-serif italic text-[#F3B052] tracking-wider drop-shadow-lg text-center leading-relaxed">
            Your Journey Into The Extraordinary Begins Here
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-[#F3B052]/80 to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. MIDDLE SECTION (AUDIENCE RELEVANCE style) */}
      <section className="py-24 bg-[#0F3A22] text-[#F3B052] border-t border-[#F3B052]/10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
          
          <div className="w-full md:w-1/3 flex flex-col items-start md:pr-12 z-20">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-[#F5F5DC] mb-6">BESPOKE</h2>
            <p className="text-sm font-medium text-[#F5F5DC]/80 leading-relaxed text-left">
              VELYN orchestrates grand celebrations for India's most distinguished families, visionary founders, and global tastemakers who revere rich cultural heritage and contemporary regal opulence.
            </p>
          </div>

          <div className="w-full md:w-1/3 my-16 md:my-0 flex justify-center relative z-10">
            <div className="w-64 h-64 md:w-96 md:h-96 overflow-hidden border-4 border-[#0F3A22] shadow-2xl relative z-10 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Center Portrait" 
                className="w-full h-full object-cover filter contrast-125 sepia-[0.3]"
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-end md:pl-12 z-20">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-[#F5F5DC] mb-6 text-right">EVENTS</h2>
            <p className="text-sm font-medium text-[#F5F5DC]/80 leading-relaxed text-right">
              From soulful pheras in ancient forts to starlit Bollywood sangeets, our guests don't just attend — they immerse in warm Indian hospitality, cherished rituals, and timeless memories.
            </p>
          </div>

        </div>
      </section>

      {/* 3. EXPERTISE / GLOBAL REACH */}
      <section className="py-32 bg-[#F3B052] text-[#0F3A22] relative overflow-hidden border-t border-[#0F3A22]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
            <div>
              <h2 className="text-[#0F3A22]/60 text-[10px] uppercase tracking-[0.4em] font-black mb-6">Our Expertise</h2>
              <h3 className="text-6xl md:text-[8rem] font-serif italic tracking-tighter leading-[0.9]">Global<br/>Reach.</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed opacity-80 max-w-sm mb-4 font-medium lg:text-right">
              We design and execute masterclasses in royal Indian hospitality across iconic destinations, from royal Rajasthan palaces to serene Goa shores and international luxury havens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            
            {/* Pillar 1 */}
            <div className="group cursor-pointer flex flex-col">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative shadow-2xl rounded-2xl">
                <div className="absolute inset-0 bg-[#0F3A22]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply z-10"></div>
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury Weddings" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <div className="flex items-center gap-4 mb-3 mt-4">
                <span className="text-[10px] font-black tracking-widest opacity-40">01</span>
                <div className="h-px bg-[#0F3A22]/20 flex-grow"></div>
              </div>
              <h4 className="text-2xl font-serif text-[#0F3A22] mb-3">Luxury Weddings</h4>
              <p className="text-xs opacity-70 leading-relaxed font-medium mb-6">From royal palace pheras in Udaipur to sunlit seaside Mehendis in Goa, we curate multi-day wedding celebrations that become family heirlooms.</p>
              <Link to="/services#luxury-weddings" className="mt-auto !text-[#0F3A22] text-[9px] font-black uppercase tracking-[0.3em] hover:!text-[#F5F5DC] transition-colors border-b border-[#0F3A22]/20 hover:border-[#F5F5DC] pb-1 inline-block self-start">
                View Details
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="group cursor-pointer flex flex-col lg:mt-16">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative shadow-2xl rounded-2xl">
                <div className="absolute inset-0 bg-[#0F3A22]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply z-10"></div>
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Corporate Galas" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <div className="flex items-center gap-4 mb-3 mt-4">
                <span className="text-[10px] font-black tracking-widest opacity-40">02</span>
                <div className="h-px bg-[#0F3A22]/20 flex-grow"></div>
              </div>
              <h4 className="text-2xl font-serif text-[#0F3A22] mb-3">Corporate Galas</h4>
              <p className="text-xs opacity-70 leading-relaxed font-medium mb-6">Executing high-profile corporate summits, award nights, and luxury brand launches across Mumbai, Bengaluru, and Delhi with world-class stagecraft.</p>
              <Link to="/services#corporate-galas" className="mt-auto !text-[#0F3A22] text-[9px] font-black uppercase tracking-[0.3em] hover:!text-[#F5F5DC] transition-colors border-b border-[#0F3A22]/20 hover:border-[#F5F5DC] pb-1 inline-block self-start">
                View Details
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="group cursor-pointer flex flex-col">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative shadow-2xl rounded-2xl">
                <div className="absolute inset-0 bg-[#0F3A22]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply z-10"></div>
                <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Private SoirÃ©es" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <div className="flex items-center gap-4 mb-3 mt-4">
                <span className="text-[10px] font-black tracking-widest opacity-40">03</span>
                <div className="h-px bg-[#0F3A22]/20 flex-grow"></div>
              </div>
              <h4 className="text-2xl font-serif text-[#0F3A22] mb-3">Private SoirÃ©es</h4>
              <p className="text-xs opacity-70 leading-relaxed font-medium mb-6">Exclusive milestone anniversaries, farmhouse celebrations, and private ghazal nights tailored with discreet, royal hospitality for elite families.</p>
              <Link to="/services#private-soirees" className="mt-auto !text-[#0F3A22] text-[9px] font-black uppercase tracking-[0.3em] hover:!text-[#F5F5DC] transition-colors border-b border-[#0F3A22]/20 hover:border-[#F5F5DC] pb-1 inline-block self-start">
                View Details
              </Link>
            </div>

            {/* Pillar 4 */}
            <div className="group cursor-pointer flex flex-col lg:mt-16">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative shadow-2xl rounded-2xl">
                <div className="absolute inset-0 bg-[#0F3A22]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply z-10"></div>
                <img src="https://images.unsplash.com/photo-1533174000220-4ee05553b6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cultural Extravaganzas" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <div className="flex items-center gap-4 mb-3 mt-4">
                <span className="text-[10px] font-black tracking-widest opacity-40">04</span>
                <div className="h-px bg-[#0F3A22]/20 flex-grow"></div>
              </div>
              <h4 className="text-2xl font-serif text-[#0F3A22] mb-3">Cultural Extravaganzas</h4>
              <p className="text-xs opacity-70 leading-relaxed font-medium mb-6">Magnificent multi-day celebrations honoring Indian royal traditions with monumental floral architecture, folk troupes, and royal feast banquets.</p>
              <Link to="/services#cultural-extravaganzas" className="mt-auto !text-[#0F3A22] text-[9px] font-black uppercase tracking-[0.3em] hover:!text-[#F5F5DC] transition-colors border-b border-[#0F3A22]/20 hover:border-[#F5F5DC] pb-1 inline-block self-start">
                View Details
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. AUTO-SCROLLING PORTFOLIO SECTION */}
      <section className="py-24 bg-[#F5F5DC] overflow-hidden relative border-t border-[#0F3A22]/10">
        <div className="text-center mb-16 px-6 relative z-30">
          <h2 className="text-[#0F3A22]/50 text-[10px] uppercase tracking-[0.4em] font-black mb-4">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#0F3A22] uppercase tracking-tighter">A Glimpse of Magic</h3>
        </div>

        <div 
          ref={scrollRef}
          className="flex w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-16 pt-8 items-center cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'auto' }}
        >
          {(() => {
            const portfolioItems = [
              { title: 'Grand Galas', desc: 'Opulent palace celebrations designed for high-profile hosts, featuring heritage Rajasthani floral installations, Sufi performances, and royal Awadhi banquets.', img: scrollingImages[0] },
              { title: 'Private Estates', desc: 'Transforming heritage havelis, tea estates in Munnar, and private coastal villas into breathtaking wedding sanctuaries with utmost privacy.', img: scrollingImages[1] },
              { title: 'Brand Summits', desc: 'Curating flagship enterprise summits, luxury automobile unveils, and high-jewelry showcases across premier venues in Mumbai and New Delhi.', img: scrollingImages[2] },
              { title: 'Cultural Fiestas', desc: 'Spirited multi-day Sangeet nights and royal Baraat processions honoring time-honored Indian traditions with theatrical flair and hospitality.', img: scrollingImages[3] },
              { title: 'Exclusive Dining', desc: 'Curated royal dastarkhwan feasts and bespoke regional degustations crafted by culinary master chefs for intimate family celebrations.', img: scrollingImages[4] },
            ];
            
            // Duplicate for smooth infinite scrolling
            const items = [...portfolioItems, ...portfolioItems, ...portfolioItems, ...portfolioItems];
            
            return items.map((item, i) => {
              const isUpper = i % 2 === 0;
              const isActive = activePortfolioItem === i;
              
              return (
                <div 
                  key={i} 
                  className={`flex flex-col w-[85vw] md:w-[45vw] flex-shrink-0 mx-6 transition-transform duration-700 ${isUpper ? '-translate-y-12' : 'translate-y-12'}`}
                  onMouseEnter={() => (isHoveredRef.current = true)}
                  onMouseLeave={() => (isHoveredRef.current = false)}
                  onTouchStart={() => (isHoveredRef.current = true)}
                  onTouchEnd={() => setTimeout(() => (isHoveredRef.current = false), 2000)}
                >
                  
                  {/* TEXT ABOVE FOR LOWER IMAGES */}
                  {!isUpper && (
                    <div className="text-center mb-6 px-4">
                      <h3 className="text-3xl md:text-4xl font-serif text-[#0F3A22] tracking-wide">{item.title}</h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#0F3A22]/80 text-sm md:text-base font-medium leading-relaxed">
                              {item.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* IMAGE */}
                  <div 
                    onClick={() => setActivePortfolioItem(isActive ? null : i)}
                    className="relative aspect-[21/9] w-full shadow-[0_20px_50px_rgba(15,58,34,0.15)] overflow-hidden border border-[#0F3A22]/5 group cursor-pointer rounded-2xl"
                  >
                    <div className={`absolute inset-0 transition-colors duration-500 z-10 flex items-center justify-center ${isActive ? 'bg-black/40' : 'bg-[#F5F5DC]/10 group-hover:bg-transparent'}`}>
                       <span className={`px-6 py-3 rounded-full bg-black/60 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'}`}>
                         {isActive ? 'Close Details' : 'View Magic'}
                       </span>
                    </div>
                    <img src={item.img} alt={item.title} className={`w-full h-full object-cover transition-all duration-1000 ${isActive ? 'grayscale-0 scale-100' : 'grayscale scale-105 group-hover:grayscale-0 group-hover:scale-100'}`} />
                  </div>

                  {/* TEXT BELOW FOR UPPER IMAGES */}
                  {isUpper && (
                    <div className="text-center mt-6 px-4">
                      <h3 className="text-3xl md:text-4xl font-serif text-[#0F3A22] tracking-wide">{item.title}</h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#0F3A22]/80 text-sm md:text-base font-medium leading-relaxed">
                              {item.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                </div>
              );
            });
          })()}
        </div>
      </section>

      {/* 3. ABOUT US & REVIEWS */}
      <section className="pt-32 pb-16 bg-[#0F3A22] text-[#F5F5DC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
            <div>
              <h2 className="text-[#F3B052] text-[10px] uppercase tracking-[0.4em] font-black mb-6">Behind The Magic</h2>
              <h3 className="text-6xl md:text-[8rem] font-serif italic tracking-tighter leading-[0.9]">About<br/>Us.</h3>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-6">
              <p className="text-sm md:text-base leading-relaxed opacity-80 max-w-sm font-medium lg:text-right">
                Experience our passion for service and dedication to purpose as we lead with integrity, precision, and excellence in everything we touch.
              </p>
              <Link
                to="/about#founder"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#F3B052] !text-[#F3B052] text-xs uppercase tracking-[0.3em] font-black hover:bg-[#F3B052] hover:!text-[#0F3A22] transition-all duration-300"
              >
                Meet Our Founder
                <span className="text-lg">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* THE FOUNDER & ENSEMBLE */}
          <div className="w-full mb-24">
            
            {/* The Founder */}
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center mb-32">
              <div className="w-full md:w-5/12">
                <div className="w-full aspect-[3/4] overflow-hidden shadow-2xl relative border border-[#F5F5DC]/10 group rounded-2xl">
                  <div className="absolute inset-0 bg-[#F3B052]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Kabir Velyn" 
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12">
                <h2 className="text-[#F5F5DC]/50 text-[10px] uppercase tracking-[0.3em] font-black mb-6">The Founder & Principal Architect</h2>
                <h3 className="text-5xl md:text-7xl font-serif italic mb-8 leading-[1.1] text-[#F3B052]">Kabir Velyn</h3>
                <div className="w-16 h-px bg-[#F5F5DC]/20 mb-8"></div>
                <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-6 font-medium text-[#F5F5DC]">
                  "An Indian celebration is never an accident; it is the sacred culmination of deep family heritage intersecting with absolute, regal precision."
                </p>
                <p className="text-sm leading-relaxed opacity-70 mb-8 font-medium max-w-xl text-[#F5F5DC]">
                  With deep roots in Indian architectural traditions and luxury event curation, Kabir founded VELYN to bridge timeless royal customs with contemporary experiential design. His philosophy centers on transforming palaces, historic forts, and private estates into living narratives of the host family's lineage and vision.
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" className="h-12 opacity-40 filter invert" style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(45%) saturate(710%) hue-rotate(99deg) brightness(97%) contrast(98%)' }} alt="Signature" />
              </div>
            </div>

            {/* The Ensemble */}
            <div className="flex flex-col items-start lg:items-center mb-16">
              <h2 className="text-[#F5F5DC]/50 text-[10px] uppercase tracking-[0.3em] font-black mb-4 lg:text-center">The Ensemble</h2>
              <h3 className="text-4xl md:text-5xl font-serif italic leading-[1.1] lg:text-center text-[#F5F5DC]">Curators of the Extraordinary</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {/* Employee 1 */}
              <div className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[3/4] overflow-hidden mb-6 shadow-2xl relative border border-[#F5F5DC]/5 rounded-2xl">
                  <div className="absolute inset-0 bg-[#F3B052]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply"></div>
                  <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" alt="Ranveer Kapoor" />
                </div>
                <div className="flex items-center gap-4 mb-3 mt-2">
                  <div className="h-px bg-[#F5F5DC]/20 flex-grow"></div>
                </div>
                <h4 className="text-2xl font-serif italic mb-2 text-[#F3B052]">Ranveer Kapoor</h4>
                <p className="text-[9px] uppercase tracking-[0.2em] font-black opacity-50 mb-4 text-[#F5F5DC]">Director of Culinary Arts</p>
                <p className="text-xs font-medium opacity-70 leading-relaxed text-[#F5F5DC]">
                  Celebrated for curating regal Awadhi dastarkhwans, traditional royal Marwari thalis, and progressive Indian fusion banquets for high-profile weddings.
                </p>
              </div>
              
              {/* Employee 2 */}
              <div className="flex flex-col group cursor-pointer md:mt-12">
                <div className="w-full aspect-[3/4] overflow-hidden mb-6 shadow-2xl relative border border-[#F5F5DC]/5 rounded-2xl">
                  <div className="absolute inset-0 bg-[#F3B052]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply"></div>
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" alt="Ananya Singhania" />
                </div>
                <div className="flex items-center gap-4 mb-3 mt-2">
                  <div className="h-px bg-[#F5F5DC]/20 flex-grow"></div>
                </div>
                <h4 className="text-2xl font-serif italic mb-2 text-[#F3B052]">Ananya Singhania</h4>
                <p className="text-[9px] uppercase tracking-[0.2em] font-black opacity-50 mb-4 text-[#F5F5DC]">Head of Spatial Design</p>
                <p className="text-xs font-medium opacity-70 leading-relaxed text-[#F5F5DC]">
                  A visionary in grand mandap architecture and floral installations, harmonizing heritage craftsmanship with contemporary palace illumination.
                </p>
              </div>

              {/* Employee 3 */}
              <div className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[3/4] overflow-hidden mb-6 shadow-2xl relative border border-[#F5F5DC]/5 rounded-2xl">
                  <div className="absolute inset-0 bg-[#F3B052]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply"></div>
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" alt="Vikram Malhotra" />
                </div>
                <div className="flex items-center gap-4 mb-3 mt-2">
                  <div className="h-px bg-[#F5F5DC]/20 flex-grow"></div>
                </div>
                <h4 className="text-2xl font-serif italic mb-2 text-[#F3B052]">Vikram Malhotra</h4>
                <p className="text-[9px] uppercase tracking-[0.2em] font-black opacity-50 mb-4 text-[#F5F5DC]">Global Logistics Director</p>
                <p className="text-xs font-medium opacity-70 leading-relaxed text-[#F5F5DC]">
                  Directing multi-city guest hospitality, chartered arrivals, royal baraat vintage car convoys, and 24/7 guest concierge across destination venues.
                </p>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-xs font-bold text-[#F3B052] uppercase tracking-widest mb-4">Client Testimonials</h2>
                <h3 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-[#F5F5DC]">Stories of<br/>Unforgettable Moments</h3>
              </div>
              <div className="max-w-md pb-2 flex flex-col items-start md:items-end">
                <p className="text-sm leading-relaxed text-[#F5F5DC]/80 font-medium mb-6 md:text-right">
                  Hear from the remarkable families and visionary leaders who trusted us to bring their most cherished milestones to life.
                </p>
                <Link to="/about#reviews" className="inline-block border-b-2 border-[#F3B052] !text-[#F3B052] font-black uppercase tracking-widest pb-1 hover:border-[#F5F5DC] hover:!text-[#F5F5DC] transition-colors">
                  More Reviews
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Radhika & Dev Singhania', role: 'Royal Palace Wedding, Udaipur', quote: 'VELYN transformed our 4-day palace wedding in Udaipur into pure poetry. From the vibrant Mehendi by Lake Pichola to a magical Sangeet and royal Baraat, every guest felt treated like royalty.', img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { name: 'Rajesh Bansal', role: 'Managing Director, Apex Global, Mumbai', quote: 'The annual leadership summit and gala they organized at the Taj Mahal Palace in Mumbai set a new standard. Flawless hospitality, seamless protocol, and breathtaking stage production.', img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { name: 'Priya & Karan Oberoi', role: 'Destination Sangeet & Reception, Goa', quote: 'From our seaside sunset welcome party to a high-energy, starry Bollywood Sangeet, VELYN delivered pure magic. Their heartfelt Indian hospitality combined with world-class production is unmatched.', img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
              ].map((review, i) => (
                <div key={i} className="flex flex-col group bg-[#F5F5DC]/5 p-6 rounded-2xl hover:bg-[#F5F5DC]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#F5F5DC]/10">
                  <div className="w-full aspect-[4/5] mb-8 overflow-hidden rounded-xl shadow-lg relative">
                    <div className="absolute inset-0 bg-[#F3B052]/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                  </div>
                  <div className="relative flex-grow">
                    <span className="text-6xl text-[#F3B052]/20 font-serif absolute -top-4 -left-3 pointer-events-none">"</span>
                    <p className="text-sm font-medium leading-relaxed text-[#F5F5DC] mb-6 relative z-10 italic pl-4">
                      {review.quote}
                    </p>
                  </div>
                  <div className="pt-5 border-t border-[#F5F5DC]/20 mt-auto">
                    <h4 className="text-lg font-black uppercase tracking-widest text-[#F3B052]">{review.name}</h4>
                    <p className="text-[10px] font-bold text-[#F5F5DC]/60 tracking-[0.2em] uppercase mt-1.5">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. FAQ SECTION (Inspired by Uploaded Screenshot) */}
      <section className="py-24 relative overflow-hidden text-[#0F3A22] bg-[#FFE599]">
        {/* Floral Background Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%) contrast(150%)',
            mixBlendMode: 'multiply'
          }}
        ></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            
            {/* Left Column */}
            <div className="w-full lg:w-1/3 flex flex-col">
              <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#0F3A22]/80">
                Inquiries
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-[#0F3A22] leading-[1.1] mb-6 tracking-tight">
                Frequently Asked<br/>Questions
              </h3>
              <p className="text-sm md:text-base font-medium leading-relaxed text-[#0F3A22]/70 max-w-sm">
                We architect moments that resonate, meticulously designing every detail to reflect your unique narrative. Here are answers to common inquiries about our exclusive process.
              </p>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-2/3 flex flex-col pt-2">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="group cursor-pointer border-b border-[#0F3A22]/10 pb-8 pt-4 first:pt-0"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[#0F3A22]/50 mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex justify-between items-start md:items-center gap-6">
                    <h4 className="text-2xl md:text-4xl font-serif text-[#0F3A22] leading-tight group-hover:opacity-70 transition-opacity">
                      {faq.q}
                    </h4>
                    <span className={`text-2xl font-light transition-all duration-300 mt-1 md:mt-0 ${activeFaq === i ? 'rotate-90 text-[#0F3A22]' : 'text-[#0F3A22]/40 group-hover:translate-x-2 group-hover:text-[#0F3A22]'}`}>
                      &rarr;
                    </span>
                  </div>
                  
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#0F3A22]/80 leading-relaxed pt-6 font-medium text-sm md:text-base max-w-2xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. ENQUIRY FORM (Inspired by Split-Card Screenshot) */}
      <section id="contact" className="relative w-full py-32 bg-[#F3B052] flex items-center justify-center min-h-screen px-4 md:px-8">
        
        <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row bg-[#0F3A22] rounded-[40px] overflow-hidden shadow-2xl">
          
          {/* Left Column - Image & Branding */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={formImgIndex}
                src={formCarouselImages[formImgIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                alt="Luxury Event" 
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
              />
            </AnimatePresence>
            {/* Gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F3A22]/60 via-transparent to-[#0F3A22]/90 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 bg-[#0F3A22]/40 z-10"></div>
            
            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 pb-16 text-left">
              <h3 className="text-4xl md:text-5xl font-serif text-[#F5F5DC] leading-tight mb-0 drop-shadow-xl">
                Orchestrating Elegance,<br/>Creating Masterpieces
              </h3>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#0F3A22]">
            
            <form className="space-y-0 w-full max-w-[600px] mx-auto" onSubmit={(e) => e.preventDefault()}>
              
              {/* 01. The Client */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-serif text-[#F3B052] mb-8 tracking-wide">01. The Client</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black text-[#F3B052] mb-2 tracking-widest">Full Name</label>
                    <input type="text" className="!bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/60 p-3 outline-none w-full focus:ring-1 focus:ring-[#F3B052] rounded-xl" placeholder="Priya Sharma" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black text-[#F3B052] mb-2 tracking-widest">Company / Organization</label>
                    <input type="text" className="!bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/60 p-3 outline-none w-full focus:ring-1 focus:ring-[#F3B052] rounded-xl" placeholder="Optional" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black text-[#F3B052] mb-2 tracking-widest">Email Address</label>
                    <input type="email" className="!bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/60 p-3 outline-none w-full focus:ring-1 focus:ring-[#F3B052] rounded-xl" placeholder="priya@example.com" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black text-[#F3B052] mb-2 tracking-widest">Phone Number</label>
                    <input type="tel" className="!bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/60 p-3 outline-none w-full focus:ring-1 focus:ring-[#F3B052] rounded-xl" placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[#F3B052]/20 my-10"></div>

              {/* 02. The Experience */}
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#F3B052] mb-8 tracking-wide">02. The Experience</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black text-[#F3B052] mb-2 tracking-widest">Event Type</label>
                    <div className="relative">
                      <select className="!bg-[#FFFFFF] !text-[#0F3A22] p-3 outline-none w-full appearance-none font-medium text-sm cursor-pointer rounded-xl focus:ring-1 focus:ring-[#F3B052]">
                        <option value="" className="text-black">Select an option</option>
                        <option value="wedding" className="text-black">Destination Wedding (Palace / Beach)</option>
                        <option value="corporate" className="text-black">Corporate Gala &amp; Leadership Summit</option>
                        <option value="private" className="text-black">Private SoirÃ©e &amp; Sangeet</option>
                        <option value="cultural" className="text-black">Cultural Extravaganza</option>
                        <option value="retreat" className="text-black">Luxury Heritage Retreat</option>
                        <option value="other" className="text-black">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-4 w-4 h-4 text-[#0F3A22] pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black text-[#F3B052] mb-2 tracking-widest">Proposed Location</label>
                    <input type="text" className="!bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/60 p-3 outline-none w-full focus:ring-1 focus:ring-[#F3B052] rounded-xl" placeholder="Udaipur, Jaipur, Goa, Mumbai, etc." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 mb-8">
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black text-[#F3B052] mb-2 tracking-widest">Est. Guests</label>
                    <div className="relative">
                      <select className="!bg-[#FFFFFF] !text-[#0F3A22] p-3 outline-none w-full appearance-none font-medium text-sm cursor-pointer rounded-xl focus:ring-1 focus:ring-[#F3B052]">
                        <option value="" className="text-black">Select</option>
                        <option value="under_100" className="text-black">Under 100</option>
                        <option value="100_300" className="text-black">100 - 300</option>
                        <option value="300_600" className="text-black">300 - 600</option>
                        <option value="600_plus" className="text-black">600+ (Royal Scale)</option>
                        <option value="unsure" className="text-black">Unsure</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-4 w-4 h-4 text-[#0F3A22] pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black text-[#F3B052] mb-2 tracking-widest">Preferred Date</label>
                    <input type="date" className="!bg-[#FFFFFF] !text-[#0F3A22] p-3 outline-none w-full focus:ring-1 focus:ring-[#F3B052] rounded-xl" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-black text-[#F3B052] mb-2 tracking-widest">Budget Range</label>
                    <div className="relative">
                      <select className="!bg-[#FFFFFF] !text-[#0F3A22] p-3 outline-none w-full appearance-none font-medium text-sm cursor-pointer rounded-xl focus:ring-1 focus:ring-[#F3B052]">
                        <option value="" className="text-black">Select budget</option>
                        <option value="under_5L" className="text-black">Under ₹5 Lakhs</option>
                        <option value="5L_15L" className="text-black">₹5 Lakhs – ₹15 Lakhs</option>
                        <option value="15L_30L" className="text-black">₹15 Lakhs – ₹30 Lakhs</option>
                        <option value="30L_75L" className="text-black">₹30 Lakhs – ₹75 Lakhs</option>
                        <option value="75L_1.5Cr" className="text-black">₹75 Lakhs – ₹1.5 Crore</option>
                        <option value="1.5Cr_plus" className="text-black">₹1.5 Crore+ (Royal Scale)</option>
                        <option value="tbd" className="text-black">To be discussed</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-4 w-4 h-4 text-[#0F3A22] pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mb-10">
                  <label className="text-[10px] uppercase font-black text-[#F3B052] mb-3 tracking-widest">Vision &amp; Details</label>
                  <textarea
                    className="!bg-[#FFFFFF] !text-[#0F3A22] placeholder-[#0F3A22]/60 p-3 outline-none w-full font-medium text-sm resize-none h-24 leading-relaxed rounded-xl focus:ring-1 focus:ring-[#F3B052] transition-colors"
                    placeholder="Describe your vision, ceremonies (Mehendi, Sangeet, Pheras), preferred destination, and any special hospitality requirements..."
                  ></textarea>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    className="group cursor-pointer relative overflow-hidden px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(243,176,82,0.5)] active:scale-[0.98] select-none"
                    style={{ background: "#F3B052", color: "#0F3A22" }}
                    onMouseDown={e => { const el = e.currentTarget; el.style.background = "#FFFFFF"; el.style.color = "#000000"; }}
                    onMouseUp={e => { const el = e.currentTarget; el.style.background = "#F3B052"; el.style.color = "#0F3A22"; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = "#F3B052"; el.style.color = "#0F3A22"; }}
                  >
                    {/* Hover light reflection sweep */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>
                    <span className="relative z-10">Submit Inquiry</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          
        </div>
      </section>


    </div>
  );
}
