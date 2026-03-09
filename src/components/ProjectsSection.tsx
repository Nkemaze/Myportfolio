import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import tropical from "@/assets/tropical.png"
import kelshair from "@/assets/kelshair image.png"
import hery from "@/assets/herygarage.png"
import arileshope from "@/assets/arileshope.png"
import portfolio from "@/assets/portfolio.png"



const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with Augmented reality to test the products virtualy using Laravel, node js. Features real-time inventory, user authentication, and admin dashboard.',
    image: arileshope,
    tech: ['Laravel', 'js', 'mysql'],
    category: 'fullstack',
    link: '#',
    github: 'https://github.com/Nkemaze/E-commerce-website-with-AR',
  },
  {
    id: 2,
    title: 'Kelshair E-Commerce',
    description: 'A full-stack e-commerce platform for hairs(wigs) using php. Features real-time inventory, user authentication, and admin dashboard.',
    image: kelshair,
    tech: ['HTML', 'PHP'],
    category: 'fullstack',
    link: 'https://kelshair.digimarkconsulting.cm/',
    github: 'https://github.com/cyrildey/kelshair',
  },
  {
    id: 3,
    title: 'API Service',
    description: 'A high-performance API gateway built with Nodejs/expressjs, for a community developer bug zone',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    tech: ['nodejs', 'expressjs', 'mongoDB'],
    category: 'backend',
    link: 'https://dev-bug.onrender.com',
    github: 'https://github.com/Nkemaze/Dev-bug',
  },
  {
    id: 4,
    title: 'Portfolio Dashboard',
    description: 'An interactive and animated portfolio webside',
    image: portfolio,
    tech: ['React', 'Typescript'],
    category: 'frontend',
    link: 'https://nkemazebless.vercel.app/',
    github: 'https://github.com/Nkemaze/Myportfolio',
  },
  {
    id: 5,
    title: 'Henry Garage',
    description: 'A website for a car repair shop built with React and Node.js, featuring real-time chat support and appointment scheduling.',
    image: hery,
    tech: ['HTML', 'CSS', 'JS'],
    category: 'frontend',
    link: 'https://henrygarage.vercel.app/',
    github: 'https://github.com/Nkemaze/henrygarage',
  },
  {
    id: 6,
    title: 'Tropical Consulting',
    description: 'A website for an agricultural enterprise, featuring e-commerce and admin panel',
    image: tropical,
    tech: ['react', 'Typscript', 'PHP'],
    category: 'fullstack',
    link: 'https://www.tropicalforest.cm/',
    github: 'https://github.com/cyrildey/tfc-tropical-solutions',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full Stack' },
];

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    <motion.div
      className="relative glass-card rounded-2xl max-w-2xl w-full overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-muted-foreground mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.link} className="hero-button-primary text-sm">
            View Live
          </a>
          <a href={project.github} className="hero-button-secondary text-sm">
            View Code
          </a>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
      >
        ✕
      </button>
    </motion.div>
  </motion.div>
);

const ProjectCard = ({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-primary font-semibold">View Details →</span>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-primary font-mono text-sm tracking-wider">
            My Work
          </span>
          <h2 className="section-title mt-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A selection of projects that showcase my skills and passion for
            building exceptional digital experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
