import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { id: "/", label: "Home" },
  { id: "/about", label: "About" },
  { id: "/services", label: "Services" },
  { id: "/portfolio", label: "Events" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname, location.hash]);

  const checkActive = (linkId: string) => {
    if (linkId === "/") return location.pathname === "/" && location.hash !== "#contact";
    return location.pathname === linkId;
  };

  const isAtTop = !isScrolled;
  const navBg = isAtTop
    ? "bg-transparent border-transparent"
    : "bg-[#0A120E]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]";

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${isAtTop ? "pt-8" : "pt-4"} pointer-events-none flex justify-center`}>
      <div className={`mx-4 md:mx-8 w-full max-w-[1400px] flex justify-between items-center relative pointer-events-auto rounded-full h-[60px] md:h-[68px] px-8 md:px-12 transition-all duration-500 ${navBg}`}>

        {/* Logo — LEFT */}
        <Link to="/" style={{ color: "#FFFFFF", textDecoration: "none" }}
          className="text-xl md:text-2xl tracking-[0.3em] uppercase font-black z-50 flex items-center">
          VELYN
        </Link>

        {/* Desktop Nav Links + CTA — all on the RIGHT */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => {
            const isActive = checkActive(link.id);
            return (
              <Link
                key={link.id}
                to={link.id}
                style={{ color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.7)", textDecoration: "none" }}
                className="relative h-full flex items-center text-[11px] font-semibold tracking-[0.2em] transition-colors duration-300 hover:!text-[#F3B052]"
              >
                {link.label}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      key="underline"
                      className="absolute bottom-[14px] left-0 right-0 h-[2px] rounded-full bg-[#F3B052]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      style={{ transformOrigin: "center" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}

          {/* Divider */}
          <div className="w-px h-5 bg-white/15 mx-1" />

          {/* ── LET'S TALK CTA Button ── */}
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              background: location.pathname === "/contact" ? "#F3B052" : "transparent",
              color: location.pathname === "/contact" ? "#000000" : "#F3B052",
              boxShadow: location.pathname === "/contact"
                ? "0 0 24px rgba(243,176,82,0.55), 0 0 48px rgba(243,176,82,0.25)"
                : "0 0 0 1.5px #F3B052, 0 0 16px rgba(243,176,82,0.2)",
              transition: "background 0ms, color 0ms, box-shadow 80ms",
            }}
            className="relative overflow-hidden group px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em]"
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#F3B052";
              el.style.color = "#000000";
              el.style.boxShadow = "0 0 24px rgba(243,176,82,0.55), 0 0 48px rgba(243,176,82,0.25)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              if (location.pathname === "/contact") {
                el.style.background = "#F3B052";
                el.style.color = "#000000";
                el.style.boxShadow = "0 0 24px rgba(243,176,82,0.55), 0 0 48px rgba(243,176,82,0.25)";
              } else {
                el.style.background = "transparent";
                el.style.color = "#F3B052";
                el.style.boxShadow = "0 0 0 1.5px #F3B052, 0 0 16px rgba(243,176,82,0.2)";
              }
            }}
          >
            {/* Shine sweep */}
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
                animation: "ctaShine 2.5s linear infinite",
              }}
            ></span>
            {/* Glow ring */}
            <span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ boxShadow: "0 0 0 1.5px #F3B052, 0 0 16px rgba(243,176,82,0.25)" }}
            ></span>
            <span className="relative z-10 flex items-center gap-1.5" style={{ color: "inherit" }}>
              LET'S TALK <span>→</span>
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center z-50">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ color: "#FFFFFF" }} className="transition-colors">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-[80px] left-4 right-4 rounded-3xl border border-white/10 shadow-2xl pointer-events-auto overflow-hidden bg-[#0F3A22]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = checkActive(link.id);
                return (
                  <Link
                    key={link.id}
                    to={link.id}
                    style={{ color: isActive ? "#FFFFFF" : "rgba(245,245,220,0.65)", textDecoration: "none" }}
                    className={`text-center px-4 py-4 rounded-xl text-xs tracking-[0.3em] uppercase transition-colors ${isActive ? "bg-black/10 font-black" : "font-bold"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Mobile Contact Button */}
              <Link
                to="/contact#enquiry-form"
                style={{
                  textDecoration: "none",
                  color: "#F3B052",
                  background: "rgba(243,176,82,0.08)",
                }}
                className="mt-2 text-center px-4 py-4 rounded-xl text-xs tracking-[0.3em] uppercase font-black border border-[#F3B052] transition-all duration-200"
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#F3B052";
                  el.style.color = "#0F3A22";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(243,176,82,0.08)";
                  el.style.color = "#F3B052";
                }}
              >
                LET'S TALK →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyframe for shine animation */}
      <style>{`
        @keyframes ctaShine {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </nav>
  );
}
