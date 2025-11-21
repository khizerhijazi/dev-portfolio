import React, { createContext, useContext, useState, ReactNode,useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

interface ThemeContextType {
  isLight: boolean;
  setIsLight: (value: boolean | ((prev: boolean) => boolean)) => void;
  activeSection: string;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void; 
  setActiveSection: (sectionId: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // uncomment this and comment the next if localstorage functionality is needed

  // const [isLight, setIsLight] = useState<boolean>(() => {
  //   const savedTheme = localStorage.getItem('isLight');
  //   return savedTheme ? JSON.parse(savedTheme) : true;
  // });

  // useEffect(() => {
  //   document.documentElement.classList.toggle('dark', !isLight);
  //   localStorage.setItem('isLight', JSON.stringify(isLight));
  // }, [isLight]);

  const [isLight, setIsLight] = useState<boolean>(false); // Default to dark mode

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', !isLight);
    setIsLoading(false)
  }, [isLight]);


  const [activeSection, setActiveSection] = useState<string>('');

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.gsap-menu-scroller') as HTMLElement[];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection((section as HTMLElement).id),
        onEnterBack: () => setActiveSection((section as HTMLElement).id),
      }
      );
    });
  }, { scope: container });

  return (
    <ThemeContext.Provider value={{ isLight, setIsLight, activeSection, setActiveSection, isLoading, setIsLoading }}>
      <div ref={container}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
