// SmoothScrollProvider.jsx
import React, { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { useLocation } from 'react-router-dom'

const SmoothScrollProvider = ({ children }) => {
  const scrollRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.05,
    });
        window.locomotive = scroll; // <-- expose globally

    scroll.update();

    // Update scroll after all images/fonts load
    const handleLoad = () => scroll.update();
    window.addEventListener('load', handleLoad);

    // Update on resize
    const handleResize = () => scroll.update();
    window.addEventListener('resize', handleResize);

    return () => {
      scroll.destroy();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
    };
  }, [location.pathname]);

  return (
    <div
      id="scroll-container"
      data-scroll-container
      ref={scrollRef}
      className="w-full font-gr min-h-screen bg-[#0A0A0A] text-white"
      style={{ minHeight: '100vh', height: 'auto' }}
    >
      {children}
    </div>
  )
}

export default SmoothScrollProvider
