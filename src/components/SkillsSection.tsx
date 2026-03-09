import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg' },
  { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
];

const techStack = [
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Mysql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
];

const SkillPill = ({
  name,
  icon,
  delay,
  isInView,
}: {
  name: string;
  icon: string;
  delay: number;
  isInView: boolean;
}) => (
  <motion.div
    className="glass-card px-6 py-3 rounded-full flex items-center gap-3 cursor-pointer border border-white/10 bg-white/5"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ 
      scale: 1.06, 
      boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' 
    }}
  >
    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-transparent">
      <img
        src={icon}
        alt={`${name} icon`}
        className="h-4 w-4"
        loading="lazy"
      />
    </div>
    <span className="font-medium">{name}</span>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const rows = Array.from({ length: 3 }, () => [] as typeof skills);
  skills.forEach((skill, index) => {
    rows[index % 3].push(skill);
  });

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
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A comprehensive toolkit of modern technologies for building
            exceptional web experiences.
          </p>
        </motion.div>

        {/* Skills Marquees */}
        <div className="relative mb-16 space-y-6 overflow-hidden pb-10">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          {rows.map((row, rowIndex) => {
            const marqueeRow = [...row, ...row, ...row];
            const isReverse = rowIndex % 2 === 1;
            return (
              <motion.div
                key={`row-${rowIndex}`}
                className="flex gap-6"
                initial={{ x: '0%' }}
                animate={isInView ? { x: isReverse ? ['0%', '33.333%'] : ['0%', '-33.333%'] } : {}}
                transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
              >
            {marqueeRow.map((skill, index) => (
              <div key={`${skill.name}-${rowIndex}-${index}`} className="min-w-[220px]">
                <SkillPill
                  name={skill.name}
                  icon={skill.icon}
                  delay={0.1 + (index % row.length) * 0.05}
                  isInView={isInView}
                />
              </div>
            ))}
              </motion.div>
            );
          })}
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
                className="glass-card px-6 py-3 rounded-full flex items-center gap-3 cursor-pointer border border-white/10 bg-white/5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' 
                }}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-transparent">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="h-4 w-4"
                    loading="lazy"
                  />
                </div>
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
