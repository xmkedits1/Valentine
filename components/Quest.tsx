import React, { useState } from 'react';
import { SECRET_BITS } from '../constants';

interface QuestProps {
  onComplete: () => void;
}

const Quest: React.FC<QuestProps> = ({ onComplete }) => {
  const [inputs, setInputs] = useState<{ [key: number]: string }>({
    1: '',
    2: '',
    3: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [shaking, setShaking] = useState(false);

  const handleChange = (id: number, value: string) => {
    setInputs(prev => ({ ...prev, [id]: value }));
    setError(null);
  };

  const checkCodes = () => {
    let allCorrect = true;
    for (const bit of SECRET_BITS) {
      if (inputs[bit.id].trim().toUpperCase() !== bit.correctCode) {
        allCorrect = false;
        break;
      }
    }

    if (allCorrect) {
      onComplete();
    } else {
      setError("Hmm, that doesn't look quite right. Check the codes again my honeybee");
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-love-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">The Secret Quest</h2>
          <p className="mt-2 text-gray-600">
            I've hidden 3 secret "Love Bits" for you. Collect them to unlock your final surprise.
          </p>
        </div>

        <div className={`space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-love-100 transition-transform ${shaking ? 'translate-x-[-10px]' : ''} ${shaking ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}>
          <style>{`
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
          `}</style>
          
          {SECRET_BITS.map((bit) => (
            <div key={bit.id} className="relative">
              <label htmlFor={`bit-${bit.id}`} className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                 {bit.placeholder} 
                 <span className="text-lg leading-none" role="img" aria-label="hint">{bit.hint}</span>
              </label>
              <input
                id={`bit-${bit.id}`}
                type="text"
                placeholder="Enter secret code..."
                value={inputs[bit.id]}
                onChange={(e) => handleChange(bit.id, e.target.value)}
                className="block w-full px-4 py-3 rounded-lg border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-love-500 focus:border-love-500 transition-colors uppercase tracking-widest text-center font-bold text-love-600"
              />
            </div>
          ))}

          {error && (
            <div className="text-center text-red-500 text-sm font-medium bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <button
            onClick={checkCodes}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-love-600 hover:bg-love-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-love-500 transition-all transform hover:scale-[1.02]"
          >
            Unlock My Surprise 🔓
          </button>
        </div>
        
        <div className="text-center text-xs text-gray-400">
            <p>Hint for testing: AMORE, ORGOGLIO, PASSIONE</p>
        </div>
      </div>
    </div>
  );
};

export default Quest;