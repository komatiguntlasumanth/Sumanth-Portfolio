import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="heading-md mb-2 flex items-center gap-4">
            <Briefcase className="text-accent-primary" size={32} />
            Experience
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', borderRadius: '2px' }}></div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: 'var(--glass-border)', zIndex: 0 }}></div>

          {portfolioData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ position: 'relative', paddingLeft: '5rem' }}
            >
              {/* Timeline Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '16px', 
                top: '0', 
                width: '18px', 
                height: '18px', 
                borderRadius: '50%', 
                background: 'var(--bg-primary)', 
                border: '4px solid var(--accent-primary)',
                zIndex: 1
              }}></div>
              
              <div className="glass-card">
                <div className="flex justify-between items-center mb-4" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-accent-secondary font-semibold">{exp.company}</p>
                  </div>
                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.5rem 1rem', borderRadius: '20px', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600 }}>
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-sm text-tertiary mb-4">Tools: <span style={{ color: 'var(--text-secondary)' }}>{exp.tools}</span></p>
                
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>▹</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
