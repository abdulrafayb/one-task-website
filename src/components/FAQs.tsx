'use client';

import PlusIcon from '../../public/assets/icons/plus.svg';
import MinusIcon from '../../public/assets/icons/minus.svg';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.',
  },
  {
    question: 'How does the pricing work for teams?',
    answer:
      'Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.',
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className='border-b border-white/30 py-7'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex items-center'>
        <span className='flex-1 text-lg font-bold'>{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // className={clsx("mt-4", { hidden: !isOpen, "": isOpen === true })}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className='bg-black bg-gradient-to-b from-[#5D2CAB] to-black text-white py-[72px] md:py-24'>
      <div className='container'>
        <h2 className='text-5xl md:text-6xl font-bold tracking-tighter md:max-w-2xl mx-auto text-center'>
          Frequently asked questions
        </h2>
        <div className='max-w-2xl mx-auto mt-12'>
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
