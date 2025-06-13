import React, { useEffect, useState, useRef } from 'react';

const starsCount = 120;

const GlobalStyles = () => (
  <style>
    {`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

    /* Fonts */
    .font-outfit { font-family: 'Outfit', sans-serif; }

    /* Keyframes */

    @keyframes twinkle {
      0%, 100% { opacity: 0.7; }
      50% {opacity: 1}
    }

    @keyframes twinkle-slow {
      0%, 100% { opacity: 0.5; }
      50% {opacity: 0.9}
    }

    @keyframes slow-rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes rover-move-advance {
      0% { transform: translateX(-220px); opacity: 0; }
      20% { opacity: 1; }
      40% { transform: translateX(calc(50vw - 80px)); }
      60% { transform: translateX(calc(50vw - 80px)); }
      80% { opacity: 1; transform: translateX(calc(100vw + 220px)); }
      100% { opacity: 0; transform: translateX(calc(100vw + 220px)); }
    }

    @keyframes wheel-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes light-pulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1 }
    }

    @keyframes nebula-fade {
      0%, 100% { opacity: 0.15;}
      50% { opacity: 0.3;}
    }

    @keyframes zoom-glow {
      0% { transform: scale(1); text-shadow: 0 0 5px #1de9b6; opacity: 1; }
      50% { transform: scale(1.1); text-shadow: 0 0 20px #1de9b6, 0 0 30px #0ff; opacity: 1; }
      100% { transform: scale(1); text-shadow: 0 0 5px #1de9b6; opacity: 1; }
    }

    /* Animations classes */

    .animate-twinkle {
      animation: twinkle 3s ease-in-out infinite;
    }

    .animate-twinkle-slow {
      animation: twinkle-slow 6s ease-in-out infinite;
    }

    .animate-slow-rotate{
      animation: slow-rotate 70s linear infinite;
    }

    .animate-rover-move-advance {
      animation: rover-move-advance 10s ease-in-out forwards;
    }

    .animate-wheel-spin {
      animation: wheel-spin 0.9s linear infinite;
    }

    .animate-light-pulse {
      animation: light-pulse 3s ease-in-out infinite;
    }

    .animate-nebula-fade {
      animation: nebula-fade 20s ease-in-out infinite;
    }

    .animate-zoom-glow {
      animation: zoom-glow 4s ease-in-out infinite alternate;
    }

    /* Nebula layers */

    .nebula-1 {
      position: absolute;
      background: radial-gradient(circle at 40% 40%, #63f9ff80, transparent 70%);
      width: 60vw;
      height: 60vh;
      top: 10vh;
      left: -10vw;
      border-radius: 50%;
      filter: blur(130px);
      opacity: 0.2;
      animation: nebula-fade 25s ease-in-out infinite alternate;
      pointer-events: none;
      z-index: 2;
    }
    .nebula-2 {
      position: absolute;
      background: radial-gradient(circle at 70% 70%, #3050f080, transparent 80%);
      width: 70vw;
      height: 70vh;
      bottom: 5vh;
      right: -15vw;
      border-radius: 50%;
      filter: blur(140px);
      opacity: 0.15;
      animation: nebula-fade 30s ease-in-out infinite alternate;
      pointer-events: none;
      z-index: 2;
    }

  `}
  </style>
);

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

const StarLayer = ({ count, sizeMin, sizeMax, twinkleClass }) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * (sizeMax - sizeMin) + sizeMin;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    stars.push(
      <div
        key={`star-${twinkleClass}-${i}`}
        className={`absolute rounded-full bg-white opacity-70 shadow-[0_0_6px_#b5eaff] ${twinkleClass}`}
        style={{
          width: size,
          height: size,
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
          filter: 'drop-shadow(0 0 2px white)',
          pointerEvents: 'none',
        }}
      />
    );
  }
  return <>{stars}</>;
};

const Rover = () => {
  return (
    <svg
      width="160"
      height="80"
      viewBox="0 0 160 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative"
      aria-hidden="true"
      role="img"
      aria-label="Animated Space Rover"
    >
      {/* Body */}
      <rect
        x="0"
        y="10"
        width="160"
        height="60"
        rx="30"
        ry="30"
        fill="url(#bodyGradient)"
        filter="url(#shadow)"
      />

      {/* Window */}
      <rect
        x="30"
        y="25"
        width="100"
        height="30"
        rx="15"
        ry="15"
        fill="url(#windowGradient)"
        stroke="#4BB8FF"
        strokeWidth="3"
      />

      {/* Wheels */}
      <circle
        cx="40"
        cy="75"
        r="18"
        fill="#0A1A3A"
        stroke="#2A8BD1"
        strokeWidth="5"
        className="animate-wheel-spin"
      />
      <circle
        cx="120"
        cy="75"
        r="18"
        fill="#0A1A3A"
        stroke="#2A8BD1"
        strokeWidth="5"
        className="animate-wheel-spin"
      />

      {/* Lights */}
      <circle
        cx="145"
        cy="40"
        r="10"
        fill="#1DE9B6"
        opacity="0.6"
        className="animate-light-pulse"
      />

      <circle
        cx="145"
        cy="40"
        r="5"
        fill="#0FF"
        opacity="0.8"
        className="animate-light-pulse animate-delay-500"
      />

      <defs>
        <linearGradient id="bodyGradient" x1="0" y1="0" x2="160" y2="80">
          <stop offset="0%" stopColor="#2a8bd1" />
          <stop offset="100%" stopColor="#0f355f" />
        </linearGradient>
        <linearGradient id="windowGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#73cffe" />
          <stop offset="100%" stopColor="#2a8bd1" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#177fdb" floodOpacity="0.5" />
        </filter>
      </defs>
    </svg>
  );
};

const SpaceSplashScreenAdvanced = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [animateTitle, setAnimateTitle] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const roverRef = useRef(null);

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setAnimateTitle(true);
    }, 5000);

    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, prefersReducedMotion ? 0 : 10000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(splashTimer);
    };
  }, [prefersReducedMotion]);

  // Parallax effect for layered stars on mouse move
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = e => {
      const starLayers = document.querySelectorAll('.star-layer');
      const { clientX: x, clientY: y } = e;

      starLayers.forEach((layer, i) => {
        // Layer 0 - farthest, small movement, Layer 1- more, Layer 2 - most movement
        const speed = (i + 1) * 0.03;
        const moveX = (window.innerWidth / 2 - x) * speed;
        const moveY = (window.innerHeight / 2 - y) * speed;
        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  if (!showSplash) {
    return (
      <main
        tabIndex={-1}
        aria-label="Note Taking Application Main Content"
        className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-gray-900 text-blue-400 font-outfit text-2xl font-semibold"
      >
        Welcome to the Note Taking Application.
      </main>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Space splash screen animation"
      className="fixed inset-0 bg-gradient-to-br from-[#0b0c1e] to-[#1a2138] flex flex-col items-center justify-center overflow-hidden select-none font-outfit text-white"
    >
      <GlobalStyles />

      {/* Nebula Background */}
      <div className="nebula-1 animate-nebula-fade" aria-hidden="true" />
      <div className="nebula-2 animate-nebula-fade" aria-hidden="true" />

      {/* Star layers for parallax */}
      <div className="star-layer absolute inset-0 pointer-events-none">
        <StarLayer count={40} sizeMin={0.7} sizeMax={1.5} twinkleClass="animate-twinkle-slow" />
      </div>

      <div className="star-layer absolute inset-0 pointer-events-none">
        <StarLayer count={50} sizeMin={1} sizeMax={2.5} twinkleClass="animate-twinkle" />
      </div>

      <div className="star-layer absolute inset-0 pointer-events-none">
        <StarLayer count={30} sizeMin={2} sizeMax={3} twinkleClass="animate-twinkle-slow" />
      </div>

      {/* Planet */}
      <div
        aria-hidden="true"
        className="absolute bottom-[15vh] left-[10vw] w-[120px] h-[120px] rounded-full bg-gradient-radial from-[#5af0ff] to-transparent drop-shadow-[0_0_30px_#5af0ff] animate-slow-rotate"
      />

      {/* Rover container with advanced movement */}
      <div
        aria-hidden="true"
        ref={roverRef}
        className="absolute bottom-[20vh] w-[160px] h-[80px] animate-rover-move-advance z-30"
      >
        <Rover />
      </div>

      {/* Title */}
      <h1
        className={
          `relative z-50  text-3xl md:text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(29,233,182,0.85)] mb-8 select-text font-outfit ` +
          (animateTitle ? 'animate-zoom-glow' : 'opacity-80')
        }
      >
       Welcome To  My  Portfolio 
      </h1>

      {/* Subtitle */}
      <p
        className="relative z-50 text-center text-base text-blue-300 max-w-[320px] mb-14 cursor-default select-none font-light"
      >
        Discover the galaxy beyond the stars
      </p>
    </div>
  );
};

export default SpaceSplashScreenAdvanced;

