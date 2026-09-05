import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function About() {
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

  return (
    <div className="w-full font-sans bg-[#F5F5DC] text-[#0F3A22]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0F3A22]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            className="img-bg w-full h-full object-cover filter grayscale contrast-125 opacity-30 mix-blend-multiply" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F3A22]/20 to-[#0F3A22]"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center mt-20 max-w-5xl mx-auto px-6">
          <h2 className="text-[#F3B052] text-[10px] uppercase tracking-[0.5em] font-black mb-12 text-center">About Us</h2>
          <h1 className="text-[10vw] md:text-[7vw] font-serif italic text-[#F5F5DC] uppercase tracking-tighter leading-[0.9] text-center drop-shadow-2xl">
            We Create<br/>The Moments<br/>People Remember.
          </h1>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section id="story" className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-32">
        <div className="w-full md:w-1/2">
           <h2 className="text-[#0F3A22]/50 text-[10px] uppercase tracking-[0.4em] font-black mb-6">Our Story</h2>
           <h3 className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-[0.9] text-[#0F3A22] mb-8">From Vision<br/>To Reality.</h3>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
           <p className="text-lg leading-relaxed font-medium mb-6">Founded with a singular vision to celebrate the grandeur, soul, and hospitality of Indian celebrations on a world stage, VELYN was born from a passion to craft events that are not merely attended, but deeply felt.</p>
           <p className="text-sm opacity-70 leading-relaxed font-medium">What began as a boutique atelier curating royal destination weddings across Rajasthan, Goa, and Kerala has blossomed into India's premier powerhouse of luxury event architecture. We blend the sacred warmth of 'Atithi Devo Bhava' with world-class production precision, creating temporary kingdoms that leave eternal impressions on families and guests alike.</p>
        </div>
      </section>

      {/* CINEMATIC IMAGE SEPARATOR */}
      <section className="w-full px-6 lg:px-12 max-w-[1400px] mx-auto mb-32">
         <div className="w-full aspect-[21/9] overflow-hidden shadow-2xl relative border border-[#0F3A22]/10 group rounded-2xl">
            <div className="absolute inset-0 bg-[#0F3A22]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Cinematic Event" className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
         </div>
      </section>

      {/* 3. OUR PHILOSOPHY & WHAT WE BELIEVE */}
      <section id="philosophy" className="py-32 bg-[#0F3A22] text-[#F5F5DC] relative overflow-hidden border-t border-[#F5F5DC]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
           
           <div>
             <h2 className="text-[#F3B052] text-[10px] uppercase tracking-[0.4em] font-black mb-6">Our Philosophy</h2>
             <h3 className="text-4xl md:text-6xl font-serif italic tracking-tighter leading-[1] mb-8">Elegance<br/>Without<br/>Compromise.</h3>
             <p className="text-sm leading-relaxed opacity-80 font-medium">We believe true luxury in Indian events lies in effortless harmony. It is not found in chaotic excess, but in the meticulous orchestration of a thousand unseen details. It is the fresh fragrance of mogra and rose petals at dawn, the synchronized rhythm of dhol beats during the baraat, and the flawless warmth with which every single guest is welcomed. We curate environments where sacred tradition meets contemporary grandeur.</p>
           </div>

           <div className="flex flex-col justify-center">
             <h2 className="text-[#F3B052] text-[10px] uppercase tracking-[0.4em] font-black mb-10">What We Believe</h2>
             <ul className="space-y-10">
               <li className="border-b border-[#F5F5DC]/10 pb-8 group">
                 <h4 className="text-3xl font-serif italic mb-3 text-[#F5F5DC] group-hover:text-[#F3B052] transition-colors">Design is a Language</h4>
                 <p className="text-sm opacity-70 leading-relaxed font-medium">Every mandap pillar, floral arch, and table setting must narrate the couple's roots and aspirations. We do not merely decorate; we architect heritage.</p>
               </li>
               <li className="border-b border-[#F5F5DC]/10 pb-8 group">
                 <h4 className="text-3xl font-serif italic mb-3 text-[#F5F5DC] group-hover:text-[#F3B052] transition-colors">Hospitality is an Art</h4>
                 <p className="text-sm opacity-70 leading-relaxed font-medium">Rooted in 'Atithi Devo Bhava', royal Indian hospitality anticipates needs before they arise. We cultivate an atmosphere of boundless warmth and royal care.</p>
               </li>
               <li className="group">
                 <h4 className="text-3xl font-serif italic mb-3 text-[#F5F5DC] group-hover:text-[#F3B052] transition-colors">Perfection is the Baseline</h4>
                 <p className="text-sm opacity-70 leading-relaxed font-medium">We operate with military precision behind the scenes so that families can fully lose themselves in joy, rituals, and celebration.</p>
               </li>
             </ul>
           </div>
           
        </div>
      </section>

      {/* 4. OUR APPROACH / THE PROCESS TIMELINE */}
      <section className="py-32 bg-[#F3B052] text-[#0F3A22] border-t border-[#0F3A22]/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center mb-24">
            <h2 className="text-[#0F3A22]/50 text-[10px] uppercase tracking-[0.4em] font-black mb-4">Our Approach</h2>
            <h3 className="text-5xl md:text-7xl font-serif italic tracking-tighter text-center">The Velyn Process</h3>
          </div>

          <div className="relative mt-16">
             {/* Desktop Timeline Line */}
             <div className="absolute top-6 left-12 right-12 h-px bg-[#0F3A22]/20 hidden md:block"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6">
               
               {[
                 { step: '01', title: 'DISCOVER', desc: 'Understanding family lineages, sacred traditions, and your dream celebration vision.' },
                 { step: '02', title: 'IMAGINE', desc: 'Conceptualizing royal palace spatial layouts, mandap aesthetics, and multi-day menus.' },
                 { step: '03', title: 'DESIGN', desc: 'Drafting 3D architectural blueprints, floral installations, and contracting master artists.' },
                 { step: '04', title: 'PRODUCE', desc: 'Executing complex guest hospitality, vendor synchrony, and ceremony timelines.' },
                 { step: '05', title: 'DELIVER', desc: 'Unveiling a royal masterpiece. Effortless grandeur, joy, and memories for generations.' },
               ].map((item, i) => (
                 <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                   <div className="w-12 h-12 rounded-full border border-[#0F3A22] bg-[#F3B052] text-[#0F3A22] flex items-center justify-center font-black text-xs mb-8 shadow-2xl group-hover:bg-[#0F3A22] group-hover:text-[#F3B052] transition-colors duration-500">
                     {item.step}
                   </div>
                   <h4 className="text-lg font-black uppercase tracking-widest mb-4 group-hover:-translate-y-1 transition-transform duration-500">{item.title}</h4>
                   <p className="text-[9px] font-bold opacity-70 leading-relaxed uppercase tracking-[0.2em] px-2">{item.desc}</p>
                 </div>
               ))}

             </div>
          </div>

        </div>
      </section>

      {/* 4.5. THE FOUNDER â€” PRIVATE SECTION */}
      <section id="founder" className="w-full bg-[#F5F5DC] text-[#0F3A22] py-32 px-6 lg:px-12 border-t border-[#0F3A22]/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">

          {/* Section Label */}
          <div className="flex items-center gap-6 mb-20">
            <div className="h-px bg-[#0F3A22]/20 flex-grow"></div>
            <h2 className="text-[#0F3A22]/40 text-[10px] uppercase tracking-[0.5em] font-black whitespace-nowrap">The Visionary Behind It All</h2>
            <div className="h-px bg-[#0F3A22]/20 flex-grow"></div>
          </div>

          {/* Main Founder Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-24">

            {/* Portrait */}
            <div className="relative group">
              <div className="absolute -inset-4 border border-[#F3B052]/20 pointer-events-none z-0"></div>
              <div className="w-full aspect-[3/4] overflow-hidden shadow-2xl relative border border-[#0F3A22]/10 z-10">
                <div className="absolute inset-0 bg-[#F3B052]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Kabir Velyn â€” Founder"
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              {/* Gold badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F3B052] flex flex-col items-center justify-center shadow-2xl z-20">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#0F3A22] text-center leading-tight">Est.</span>
                <span className="text-3xl font-serif italic font-bold text-[#0F3A22]">2008</span>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <h2 className="text-[#F3B052] text-[10px] uppercase tracking-[0.4em] font-black mb-6">Founder & Principal Architect</h2>
              <h3 className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-[0.9] text-[#0F3A22] mb-10">Kabir<br/>Velyn.</h3>

              <p className="text-base leading-relaxed font-medium mb-6 opacity-80">
                Kabir Velyn is an architect of human emotion and royal hospitality. With nearly two decades at the intersection of Indian architectural craft, palace heritage preservation, and monumental celebration management, Kabir has set a new benchmark for luxury events across India.
              </p>
              <p className="text-sm leading-relaxed opacity-60 font-medium mb-12">
                Raised across Udaipur and New Delhi and educated in spatial architecture, Kabir immersed himself in Rajasthan's royal craft traditions, royal palace hospitality, and contemporary luxury design. His philosophy remains steadfast: Indian celebrations are living expressions of family lineage, sacred spirituality, and joyous abundance. Founded in 2008 in Mumbai, VELYN stands today as India's foremost benchmark of bespoke event craftsmanship.
              </p>

              {/* Signature Stats */}
              <div className="grid grid-cols-3 gap-0 border border-[#0F3A22]/10 mb-12">
                {[
                  { number: '450+', label: 'Events Produced' },
                  { number: '16', label: 'Royal Palaces' },
                  { number: '24', label: 'Awards Won' },
                ].map((stat, i) => (
                  <div key={i} className={`flex flex-col items-center py-8 px-4 text-center ${i < 2 ? 'border-r border-[#0F3A22]/10' : ''}`}>
                    <span className="text-4xl font-serif italic font-bold text-[#F3B052] mb-2">{stat.number}</span>
                    <span className="text-[9px] uppercase tracking-[0.25em] font-black opacity-50">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:kabir@velyn.in"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F3A22] !text-[#F3B052] text-xs uppercase tracking-[0.3em] font-black hover:bg-[#F3B052] hover:!text-[#0F3A22] transition-all duration-300"
                >
                  Private Inquiry
                  <span className="text-lg">â†’</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-[#0F3A22] !text-[#0F3A22] text-xs uppercase tracking-[0.3em] font-black hover:border-[#F3B052] hover:!text-[#F3B052] transition-all duration-300"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="border-t border-[#0F3A22]/10 pt-16 flex flex-col items-center text-center">
            <span className="text-[120px] font-serif text-[#0F3A22]/5 leading-none select-none -mb-12">"</span>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-[#0F3A22] leading-tight max-w-3xl mb-8 relative z-10">
              "An Indian wedding is a sacred tapestry of emotion, tradition, and boundless celebration. Our role is to weave every thread into absolute perfection."
            </blockquote>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">â€” Kabir Velyn</span>
          </div>

        </div>
      </section>

      {/* 5. OUR TEAM */}
      <section id="team" className="w-full bg-[#F5F5DC] text-[#0F3A22] py-32 px-6 lg:px-12 border-t border-[#0F3A22]/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-start lg:items-center mb-24">
            <h2 className="text-[#0F3A22]/50 text-[10px] uppercase tracking-[0.3em] font-black mb-4 lg:text-center">Our Team</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic leading-[1.1] lg:text-center">The Masterminds</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            
            {/* Employee 1 */}
            <div className="flex flex-col group cursor-pointer lg:mt-12">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 shadow-2xl relative border border-[#0F3A22]/5 rounded-2xl">
                <div className="absolute inset-0 bg-[#0F3A22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" alt="Kabir Velyn" />
              </div>
              <div className="flex items-center gap-4 mb-3 mt-2">
                <div className="h-px bg-[#0F3A22]/20 flex-grow"></div>
              </div>
              <h4 className="text-2xl font-serif italic mb-2 text-[#0F3A22]">Kabir Velyn</h4>
              <p className="text-[9px] uppercase tracking-[0.2em] font-black opacity-50 text-[#0F3A22]">Founder & Principal Architect</p>
            </div>

            {/* Employee 2 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 shadow-2xl relative border border-[#0F3A22]/5 rounded-2xl">
                <div className="absolute inset-0 bg-[#0F3A22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" alt="Ranveer Kapoor" />
              </div>
              <div className="flex items-center gap-4 mb-3 mt-2">
                <div className="h-px bg-[#0F3A22]/20 flex-grow"></div>
              </div>
              <h4 className="text-2xl font-serif italic mb-2 text-[#0F3A22]">Ranveer Kapoor</h4>
              <p className="text-[9px] uppercase tracking-[0.2em] font-black opacity-50 text-[#0F3A22]">Director of Culinary Arts</p>
            </div>

            {/* Employee 3 */}
            <div className="flex flex-col group cursor-pointer lg:mt-12">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 shadow-2xl relative border border-[#0F3A22]/5 rounded-2xl">
                <div className="absolute inset-0 bg-[#0F3A22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" alt="Ananya Singhania" />
              </div>
              <div className="flex items-center gap-4 mb-3 mt-2">
                <div className="h-px bg-[#0F3A22]/20 flex-grow"></div>
              </div>
              <h4 className="text-2xl font-serif italic mb-2 text-[#0F3A22]">Ananya Singhania</h4>
              <p className="text-[9px] uppercase tracking-[0.2em] font-black opacity-50 text-[#0F3A22]">Head of Spatial Design</p>
            </div>

            {/* Employee 4 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 shadow-2xl relative border border-[#0F3A22]/5 rounded-2xl">
                <div className="absolute inset-0 bg-[#0F3A22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" alt="Vikram Malhotra" />
              </div>
              <div className="flex items-center gap-4 mb-3 mt-2">
                <div className="h-px bg-[#0F3A22]/20 flex-grow"></div>
              </div>
              <h4 className="text-2xl font-serif italic mb-2 text-[#0F3A22]">Vikram Malhotra</h4>
              <p className="text-[9px] uppercase tracking-[0.2em] font-black opacity-50 text-[#0F3A22]">Global Logistics Director</p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WHY VELYN (Statement Section) */}
      <section className="py-32 bg-[#0F3A22] text-[#F3B052] border-t border-[#F5F5DC]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-multiply">
           <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="img-bg w-full h-full object-cover filter grayscale" alt="Background" />
        </div>
        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[#F5F5DC]/50 text-[10px] uppercase tracking-[0.4em] font-black mb-8">Why Velyn</h2>
          <h3 className="text-4xl md:text-6xl font-serif italic leading-tight text-[#F5F5DC] mb-12">
            "Because an event is ephemeral, but the feeling it leaves behind must last a lifetime."
          </h3>
          <Link to="/#contact">
            <button className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#F3B052] border border-[#F3B052] px-10 py-4 rounded-full hover:bg-[#F3B052] hover:text-[#0F3A22] transition-colors">
              Begin The Journey
            </button>
          </Link>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS */}
      <section id="reviews" className="w-full bg-[#0F3A22] text-[#F5F5DC] py-32 px-6 lg:px-12 border-t border-[#F5F5DC]/10">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold text-[#F3B052] uppercase tracking-widest mb-4">Client Testimonials</h2>
              <h3 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] text-[#F5F5DC]">Stories of<br/>Unforgettable Moments</h3>
            </div>
            <div className="max-w-md pb-2">
              <p className="text-sm leading-relaxed text-[#F5F5DC]/80 font-medium">
                Hear from the remarkable families and visionary leaders who trusted us to bring their most cherished milestones to life.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Radhika & Dev Singhania', role: 'Royal Palace Wedding, Udaipur', quote: 'VELYN transformed our 4-day palace wedding in Udaipur into pure poetry. From the vibrant Mehendi by Lake Pichola to a magical Sangeet and royal Baraat, every guest felt treated like royalty.', img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: 'Rajesh Bansal', role: 'Managing Director, Apex Global, Mumbai', quote: 'The annual leadership summit and gala they organized at the Taj Mahal Palace in Mumbai set a new standard. Flawless hospitality, seamless protocol, and breathtaking stage production.', img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: 'Priya & Karan Oberoi', role: 'Destination Sangeet & Reception, Goa', quote: 'From our seaside sunset welcome party to a high-energy, starry Bollywood Sangeet, VELYN delivered pure magic. Their heartfelt Indian hospitality combined with world-class production is unmatched.', img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: 'Meera Kapoor', role: 'Creative Director, House of Zari, New Delhi', quote: 'Their understanding of spatial design and brand narrative is unparalleled. The bridal couture showcase they curated during India Fashion Week in Delhi felt less like an event and more like a pivotal cultural moment.', img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: 'Maharaja Raghuraj Singh', role: 'Host, Royal Heritage Gala, Jaipur', quote: 'Absolute perfection. The royal Rajasthani banquet they designed was rivaled only by the breathtaking palace illumination and floral architecture. They operate with an invisible, flawless precision.', img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ].map((review, i) => (
              <div key={i} className={`flex flex-col group bg-[#F5F5DC]/5 p-6 md:p-8 rounded-none hover:bg-[#F5F5DC]/10 hover:shadow-2xl transition-all duration-500 border border-[#F5F5DC]/10 ${i > 2 ? 'md:col-span-1' : ''}`}>
                <div className="w-full aspect-[4/5] mb-8 overflow-hidden shadow-lg relative rounded-2xl">
                  <div className="absolute inset-0 bg-[#F3B052]/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply pointer-events-none"></div>
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
      </section>

    </div>
  );
}
