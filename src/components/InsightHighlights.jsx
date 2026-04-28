import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, ShoppingBag, AlertTriangle, Repeat, DollarSign } from 'lucide-react';

const highlights = [
  { icon: Users, metric: '46%', label: 'Revenue from top 20% users', color: 'text-teal-400' },
  { icon: Repeat, metric: '30.8%', label: '30-day customer retention', color: 'text-indigo-400' },
  { icon: AlertTriangle, metric: '11%', label: 'Platform cancellation rate', color: 'text-orange-400' },
  { icon: DollarSign, metric: '₹489', label: 'Average order value', color: 'text-green-400' },
  { icon: TrendingUp, metric: '95%', label: 'Returning revenue by Dec', color: 'text-cyan-400' },
  { icon: ShoppingBag, metric: '27K+', label: 'Data rows analyzed', color: 'text-purple-400' },
];

function AnimatedCounter({ target, suffix = '', isInView }) {
  const [count, setCount] = useState(0);
  const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
  const prefix = target.match(/^[^0-9]*/)[0];
  const sfx = target.match(/[^0-9.]*$/)[0] || suffix;

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget * 10) / 10);
      if (progress >= 1) clearInterval(timer);
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  const display = Number.isInteger(numericTarget) ? Math.round(count) : count.toFixed(1);
  return <>{prefix}{display}{sfx}</>;
}

export default function InsightHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Insights</span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2 mb-4">
            Business Questions Solved
          </h2>
          <p className="text-body max-w-lg mb-4">
            Key metrics from the SwiftBite Analytics project — each backed by verified SQL queries.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="surface rounded-xl p-6 text-center hover:glow-primary transition-all group"
            >
              <item.icon size={24} className={`mx-auto mb-3 ${item.color} group-hover:scale-110 transition-transform`} />
              <p className={`text-3xl md:text-4xl font-bold font-mono ${item.color}`}>
                <AnimatedCounter target={item.metric} isInView={isInView} />
              </p>
              <p className="text-xs text-muted mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
