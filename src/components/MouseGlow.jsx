import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e) => {
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(glow, {
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.3,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="mouse-glow"
      style={{ opacity: 0 }}
    />
  );
};

export default MouseGlow;

