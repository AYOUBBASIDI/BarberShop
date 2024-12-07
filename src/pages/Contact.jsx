import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "123 Barber Street, Kenitra, Morocco"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+212 123 456 789"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@classicbarber.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      content: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM"
    }
  ];

  return (
    <div className="">
      {/* Contact Header */}
      <section className="bg-gray-900 text-white py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-yellow-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-xl"
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Us a Message</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600 h-32"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.084637452292!2d-6.570524924428785!3d34.259208680452215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9b7e4d542fc2c7%3A0x7e3f6221dfdf9f53!2sKenitra%2C%20Morocco!5e0!3m2!1sen!2sus!4v1697319182000!5m2!1sen!2sus"
          width="100%"
          title='map'
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex="0"
          className="rounded"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;