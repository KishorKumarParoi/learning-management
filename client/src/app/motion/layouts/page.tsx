'use client';

import {
  IconAward,
  IconBallBasketball,
  IconCube3dSphere,
  IconRocket,
} from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback]);
  return ref;
};

const LayoutsPage = () => {
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const handleCardClick = (card: Card) => {
    setCurrentCard(card);
  };
  const ref = useOutsideClick(() => {
    setCurrentCard(null);
  });

  return (
    <div className="relative min-h-screen bg-gray-100 py-10">
      {currentCard && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(0px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-10 h-full w-full bg-black/20 backdrop-blur-sm"
          //   onClick={() => setCurrentCard(null)}
        ></motion.div>
      )}
      {currentCard && (
        <motion.div
          layoutId={`card-${currentCard.title}-${currentCard.description}`}
          ref={ref}
          className="fixed inset-0 z-20 m-auto h-[500px] w-80 overflow-hidden rounded-2xl border border-neutral-200 bg-white-100 p-4 shadow-lg"
        >
          <Image
            src={currentCard.src}
            alt={currentCard.title}
            width={2000}
            height={2000}
            priority
            placeholder="blur"
            blurDataURL={currentCard.src}
            quality={100}
            className="aspect-square h-60 rounded-2xl"
          />
          <div className="flex flex-col items-center justify-between">
            <div className="flex w-full flex-col items-start justify-between gap-2">
              <div className="mt-10 flex flex-row items-start gap-2">
                <h2 className="text-md font-bold tracking-tight text-black">
                  {currentCard.title}
                </h2>
                <Link
                  href={currentCard.cta}
                  className="rounded-full bg-green-500 px-8 py-1 text-xs font-bold text-white-100"
                >
                  {currentCard.cta}
                </Link>
              </div>
              <motion.div
                initial={{
                  filter: 'blur(10px)',
                  opacity: 0,
                }}
                animate={{
                  filter: 'blur(0px)',
                  opacity: 1,
                }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="h-60 overflow-auto pb-20 text-[10px] text-neutral-900 [mask-image:linear-gradient(to_top,transparent_20%,black_80%)]"
              >
                {currentCard.description}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
      <div className="mx-auto flex max-w-lg flex-col gap-10">
        {cards.map((card, index) => (
          <button
            key={card.title + index}
            onClick={() => handleCardClick(card)}
            type="button"
            className="flex cursor-pointer justify-between rounded-lg border bg-white-100 p-4 text-black shadow-lg"
          >
            <motion.div
              layoutId={`card-${card.title}-${card.description}`}
              className="flex items-center gap-4"
            >
              <Image
                src={card.src}
                alt={card.title}
                width="200"
                height="200"
                className="aspect-square h-20 rounded-2xl"
              />
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-xs font-bold tracking-tight text-black">
                  {card.title}
                </h2>
                <p className="text-[10px] text-neutral-900">
                  {card.description.split(' ').slice(0, 10).join(' ')}
                </p>
              </div>
            </motion.div>
            <div className="ml-20 mt-6 h-10 rounded-lg bg-green-500 px-6 py-1 text-xs font-bold text-white-100">
              {card.cta}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

interface Card {
  icon: React.ReactNode;
  title: string;
  src: string;
  description: string;
  cta: string;
  content: React.ReactNode;
}

const cards: Card[] = [
  {
    icon: <IconRocket className="h-8 w-8 text-blue-200" />,
    title: 'Generate animations with Motion',
    src: '/images/hero1.jpg',
    cta: 'Learn More',
    description:
      'Use the power of react-spring to create ultra fast animations with ease. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibusse consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibusse the power of react-spring to create ultra fast animations with ease. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.the power of react-spring to create ultra fast animations with ease. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    content: (
      <div>
        <Image
          src="/images/hero1.jpg"
          alt="car"
          width={2000}
          height={2000}
          className="aspect-square rounded-lg shadow-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconCube3dSphere className="h-8 w-8 text-blue-200" />,
    title: 'Be boss in GSAP',
    src: '/images/hero2.jpg',
    cta: 'Get Started',
    description:
      'Use the power of react-spring to create ultra fast animations with ease. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    content: (
      <div>
        <Image
          src="/images/hero2.jpg"
          alt="car"
          width={2000}
          height={2000}
          className="rounded-lg shadow-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconBallBasketball className="h-8 w-8 text-blue-200" />,
    title: 'Lets learn about React three.js',
    src: '/images/hero3.jpg',
    cta: 'Join Now',
    description:
      'Use the power of react-spring to create ultra fast animations with ease. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. kishor kumar lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    content: (
      <div>
        <Image
          src="/images/hero3.jpg"
          alt="car"
          width={2000}
          height={2000}
          className="rounded-lg shadow-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconAward className="h-8 w-8 text-blue-200" />,
    title: 'Be Boss in React Three Fibre',
    src: '/images/placeholder.png',
    cta: 'Discover More',
    description:
      'Use the power of react-spring to create ultra fast animations with ease. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.lorem200 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    content: (
      <div>
        <Image
          src="/images/placeholder.png"
          alt="car"
          width={2000}
          height={2000}
          className="rounded-lg shadow-lg"
        />
      </div>
    ),
  },
];

export default LayoutsPage;
