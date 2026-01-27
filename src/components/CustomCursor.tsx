import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(mousePosition.x, springConfig);
  const y = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor hidden md:block"
        style={{
          x,
          y,
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border-2 border-primary/30 hidden md:block"
        style={{
          x,
          y,
          width: isHovering ? 64 : 40,
          height: isHovering ? 64 : 40,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;
