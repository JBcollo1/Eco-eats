import { useEffect, useState } from 'react';

const useScrollRotation = (logoSelector = '.footer-logo', triggerPosition = 300) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector(logoSelector);
      const scrollPosition = window.scrollY;

      if (logo) {
        if (scrollPosition >= triggerPosition) {
          // Calculate the number of full rotations
          const newRotation = Math.floor((scrollPosition - triggerPosition) / 360) * 360;
          setRotationAngle(newRotation);
        } else {
          setRotationAngle(0); // Reset to 0 degrees if above trigger
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [logoSelector, triggerPosition]);

  useEffect(() => {
    const logo = document.querySelector(logoSelector);
    if (logo) {
      logo.style.transform = `rotate(${rotationAngle}deg)`;
    }
  }, [rotationAngle, logoSelector]);

  return;
};

export default useScrollRotation;
