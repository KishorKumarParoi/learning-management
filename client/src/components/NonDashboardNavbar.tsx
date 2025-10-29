import { Bell, BookOpen } from 'lucide-react';
import Link from 'next/link';

const NonDashboardNavbar = () => {
  return (
    <nav className="flex w-full justify-center bg-customgreys-primarybg">
      <div className="flex w-3/4 items-center justify-between py-8">
        <div className="flex items-center justify-between gap-14">
          <Link
            href={'/'}
            className="text-lg font-bold hover:text-customgreys-dirtyGrey sm:text-xl"
          >
            Pidemy
          </Link>
          <div className="flex items-center gap-4">
            <div className="group relative">
              <Link
                href={'/search'}
                className="pl:10 py:3 rounded-xl bg-customgreys-secondarybg pr-6 text-sm text-customgreys-dirtyGrey transition-all duration-300 hover:bg-customgreys-darkerGrey hover:text-white-50 sm:py-4 sm:pl-14 sm:pr-20 sm:text-base"
              >
                <span className="hidden sm:inline">Search Courses</span>
                <span className="inline sm:hidden">Search</span>
              </Link>
              <BookOpen
                className="absolute top-1/2 hidden -translate-y-1/2 transform text-customgreys-dirtyGrey transition-all duration-300 sm:left-5 sm:block"
                size={18}
              />
              {/* Tooltip */}
              <div
                className="text-white rounded-lgbg-gray-800 absolute left-0 top-full mt-4 hidden w-full translate-y-2 px-4 py-2 text-xs opacity-0 transition-all duration-300 group-hover:block group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm"
                role="tooltip"
              >
                Find the best courses here!
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 sm:h-8 sm:w-8">
            <span className="absolute right-0 top-0 h-1.5 rounded-full bg-blue-500 sm:h-2 sm:w-2"></span>
            <Bell className="h-4 w-4 text-gray-500 sm:h-5 sm:w-5" />
          </button>
          {/* TODO: Sign In Button */}
        </div>
      </div>

    </nav>
  );
};

export default NonDashboardNavbar;
