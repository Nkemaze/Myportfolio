import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading the frontend team in building scalable React applications. Implemented micro-frontend architecture and improved performance by 40%.',
    tech: ['React', 'TypeScript', 'GraphQL', 'AWS'],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using modern JavaScript frameworks. Built RESTful APIs and integrated third-party services.',
    tech: ['React', 'Node.js', 'PHP', 'MySQL'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'StartUp Hub',
    period: '2019 - 2020',
    description: 'Created responsive web applications and implemented UI/UX designs. Collaborated with design team to improve user experience.',
    tech: ['JavaScript', 'Vue.js', 'SCSS', 'Firebase'],
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: 'Web Agency Pro',
    period: '2018 - 2019',
    description: 'Started professional career building websites and web applications. Learned modern development practices and agile methodologies.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
];

const TimelineItem = ({ 
  experience, 
  index, 
  isInView 
}: { 
  experience: typeof experiences[0]; 
  index: number; 
  isInView: boolean;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : ''}`}>
        <motion.div
          className="glass-card p-6 rounded-xl"
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 0 30px hsl(var(--primary) / 0.2)'
          }}
        >
          <span className="text-primary font-mono text-sm">{experience.period}</span>
          <h3 className="text-xl font-bold mt-2">{experience.role}</h3>
          <p className="text-muted-foreground mt-1">{experience.company}</p>
          <p className="text-muted-foreground text-sm mt-4">{experience.description}</p>
          <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'md:justify-end' : ''}`}>
            {experience.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          className="timeline-dot z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
        />
      </div>

      {/* Empty space for alignment */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-primary font-mono text-sm tracking-wider">
            Experience
          </span>
          <h2 className="section-title mt-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            My career path and the experiences that shaped me as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - SVG animated */}
          <svg
            className="absolute left-1/2 top-0 bottom-0 w-0.5 h-full hidden md:block"
            style={{ transform: 'translateX(-50%)' }}
          >
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="url(#timeline-gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" />
                <stop offset="80%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
