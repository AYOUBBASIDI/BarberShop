import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    service: '',
    barber: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const services = [
    "Traditional Haircut",
    "Royal Shave",
    "Beard Sculpting",
    "The Gentleman's Package",
    "Executive Treatment"
  ];

  const barbers = [
    "Master James",
    "Antonio",
    "Theodore",
    "William"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedBookings = [...existingBookings, bookingData];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    setShowModal(true);
  };

  // Success Modal Component
  const SuccessModal = () => (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600 mb-6">
                Your appointment has been successfully scheduled. You can view your booking details in the admin panel.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/admin')}
                  className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center"
                >
                  View in Admin Panel
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setBookingData({
                      service: '',
                      barber: '',
                      date: '',
                      time: '',
                      name: '',
                      email: '',
                      phone: ''
                    });
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="">
      {/* Booking Header */}
      <section className="bg-gray-900 text-white py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Book Your Visit</h1>
          <p className="text-gray-400">Schedule your next grooming experience</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl"
            onSubmit={handleSubmit}
          >
            {/* Service Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Service
              </label>
              <select
                value={bookingData.service}
                onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
                required
              >
                <option value="">Choose a service...</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Barber Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Choose Barber
              </label>
              <select
                value={bookingData.barber}
                onChange={(e) => setBookingData({ ...bookingData, barber: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
                required
              >
                <option value="">Select a barber...</option>
                {barbers.map((barber) => (
                  <option key={barber} value={barber}>
                    {barber}
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time Selection */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Select Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    className="w-full p-3 pl-10 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Select Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                  <select
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    className="w-full p-3 pl-10 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
                    required
                  >
                    <option value="">Choose time...</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  className="w-full p-3 pl-10 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  className="w-full p-3 pl-10 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  className="w-full p-3 pl-10 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-8 bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700 transition-colors"
            >
              Confirm Booking
            </motion.button>
          </motion.form>
        </div>
      </section>

      <SuccessModal />
    </div>
  );
};

export default Booking;
