import React, { useState, useEffect } from 'react';

interface ProposalProps {
  onYes: () => void;
}

const NO_PHRASES = [
  "No",
  "Think again",
  "hahahahh",
  "hattttt",
  "HAAAHHAH",
  "bheaaaaaa!"
];

// Updated image sources to ensure visibility and better matching
const CAT_STICKERS = [
  { 
    src: "https://media.tenor.com/m-XkM5kF1lAAAAAC/cat-muscle.gif", 
    style: { top: '5%', left: '5%', transform: 'rotate(-15deg)' }, 
    alt: "Strong Cat" 
  },
  { 
    src: "https://media.tenor.com/uWq51r7i_c0AAAAi/cat-reach.gif",
    style: { bottom: '5%', right: '5%', transform: 'rotate(15deg)' }, 
    alt: "Reaching Cat" 
  },
  { 
    src: "https://media.tenor.com/gK9lW_v3Fq8AAAAi/cat-blep.gif",
    style: { top: '15%', right: '5%', transform: 'rotate(10deg)' }, 
    alt: "Tongue Cat" 
  },
  { 
    src: "https://media.tenor.com/sqFk8jQjZtEAAAAi/cat-flower.gif",
    style: { bottom: '15%', left: '5%', transform: 'rotate(-10deg)' }, 
    alt: "Rose Cat" 
  },
  { 
    src: "https://media.tenor.com/1a7T1f8k7x8AAAAi/cat-flowers.gif",
    style: { top: '2%', left: '50%', transform: 'translateX(-50%)' }, 
    alt: "Bouquet Cat" 
  }
];

const Proposal: React.FC<ProposalProps> = ({ onYes }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ top: '50%', left: '60%' });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [zerosCount, setZerosCount] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Increment the zero count every 0.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setZerosCount(prev => prev + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const moveButton = () => {
    const randomX = Math.random() * 80 + 10; // 10% to 90%
    const randomY = Math.random() * 80 + 10;
    setNoBtnPosition({ top: `${randomY}%`, left: `${randomX}%` });
    setPhraseIndex((prev) => (prev + 1) % NO_PHRASES.length);
  };

  const handleNoClick = () => {
    if (isMobile) {
        alert("Nice try! But I'm not taking no for an answer 😉");
        onYes();
    } else {
        moveButton();
    }
  };

  const numberString = '1' + '0'.repeat(zerosCount);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-love-50 to-love-100 p-4 overflow-hidden relative">
      
      {/* Decorative Cat Stickers - Visible on all screens */}
      {CAT_STICKERS.map((cat, index) => (
        <div 
            key={index}
            className="absolute pointer-events-none z-0"
            style={{
                ...cat.style,
                // Responsive sizing
                width: 'clamp(100px, 20vw, 200px)',
                height: 'clamp(100px, 20vw, 200px)',
            }}
        >
            <img 
                src={cat.src} 
                alt={cat.alt}
                className="w-full h-full object-contain opacity-90 drop-shadow-lg"
            />
        </div>
      ))}

      <div className="z-10 text-center space-y-8 animate-float max-w-5xl w-full relative">
        <div className="relative inline-block">
             <div className="absolute -top-12 -left-12 text-4xl md:text-6xl opacity-20 rotate-[-15deg]">❤️</div>
             <div className="absolute -bottom-12 -right-12 text-4xl md:text-6xl opacity-20 rotate-[15deg]">❤️</div>
            <h1 className="text-4xl md:text-7xl font-handwriting text-love-600 mb-6 drop-shadow-sm">
            Yana...
            </h1>
            <h2 className="text-xl md:text-4xl font-bold text-gray-800 leading-tight">
                Will you be my Valentine for<br/>
                <span className="text-love-600 break-all font-mono tracking-tighter inline-block my-2 max-w-full px-4">
                    {numberString}
                </span><br/>
                million lives?
            </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 relative h-32 w-full max-w-md mx-auto">
          <button
            onClick={onYes}
            className="px-8 py-4 bg-love-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-love-600 transform hover:scale-110 transition-all duration-300 animate-heartbeat z-20"
          >
            YES! ❤️
          </button>

          <button
            style={{
              position: isHovered && !isMobile ? 'fixed' : 'relative',
              top: isHovered && !isMobile ? noBtnPosition.top : 'auto',
              left: isHovered && !isMobile ? noBtnPosition.left : 'auto',
              transition: 'all 0.2s ease-out'
            }}
            onMouseEnter={() => {
                setIsHovered(true);
                moveButton();
            }}
            onClick={handleNoClick}
            className="px-8 py-4 bg-white text-gray-400 text-xl font-bold rounded-full shadow border-2 border-gray-200 hover:text-love-500 hover:border-love-200 z-20 whitespace-nowrap min-w-[100px]"
          >
            {NO_PHRASES[phraseIndex]}
          </button>
        </div>
      </div>
      
      {/* Decorative background hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute text-love-200 opacity-30 animate-pulse"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 2 + 1}rem`,
                    animationDelay: `${Math.random() * 2}s`
                }}
              >
                ♥
              </div>
          ))}
      </div>
    </div>
  );
};

export default Proposal;