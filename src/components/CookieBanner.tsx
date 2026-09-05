import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-theme-surface border border-theme-primary/20 p-6 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-theme-text font-bold mb-1">We use cookies</h4>
              <p className="text-theme-text-muted text-sm">
                This website uses cookies to ensure you get the best experience on our website. 
                By continuing to use this site, you agree to our privacy policy.
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={acceptCookies}
                className="px-6 py-2 bg-theme-primary text-theme-onprimary font-bold uppercase tracking-wider text-xs rounded hover:opacity-90 transition-opacity whitespace-nowrap shadow-md shadow-theme-primary/20"
              >
                Accept All
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-2 text-theme-text-muted hover:text-theme-text transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
