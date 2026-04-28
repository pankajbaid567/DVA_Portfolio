import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const dashboards = [
  {
    id: 'perfume',
    title: 'E-Commerce Perfume Analysis',
    description: 'Market analysis, pricing strategy, and brand performance dashboard',
    url: 'https://public.tableau.com/views/Ecommerce-Perfume/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link',
    embedUrl: 'https://public.tableau.com/views/Ecommerce-Perfume/Dashboard1?:showVizHome=no&:embed=true',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Readmission Dashboard',
    description: 'Patient risk segmentation and readmission factor analysis',
    url: 'https://public.tableau.com/views/DVA_Capstone_Health/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link',
    embedUrl: 'https://public.tableau.com/views/DVA_Capstone_Health/Dashboard1?:showVizHome=no&:embed=true',
  },
];

export default function DashboardShowcase() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="dashboards" className="relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Live Dashboards</span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2 mb-4">
            Interactive Visualizations
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-6">
          {dashboards.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === i
                  ? 'bg-primary text-white'
                  : 'surface text-muted hover:text-heading'
              }`}
            >
              {d.title}
            </button>
          ))}
        </div>

        {/* Dashboard embed */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="surface rounded-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-white/5">
            <h3 className="font-semibold text-heading">{dashboards[active].title}</h3>
            <p className="text-sm text-muted">{dashboards[active].description}</p>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '60%' }}>
            <iframe
              src={dashboards[active].embedUrl}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              title={dashboards[active].title}
              style={{ border: 'none' }}
            />
          </div>
          <div className="p-4 border-t border-white/5">
            <a
              href={dashboards[active].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary-light transition-colors"
            >
              Open in Tableau Public →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
