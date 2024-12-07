import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from '../data/gallery';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="">
      {/* Gallery Header */}
      <section className="bg-gray-900 text-white py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-gray-400">A showcase of our finest work</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={`Gallery ${image.id}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 hover:opacity-100">
                      View Larger
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-center text-gray-600">{image.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl mx-auto">
              <img
                src={selectedImage.src}
                alt={`Gallery ${selectedImage.id}`}
                className="rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;