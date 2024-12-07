import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Check, User, ThumbsUp, Calendar} from 'lucide-react';
import { services, vintagePhotos, barberTeam, membershipTiers, reviewsData } from '../data/home';

const LandingPage = () => {

  const [userReview, setUserReview] = useState({ rating: 0, text: '', name: '', email: '' });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviews, setReviews] = useState(reviewsData);

  const handleSubmitReview = () => {
    if (userReview.rating && userReview.text && userReview.name) {
      const newReview = {
        id: reviews.length + 1,
        author: userReview.name,
        rating: userReview.rating,
        text: userReview.text,
        verified: true,
        date: new Date().toLocaleDateString(),
        helpful: 0
      };
      
      setReviews([newReview, ...reviews]);
      setUserReview({ rating: 0, text: '', name: '', email: '' });
    }
  };


  return (
    <div className="font-serif">
      <section className="relative pt-24 bg-[url('https://cdn.prod.website-files.com/644a9d9ce529ef8812f82a28/647fb85c69e95444243ef9bd_Henley%27s%20Gentlemen%27s%20Grooming%20-%20Barbershop%20and%20Mens%20Grooming.webp')] bg-cover bg-center min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white bg-opacity-80 p-12 rounded-lg max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Classic Cuts & Modern Style</h1>
            <p className="text-xl text-gray-600 mb-8">Crafting gentleman's grooming since 1920</p>
            <a href="/booking" className="bg-yellow-600 text-white px-8 py-3 rounded hover:bg-yellow-700 transition-colors">
              Book Appointment
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center font-bold mb-16">Barbers Through the Ages</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {vintagePhotos.map((photo) => (
              <div key={photo.year} className="text-center">
                <img 
                  src={photo.image} 
                  alt={photo.year} 
                  className="rounded-lg mb-4 w-96 h-64 object-cover"
                />
                <h3 className="text-2xl font-bold text-yellow-600">{photo.year}</h3>
                <p className="text-gray-500">{photo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[url('./bg.jpg')] bg-cover bg-fixed">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center font-bold text-white mb-16">Services Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(services).map(([category, items]) => (
              <div key={category} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-yellow-600 pb-2">
                  {category}
                </h3>
                <div className="space-y-6">
                  {items.map((service) => (
                    <div key={service.name} className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                      <span className="text-xl font-bold text-yellow-600">${service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 font-serif">
              Gentlemen's Club Memberships
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Join our distinguished membership program and elevate your grooming experience
              with exclusive benefits and privileged access.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {membershipTiers.map((tier) => (
              <motion.div
                key={tier.name}
                whileHover={{ y: -10 }}
                className={`relative flex flex-col ${
                  tier.featured 
                    ? 'bg-white border-4 border-yellow-600' 
                    : 'bg-gray-100'
                } rounded-lg overflow-hidden h-full`} 
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-yellow-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-grow">

                  <div className="text-center mb-8">
                    <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                      tier.featured ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {tier.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                    <p className="text-2xl font-bold text-yellow-600 mb-2">{tier.price}</p>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>

  
                  <div className="border-t border-gray-200 my-6"></div>

      
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="mr-3 text-yellow-600">
                          {benefit.icon}
                        </div>
                        <span>{benefit.text}</span>
                      </li>
                    ))}
                  </ul>


                  <div className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-lg font-bold transition-colors ${
                        tier.featured
                          ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                          : 'bg-gray-800 text-white hover:bg-gray-900'
                      }`}
                    >
                      Become a Member
                    </motion.button>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-yellow-600"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-yellow-600"></div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-400 mt-12 max-w-2xl mx-auto">
            All memberships include access to our premium lounge area and complimentary 
            beverages during your visit. Cancel or modify your membership at any time.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-800 bg-[url('./bg.jpg')] bg-cover bg-fixed" >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center font-bold text-white mb-16">Master Craftsmen</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {barberTeam.map((barber) => (
              <motion.div
                key={barber.name}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={barber.image} alt={barber.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">{barber.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-2">{barber.title}</p>
                  <p className="text-gray-600 mb-4">{barber.experience} experience</p>
                  <div className="space-y-2">
                    {barber.specialties.map((specialty) => (
                      <p key={specialty} className="text-sm text-gray-600 flex items-center">
                        <Check className="w-4 h-4 mr-2 text-yellow-600" />
                        {specialty}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-fixed">
        <div className="container mx-auto px-6">
      
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our distinguished clients have to say about their experience at our classic barbershop.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-16 bg-white rounded-lg shadow-xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-yellow-600"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-yellow-600"></div>
            
            <div className="relative">
              <Quote className="w-12 h-12 text-yellow-600 opacity-10 absolute -top-2 -left-2" />
              <h3 className="text-2xl font-bold mb-6 text-center">Share Your Experience</h3>
              
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <p className="text-sm text-gray-600 mb-2">How was your experience?</p>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Star
                          className={`w-8 h-8 cursor-pointer transition-colors duration-200 ${
                            star <= (hoveredRating || userReview.rating) 
                              ? 'text-yellow-500 fill-current' 
                              : 'text-gray-300'
                          }`}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          onClick={() => setUserReview({ ...userReview, rating: star })}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      value={userReview.name}
                      onChange={(e) => setUserReview({ ...userReview, name: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={userReview.email}
                      onChange={(e) => setUserReview({ ...userReview, email: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                  <textarea
                    value={userReview.text}
                    onChange={(e) => setUserReview({ ...userReview, text: e.target.value })}
                    placeholder="Share your thoughts about our service..."
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    rows={4}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmitReview}
                  className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors"
                  disabled={!userReview.rating || !userReview.text || !userReview.name}
                >
                  Submit Review
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg shadow-lg p-6 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-yellow-600 opacity-10" />
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-800">{review.author}</h4>
                    <div className="flex items-center">
                      <div className="flex space-x-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`w-4 h-4 ${
                              index < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      {review.verified && (
                        <span className="ml-2 text-xs text-green-600 flex items-center">
                          <Check className="w-3 h-3 mr-1" /> Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mt-6 pt-4 border-t">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {review.date}
                  </div>
                  <button 
                    className="flex items-center text-gray-500 hover:text-yellow-600 transition-colors"
                    onClick={() => {
                      const updatedReviews = reviews.map(r =>
                        r.id === review.id ? { ...r, helpful: (r.helpful || 0) + 1 } : r
                      );
                      setReviews(updatedReviews);
                    }}
                  >
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Helpful ({review.helpful || 0})
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
