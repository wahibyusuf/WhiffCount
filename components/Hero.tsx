import React from 'react';
import PhoneMockup from './PhoneMockup';
import { AppStoreIcon, GooglePlayIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                        The Premier Quit Vaping App
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-xl mx-auto md:mx-0">
                        WhiffCount is a free application devoted to help you quit vaping. The app keeps track of your whiffs and nicotine intake to make quitting simpler.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start space-x-4">
                        <a href="#" className="transition-transform hover:scale-105">
                            <AppStoreIcon className="h-12" />
                        </a>
                        <a href="#" className="transition-transform hover:scale-105">
                           <GooglePlayIcon className="h-12" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <PhoneMockup />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;