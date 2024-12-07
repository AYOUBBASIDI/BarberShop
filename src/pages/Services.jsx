import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = {
    "Classic Services": [
      { name: "Traditional Haircut", price: 30, description: "Precision cut with hot towel finish" },
      { name: "Royal Shave", price: 25, description: "Straight razor shave with premium oils" },
      { name: "Beard Sculpting", price: 20, description: "Expert beard shaping and conditioning" }
    ],
    "Premium Services": [
      { name: "The Gentleman's Package", price: 75, description: "Haircut, shave, and scalp treatment" },
      { name: "Executive Treatment", price: 60, description: "Premium cut with shoulder massage" },
      { name: "Father & Son Special", price: 50, description: "Two haircuts, one great price" }
    ],
    "Grooming Extras": [
      { name: "Hair Coloring", price: 45, description: "Professional gray coverage" },
      { name: "Scalp Treatment", price: 35, description: "Deep conditioning therapy" },
      { name: "Face Mask", price: 25, description: "Rejuvenating skin treatment" }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState("Classic Services");

  return (
    <div className="">
      {/* Services Header */}
      <section className="bg-gray-900 text-white py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400">Excellence in every cut, style, and treatment</p>
        </div>
      </section>

      {/* Services Menu */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Category Navigation */}
          <div className="flex justify-center mb-12 space-x-4">
            {Object.keys(services).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded ${
                  selectedCategory === category
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[selectedCategory].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-600">
                    ${service.price}
                  </span>
                  <a href='/booking' className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;