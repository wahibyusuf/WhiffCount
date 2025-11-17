import React from 'react';
import { VapeTrackingIcon, VisualizeUsageIcon, RecognizeTriggersIcon, SetGoalsIcon } from './Icons';

const features = [
  {
    icon: VapeTrackingIcon,
    title: 'Vape Tracking',
    description: 'Every time you take a whiff, tap the button to keep a precise log of your habit.',
  },
  {
    icon: VisualizeUsageIcon,
    title: 'Visualize your Usage',
    description: 'See your progress over time with intuitive charts and graphs that help you understand your patterns.',
  },
  {
    icon: RecognizeTriggersIcon,
    title: 'Recognize Triggers',
    description: 'By tracking your vaping statistics, you can identify patterns and triggers to avoid them in the future.',
  },
  {
    icon: SetGoalsIcon,
    title: 'Set Goals',
    description: 'WhiffCount makes it easy to set and track personal quitting goals to keep you motivated.',
  },
];

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="text-center p-6">
        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-primary mx-auto mb-4">
            <Icon className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
