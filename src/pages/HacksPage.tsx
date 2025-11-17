
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { categoryStyles } from '@/config/categoryStyles';
import { runAllSocraticTests } from '@/socratic-tests';
import { prompts as whispererHacks } from '../prompts';
import { BioluminescentCard } from '../components/BioluminescentCard';

const SortIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 2V13M7.5 2L11 5.5M7.5 2L4 5.5M7.5 13L11 9.5M7.5 13L4 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HacksPage({ selectedCards, onCardSelect }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [costMode, setCostMode] = useState<'flash' | 'pro'>('flash');
  const filters = ['All', ...Object.keys(categoryStyles)];

  useEffect(() => {
    runAllSocraticTests(costMode);
  }, [costMode]);

  const filteredHacks = whispererHacks.filter(hack => activeFilter === 'All' || hack.category === activeFilter);

  const columns = Array.from({ length: 3 }, (_, colIndex) =>
    filteredHacks.filter((_, itemIndex) => itemIndex % 3 === colIndex)
  );
  
  const cost = costMode === 'flash' ? '0.01' : '0.15';

  return (
    <div className="m-4 p-8 border-[5px] border-black bg-[#111] rounded-[48px]">
      <header className="mb-12 text-center">
        <p style={{ fontFamily: '\"Helvetica Neue Condensed\", \"Arial Narrow\", sans-serif', fontWeight: 100, letterSpacing: '0.1em' }} className="text-sm uppercase text-gray-400/50 mb-2">MASTER GRID</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">The Whisperer Deck</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">A curated collection of Socratic & philosophical strategies to elevate your reasoning.</p>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 p-1 bg-black/20 rounded-lg">
          {filters.map(filter => {
            const isActive = activeFilter === filter;
            let buttonStyle = 'text-gray-400 hover:bg-white/10 hover:text-white';
            if (isActive) {
              buttonStyle = filter === 'All' ? 'bg-white text-black' : `${categoryStyles[filter]?.activeBg || 'bg-gray-500'} text-white`;
            }
            return (
              <Button key={filter} variant="ghost" onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${buttonStyle}`}>
                {filter}
              </Button>
            );
          })}
        </div>
        <div className="w-full md:w-auto flex items-center gap-4">
            <Input type="search" placeholder="Search hacks..." className="w-full md:w-[250px] bg-black/20 border-gray-700 rounded-lg focus:ring-2 focus:ring-white/50" />
             <Button variant="ghost" className="p-2 h-10 w-10 hover:bg-white/10" title="Sort items">
                <SortIcon />
                <span className="sr-only">Sort items</span>
            </Button>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-4 my-8">
        <Label htmlFor="cost-mode" className="text-white/70 font-medium">Routine Tasks (Gemini Flash)</Label>
        <Switch id="cost-mode" checked={costMode === 'pro'} onCheckedChange={() => setCostMode(prev => prev === 'flash' ? 'pro' : 'flash')} />
        <Label htmlFor="cost-mode" className="text-white/70 font-medium">Deep Reasoning (The Magic Whisperer)</Label>
        <div className="text-white/80 font-mono text-lg ml-4 bg-black/20 px-3 py-1 rounded-md">
          ~${cost} / 1K tokens
        </div>
      </div>

      <div className="text-right mb-8">
        <p className="text-gray-400 font-light">Showing <span className="font-bold text-white">{filteredHacks.length}</span> of {whispererHacks.length} hack prompts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6">
            {column.map(hack => (
               <BioluminescentCard 
                key={hack.id} 
                cardData={hack}
                title={hack.title} 
                category={hack.category}
                isSelected={selectedCards.some(c => c.id === hack.id)}
                onSelect={() => onCardSelect(hack)}
              >
                {hack.content}
              </BioluminescentCard>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
