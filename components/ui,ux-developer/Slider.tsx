"use client";

import { useEffect, useRef } from "react";

const cards = [
  "Interface Architecture",
  "Dynamic Prototype",
  "Editing",
  "Design Review",
  "UI Guidelines",
  "Graphic",
  "Design References",
  "Analysis",
];

const gradients = [
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-pink-500",
  "from-orange-400 to-red-500",
  "from-green-400 to-emerald-500",
  "from-cyan-400 to-blue-500",
  "from-yellow-400 to-orange-500",
  "from-fuchsia-500 to-purple-500",
  "from-sky-400 to-indigo-500",
];

export default function Slider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    let animationFrame;

    const scroll = () => {
      if (!slider) return;

      scrollAmount += 0.5;

      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }

      slider.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="bg-[#f5f5f7] py-16 md:py-20 overflow-hidden">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center px-4 md:px-6 mb-10 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
          UX Strategy & Design Workflow
        </h2>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          A streamlined approach to crafting intuitive and high-performing digital experiences.
        </p>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 md:gap-6 overflow-x-hidden whitespace-nowrap px-4 md:px-6"
      >
        {[...cards, ...cards].map((item, i) => (
          <div
            key={i}
            className={`min-w-[220px] md:min-w-[260px] h-[140px] md:h-[160px] 
            rounded-3xl p-[1px] bg-gradient-to-br ${gradients[i % gradients.length]} 
            transition-transform duration-300 hover:-translate-y-2`}
          >
            {/* inner card */}
            <div className="h-full w-full rounded-3xl bg-white/90 backdrop-blur-xl p-5 flex flex-col justify-center">
              
              <h3 className="text-sm md:text-lg font-semibold text-gray-900">
                {item}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm mt-1">
                Structured UX step
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}