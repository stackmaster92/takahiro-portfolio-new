import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const greetings = [
  'Bonjour',
  'Hello',
  'Hola',
  'Ciao',
  'Hallo',
  'नमस्ते',
  'سلام',
  'Здравствуйте',
  'こんにちは',
  'Sawubona',
  'Merhaba',
  'Guten Tag',
  'Salve',
  'שלום',
  '您好',
  'Olá',
  'Sveiki',
  'Kumusta',
  'Jambo',
];



const Greetings = ({ onFinish }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const controls = useAnimation();
  const rippleRef = useRef(null);

  useEffect(() => {
    // Change greetings every 500ms
    const interval = setInterval(() => {
      setCurrentGreeting((prevGreeting) => (prevGreeting + 1) % greetings.length);
    }, 100);

    // Trigger ripple effect and transition to main app after 5 seconds
    const timeout = setTimeout(async () => {
      clearInterval(interval);

      // Trigger ripple effect
      if (rippleRef.current) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = rippleRef.current.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${rect.width / 2 - size / 2}px`;
        ripple.style.top = `${rect.height / 2 - size / 2}px`;
        rippleRef.current.appendChild(ripple);

        // Remove ripple after animation
        ripple.addEventListener('animationend', () => {
          ripple.remove();
        });
      }

      // Wait for ripple animation to complete
      await new Promise((resolve) => setTimeout(resolve, 600)); // Ripple duration + small buffer
      await controls.start({ opacity: 0, transition: { duration: 0.5 } });
      onFinish(); // Trigger the transition to the main website
    }, 2000); // Display the greetings for 5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish, controls]);

  return (
    <motion.div
      className="relative flex justify-center items-center h-screen bg-neutral-950 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={controls}
      ref={rippleRef}
    >
      <h1 className="text-5xl font-bold text-white">{greetings[currentGreeting]}</h1>
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          pointer-events: none;
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Greetings;
