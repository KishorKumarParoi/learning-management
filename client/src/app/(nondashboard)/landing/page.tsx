'use client';
import CourseCardSearch from '@/components/Course-Components/CourseCardSearch';
import { Skeleton } from '@/components/ui/skeleton';
import { useCarousel } from '@/hooks/useCarousel';
import { useGetCoursesQuery } from '@/state/api';
import { useUser } from '@clerk/nextjs';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoadingSkeleton = () => {
  return (
    <div className="w-3/4">
      <div className="mt-12 flex h-[500px] items-center justify-between rounded-lg bg-customgreys-secondarybg">
        <div className="mx-auto basis-1/2 px-16">
          <Skeleton className="mb-4 h-8 w-48" />
          <Skeleton className="mb-2 h-4 w-96" />
          <Skeleton className="mb-8 h-4 w-72" />
          <Skeleton className="h-10 w-40" />
        </div>
        <Skeleton className="h-full basis-1/2 rounded-r-lg" />
      </div>

      <div className="mx-auto mt-10 py-12">
        <Skeleton className="mb-4 h-6 w-48" />
        <Skeleton className="mb-8 h-4 w-full max-w-2xl" />

        <div className="mb-8 flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <Skeleton key={index} className="h-6 w-24 rounded-full" />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton key={index} className="h-[300px] rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const user = useUser();
  const router = useRouter();

  const text =
    'This is the list of the courses you can enroll in. Courses when you need them and want them.';

  // Split the text into words
  const words = text.split(' ');

  // Variants for staggering effect
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const currentImage = useCarousel({ totalImages: 3 });

  const { data: courses, isLoading, isError } = useGetCoursesQuery({})

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (isError) {
    return <div>Error loading courses.</div>;
  }

  console.log("Courses: ", courses);


  const handleCourseClick = (courseId: string) => {
    router.push(`/search?id=${courseId}`);
  }

  console.log("User: ", user);

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="flex h-full w-full flex-col items-center justify-center bg-customgreys-primarybg"
    >
      {/* {Courses Section} */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex h-[500px] items-center justify-between rounded-lg bg-customgreys-secondarybg p-8 shadow-lg"
      >
        <div className="mx-auto basis-1/2 px-16">
          <motion.h1
            className="mb-4 text-4xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 120, // Controls the "bounciness"
              damping: 20, // Controls how quickly the spring settles
            }}
          >
            Courses
          </motion.h1>
          <motion.p
            className="mb-8 text-lg text-gray-400"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="mr-1 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
          <div className="w-fit">
            <Link href="/search">
              <div className="group relative">
                <div className="absolute inset-0 h-full w-full scale-105 rounded-md bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="text-white relative z-10 rounded-md bg-primary-700 px-6 py-3 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-800">
                  Search for Courses
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative h-full basis-1/2 overflow-hidden rounded-r-lg">
          {['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'].map(
            (src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Hero Image ${index + 1}`}
                fill
                priority={index === currentImage}
                sizes="(max-width:768px) 100vw, (max-width:1200px) 5k0vw, 33vw"
                className={`object-cover opacity-0 transition-opacity duration-500 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              />
            )
          )}
        </div>
      </motion.div>

      {/* Featured Courses Section */}
      <div className='p-20'>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.3, once: true }}
          className="mx-auto mt-10 py-12"
        >
          <h2 className="mb-4 text-2xl font-semibold">Featured Courses</h2>
          <p className="mb-8 text-customgreys-dirtyGrey">
            From beginning to advanced all industries, we have the right courses
            just for you and preparing your entire journey for learning and making
            the most.
          </p>
          <div className="mb-8 flex flex-wrap gap-4">
            {[
              'Web Development',
              'GenAI',
              'Competitive Programming',
              'React',
              'NextJs',
              'Blockchain',
            ].map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-customgreys-secondarybg px-4 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Courses Display */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {
              courses && courses.slice(0, 5).map((course, index) => (
                <motion.div
                  key={course.courseId}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ amount: 0.4 }}
                >
                  <CourseCardSearch course={course} isSelected={false} onClick={() => handleCourseClick(course.courseId)} />
                </motion.div>
              ))
            }
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
