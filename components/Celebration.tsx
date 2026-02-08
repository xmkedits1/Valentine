import React from 'react';

interface CelebrationProps {
  onNext: () => void;
}

const Celebration: React.FC<CelebrationProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 relative overflow-hidden">
      {/* Confetti-like Background */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: ['#f43f5e', '#fb7185', '#fda4af'][i % 3],
              width: '10px',
              height: '10px',
              top: '-10px',
              left: `${Math.random() * 100}%`,
              animation: `fall ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes fall {
          to { transform: translateY(100vh) rotate(360deg); }
        }
      `}</style>

      <div className="max-w-2xl w-full bg-love-50/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl text-center z-10 border border-love-100">
        <div className="text-6xl mb-6">🎉💖🎉</div>
        
        <h2 className="text-3xl font-bold text-love-700 mb-6">Yeahhhh, good girl!</h2>

        <div className="space-y-6">
            <div className="text-xl md:text-2xl text-gray-700 font-handwriting leading-relaxed space-y-4">
              <p>
                Yana, I’m proud to call you mine, and I love you more than words can ever say.
              </p>
              <p>
                Through everything we share, you stay close to my heart in a way no one else does. Idgaf I own you. You're mine. MINE 🐕‍🦺
              </p>
              <p>
                I’ve got the whole Valentine’s planned.<br/>
                Check the button below. It's gonna be fun heheahahh
              </p>
            </div>
            <div className="pt-6">
                <button 
                    onClick={onNext}
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-love-600 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:bg-love-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-love-500"
                >
                    <span className="relative">Unlock Hidden Page 🔓</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Celebration;