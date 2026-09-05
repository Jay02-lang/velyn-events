import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function FadeIn({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

const galleryImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200", 
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200", 
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200", 
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1200",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
  "https://images.unsplash.com/photo-1470229722913-7c090be5c5a4?q=80&w=1200"
];

export default function Services() {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const services = [
    {
      id: 'event-strategy',
      num: '01',
      title: 'Event\nStrategy.',
      desc: 'Before a single marigold garland is strung or palace courtyard transformed, the foundation of every magnificent Indian celebration is meticulously blueprinted. Our strategy aligns multi-ceremony timelines, budget allocations, family traditions, and guest concierge protocols into an effortless master plan.',
      deliverables: ['Multi-Day Timeline Architecture', 'Heritage Venue Procurement', 'Budget Architecture', 'Vendor & Master Artist Procurement', 'Customs & Tradition Alignment'],
      process: ['Family Discovery Sessions', 'Ceremonial Blueprinting', 'Hospitality & Logistics Modeling', 'Final Strategy Delivery'],
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000',
      cta: 'Inquire About Strategy'
    },
    {
      id: 'event-production',
      num: '02',
      title: 'Event\nProduction.',
      desc: 'We transform royal palace courtyards, seaside lawns, and grand banquet ballrooms into breathtaking environments. From monumental floral Mandap architecture to concert-grade Sangeet staging and kinetic lighting, our technical team executes with royal splendour and military precision.',
      deliverables: ['Custom Mandap & Stage Fabrication', 'Architectural Lighting & Sound Design', 'Spatial 3D Rendering', 'On-site Technical Execution', 'Civic Permissions & Safety Compliance'],
      process: ['Palace & Venue Inspections', 'Technical CAD Drafting', 'Pre-production Workshop Builds', 'Flawless Live Execution'],
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000',
      cta: 'Inquire About Production'
    },
    {
      id: 'corporate-events',
      num: '03',
      title: 'Corporate\nEvents.',
      desc: 'Executing high-profile corporate summits, industry award nights, and luxury brand launches across Mumbai, Bengaluru, and New Delhi. We transcend conventional corporate formats, creating theatrical spaces that inspire stakeholders, global delegates, and industry titans alike.',
      deliverables: ['Executive Summits', 'Gala Dinners & Award Ceremonies', 'Multi-day Leadership Conferences', 'VIP Protocol Management', 'Investor & Partner Retreats'],
      process: ['Stakeholder Alignment', 'Brand Integration', 'Complex Delegate Logistics', 'Post-Event Analysis'],
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000',
      cta: 'Plan Your Corporate Event'
    },
    {
      id: 'weddings-celebrations',
      num: '04',
      title: 'Weddings &\nCelebrations.',
      desc: 'From the royal palaces of Udaipur and Jaipur to coastal luxury villas in Goa and backwater retreats in Kerala. We orchestrate vibrant Mehendi afternoons, starlit Bollywood Sangeet concerts, sacred Vedic pheras, and regal receptions with boundless warmth and discretion.',
      deliverables: ['Destination Weddings', 'Sangeet, Mehendi & Pheras Production', 'Royal Guest Hospitality Concierge', 'Gourmet Catering & Dastarkhwan Curation', 'Trousseau & Gift Management'],
      process: ['Ritual & Story Design', 'Palace & Luxury Resort Scouting', 'Menu Curation & Tastings', 'Flawless Live Orchestration'],
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000',
      cta: 'Design Your Celebration'
    },
    {
      id: 'brand-experiences',
      num: '05',
      title: 'Brand\nExperiences.',
      desc: 'Elevating luxury product reveals, haute couture fashion showcases, and exclusive jewelry exhibitions into viral cultural moments. We construct temporary worlds that honor traditional Indian artistry while capturing national and global media attention.',
      deliverables: ['Luxury Product Launches', 'High-Jewelry Exhibitions', 'Couture Fashion Runways', 'Influencer & VIP Retreats', 'Experiential Marketing'],
      process: ['Brand DNA Extraction', 'Spatial Storytelling', 'Amplification Strategy', 'Launch & Operation'],
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000',
      cta: 'Activate Your Brand'
    },
    {
      id: 'entertainment',
      num: '06',
      title: 'Global\nEntertainment.',
      desc: 'Curating the finest musical and theatrical heartbeat of your celebration. Through our premier entertainment networks, we procure leading Bollywood playback icons, classical sitar and shehnai virtuosos, Sufi ensembles, and high-energy international live acts.',
      deliverables: ['A-List Bollywood & Sufi Artists', 'Renowned Sangeet Choreographers', 'Traditional Folk & Fire Troupes', 'Celebrity Keynote Speakers', 'Technical Rider Management'],
      process: ['Talent Curation & Availability', 'Contract & Rider Negotiation', 'Soundcheck & Rehearsal Direction', 'Show Calling'],
      img: 'https://images.unsplash.com/photo-1470229722913-7c090be5c5a4?q=80&w=2000',
      cta: 'Book Entertainment'
    }
  ];

  return (
    <div className="w-full font-sans bg-[#F5F5DC]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-end overflow-hidden bg-[#071E12]">

        {/* Full-bleed background image â€” lighter green film */}
        <div className="absolute inset-0 z-0 bg-[#0F3A22]">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2200&q=85"
            className="w-full h-full object-cover filter grayscale contrast-110 opacity-50"
            alt="Services Hero"
          />
          {/* Light green tint overlay */}
          <div className="absolute inset-0 bg-[#0F3A22]/40 mix-blend-overlay" />
          {/* Subtle gradient to ensure text readability without darkening too much */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071E12]/80 via-transparent to-[#071E12]/30" />
        </div>

        {/* Hero content â€” centered */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 pb-20 pt-48 flex flex-col items-center text-center">
          <FadeIn>
            <p className="text-[#F3B052] text-[10px] uppercase tracking-[0.55em] font-black mb-6 flex items-center justify-center gap-3">
              <span className="inline-block w-8 h-px bg-[#F3B052]" />
              Our Expertise
              <span className="inline-block w-8 h-px bg-[#F3B052]" />
            </p>
            <h1 className="text-[11vw] md:text-[7.5vw] lg:text-[6.5vw] font-serif italic text-[#F5F5DC] uppercase tracking-tighter leading-[0.88] drop-shadow-2xl">
              Your Vision.<br/>Our Craft.
            </h1>
            <p className="mt-6 text-[#F5F5DC]/70 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
              Six specialisms. One obsessive standard. Crafted exclusively for those who demand the extraordinary.
            </p>
          </FadeIn>
        </div>

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F3B052]/40 to-transparent z-10" />
      </section>

      {/* 2. SERVICES EDITORIAL SECTIONS */}
      {services.map((svc, index) => {
        const isEven = index % 2 === 1;
        
        let sectionBg = 'bg-[#F5F5DC]';
        let sectionText = 'text-[#0F3A22]';
        let borderClass = 'border-[#0F3A22]/10';
        let lineClass = 'bg-[#0F3A22]/30';
        let headingClass = 'text-[#0F3A22]/50';
        let bulletClass = 'text-[#0F3A22]';
        let linkClass = 'border-[#0F3A22] !text-[#0F3A22] hover:!text-[#0F3A22]/60 hover:border-[#0F3A22]/60';
        let imageOverlay = 'bg-[#0F3A22]/10';

        if (index % 3 === 0) {
          // GOLD
          sectionBg = 'bg-[#F3B052]';
          bulletClass = 'text-[#0F3A22]';
          linkClass = 'border-[#0F3A22] !text-[#0F3A22] hover:!text-[#0F3A22]/60 hover:border-[#0F3A22]/60';
        } else if (index % 3 === 1) {
          // BEIGE
          sectionBg = 'bg-[#F5F5DC]';
          bulletClass = 'text-[#F3B052]';
          linkClass = 'border-[#0F3A22] !text-[#0F3A22] hover:!text-[#F3B052] hover:border-[#F3B052]';
        } else {
          // GREEN
          sectionBg = 'bg-[#0F3A22]';
          sectionText = 'text-[#F5F5DC]';
          borderClass = 'border-[#F5F5DC]/10';
          lineClass = 'bg-[#F5F5DC]/30';
          headingClass = 'text-[#F3B052]';
          bulletClass = 'text-[#F3B052]';
          linkClass = 'border-[#F5F5DC] !text-[#F5F5DC] hover:!text-[#F3B052] hover:border-[#F3B052]';
          imageOverlay = 'bg-[#F3B052]/20';
        }

        return (
          <section key={svc.id} id={svc.id} className={`w-full ${sectionBg} ${sectionText} py-32 px-6 lg:px-12 border-b ${borderClass} last:border-none`}>
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <div className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                 <FadeIn delay={0.1}>
                   <div className="flex items-center space-x-4 mb-8">
                      <span className="font-bold tracking-widest text-[10px] uppercase opacity-70">{svc.num}</span>
                      <div className={`h-px ${lineClass} flex-grow`}></div>
                   </div>
                   
                   <h2 className="text-5xl md:text-7xl font-serif italic mb-10 leading-[0.9] whitespace-pre-line">
                     {svc.title}
                   </h2>
                   
                   <p className="text-base font-medium leading-relaxed opacity-80 mb-12 max-w-xl">
                     {svc.desc}
                   </p>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
                     <div>
                       <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-5 ${headingClass}`}>Deliverables</h4>
                       <ul className="space-y-4 text-sm font-medium opacity-90">
                         {svc.deliverables.map((item, i) => (
                           <li key={i} className="flex items-start">
                             <span className={`${bulletClass} mr-3`}>â€¢</span> {item}
                           </li>
                         ))}
                       </ul>
                     </div>
                     <div>
                       <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-5 ${headingClass}`}>The Process</h4>
                       <ul className="space-y-4 text-sm font-medium opacity-90">
                         {svc.process.map((item, i) => (
                           <li key={i} className="flex items-start">
                             <span className={`${bulletClass} mr-3`}>â€¢</span> {item}
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>

                   <Link to="/#contact" className={`inline-block border-b font-black uppercase tracking-widest text-[10px] pb-1 transition-colors self-start ${linkClass}`}>
                     {svc.cta} â†’
                   </Link>
                 </FadeIn>
              </div>

              <div className={`w-full aspect-[4/5] group overflow-hidden shadow-2xl relative border ${borderClass} ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <FadeIn delay={0.2}>
                  <div className={`absolute inset-0 ${imageOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply pointer-events-none`}></div>
                  <img src={svc.img} className= rounded-2xl"w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" alt={svc.title.replace('\n', ' ')} />
                </FadeIn>
              </div>

            </div>
          </section>
        );
      })}
      {/* 3. MINI GALLERY SECTION */}
      <section className="py-24 bg-[#0F3A22] border-t border-[#F3B052]/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F3B052] block mb-4">A Glimpse of the Extraordinary</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-[#F5F5DC] tracking-tight mb-16">Visual Archives</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {galleryImages.slice(0, visibleCount).map((img, idx) => (
              <FadeIn key={idx} delay={0.1 * (idx % 4)}>
                <div 
                  className="w-full aspect-[4/5] overflow-hidden group border border-[#F3B052]/10 relative cursor-zoom-in rounded-2xl"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" alt="Gallery preview" />
                </div>
              </FadeIn>
            ))}
          </div>
          
          {visibleCount < galleryImages.length && (
            <FadeIn delay={0.4}>
              <button 
                onClick={() => setVisibleCount(prev => prev + 4)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#F3B052] text-[#F3B052] text-[10px] font-black uppercase tracking-[0.25em] hover:bg-[#F3B052] hover:text-[#0F3A22] transition-colors shadow-[0_0_20px_rgba(243,176,82,0.2)] cursor-pointer"
              >
                Load More +
              </button>
            </FadeIn>
          )}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-md"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Zoomed gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
