import React, { useState } from 'react';

const allGalleryImages = [
  { id: 1, category: 'Weddings', title: 'Royal Symphony', img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 2, category: 'Corporate', title: 'The Summit', img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 3, category: 'Concerts', title: 'Neon Nights', img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 4, category: 'Celebrations', title: 'Midnight Gala', img: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 5, category: 'Weddings', title: 'Coastal Vows', img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 6, category: 'Celebrations', title: 'Silver Jubilee', img: "https://images.unsplash.com/photo-1505236858219-8373dd707522?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 7, category: 'Corporate', title: 'Tech Expo', img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 8, category: 'Concerts', title: 'Desert Mirage Festival', img: "https://images.unsplash.com/photo-1533174000220-4ee05553b6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 9, category: 'Weddings', title: 'Winter Wonderland', img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 10, category: 'Celebrations', title: 'Golden Era Ball', img: "https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 11, category: 'Weddings', title: 'Rustic Romance', img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 12, category: 'Corporate', title: 'Global Forum', img: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 13, category: 'Concerts', title: 'Acoustic Sessions', img: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 14, category: 'Celebrations', title: 'Summer Solstice', img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 15, category: 'Weddings', title: 'Autumn Bliss', img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 16, category: 'Corporate', title: 'Innovation Awards', img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  // Adding more images for Load More functionality
  { id: 17, category: 'Weddings', title: 'Eternal Promise', img: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 18, category: 'Celebrations', title: 'Crystal Banquet', img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 19, category: 'Corporate', title: 'Visionary Leaders', img: "https://images.unsplash.com/photo-1505236858219-8373dd707522?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 20, category: 'Concerts', title: 'Echoes of Sound', img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 21, category: 'Weddings', title: 'Spring Canopy', img: "https://images.unsplash.com/photo-1533174000220-4ee05553b6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 22, category: 'Celebrations', title: 'Ruby Anniversary', img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 23, category: 'Corporate', title: 'Tech Pioneers', img: "https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { id: 24, category: 'Concerts', title: 'Electronic Waves', img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
];

const categories = ['All topics', 'Weddings', 'Concerts', 'Corporate', 'Celebrations'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All topics');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredData = activeCategory === 'All topics' 
    ? allGalleryImages 
    : allGalleryImages.filter(d => d.category === activeCategory);

  const visibleImages = filteredData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, filteredData.length));
  };

  // Reset visible count when category changes
  React.useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory]);

  return (
    <div className="w-full min-h-screen bg-[#0F3A22] flex flex-col pt-32 pb-24 relative font-sans">
      
      {/* Header Section â€” Full Bleed Hero */}
      <div className="w-full relative mb-0 overflow-hidden" style={{ minHeight: '70vh' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Gallery Background"
            className="img-bg w-full h-full object-cover filter grayscale contrast-110"
          />
          {/* Dark gradient overlay bottom-to-top so gallery bleeds in */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F3A22]/80 via-[#0F3A22]/60 to-[#0F3A22]"></div>
          {/* Golden shimmer layer */}
          <div className="absolute inset-0 bg-[#F3B052]/5 mix-blend-overlay"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 pt-24 pb-28"
          style={{ minHeight: '70vh' }}>
          <h2 className="text-[10px] font-black text-[#F3B052] uppercase tracking-[0.6em] mb-6">Our Visual Legacy</h2>
          <h1 className="text-6xl md:text-9xl font-serif italic text-[#F5F5DC] mb-8 drop-shadow-2xl leading-none">
            The Gallery
          </h1>
          <div className="w-16 h-px bg-[#F3B052] mb-8"></div>
          <p className="max-w-xl text-sm text-[#F5F5DC]/70 font-medium leading-relaxed">
            Step into a world of meticulously crafted environments. From intimate private soirÃ©es
            to grand corporate summits, explore the moments that define our uncompromising
            commitment to excellence.
          </p>
        </div>
      </div>


      {/* Filter Section */}
      <div className="w-full px-6 md:px-12 mb-16 flex justify-center z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-[#F5F5DC]/10 pb-6 w-full max-w-4xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`!bg-transparent relative pb-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 outline-none
                ${activeCategory === cat 
                  ? '!text-[#F3B052]' 
                  : 'text-[#F5F5DC]/50 hover:!text-[#F5F5DC]'
                }
              `}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#F3B052]"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="w-full px-6 md:px-12 relative z-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {visibleImages.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer bg-[#051109] rounded-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.03]"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#051109]/90 via-[#051109]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 pointer-events-none">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#F3B052] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h3 className="text-xl font-serif italic text-[#F5F5DC] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {visibleCount < filteredData.length && (
        <div className="w-full flex justify-center mt-24 relative z-10">
          <button
            onClick={handleLoadMore}
            className="group relative px-12 py-5 bg-transparent overflow-hidden outline-none"
          >
            <div className="absolute inset-0 border border-[#F3B052]/30 transition-all duration-500 group-hover:border-[#F3B052]"></div>
            <div className="absolute inset-0 bg-[#F3B052] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#F3B052] group-hover:!text-[#0F3A22] transition-colors duration-500">
              Discover More
            </span>
          </button>
        </div>
      )}

    </div>
  );
}
