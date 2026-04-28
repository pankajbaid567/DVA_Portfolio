import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  {
    title: 'Languages',
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'SQL', level: 95 },
      { name: 'Python', level: 85 },
    ],
  },
  {
    title: 'Analytics',
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Data Modeling', level: 90 },
      { name: 'EDA', level: 88 },
      { name: 'Statistical Analysis', level: 80 },
    ],
  },
  {
    title: 'Visualization',
    color: 'from-orange-500 to-pink-500',
    skills: [
      { name: 'Tableau', level: 90 },
      { name: 'Power BI', level: 75 },
    ],
  },
  {
    title: 'Tools',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Excel', level: 92 },
      { name: 'Git / GitHub', level: 85 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2 mb-4">
            Technical Toolkit
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + gi * 0.1 }}
              className="surface rounded-xl p-6 hover:glow-primary transition-all"
            >
              <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold text-white bg-gradient-to-r ${group.color} mb-5`}>
                {group.title}
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-heading">{skill.name}</span>
                      <span className="text-xs font-mono text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.5 + gi * 0.15 + si * 0.1, duration: 0.8, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
