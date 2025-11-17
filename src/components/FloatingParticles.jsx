import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/FloatingParticles.css';

const FloatingParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 30;
    const particles = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      
      // Random size
      const size = Math.random() * 6 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random starting position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random color from purple palette
      const colors = [
        'rgba(201, 166, 255, 0.6)',
        'rgba(221, 169, 243, 0.6)',
        'rgba(93, 52, 140, 0.5)',
        'rgba(75, 42, 122, 0.5)',
      ];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      // Random blur
      particle.style.filter = `blur(${Math.random() * 2 + 1}px)`;
      
      container.appendChild(particle);
      particles.push(particle);

      // Animate particle
      const duration = Math.random() * 10 + 15;
      const x = (Math.random() - 0.5) * 400;
      const y = (Math.random() - 0.5) * 400;

      gsap.to(particle, {
        x: x,
        y: y,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 5,
      });

      // Opacity animation
      gsap.to(particle, {
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Cleanup
    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return <div ref={containerRef} className="floating-particles-container"></div>;
};

export default FloatingParticles;

