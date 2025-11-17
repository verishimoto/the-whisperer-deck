
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import HacksPage from './pages/HacksPage';

const AttentionIcon = () => (
  <svg className="w-5 h-5 ml-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 3a1.5 1.5 0 00-1.5 1.5v8.5a1.5 1.5 0 103 0V4.5A1.5 1.5 0 0010 3zM10 16a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

const App = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isChainBuilderOpen, setChainBuilderOpen] = useState(false);

  const handleCardSelect = (card) => {
    setSelectedCards(prevSelected => {
      if (prevSelected.find(c => c.id === card.id)) {
        return prevSelected.filter(c => c.id !== card.id);
      } else if (prevSelected.length < 5) {
        return [...prevSelected, card];
      }
      return prevSelected;
    });
  };

  const isAttentionNeeded = selectedCards.length === 5;
  let attentionClasses = 'bg-slate-800 hover:bg-slate-700';
  if (isAttentionNeeded) {
    attentionClasses = 'bg-amber-500/80 hover:bg-amber-400/80 animate-pulse';
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-white pb-24"> {/* Add padding to bottom to avoid overlap */}
      <HacksPage selectedCards={selectedCards} onCardSelect={handleCardSelect} />

      {/* Chain Builder Toggle Button */}
      <button 
        onClick={() => setChainBuilderOpen(!isChainBuilderOpen)} 
        className={`fixed inset-x-0 bottom-0 z-40 w-full flex items-center justify-center text-center py-2 transition-colors duration-300 border-t border-white/20 rounded-t-lg ${attentionClasses}`}
      >
        Chain Builder ({selectedCards.length} / 5)
        {isAttentionNeeded && <AttentionIcon />}
      </button>

      {/* Chain Builder Panel */}
      {isChainBuilderOpen && (
        <div className="fixed inset-x-0 bottom-0 z-30 bg-black/70 backdrop-blur-xl border-t border-white/10 p-4 pt-12"> {/* Add padding-top */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold">Chain Builder</h3>
            <p className="text-sm text-gray-400">Selected Prompts: {selectedCards.map(c => c.title).join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
