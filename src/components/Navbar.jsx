import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Dashboards', href: '#dashboards' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-heading">
          <span className="gradient-text">PB</span>
          <span className="ml-1 opacity-70 font-normal text-sm text-muted">analytics</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} className="text-muted" /> : <Moon size={18} className="text-muted" />}
          </button>
          <a
            href="/Pankaj_Baid_Resume.pdf"
            target="_blank"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary-light transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleTheme} className="p-2" aria-label="Toggle theme">
            {isDark ? <Sun size={18} className="text-muted" /> : <Moon size={18} className="text-muted" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Menu">
            {isOpen ? <X size={22} className="text-heading" /> : <Menu size={22} className="text-heading" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-medium text-muted hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Pankaj_Baid_Resume.pdf"
                target="_blank"
                className="inline-block mt-2 px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-white"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
