import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "This platform helped me import products easily. Very smooth experience!",
    image: "https://i.ibb.co.com/TML7fSr6/photo-1522075782449-e45a34f1ddfb.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Amazing UI and real-time updates. Highly recommended!",
    image: "https://i.ibb.co.com/93bXFqSn/medium-shot-man-with-paperwork.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    feedback: "Easy to use, very responsive, and secure platform.",
    image: "https://i.ibb.co.com/84fTC3xX/unnamed.webp",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const Testimonials = () => {
  return (
    <section className="bg-base-200 py-12 mb-7 rounded-lg">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="
  text-3xl 
  md:text-4xl 
  lg:text-5xl 
  font-bold 
  mb-8 
  text-center 
  bg-gradient-to-r 
  from-purple-500 
  via-pink-500 
  to-red-500 
  bg-clip-text 
  text-transparent
"
        >
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.id}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <p className="mb-4 text-gray-700">
                <span className="bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 bg-clip-text text-transparent">
                  "{testi.feedback}"
                </span>
              </p>
              <div className="flex items-center">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="font-semibold text-purple-600">{testi.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
