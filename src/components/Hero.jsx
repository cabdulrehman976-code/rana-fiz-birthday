import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { glowAnimation, bounceAnimation } from '../animations/gsapAnimations';
import '../styles/Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [showText, setShowText] = useState(true); // Show immediately
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = 'Happy Birthday,';

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Fireworks particle class with purple theme
    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = {
          x: (Math.random() - 0.5) * 8,
          y: (Math.random() - 0.5) * 8,
        };
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.015;
        this.radius = Math.random() * 3 + 2;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.velocity.y += 0.1;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
      }
    }

    const particles = [];
    const colors = ['#C9A6FF', '#DDA9F3', '#5D348C', '#4B2A7A', '#E2E2E2', '#C9A6FF'];

    // Create fireworks
    const createFirework = (x, y) => {
      const particleCount = 60;
      for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
      }
    };

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        if (particle.alpha > 0) {
          particle.update();
          particle.draw();
        } else {
          particles.splice(index, 1);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    // Launch fireworks at intervals
    const fireworkInterval = setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height * 0.6);
      createFirework(x, y);
    }, 400);

    // Initial burst
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * (canvas.height * 0.6);
        createFirework(x, y);
      }, i * 200);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(fireworkInterval);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (showText && titleRef.current && imageRef.current) {
      // Typewriter effect for title
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < fullTitle.length) {
          setTypedTitle(fullTitle.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 100);
      
      // Glow animation for title
      setTimeout(() => {
        if (titleRef.current) {
          glowAnimation(titleRef.current, 2);
        }
      }, fullTitle.length * 100);
      
      // Animate image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2, delay: 0.3, ease: 'power3.out' }
      );

      return () => clearInterval(typeInterval);
    }
  }, [showText, fullTitle]);

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="fireworks-canvas"></canvas>
      
      {showText && (
        <div className="hero-content-wrapper">
          <div className="hero-left">
            <div ref={titleRef} className="hero-title-container">
              <h1 className="hero-title">
                {typedTitle}
                {typedTitle.length < fullTitle.length && <span className="typing-cursor-hero">|</span>}
                <br />
                <span className="gradient-text glow-text">Miss AURA: Rana Fiza Sahib !</span>
              </h1>

              {/* Credit Message */}
              <div className="hero-credit">
                <p className="hero-credit-text">
                  💜 <span className="hero-credit-name">Rana Shib</span> 💜
                  <br />
                  Kindly press your image please! 📸✨
                </p>
              </div>

              <div className="hero-sparkles">
                <span className="sparkle">✨</span>
                <span className="sparkle">🎉</span>
                <span className="sparkle">🎂</span>
                <span className="sparkle">🎈</span>
                <span className="sparkle">✨</span>
              </div>
            </div>
          </div>
          
          <div className="hero-right">
            <div ref={imageRef} className="hero-image-container">
              <div className="hero-image-overlay"></div>
              <img 
                src="/images/main-page.jpg" 
                alt="Rana Fiza" 
                className="hero-image"
              />
              <div className="hero-image-glow"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

