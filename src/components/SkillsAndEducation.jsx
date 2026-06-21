import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Code2, Award, GraduationCap } from 'lucide-react';

export default function SkillsAndEducation() {
  return (
    <>
      <section className="section" id="skills">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="heading-md mb-2 flex items-center gap-4">
              <Code2 className="text-accent-tertiary" size={32} />
              Technical Skills
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--accent-tertiary)', borderRadius: '2px' }}></div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {portfolioData.skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card"
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent-primary)' }}>{skillGroup.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        background: 'rgba(255,255,255,0.05)', 
                        padding: '0.5rem 1rem', 
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        border: '1px solid var(--border-color)',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => { e.target.style.borderColor = 'var(--accent-tertiary)'; e.target.style.background = 'rgba(236, 72, 153, 0.1)'; }}
                      onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border-color)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="education" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6 flex items-center gap-4">
                <GraduationCap className="text-accent-primary" size={32} />
                Education
              </h2>
              <div className="glass-card">
                <h3 className="text-xl font-bold mb-2">{portfolioData.education.degree}</h3>
                <p className="text-accent-primary font-semibold mb-4">{portfolioData.education.institution}</p>
                <div className="flex justify-between items-center text-sm text-tertiary border-t border-glass pt-4" style={{ borderColor: 'var(--border-color)' }}>
                  <span>Graduation: {portfolioData.education.graduation}</span>
                  <span>CGPA: <strong className="text-primary" style={{ color: 'var(--text-primary)' }}>{portfolioData.education.cgpa}</strong></span>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-md mb-6 flex items-center gap-4">
                <Award className="text-accent-secondary" size={32} />
                Certifications
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {portfolioData.certifications.map((cert, index) => (
                  <div key={index} className="glass-card" style={{ padding: '1.5rem' }}>
                    <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                    <div className="flex justify-between text-sm mb-2">
                      <span style={{ color: 'var(--accent-secondary)' }}>{cert.issuer}</span>
                      <span className="text-tertiary">{cert.year}</span>
                    </div>
                    <p className="text-sm text-secondary">{cert.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
