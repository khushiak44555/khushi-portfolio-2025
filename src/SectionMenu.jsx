import React, { useState, useEffect } from 'react';

const sections = [
  { id: "background", label: "Inspiration" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "accolades", label: "Accolades" },
];

const SectionMenu = () => {
  const [hideMenu, setHideMenu] = useState(true);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    if (!window.locomotive) return;

    const scroll = window.locomotive;

    const handleScroll = (obj) => {
      let current = sections[0].id;
      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const offsetTop = el.offsetTop;
        if (obj.scroll.y >= offsetTop - window.innerHeight * 0.4) {
          current = section.id;
        }
      }
      setActiveSection(current);

      const backgroundEl = document.getElementById('background');
      const accoladesEl = document.getElementById('accolades');
      if (!backgroundEl || !accoladesEl) return;

      const bOffset = backgroundEl.offsetTop;
      const aOffset = accoladesEl.offsetTop;

      const scrollY = obj.scroll.y;

      if (scrollY >= bOffset - window.innerHeight * 0.4 && scrollY < aOffset - window.innerHeight * 0.4) {
        setHideMenu(false);
      } else {
        setHideMenu(true);
      }
    };

    scroll.on("scroll", handleScroll);
    handleScroll({ scroll: { y: scroll.scroll.instance.scroll.y } }); // trigger initially

    return () => {
      scroll.off("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (id) => {
    if (window.locomotive) {
      window.locomotive.scrollTo(`#${id}`, {
        offset: 0,
        duration: 800,
        callback: () => window.locomotive.update(),
      });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed left-1/2 bottom-8 transform -translate-x-1/2 z-[99] transition-opacity duration-500
        ${hideMenu ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
      style={{ width: 'max-content' }}
    >
      <div className="flex border border-white p-2 rounded-full bg-black text-white overflow-hidden shadow-lg">
        {sections.slice(0, -1).map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleScrollTo(id)}
            className={`cursor-pointer px-6 py-2 text-base rounded-3xl transition-colors
              ${activeSection === id ? 'bg-white text-black font-bold' : 'hover:bg-white hover:text-black text-gr'}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionMenu;
