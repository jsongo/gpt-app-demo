import React from 'react';
import { ParkCard } from './ParkCard';
import { ParkItem } from '../data';

interface ParkRowProps {
  title: string;
  parks: ParkItem[];
}

export const ParkRow: React.FC<ParkRowProps> = ({ title, parks }) => {
  return (
    <div className="py-6">
      <div className="px-6 mb-4">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h2>
      </div>

      <div
        className="flex gap-4 overflow-x-auto pb-8 px-6 scroll-smooth snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {parks.map((park) => (
          <ParkCard key={park.id} park={park} />
        ))}

        {/* Placeholder to ensure right padding on scroll */}
        <div className="flex-none w-2 h-full" />
      </div>
    </div>
  );
};
