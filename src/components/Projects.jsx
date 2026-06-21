import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { FolderGit2, ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center flex flex-col items-center"
        >
          <h2 className="heading-md mb-2 flex items-center justify-center gap-4">
            <FolderGit2 className="text-accent-secondary" size={32} />
            Featured Projects
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-secondary)', borderRadius: '2px', alignSelf: 'center' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div className="flex justify-between items-center mb-6">
                <FolderGit2 size={40} color="var(--accent-primary)" />
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
                    <Code2 size={24} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-accent-tertiary text-sm mb-4">{project.tech}</p>
              
              <p className="text-secondary mb-6 flex-grow">{project.description}</p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.highlights.map((highlight, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--accent-secondary)' }}>•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <div style={{ marginTop: 'auto' }}>
                 <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem', padding: '0.5rem' }}>
                    View Repository <ExternalLink size={16} style={{ marginLeft: '0.5rem' }}/>
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
