"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Wireframing and Details",
    desc: "We’re a UI/UX design company offering a full suite of wireframe design services and detailed prototyping.",
    img: "/image/design1.jpg",
  },
  {
    title: "Heatmap UX for Streamlined Design",
    desc: "We ideate, strategize, and implement stellar design concepts for web and mobile apps.",
    img: "/image/design2.jpg",
  },
  {
    title: "Unifying Colors and Components",
    desc: "A well-designed color palette with user-centric design and interfaces.",
    img: "/image/design3.jpg",
  },
  {
    title: "Familiar with Code and Development",
    desc: "Crafting recognizable services to enhance user experience and drive conversions.",
    img: "/image/image.png",
  },
];

export default function Cards() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="group bg-gradient-to-br from-white to-gray-400 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden rounded-2xl mb-6">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {card.title}
            </h2>

            <p className="text-gray-900 leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}