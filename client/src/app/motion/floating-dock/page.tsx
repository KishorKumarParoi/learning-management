'use client';
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react';
import { throttle } from 'lodash';
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const FloatingDock = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white-100">
      <FloatingDockCore />
    </div>
  );
};

interface Link {
  title: string;
  icon: React.ReactNode | any;
  href: string;
}

const links: Link[] = [
  {
    title: 'Home',
    icon: <IconHome className="h-full w-full text-neutral-500" />,
    href: '/',
  },
  {
    title: 'Products',
    icon: <IconTerminal2 className="h-full w-full text-neutral-500" />,
    href: '/products',
  },
  {
    title: 'Components',
    icon: <IconNewSection className="h-full w-full text-neutral-500" />,
    href: '/components',
  },
  {
    title: 'KKP UI',
    icon: (
      <Image
        src="/images/hero2.jpg"
        className="aspect-square rounded-xl"
        alt="KKP UI"
        width={30}
        height={30}
      />
    ),
    href: '#',
  },
  {
    title: 'Changelog',
    icon: <IconExchange className="h-full w-full text-neutral-500" />,
    href: '/changelog',
  },
  {
    title: 'Twitter',
    icon: <IconBrandTwitter className="h-full w-full text-neutral-500" />,
    href: 'https://twitter.com/paroi_kishor',
  },
  {
    title: 'Github',
    icon: <IconBrandGithub className="h-full w-full text-neutral-500" />,
    href: 'https://github.com/kishorkumarparoi',
  },
];

const FloatingDockCore = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseEnter={(e: any) => mouseX.set(e.pageX)}
      onMouseMove={throttle((e: any) => mouseX.set(e.pageX), 16)} // Throttle to 60fps
      onMouseLeave={(e: any) => mouseX.set(Infinity)}
      className="fixed inset-x-0 bottom-16 mx-auto flex h-20 w-fit items-center justify-center gap-4 rounded-2xl bg-neutral-100 px-4"
    >
      {links.map((el, idx) => (
        <IconContainer mouseX={mouseX} key={el.title + idx} el={el} />
      ))}
    </motion.div>
  );
};

export const IconContainer = ({
  el,
  mouseX,
}: {
  el: Link;
  mouseX: MotionValue<number>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<{ x: number; width: number } | null>(null);

  const distance = useTransform(mouseX, (val) => {
    if (!boundsRef.current && ref.current) {
      boundsRef.current = ref.current.getBoundingClientRect();
    }
    const bounds = boundsRef.current ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-200, 0, 200], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-200, 0, 200], [40, 80, 40]);

  const widthIconTransform = useTransform(
    distance,
    [-200, 0, 200],
    [20, 40, 20]
  );
  const heightIconTransform = useTransform(
    distance,
    [-200, 0, 200],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 250,
    damping: 20,
  });

  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 300,
    damping: 20,
  });

  const widthIcon = useSpring(widthIconTransform, {
    stiffness: 300,
    mass: 0.4,
    damping: 20,
  });

  const heightIcon = useSpring(heightIconTransform, {
    stiffness: 300,
    mass: 0.4,
    damping: 20,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={el.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={ref}
        style={{
          width,
          height,
        }}
        className="relative flex w-full items-center justify-center rounded-full bg-neutral-200"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                x: '-50%',
              }}
              animate={{
                opacity: 1,
                y: 0,
                x: '-50%',
              }}
              exit={{
                opacity: 0,
                y: 2,
                x: '-50%',
              }}
              transition={{
                duration: 0.3,
                delay: 0.1,
              }}
              className="absolute inset-x-0 -top-10 left-1/2 w-full -translate-x-1/2 whitespace-pre rounded-lg border border-red-100 bg-neutral-300 px-2 py-0.5 text-center text-xs text-neutral-900"
            >
              {el.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{
            width: widthIcon,
            height: heightIcon,
          }}
        >
          {el.icon}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default FloatingDock;
