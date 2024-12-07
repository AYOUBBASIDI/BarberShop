// ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <img
          src={service.image || "/api/placeholder/400/300"}
          alt={service.name}
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-yellow-600">${service.price}</span>
        <Link
          to="/booking"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  );
};