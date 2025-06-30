import React, { useState } from 'react';
import ReachOutDrawer from './ReachOutDrawer';

const ContactSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState(null);

  const cards = [
    {
      label: 'COLLABORATION',
      heading: 'I want to team up and innovate!',
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      label: 'HIRING',
      heading: 'I have a role with your name on it!',
      gradient: 'from-yellow-400 to-red-500',
    },
    {
      label: 'ANYTHING ELSE',
      heading: 'Just saying hi.',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  const handleOpen = (index) => {
    setSelectedReason(index);
    setDrawerOpen(true);
  };

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h2 className="text-5xl font-bold mb-10">Let’s Connect</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl bg-gradient-to-br ${card.gradient} min-h-[240px] flex flex-col justify-between transition-transform hover:-translate-y-1`}
          >
            <div>
              <p className="text-sm opacity-80">{card.label}</p>
              <h3 className="text-xl font-semibold mt-2">{card.heading}</h3>
            </div>
            <button
              onClick={() => handleOpen(index)}
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center self-end hover:bg-black hover:text-white border border-white transition"
            >
              →
            </button>
          </div>
        ))}
      </div>

      <ReachOutDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        selectedIndex={selectedReason}
      />
    </div>
  );
};

export default ContactSection;
