import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import img from "../../public/me.png";

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '2 0+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-secondary/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Center content */}
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="relative h-80 w-80 overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-white/10 via-white/0 to-white/10 shadow-2xl">
                  <img
                    src={img}
                    alt="my image"
                    className="h-full w-full object-cover object-[50%_-5%]"
                  />
                  <div className="pointer-events-none absolute inset-0 border border-white/10 mix-blend-overlay" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />
                </div>
              </div>

              {/* Floating elements */}
              {[
                {
                  name: 'React',
                  icon: 'https://cdn.simpleicons.org/react/61DAFB',
                },
                {
                  name: 'PHP',
                  icon: 'https://cdn.simpleicons.org/php/777BB4',
                }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="absolute glass-card px-3 py-1.5 rounded-full text-sm font-mono text-primary flex items-center gap-2"
                  style={{
                    top: `${20 + Math.sin(index * 1.5) * 30}%`,
                    left: `${index % 2 === 0 ? -10 : 80}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="h-4 w-4"
                    loading="lazy"
                  />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="text-primary font-mono text-sm tracking-wider"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              About Me
            </motion.span>
            
            <h2 className="section-title mt-4">
              Turning <span className="text-primary">Ideas</span> Into
              <br />Digital Reality
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              I'm a passionate software engineer with over 3 years of experience
              building modern web applications. I specialize in many ecosystems,
              such as React and Node.js, with a strong foundation in PHP(Laravel)
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              My approach combines clean, maintainable code with creative problem-solving
              to deliver exceptional user experiences. I believe in continuous learning
              and staying at the forefront of web technologies.
            </p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text text-glow">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
