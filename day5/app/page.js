'use client'
import { useState } from 'react';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getDivClass = (index) => {
    if (hoveredIndex === index) {
      return 'h-[600px] w-[400px]';
    } else if (
      (hoveredIndex === 0 && index === 2) ||
      (hoveredIndex === 2 && index === 0) ||
      (hoveredIndex === 1 && index === 3) ||
      (hoveredIndex === 3 && index === 1)
    ) {
      return 'h-[200px] w-[400px]';
    } else {
      return 'h-[400px] w-[400px]';
    }
  };

  const getPositionClass = (index) => {
    if (hoveredIndex === index) {
      if (index === 0) return 'translate-y-0';
      if (index === 2) return '-translate-y-[200px]';
      if (index === 1) return 'translate-y-0';
      if (index === 3) return '-translate-y-[200px]';
    }
    return 'translate-y-0';
  };

  const getPositionClassvalue = (index) => {
    if (hoveredIndex === 0 && index === 2) {
      return 'self-end';
    }
    if (hoveredIndex === 1 && index === 3) {
      return 'self-end  ';
    } else {
      return '';
    }
  };

  return (
    <main className="p-24 min-h-screen min-w-screen  flex justify-center items-center">
      <div className="relative h-[900px] w-[900px] bg-blue-400 grid grid-cols-2 grid-rows-2 p-5 gap-5 pb-10 ">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className={`border ${getDivClass(index)} ${getPositionClass(index)} ${getPositionClassvalue(index)} transition-transform duration-300 rounded-3xl`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}

