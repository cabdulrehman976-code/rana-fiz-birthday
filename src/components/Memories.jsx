import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Memories.css';

const Memories = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true, // Only animate once when scrolling into view
      mirror: false,
    });
  }, []);

  // Memory images - YOUR ACTUAL PHOTOS!
  const memories = [
    {
      id: 1,
      url: '/images/memory1.jpg',
      caption: 'Beautiful Moment',
      aos: 'fade-up',
    },
    {
      id: 2,
      url: '/images/memory2.jpg',
      caption: 'Sweet Memory',
      aos: 'zoom-in',
    },
    {
      id: 3,
      url: '/images/memory3.jpg',
      caption: 'Fun Times',
      aos: 'fade-left',
    },
    {
      id: 4,
      url: '/images/memory4.jpg',
      caption: 'Special Day',
      aos: 'fade-right',
    },
    {
      id: 5,
      url: '/images/memory5.jpg',
      caption: 'Golden Memories',
      aos: 'flip-up',
    },
  ];

  return (
    <section className="memories-section">
      <div className="container">
        <div className="memories-header" data-aos="fade-down">
          <h2 className="memories-title">
            Cherished Memories
            <span className="camera-icon">📸</span>
          </h2>
          <p className="memories-subtitle">
            Every moment with you is a treasure worth remembering
          </p>
        </div>

        <div className="memories-grid">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`memory-card memory-card-${index + 1}`}
            >
              <div className="memory-image-wrapper">
                <img
                  src={memory.url}
                  alt={memory.caption}
                  className="memory-image"
                  loading="lazy"
                />
                <div className="memory-overlay">
                  <p className="memory-caption">{memory.caption}</p>
                </div>
              </div>
              <div className="memory-frame"></div>
            </div>
          ))}
        </div>

        <div className="memories-decoration">
          <span className="deco-item">🌟</span>
          <span className="deco-item">😄</span>
          <span className="deco-item">🎉</span>
          <span className="deco-item">😊</span>
          <span className="deco-item">🌟</span>
        </div>
      </div>
    </section>
  );
};

export default Memories;

