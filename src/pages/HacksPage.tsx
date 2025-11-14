// src/pages/HacksPage.tsx

import { useState } from 'react';
import { Card, CardProps } from '@/components/Card';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categoryStyles } from '@/config/categoryStyles'; // Make sure this path is correct

// MOCK DATA (Replace with your actual data)
const mockHacks: CardProps[] = Array.from({ length: 12 }, (_, i) => ({
  id: `${i + 1}`,
  number: `${i + 1}`,
  title: 'The "Yes, and..." Technique for Brainstorming',
  category: i % 3 === 0 ? 'Strategy' : i % 3 === 1 ? 'Creative' : 'Productivity',
  content: 'Instead of shutting down ideas, build on them. When a team member suggests something, respond with "Yes, and..." to add to their idea. This fosters a collaborative and positive environment, leading to more innovative solutions.',
  example: 'Team Member A: "What if we use a gamified onboarding?"\nYou: "Yes, and we could add a leaderboard to create friendly competition."',
}));

// New Sort Icon SVG
const SortIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 2V13M7.5 2L11 5.5M7.5 2L4 5.5M7.5 13L11 9.5M7.5 13L4 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HacksPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', ...Object.keys(categoryStyles)];

  // Creates 3 columns for the card grid
  const columns = Array.from({ length: 3 }, (_, colIndex) =>
    mockHacks.filter((_, itemIndex) => itemIndex % 3 === colIndex)
  );

  return (
    // Main page container with black border and large radius
    <div className="m-4 p-8 border-[5px] border-black bg-[#111] rounded-[48px]">
      <header className="mb-12 text-center">
        {/* "MASTER GRID" text */}
        <p
          style={{ fontFamily: '"Helvetica Neue Condensed", "Arial Narrow", sans-serif', fontWeight: 100, letterSpacing: '0.1em' }}
          className="text-sm uppercase text-gray-400/50 mb-2"
        >
          MASTER GRID
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Growth Hacks</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
           A curated collection of strategies to scale your project.
        </p>
      </header>

      {/* NEW Filter and Search Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 p-1 bg-black/20 rounded-lg">
          {filters.map(filter => {
            const isActive = activeFilter === filter;
            let buttonStyle = 'text-gray-400 hover:bg-white/10 hover:text-white';

            if (isActive) {
              if (filter === 'All') {
                buttonStyle = 'bg-white text-black';
              } else {
                const activeColor = categoryStyles[filter]?.activeBg || 'bg-gray-500';
                buttonStyle = `${activeColor} text-white`;
              }
            }

            return (
              <Button
                key={filter}
                variant="ghost"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${buttonStyle}`}
              >
                {filter}
              </Button>
            );
          })}
        </div>
        <div className="w-full md:w-auto flex items-center gap-4">
            <Input
              type="search"
              placeholder="Search hacks..."
              className="w-full md:w-[250px] bg-black/20 border-gray-700 rounded-lg focus:ring-2 focus:ring-white/50"
            />
             <Button variant="ghost" className="p-2 h-10 w-10 hover:bg-white/10" title="Sort items">
                <SortIcon />
                <span className="sr-only">Sort items</span>
            </Button>
        </div>
      </div>

      {/* Showing count label */}
      <div className="text-right mb-8">
        <p className="text-gray-400 font-light">
          Showing <span className="font-bold text-white">{mockHacks.length}</span> of {mockHacks.length} hack prompts
        </p>
      </div>

      {/* Multi-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6">
            {column.map(hack => (
              <Card key={hack.id} {...hack} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
