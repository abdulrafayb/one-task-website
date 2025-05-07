import EcosystemIcon from '../../public/assets/icons/ecosystem.svg';

import { Feature } from './Feature';

const features = [
  {
    title: 'Integration Ecosystem',
    description:
      'Enhance your productivity by connecting with your tools, keeping your essentials in one place.',
  },
  {
    title: 'Goal Setting and Tracking',
    description:
      'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.',
  },
  {
    title: 'Secure Data Encryption',
    description:
      'With end-to-end encryption, your data is securely stored and protected from unauthorized access.',
  },
];

export const Features = () => {
  return (
    <div className='bg-black text-white py-[72px] md:py-24'>
      <div className='container'>
        <h2 className='text-5xl md:text-6xl font-bold tracking-tighter text-center'>
          Everything You Need
        </h2>
        <div className='max-w-xl mx-auto'>
          <p className='text-white/70 text-xl text-center mt-5'>
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 mt-16'>
          {features.map(({ title, description }, index) => (
            <Feature key={index} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};
