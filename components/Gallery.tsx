import React from 'react';

// ==========================================
// 👇 PASTE YOUR IMAGE LINKS HERE
// ==========================================
const YOUR_MEMORIES: string[] = [
  "https://i.postimg.cc/pdy5kRrR/IMG-0680.jpg",
  "https://i.postimg.cc/PqNvKTJJ/IMG-0887.jpg",
  "https://i.postimg.cc/kGPVnSc5/IMG-0913.avif",
  "https://i.postimg.cc/FKqdB8kb/IMG-1386-JPG.jpg",
  "https://i.postimg.cc/ydZg4j0t/IMG-3170.png",
  "https://i.postimg.cc/mDHzfj7Y/IMG-3976.jpg",
  "https://i.postimg.cc/zBgbZ7nN/IMG-4303.jpg",
  "https://i.postimg.cc/zvYLJhjY/IMG-4666.jpg",
  "https://i.postimg.cc/x8Vk0mRC/IMG-4810.jpg",
  "https://i.postimg.cc/SxxnNkWZ/IMG-5288.avif",
  "https://i.postimg.cc/yxhDWNQZ/IMG-5474.jpg",
  "https://i.postimg.cc/L4jYxy95/IMG-6163.png",
  "https://i.postimg.cc/J7jDpTrW/IMG-6163-(1).png",
  "https://i.postimg.cc/y60gLf1g/IMG-7135.png",
  "https://i.postimg.cc/nr1LpPrT/IMG-7567.avif",
  "https://i.postimg.cc/6pby8g0H/IMG-8170.avif",
  "https://i.postimg.cc/YS4jYRDc/IMG-8176.avif",
  "https://i.postimg.cc/k5kGcSL8/IMG-8916.png",
  "https://i.postimg.cc/6593Ytbr/IMG-8938.avif",
  "https://i.postimg.cc/Y079cHrN/IMG-9333.png"
];

const Gallery: React.FC = () => {
  // If you added images to YOUR_MEMORIES, use them. Otherwise, generate 20 random placeholders.
  const images = YOUR_MEMORIES.length > 0 
    ? YOUR_MEMORIES 
    : Array.from({ length: 20 }, (_, i) => `https://picsum.photos/seed/love${i + 1}/400/500`);

  return (
    <div className="min-h-screen bg-love-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
       {/* Flowing Animated Background Elements */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <style>{`
           @keyframes float-up {
             0% { transform: translateY(110vh) scale(0.5) rotate(0deg); opacity: 0; }
             10% { opacity: 0.4; }
             90% { opacity: 0.4; }
             100% { transform: translateY(-10vh) scale(1.2) rotate(360deg); opacity: 0; }
           }
         `}</style>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-love-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animation: `float-up ${Math.random() * 20 + 15}s linear infinite`,
              animationDelay: `${Math.random() * -30}s`, // Negative delay ensures screen is full on load
            }}
          >
            {['❤️', '💖', '💕', '💘', '🥰', '✨', '🌸'][Math.floor(Math.random() * 7)]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-float">
          <h1 className="text-6xl font-handwriting text-love-600 mb-4 drop-shadow-sm">My Forever Valentine</h1>
          <div className="max-w-2xl mx-auto text-xl text-gray-700 leading-relaxed font-medium bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-love-100 shadow-sm space-y-4">
            <p>
              Yana, I’m proud to call you mine, and I love you more than words can ever say.
            </p>
            <p>
              Through everything we share, you stay close to my heart in a way no one else does. Idgaf I own you. You're mine. MINE 🐕‍🦺
            </p>
            <p>
              Every moment with you is a treasure. Here's to us, to today, and to all the beautiful tomorrows waiting for us.
            </p>
          </div>
        </div>

        {/* Uniform Grid: Responsive columns based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div 
                key={index} 
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white p-2"
            >
              <div className="overflow-hidden rounded-lg relative aspect-[4/5]">
                  <img
                    src={src}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-love-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-handwriting text-3xl drop-shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">❤️</span>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;