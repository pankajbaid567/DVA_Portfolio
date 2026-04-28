import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pankaj.baid2024@nst.rishihood.edu.in',
    href: 'mailto:pankaj.baid2024@nst.rishihood.edu.in',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Pankaj Baid',
    href: 'https://www.linkedin.com/in/pankaj-baid-0109b1226/',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'pankajbaid567',
    href: 'https://github.com/pankajbaid567',
    color: 'from-gray-500 to-gray-700',
  },
  {
    icon: ExternalLink,
    label: 'Tableau Public',
    value: 'View Dashboards',
    href: 'https://public.tableau.com/app/profile/pankaj.baid6660',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative">
      <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2 mb-4">
            Let's connect
          </h2>
          <p className="text-body max-w-md mx-auto mb-10">
            Looking for a data analyst who can turn your data into actionable business decisions? Reach out.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="surface rounded-xl p-5 flex items-center gap-4 hover:glow-primary transition-all group text-left"
            >
              <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color} shrink-0`}>
                <link.icon size={20} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted uppercase tracking-wider">{link.label}</p>
                <p className="text-sm font-medium text-heading truncate group-hover:text-primary transition-colors">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-sm text-muted"
        >
          📞 +91 82906 88843
        </motion.p>
      </div>
    </section>
  );
}
