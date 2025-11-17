import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Message from './components/Message';
import Memories from './components/Memories';
import Award from './components/Award';
import MusicManager from './components/MusicManager';
import FloatingParticles from './components/FloatingParticles';
import MouseGlow from './components/MouseGlow';
import './styles/global.css';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });

    // Refresh AOS on window resize
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <MusicManager />
      <FloatingParticles />
      <MouseGlow />
      <Hero />
      <Message />
      <Memories />
      <Award />
    </div>
  );
}

export default App;

