import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary/20 bg-primary/5"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Open to opportunities</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-heading leading-[1.1] mb-6"
        >
          Turning raw data into{' '}
          <span className="gradient-text">business decisions</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Data Analyst specializing in{' '}
          <span className="text-heading font-medium">SQL</span>,{' '}
          <span className="text-heading font-medium">Python</span>, and{' '}
          <span className="text-heading font-medium">Tableau</span> — building analytical systems that drive revenue, retention, and operational efficiency.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            View Projects
          </a>
          <a
            href="/Pankaj_Baid_Resume.pdf"
            download="Pankaj_Baid_Resume.pdf"
            className="px-8 py-3.5 rounded-xl border border-white/10 text-heading font-semibold text-sm hover:bg-white/5 transition-all"
          >
            Download Resume ↓
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex items-center justify-center gap-4"
        >
          <a href="https://github.com/pankajbaid567" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted hover:text-primary transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/pankaj-baid-0109b1226/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted hover:text-primary transition-colors">
            <LinkedinIcon size={20} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
