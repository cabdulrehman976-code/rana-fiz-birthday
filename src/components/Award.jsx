import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Confetti from 'react-confetti';
import { awardCardAnimation, confettiParticle } from '../animations/gsapAnimations';
import '../styles/Award.css';

const Award = () => {
  const awardCardRef = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowConfetti(true);
            
            // Animate award card
            if (awardCardRef.current) {
              gsap.fromTo(
                awardCardRef.current,
                { scale: 0, opacity: 0, rotation: -180 },
                {
                  scale: 1,
                  opacity: 1,
                  rotation: 0,
                  duration: 1.5,
                  ease: 'elastic.out(1, 0.5)',
                }
              );

              // Start glow animation
              setTimeout(() => {
                awardCardAnimation(awardCardRef.current);
              }, 1500);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (awardCardRef.current) {
      observer.observe(awardCardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="award-section">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={true}
          colors={['#C9A6FF', '#DDA9F3', '#5D348C', '#4B2A7A', '#E2E2E2']}
        />
      )}

      <div className="container">
        <div className="award-content">
          <div className="award-header" data-aos="fade-down">
            <h2 className="award-intro">
              And the award goes to...
            </h2>
          </div>

          <div ref={awardCardRef} className="award-card">
            <div className="award-trophy">🏆</div>
            
            <div className="award-ribbon ribbon-left"></div>
            <div className="award-ribbon ribbon-right"></div>

            <h3 className="award-title">MISS AURA</h3>
            <div className="award-divider"></div>
            <h1 className="award-name gradient-text glow-text">RANA FIZA</h1>
            
            <div className="award-stars">
              <span className="award-star">⭐</span>
              <span className="award-star">⭐</span>
              <span className="award-star">⭐</span>
              <span className="award-star">⭐</span>
              <span className="award-star">⭐</span>
            </div>

            <p className="award-description">
              For being absolutely amazing, incredibly special, and radiating positive energy wherever you go!
            </p>

            <div className="award-seal">
              <div className="seal-inner">
                <span className="seal-icon">✨</span>
              </div>
            </div>
          </div>

          <div className="award-footer" data-aos="fade-up">
            <p className="award-message">
              ONCE AGAIN HAPPY BITRHDAY AURA 😂 Keep shining bright!  ✨
            </p>
            <div className="award-sparkles">
              <span className="sparkle-item">😂</span>
              <span className="sparkle-item">🌟</span>
              <span className="sparkle-item">🎊</span>
              <span className="sparkle-item">🌟</span>
              <span className="sparkle-item">🤩</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <span className="float-element element-1">✨</span>
        <span className="float-element element-2">💫</span>
        <span className="float-element element-3">⭐</span>
        <span className="float-element element-4">🌟</span>
        <span className="float-element element-5">✨</span>
        <span className="float-element element-6">💫</span>
      </div>
    </section>
  );
};

export default Award;

