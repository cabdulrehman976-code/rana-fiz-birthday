import { useEffect, useRef } from 'react';

const MusicManager = () => {
  const audioRef = useRef(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    // Check if music files exist before trying to play
    const initializeMusic = async () => {
      try {
        // Create audio element (from public folder)
        audioRef.current = new Audio('/music/1st.mp3');
        audioRef.current.loop = true;
        audioRef.current.autoplay = true; // Request autoplay
        audioRef.current.muted = true; // Start muted (browsers allow this)
        audioRef.current.volume = 1.0;

        // Add error handler
        audioRef.current.addEventListener('error', (e) => {
          console.log('❌ Music file not found. Please add: public/music/1st.mp3');
        });

        // Attempt to start music automatically
        const startMusic = () => {
          if (!isInitializedRef.current && audioRef.current) {
            console.log('🎵 Attempting to start music...');
            
            // Start muted (always works)
            audioRef.current.muted = true;
            audioRef.current.play()
              .then(() => {
                console.log('✅ Music playing (muted initially)');
                
                // Try to unmute immediately
                setTimeout(() => {
                  if (audioRef.current) {
                    audioRef.current.muted = false;
                    console.log('🔊 Music unmuted - playing with sound!');
                    isInitializedRef.current = true;
                  }
                }, 100);
                
                // Also try unmuting on ANY interaction
                const unmute = () => {
                  if (audioRef.current && audioRef.current.muted) {
                    audioRef.current.muted = false;
                    console.log('🔊 Music unmuted on interaction!');
                    isInitializedRef.current = true;
                    // Remove unmute listeners
                    document.removeEventListener('click', unmute);
                    document.removeEventListener('touchstart', unmute);
                    document.removeEventListener('keydown', unmute);
                    document.removeEventListener('mousemove', unmute);
                    document.removeEventListener('scroll', unmute);
                  }
                };
                
                document.addEventListener('click', unmute, { once: true });
                document.addEventListener('touchstart', unmute, { once: true });
                document.addEventListener('keydown', unmute, { once: true });
                document.addEventListener('mousemove', unmute, { once: true });
                document.addEventListener('scroll', unmute, { once: true });
                
                // Remove start listeners
                document.removeEventListener('click', startMusic);
                document.removeEventListener('touchstart', startMusic);
                document.removeEventListener('keydown', startMusic);
                document.removeEventListener('mousemove', startMusic);
                document.removeEventListener('scroll', startMusic);
                window.removeEventListener('load', startMusic);
              })
              .catch(e => {
                console.log('⚠️ Even muted autoplay blocked. Waiting for interaction...');
              });
          }
        };

        // Aggressive autoplay attempts
        // Try immediately
        startMusic();
        
        // Try multiple times with different delays
        setTimeout(() => startMusic(), 50);
        setTimeout(() => startMusic(), 100);
        setTimeout(() => startMusic(), 200);
        setTimeout(() => startMusic(), 500);
        
        // Also try on window load
        window.addEventListener('load', startMusic);
        
        // Listen for ANY user interaction as fallback
        document.addEventListener('click', startMusic);
        document.addEventListener('touchstart', startMusic);
        document.addEventListener('keydown', startMusic);
        document.addEventListener('mousemove', startMusic, { once: true });
        document.addEventListener('scroll', startMusic, { once: true });

        // Cleanup
        return () => {
          window.removeEventListener('load', startMusic);
          document.removeEventListener('click', startMusic);
          document.removeEventListener('touchstart', startMusic);
          document.removeEventListener('keydown', startMusic);
          document.removeEventListener('mousemove', startMusic);
          document.removeEventListener('scroll', startMusic);
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
          }
        };
      } catch (error) {
        console.log('Music initialization error:', error.message);
      }
    };

    initializeMusic();
  }, []);

  return null; // No visible UI, music plays automatically
};

export default MusicManager;
