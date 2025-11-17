import React from 'react';
import { AppStoreIcon, GooglePlayIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
                 <h3 className="text-2xl font-bold">
                    <span className="text-primary">Whiff</span><span className="text-red-500">Count</span>
                 </h3>
                 <p className="text-gray-400 mt-2">Your AI companion to quit vaping for good.</p>
            </div>
            <div>
                <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition">How It Works</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Reviews</a></li>
                </ul>
            </div>
            <div>
                 <h4 className="font-semibold text-lg mb-4">Download The App</h4>
                 <div className="mt-4 flex justify-center md:justify-start space-x-4">
                    <a href="#" className="transition-transform hover:scale-105">
                        <AppStoreIcon className="h-12" />
                    </a>
                    <a href="#" className="transition-transform hover:scale-105">
                        <GooglePlayIcon className="h-12" />
                    </a>
                </div>
            </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} WhiffCount. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
