'use client';

import {
  IconAward,
  IconBallBasketball,
  IconCube3dSphere,
  IconRocket,
} from '@tabler/icons-react';
import {
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const Hooks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgrounds = ['#00ADB5', '#FFC7C7', '#60B5FF', '#B1B2FF'];
  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });

  return (
    <motion.div
      ref={containerRef}
      animate={{
        background,
      }}
      transition={{
        duration: 1,
        ease: easeInOut,
      }}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
        {features.map((feature, index) => (
          <Card key={index} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
};

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
}

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [400, -400]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blurContent = useTransform(scrollYProgress, [0.7, 1], ['0px', '10px']);
  const scaleContent = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 items-center gap-20 py-40"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blurContent})`,
        }}
        className="flex flex-col gap-10 py-10"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white-100">{feature.title}</h2>
        <p className="text-lg text-black"> {feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
          scale: scaleContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

const features: Feature[] = [
  {
    icon: <IconRocket className="h-8 w-8 text-blue-200" />,
    title: 'Generate animations with Motion',
    description:
      'Use the power of react-spring to create ultra fast animations with ease.',
    content: (
      <div>
        <Image
          src="/images/hero1.jpg"
          alt="car"
          width={2000}
          height={2000}
          className="rounded-lg shadow-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconCube3dSphere className="h-8 w-8 text-blue-200" />,
    title: 'Be boss in GSAP',
    description:
      'Use the power of react-spring to create ultra fast animations with ease.',
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
    description:
      'Use the power of react-spring to create ultra fast animations with ease.',
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
    description:
      'Use the power of react-spring to create ultra fast animations with ease.',
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

export default Hooks;
