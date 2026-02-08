import React, { useState } from 'react';
import { AppStage } from './types';
import Proposal from './components/Proposal';
import Celebration from './components/Celebration';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.PROPOSAL);

  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-love-200 selection:text-love-900">
      {stage === AppStage.PROPOSAL && (
        <Proposal onYes={() => setStage(AppStage.CELEBRATION)} />
      )}
      
      {stage === AppStage.CELEBRATION && (
        <Celebration onNext={() => setStage(AppStage.GALLERY)} />
      )}

      {stage === AppStage.GALLERY && (
        <Gallery />
      )}
    </div>
  );
};

export default App;