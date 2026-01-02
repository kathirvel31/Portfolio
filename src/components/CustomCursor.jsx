import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
   
    const xSetCursor = gsap.quickSetter(cursorRef.current, "x", "px");
    const ySetCursor = gsap.quickSetter(cursorRef.current, "y", "px");
    
    const xSetFollower = gsap.quickSetter(followerRef.current, "x", "px");
    const ySetFollower = gsap.quickSetter(followerRef.current, "y", "px");

    const moveCursor = (e) => {
      
      xSetCursor(e.clientX);
      ySetCursor(e.clientY);

      
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true 
      });
    };

    const handleMouseDown = () => gsap.to(followerRef.current, { scale: 0.8, duration: 0.2 });
    const handleMouseUp = () => gsap.to(followerRef.current, { scale: 1, duration: 0.2 });

    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

  
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="hidden md:block"> {/* Hide on mobile as custom cursors break touch UI */}
      {/* Small Dot */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-red-500 rounded-full pointer-events-none z-[9999] will-change-transform"
        style={{ marginTop: '-0.75px', marginLeft: '-0.75px' }} 
      />
      {/* Larger Follower */}
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-red-500/50 rounded-full pointer-events-none z-[9998] will-change-transform flex items-center justify-center transition-opacity duration-300"
        style={{ marginTop: '-16px', marginLeft: '-16px' }} 
      />
    </div>
  );
};

export default CustomCursor;