// ReviewCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star, User, Check } from 'lucide-react';

export const ReviewCard = ({ review }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-gray-500" />
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-gray-800">{review.author}</h4>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{review.text}</p>
      {review.verified && (
        <div className="flex items-center text-green-600 text-sm">
          <Check className="w-4 h-4 mr-1" />
          Verified Customer
        </div>
      )}
    </motion.div>
  );
};