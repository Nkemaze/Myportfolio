import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skills = [
  { name: 'JavaScript', level: 95, icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
  { name: 'React', level: 92, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', level: 88, icon: '📘', color: 'from-blue-400 to-blue-600' },
  { name: 'PHP', level: 85, icon: '🐘', color: 'from-purple-400 to-purple-600' },
  { name: 'HTML/CSS', level: 95, icon: '🎨', color: 'from-orange-400 to-red-500' },
  { name: 'Node.js', level: 82, icon: '🟢', color: 'from-green-400 to-green-600' },
];

const techStack = [
  { name: 'Git', icon: '📦' },
  { name: 'Docker', icon: '🐳' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Next.js', icon: '▲' },
  { name: 'GraphQL', icon: '◈' },
];

interface SkillCardProps {
  skill: typeof skills[0];
  index: number;
  isInView: boolean;
}

const SkillCard = ({ skill, index, isInView }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-semibold text-lg">{skill.name}</span>
        </div>
        <span className="text-primary font-mono">{skill.level}%</span>
      </div>
      
      {/* Circular progress */}
      <div className="relative w-24 h-24 mx-auto my-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-primary"
            style={{
              strokeDasharray: 251.2,
            }}
            initial={{ strokeDashoffset: 251.2 }}
            animate={isInView ? { strokeDashoffset: 251.2 - (251.2 * skill.level) / 100 } : {}}
            transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-2xl font-bold"
            animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          >
            {skill.icon}
          </motion.span>
        </div>
      </div>

      {/* Linear progress bar */}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-primary font-mono text-sm tracking-wider">
            My Skills
          </span>
          <h2 className="section-title mt-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A comprehensive toolkit of modern technologies for building
            exceptional web experiences.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="glass-card px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' 
                }}
              >
                <span>{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
