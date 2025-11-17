import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Text Glow Animation - Purple Theme
export const glowAnimation = (element, duration = 2) => {
  return gsap.to(element, {
    textShadow: `
      0 0 20px rgba(201, 166, 255, 0.9),
      0 0 40px rgba(221, 169, 243, 0.7),
      0 0 60px rgba(93, 52, 140, 0.5),
      0 0 80px rgba(75, 42, 122, 0.3)
    `,
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });
};

// Bounce Animation
export const bounceAnimation = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      delay: delay,
      ease: 'bounce.out',
    }
  );
};

// Fade In Animation
export const fadeInAnimation = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: delay,
      ease: 'power3.out',
    }
  );
};

// Scale In Animation
export const scaleInAnimation = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: delay,
      ease: 'back.out(1.7)',
    }
  );
};

// Float Animation
export const floatAnimation = (element, yDistance = 20) => {
  return gsap.to(element, {
    y: -yDistance,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
};

// Typewriter Effect
export const typewriterAnimation = (element, text, duration = 2) => {
  const chars = text.split('');
  element.textContent = '';
  
  return gsap.to({}, {
    duration: duration,
    onUpdate: function() {
      const progress = this.progress();
      const currentIndex = Math.floor(progress * chars.length);
      element.textContent = chars.slice(0, currentIndex).join('');
    }
  });
};

// Shimmer Animation
export const shimmerAnimation = (element) => {
  return gsap.to(element, {
    backgroundPosition: '200% center',
    duration: 3,
    repeat: -1,
    ease: 'none',
  });
};

// Rotate Animation
export const rotateAnimation = (element, degrees = 360) => {
  return gsap.to(element, {
    rotation: degrees,
    duration: 2,
    repeat: -1,
    ease: 'none',
  });
};

// Pulse Animation
export const pulseAnimation = (element) => {
  return gsap.to(element, {
    scale: 1.1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
};

// Scroll Triggered Animation
export const scrollAnimation = (element, animationProps) => {
  return gsap.fromTo(
    element,
    animationProps.from,
    {
      ...animationProps.to,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Stagger Animation for Multiple Elements
export const staggerAnimation = (elements, delay = 0.2) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: delay,
      ease: 'power2.out',
    }
  );
};

// Confetti Particle Animation - Purple Theme
export const confettiParticle = (container, count = 50) => {
  const colors = ['#C9A6FF', '#DDA9F3', '#5D348C', '#4B2A7A', '#E2E2E2'];
  const particles = [];

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    particle.style.left = '50%';
    particle.style.top = '50%';
    particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
    container.appendChild(particle);
    particles.push(particle);

    gsap.to(particle, {
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500,
      rotation: Math.random() * 360,
      opacity: 0,
      duration: 2 + Math.random() * 2,
      ease: 'power2.out',
      onComplete: () => particle.remove(),
    });
  }
};

// Award Card Animation - Purple Theme
export const awardCardAnimation = (element) => {
  const tl = gsap.timeline({ repeat: -1 });
  
  tl.to(element, {
    boxShadow: `
      0 0 30px rgba(201, 166, 255, 0.9), 
      0 0 60px rgba(221, 169, 243, 0.6),
      0 0 90px rgba(93, 52, 140, 0.3)
    `,
    duration: 1.5,
    ease: 'power2.inOut',
  })
  .to(element, {
    boxShadow: `
      0 0 20px rgba(201, 166, 255, 0.6), 
      0 0 40px rgba(221, 169, 243, 0.3),
      0 0 60px rgba(93, 52, 140, 0.2)
    `,
    duration: 1.5,
    ease: 'power2.inOut',
  });
  
  return tl;
};

export default {
  glowAnimation,
  bounceAnimation,
  fadeInAnimation,
  scaleInAnimation,
  floatAnimation,
  typewriterAnimation,
  shimmerAnimation,
  rotateAnimation,
  pulseAnimation,
  scrollAnimation,
  staggerAnimation,
  confettiParticle,
  awardCardAnimation,
};

