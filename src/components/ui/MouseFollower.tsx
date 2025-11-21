import React, { useState, useEffect, useRef } from 'react';

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updatePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Add the event listener
    document.addEventListener('mousemove', updatePosition);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  useEffect(() => {
    const follower = followerRef.current;

    if (follower) {
      const { offsetWidth: width, offsetHeight: height } = follower;

      const updateFollowerPosition = () => {
        if (follower) {
          follower.style.transform = `translate(${position.x - width / 2}px, ${position.y - height / 2}px)`;
        }
      };

      const handleAnimationFrame = () => {
        requestAnimationFrame(handleAnimationFrame);
        updateFollowerPosition();
      };

      requestAnimationFrame(handleAnimationFrame);
    }
  }, [position]);

  return (
    <div ref={followerRef} className="fixed w-[900px] h-[900px] rounded-full bg-mouse-effects dark:bg-mouse-effects-dark opacity-50 pointer-events-none duration-50 ease-linear transition-all duration-[50]  will-change-transform z-[11]"/>
  );
};

export default MouseFollower;
