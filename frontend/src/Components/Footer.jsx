import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul>
              <li><Link to="/about" className="block text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="block text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="block text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/terms" className="block text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="block text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Help</h5>
            <ul>
              <li><Link to="/faq" className="block text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="block text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link to="/support" className="block text-gray-400 hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <ul>
              <li><Link to="https://facebook.com" className="block text-gray-400 hover:text-white">Facebook</Link></li>
              <li><Link to="https://twitter.com" className="block text-gray-400 hover:text-white">Twitter</Link></li>
              <li><Link to="https://instagram.com" className="block text-gray-400 hover:text-white">Instagram</Link></li>
              <li><Link to="https://linkedin.com" className="block text-gray-400 hover:text-white">LinkedIn</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Download Our App</h5>
            <ul>
              <li><Link to="/appstore" className="block text-gray-400 hover:text-white">App Store</Link></li>
              <li><Link to="/playstore" className="block text-gray-400 hover:text-white">Google Play</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
