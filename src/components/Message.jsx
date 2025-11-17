import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Message.css';

gsap.registerPlugin(ScrollTrigger);

const Message = () => {
  const messageRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Birthday message for Rana Fiza
  const fullMessage = `Happy Birthday, RANA Fiza (Aura)! 🎉

Aaj ka din sirf aur sirf tumhari celebration ka hai. Sacchi baat yeh hai ke jab se hamara group bana hai na, us din se university aana boring duty nahi, balki mazedaar scene ban gaya hai. Pehle bilkul dil nahi karta tha uni aane ka, lekin ab lagta hai ke chal yaar, Aura ke saath thora hansna-hansana bhi ho jayega.

Tumhare saath jo time guzra hai na, woh uni ki un yaadon mein se hai jo shayad kabhi bhool hi na paayein. Tum literally hamari uni ki best memories mein se ek ho.

Fiza, main dil se dua karta hoon ke Allah Ta'ala tumhari saari mushkilaat door kar de. Jo jo tension tumko andr se pareshaan karti hai, Allah tumhein un sab se nikal de, aur jo tumhare haq mein behtareen ho, wohi tumhari zindagi mein ho. Allah tumhein aisi zindagi de jahan tum hamesha khush raho, mentally bhi, emotionally bhi, aur future mein bhi bohot strong aur successful raho.

Kabhi kabhi tum itni tension le leti ho, lekin yaad rakho: tum jitni strong ho na, utni tum khud ko samajhti bhi nahi. Bas Allah se yehi dua hai ke woh tumhein sukoon de, tumhari muskurahat hamesha genuine rahe, aur tumhari zindagi ka agla chapter previous se bohot zyada beautiful ho.

Aur ab thori si roasting bhi ho jaye:

Tumhari chhoti si height par hum jitna bhi mazaaq karte hain na, woh sirf isliye kyun ke tumhari "aura" itni badi hai ke height waise hi irrelevant lagti hai. Allah kare future tumhara itna lamba ho ke height ka topic khud hi chhota lagne lage. 😆

Aur haaan, main tumhein tang karta hoon, shayad aage bhi karta rahoon. Agar tum meri baaton ka bura maanna chahti ho to araam se maan lo, lekin tu jaanti hai ke yeh sab fun mein hota hai, kyun ke tu hamare liye genuinely special hai.

Hansna bohot aaj, cake todna, pictures leni, aur yeh yaad rakhna ke tum hamari life ka ek unforgettable part ho.

Phir se: Happy Birthday, Aura! 🎂💫`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping) {
            console.log('🎯 Message section visible - Starting typewriter effect!');
            setIsTyping(true);
            startTyping();
          }
        });
      },
      { 
        threshold: 0.2, // Start when 20% of section is visible
        rootMargin: '0px 0px -10% 0px' // Start slightly before fully in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isTyping]);

  const startTyping = () => {
    let index = 0;
    const typingSpeed = 30; // milliseconds per character

    const typeInterval = setInterval(() => {
      if (index < fullMessage.length) {
        setDisplayedText(fullMessage.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  };

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Fireworks animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = {
          x: (Math.random() - 0.5) * 6,
          y: (Math.random() - 0.5) * 6,
        };
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.015;
        this.radius = Math.random() * 2.5 + 1.5;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.velocity.y += 0.08;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
      }
    }

    const particles = [];
    const colors = ['#C9A6FF', '#DDA9F3', '#5D348C', '#4B2A7A', '#E2E2E2'];

    const createFirework = (x, y) => {
      const particleCount = 40;
      for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
      }
    };

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(201, 166, 255, 0.05)';
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

    const fireworkInterval = setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height * 0.6);
      createFirework(x, y);
    }, 800);

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(fireworkInterval);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="message-section" ref={containerRef}>
      <canvas ref={canvasRef} className="message-fireworks-canvas"></canvas>
      
      <div className="container">
        <div className="message-card">
          <div className="message-header">
            <h2 className="message-title">
              HAPPY BIRHAY DAY RANA FIZA (AURA) 😂
            </h2>
          </div>
          
          <div className="message-content" ref={messageRef}>
            <p className="message-text">
              {displayedText}
              {isTyping && displayedText.length < fullMessage.length && (
                <span className="typing-cursor">|</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;

