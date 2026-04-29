import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Database, BarChart3, Activity, Table } from 'lucide-react';
import { GithubIcon } from './Icons';

const projects = [
  {
    id: 'swiftbite',
    badge: 'FLAGSHIP',
    title: 'SwiftBite Analytics',
    subtitle: 'SQL-Driven Business Intelligence System',
    tags: ['PostgreSQL', 'Python', 'CTEs', 'Window Functions', 'Cohort Analysis'],
    icon: Database,
    color: 'from-teal-500 to-cyan-500',
    github: 'https://github.com/pankajbaid567/SwiftBite_Analytics',
    problem: 'A food delivery platform with 5,000+ orders needed data-driven insights on revenue concentration, customer retention, and operational inefficiencies to chart a path to profitability.',
    approach: [
      'Designed 8-table relational database (star schema) with 27,000+ rows',
      'Wrote 30 SQL queries: beginner → advanced (CTEs, NTILE, RANK, LAG/LEAD)',
      'Built RFM customer segmentation, cohort retention, and Pareto analysis',
      'Generated synthetic but statistically realistic data using Python',
    ],
    insights: [
      { metric: '46%', label: 'of revenue from top 20% customers' },
      { metric: '30.8%', label: '30-day retention rate' },
      { metric: '11%', label: 'cancellation rate (31% worst restaurant)' },
      { metric: '95%', label: 'returning customer revenue by Dec' },
    ],
    impact: 'Proposed VIP loyalty program for top-tier customers, identified 263 churn-risk users for win-back campaigns, and flagged 10 restaurants with >20% cancellation rates for operational audit.',
  },
  {
    id: 'perfume',
    badge: 'TABLEAU',
    title: 'E-Commerce Perfume Analysis',
    subtitle: 'Market & Pricing Strategy Dashboard',
    tags: ['Tableau', 'Data Visualization', 'Market Analysis', 'Pricing Strategy'],
    icon: BarChart3,
    color: 'from-purple-500 to-pink-500',
    dashboard: 'https://public.tableau.com/app/profile/pankaj.baid6660/viz/Ecommerce-Perfume/Dashboard1',
    problem: 'An e-commerce perfume marketplace needed to understand brand performance, pricing dynamics, and customer preferences to optimize their product catalog and pricing strategy.',
    approach: [
      'Analyzed product catalog across multiple brands and price segments',
      'Built interactive Tableau dashboard with drill-down capabilities',
      'Performed pricing elasticity and brand performance analysis',
      'Identified underperforming segments and pricing opportunities',
    ],
    insights: [
      { metric: 'Top 5', label: 'brands driving 60%+ of revenue' },
      { metric: '₹500-1.5K', label: 'sweet spot price range' },
      { metric: '3x', label: 'premium vs economy margin gap' },
      { metric: '15%', label: 'catalog underutilization identified' },
    ],
    impact: 'Recommended catalog optimization strategy: pruning underperforming SKUs and doubling down on the ₹500–₹1,500 price segment where volume and margins intersect.',
  },
  {
    id: 'healthcare',
    badge: 'CAPSTONE',
    title: 'Healthcare Readmission Analysis',
    subtitle: 'Risk Segmentation & Predictive Insights',
    tags: ['Tableau', 'Python', 'Feature Engineering', 'Healthcare Analytics'],
    icon: Activity,
    color: 'from-orange-500 to-red-500',
    dashboard: 'https://public.tableau.com/app/profile/pankaj.baid6660/viz/DVA_Capstone_Health/Dashboard1',
    problem: 'Hospital readmission rates cost the US healthcare system $26B annually. The goal was to analyze 100K+ patient records to identify risk factors and build a segmentation model for intervention targeting.',
    approach: [
      'Processed 100K+ patient records with Python ETL pipeline',
      'Engineered features: comorbidity index, medication complexity, length-of-stay bins',
      'Built multi-page interactive Tableau dashboard with risk heatmaps',
      'Created patient risk segmentation (Low / Medium / High / Critical)',
    ],
    insights: [
      { metric: '100K+', label: 'patient records analyzed' },
      { metric: '30%', label: 'readmissions linked to 5 key factors' },
      { metric: '4-tier', label: 'risk segmentation model' },
      { metric: '18%', label: 'potential cost reduction identified' },
    ],
    impact: 'Delivered actionable risk segmentation enabling hospitals to prioritize high-risk patients for follow-up care, with potential to reduce readmission-related costs by 18%.',
  },
  {
    id: 'cafe',
    badge: 'EXCEL',
    title: 'Cafe Analytics Dashboard',
    subtitle: 'Excel-Based Business Intelligence',
    tags: ['Excel', 'Pivot Tables', 'KPI Analysis', 'Data Cleaning'],
    icon: Table,
    color: 'from-emerald-500 to-green-600',
    liveSheet: 'https://docs.google.com/spreadsheets/d/1M9aOmB9KD4Q6fXpM5JKxun5t17uY0MwkEOT50Wdsi0I',
    problem: 'A cafe chain with 20,000+ transactions had zero visibility into sales trends, product demand, and payment behavior — making pricing and inventory decisions entirely gut-driven.',
    approach: [
      'Cleaned raw dataset: handled missing values, corrected data types and formatting errors',
      'Built core KPIs — total revenue, average order value, order count',
      'Created pivot tables for product-wise, location-wise, and payment-wise breakdowns',
      'Designed a single-page executive dashboard for at-a-glance performance tracking',
    ],
    insights: [
      { metric: '20,107', label: 'total orders processed' },
      { metric: '$9', label: 'average order value' },
      { metric: '$60.5K', label: 'total revenue generated' },
      { metric: '~70%', label: 'revenue from in-store orders' },
    ],
    impact: 'Enabled data-backed pricing decisions, identified coffee and sandwiches as revenue drivers for inventory prioritization, and revealed digital wallet dominance for payment strategy optimization.',
  },
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="surface rounded-2xl overflow-hidden hover:glow-primary transition-all"
    >
      {/* Header */}
      <div className={`p-6 bg-gradient-to-r ${project.color} bg-opacity-10`}>
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded bg-white/20 text-white mb-3">
              {project.badge}
            </span>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-white/70 mt-1">{project.subtitle}</p>
          </div>
          <project.icon size={32} className="text-white/30" />
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-xs font-medium rounded bg-white/10 text-white/80">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Problem */}
      <div className="p-6">
        <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">The Problem</h4>
        <p className="text-sm text-body leading-relaxed">{project.problem}</p>
      </div>

      {/* Key Insights */}
      <div className="px-6 pb-4">
        <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Key Results</h4>
        <div className="grid grid-cols-2 gap-3">
          {project.insights.map(insight => (
            <div key={insight.label} className="rounded-lg bg-primary/5 border border-primary/10 p-3">
              <p className="text-xl font-bold font-mono text-primary">{insight.metric}</p>
              <p className="text-xs text-muted mt-0.5">{insight.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Details */}
      <div className="px-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light transition-colors py-2"
        >
          {expanded ? 'Hide details' : 'View full case study'}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="pb-4 space-y-4"
          >
            <div>
              <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Approach</h4>
              <ul className="space-y-1.5">
                {project.approach.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-body">
                    <span className="text-primary mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Business Impact</h4>
              <p className="text-sm text-body leading-relaxed">{project.impact}</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Links */}
      <div className="px-6 pb-6 flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-heading hover:bg-white/10 transition-colors"
          >
            <GithubIcon size={16} /> GitHub
          </a>
        )}
        {project.dashboard && (
          <a
            href={project.dashboard}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
          >
            <ExternalLink size={16} /> Dashboard
          </a>
        )}
        {project.liveSheet && (
          <a
            href={project.liveSheet}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
          >
            <ExternalLink size={16} /> View Live Sheet
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2 mb-4">
            Case Studies
          </h2>
          <p className="text-body max-w-lg mb-4">
            Each project follows a structured approach: <span className="text-heading font-medium">Problem → Analysis → Insight → Impact</span>
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
