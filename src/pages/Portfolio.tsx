import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

function FadeIn({ children, delay = 0, direction = 'up' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'left' | 'right' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const y = direction === 'up' ? 40 : 0;
  const x = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    id: "01",
    category: "The Grand Gala",
    title: "City Palace",
    subtitle: "Udaipur",
    desc: "We orchestrated a breathtaking royal gala for 600 guests overlooking Lake Pichola. From the moment guests stepped off private heritage boats, they were immersed in a world of regal Rajasthani opulence, featuring floating floral mandaps, historic rampart illumination, and a royal feast curated by master khansamas.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "cream",
    align: "left"
  },
  {
    id: "02",
    category: "Destination Weddings",
    title: "Coastal Palms",
    subtitle: "Goa",
    desc: "Set against the dramatic sunsets of South Goa, this three-day celebration set a new standard in coastal luxury. We coordinated bespoke beachfront Mehendi setups, a starlit Bollywood Sangeet with concert-grade staging, and a serene oceanfront Pheras pavilion accompanied by live shehnai and sitar ensembles.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "green",
    align: "right"
  },
  {
    id: "03",
    category: "Private Dining",
    title: "Royal Haveli",
    subtitle: "Jaipur",
    desc: "Intimate family celebrations demand the most delicate craftsmanship. We curate bespoke royal dastarkhwan and thali dining experiences in restored 18th-century courtyards in Jaipur and private farmhouses in Delhi, pairing heritage Awadhi cuisine with live classical melodies.",
    img: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "yellow",
    align: "left"
  },
  {
    id: "04",
    category: "Corporate Strategy",
    title: "Aravalli Hills",
    subtitle: "Retreat",
    desc: "A multi-day corporate leadership summit and luxury retreat for 80 enterprise executives nestled amidst the majestic Aravalli hills. Seamlessly balancing boardroom keynote technology with royal polo matches, wellness journeys, and stargazing galas.",
    img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "cream",
    align: "right"
  },
  {
    id: "05",
    category: "Brand Activations",
    title: "Gateway Heritage",
    subtitle: "Mumbai",
    desc: "We conceptualized and produced an immersive high-jewelry and bridal couture showcase against the historic backdrop of Mumbai's coast. The event featured a mirrored reflecting runway, artisanal cocktail stations, and live musical accompaniment that drew India's top media and celebrity guests.",
    img: "https://images.unsplash.com/photo-1505236858219-8373dd707522?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "green",
    align: "left"
  },
  {
    id: "06",
    category: "Private Concerts",
    title: "Fortress Ramparts",
    subtitle: "Rajasthan",
    desc: "An exclusive, invitation-only Sufi and folk musical night constructed within the courtyard of a 400-year-old fort. Guests experienced thousands of flickering oil diyas, fragrant jasmine canopies, and soulful performances by legendary musical maestros.",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "yellow",
    align: "right"
  }
];

export default function Portfolio() {
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
    <div className="w-full font-sans bg-[#F5F5DC]">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0F3A22]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            className="img-bg w-full h-full object-cover filter grayscale contrast-125 opacity-30 mix-blend-multiply" alt="Hero Background"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center mt-20">
          <FadeIn>
            <h2 className="text-[#F3B052] text-[10px] uppercase tracking-[0.5em] font-black mb-8 text-center">Our Masterpieces</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-[12vw] font-serif italic text-[#F5F5DC] uppercase tracking-tighter leading-none text-center drop-shadow-2xl">
              Portfolio
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <div id="projects-showcase" className="w-full">
        {projects.map((project) => {
          
          const isCream = project.theme === 'cream';
          const isGreen = project.theme === 'green';
          
          
          const bgClass = isCream ? 'bg-[#F5F5DC]' : isGreen ? 'bg-[#0F3A22]' : 'bg-[#F3B052]';
          const textClassMain = isGreen ? 'text-[#F5F5DC]' : 'text-[#0F3A22]';
          const textClassAccent = isGreen ? 'text-[#F3B052]' : isCream ? 'text-[#F3B052]' : 'text-[#0F3A22]';
          const textClassMuted = isGreen ? 'text-[#F5F5DC]/70' : 'text-[#0F3A22]/70';

          return (
            <section key={project.id} className={`w-full py-24 md:py-40 px-6 md:px-12 ${bgClass}`}>
              <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative">
                
                {/* Desktop Sticky Text Container (Hidden on Mobile) */}
                <div className={`hidden md:flex flex-col justify-center sticky top-1/3 h-fit w-5/12 z-20 ${project.align === 'right' ? 'order-2 pl-12' : 'order-1 pr-12'}`}>
                  <FadeIn direction={project.align === 'right' ? 'left' : 'right'}>
                    <div className="flex items-center space-x-4 mb-8">
                      <span className={`text-xs font-black tracking-[0.2em] ${textClassMuted}`}>{project.id}</span>
                      <div className={`h-px w-12 ${isGreen ? 'bg-[#F5F5DC]/20' : 'bg-[#0F3A22]/20'}`}></div>
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${textClassAccent}`}>{project.category}</span>
                    </div>
                    <h3 className={`text-5xl lg:text-7xl font-serif italic leading-[1.1] mb-8 ${textClassMain}`}>
                      {project.title}<br/>
                      <span className="font-sans not-italic font-black tracking-tight uppercase text-4xl lg:text-6xl">{project.subtitle}</span>
                    </h3>
                    <p className={`text-sm lg:text-base font-medium leading-relaxed max-w-md ${textClassMuted}`}>
                      {project.desc}
                    </p>
                  </FadeIn>
                </div>

                {/* Mobile Text (Static, shows above image) */}
                <div className="md:hidden flex flex-col order-1 w-full z-20">
                  <FadeIn>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className={`text-xs font-black tracking-[0.2em] ${textClassMuted}`}>{project.id}</span>
                      <div className={`h-px w-8 ${isGreen ? 'bg-[#F5F5DC]/20' : 'bg-[#0F3A22]/20'}`}></div>
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${textClassAccent}`}>{project.category}</span>
                    </div>
                    <h3 className={`text-4xl font-serif italic leading-[1.1] mb-6 ${textClassMain}`}>
                      {project.title}<br/>
                      <span className="font-sans not-italic font-black tracking-tight uppercase text-3xl">{project.subtitle}</span>
                    </h3>
                  </FadeIn>
                </div>

                {/* Image Container */}
                <div className={`w-full md:w-7/12 relative ${project.align === 'right' ? 'order-1 md:order-1' : 'order-2 md:order-2'}`}>
                  <FadeIn delay={0.2}>
                    <div className="w-full overflow-hidden group rounded-2xl">
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className={`w-full h-auto aspect-[3/4] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 ${isGreen ? 'filter grayscale group-hover:grayscale-0' : ''}`}
                      />
                    </div>
                  </FadeIn>
                  {/* Mobile Description (Static, shows below image) */}
                  <div className="md:hidden mt-8">
                    <FadeIn>
                      <p className={`text-sm font-medium leading-relaxed ${textClassMuted}`}>
                        {project.desc}
                      </p>
                    </FadeIn>
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
}
