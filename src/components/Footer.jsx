import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Booking', path: '/booking' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    'Traditional Haircut',
    'Royal Shave',
    'Beard Sculpting',
    'Hair Coloring',
    'Facial Treatment'
  ];

  const socialLinks = [
    { icon: <Instagram />, url: '#', label: 'Instagram' },
    { icon: <Facebook />, url: '#', label: 'Facebook' },
    { icon: <Twitter />, url: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-600">Classic Barber</h3>
            <p className="text-gray-400 mb-6">
              Established in 1920, providing premium grooming services 
              with a blend of traditional expertise and modern style.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="text-yellow-600 hover:text-yellow-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                123 Barber Street, Kenitra
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2 text-yellow-600" />
                +212 123 456 789
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2 text-yellow-600" />
                info@classicbarber.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Classic Barber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;