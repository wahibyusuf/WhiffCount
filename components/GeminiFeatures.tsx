
import React from 'react';
import { GeminiIcon } from './Icons';

const geminiFeaturesList = [
  {
    title: "AI-Powered Chatbot",
    description: "Feeling an urge? Have questions? Chat with our Gemini-powered coach for instant support and motivation. Uses gemini-2.5-flash for fast, helpful conversations.",
    model: "gemini-2.5-flash"
  },
  {
    title: "In-Depth Quitting Plans",
    description: "Receive a comprehensive, personalized quitting strategy by analyzing your whiff data. Gemini thinks deeply about your habits to create a plan that works for you.",
    model: "gemini-2.5-pro with Thinking Mode"
  },
  {
    title: "Analyze Image Triggers",
    description: "Upload a photo of your surroundings, and Gemini will identify potential vaping triggers, helping you become more aware of your environment.",
    model: "gemini-2.5-flash"
  },
  {
    title: "Edit Away Cravings",
    description: "Take a picture of your vape and use simple text prompts like 'make it look broken' to create a less appealing image, reducing its psychological hold.",
    model: "gemini-2.5-flash-image"
  },
  {
    title: "Generate Motivational Images",
    description: "Visualize your success! Generate inspiring images of a healthier, vape-free life with a simple text prompt, bringing your goals to life.",
    model: "imagen-4.0-generate-001"
  },
  {
    title: "Quick Tips & Facts",
    description: "Get lightning-fast health facts, tips to manage cravings, and motivational quotes whenever you need a quick boost. Powered by our speediest model.",
    model: "gemini-2.5-flash-lite"
  }
];

const GeminiFeatureCard: React.FC<{ title: string, description: string, model: string }> = ({ title, description, model }) => (
    <div className="bg-violet-50 p-6 rounded-lg shadow-md border border-violet-200 hover:shadow-lg hover:border-primary transition-all duration-300">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mt-auto">
          <p className="text-xs text-gray-500 font-mono bg-violet-100 p-2 rounded">
            Powered by: <span className="font-semibold text-primary">{model}</span>
          </p>
        </div>
    </div>
);


const GeminiFeatures: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center text-primary mb-4">
                        <GeminiIcon className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Powered by Gemini Intelligence</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        WhiffCount integrates cutting-edge AI to provide an unparalleled, personalized quitting journey.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {geminiFeaturesList.map((feature, index) => (
                        <GeminiFeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GeminiFeatures;