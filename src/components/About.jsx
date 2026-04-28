import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Database, BarChart3, Brain } from 'lucide-react';

const stats = [
  { label: 'SQL Queries Written', value: '30+', icon: Database },
  { label: 'Data Rows Analyzed', value: '27K+', icon: TrendingUp },
  { label: 'Business Insights', value: '12+', icon: Brain },
  { label: 'Dashboards Built', value: '3', icon: BarChart3 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">About</span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2 mb-4">
            Data → Insight → Decision
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-body text-lg leading-relaxed">
              I'm a data analyst who thinks in terms of <span className="text-heading font-medium">revenue impact</span>, not just SQL syntax. My work starts with a business question and ends with a data-backed recommendation that stakeholders can act on.
            </p>
            <p className="text-body leading-relaxed">
              Currently pursuing B.Tech in Computer Science (AI) at Newton School of Technology, I've built end-to-end analytics systems — from designing relational schemas to writing complex SQL with window functions, CTEs, and cohort analysis, to building interactive Tableau dashboards.
            </p>
            <p className="text-body leading-relaxed">
              My recent work includes a <span className="text-heading font-medium">complete SQL-based business intelligence system</span> for a food delivery platform, where I identified that the top 20% of customers drive 46% of revenue and proposed actionable retention strategies.
            </p>

            {/* Quick info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <span className="text-xs text-muted uppercase tracking-wider">Education</span>
                <p className="text-sm text-heading font-medium mt-1">B.Tech CSE (AI) · SGPA 8.4</p>
              </div>
              <div>
                <span className="text-xs text-muted uppercase tracking-wider">Location</span>
                <p className="text-sm text-heading font-medium mt-1">Sonipat, India</p>
              </div>
              <div>
                <span className="text-xs text-muted uppercase tracking-wider">Focus</span>
                <p className="text-sm text-heading font-medium mt-1">Business Intelligence</p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="surface rounded-xl p-5 text-center hover:glow-primary transition-shadow"
              >
                <stat.icon size={22} className="mx-auto text-primary mb-3" />
                <p className="text-2xl font-bold text-heading font-mono">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
