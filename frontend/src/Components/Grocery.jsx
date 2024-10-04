import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Grocery = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-10">
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-5xl font-bold mb-4">My Grocery</h1>
        <p className="text-xl mb-6">
          We are excited to announce that our Grocery section is in the works!
        </p>
        <p className="text-lg mb-4">
          Stay tuned for a wide range of grocery items available at your fingertips.
        </p>
        <p className="text-lg font-semibold">
          Your convenience is our priority, and we can’t wait to serve you soon!
        </p>
        <div className="mt-8">
          <p className="text-lg">For updates, follow us on:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <FaFacebookSquare className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition-colors"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
