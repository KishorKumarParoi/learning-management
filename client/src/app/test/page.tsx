import { Bell, BookOpen } from 'lucide-react';
import Link from 'next/link';

const TestNonDashboardPage = () => {
  return (
    <nav className="w-full justify-center bg-customgreys-primarybg">
      <div className="flex w-3/4 items-center justify-between py-8">
        <div className="flex items-center justify-between gap-14">
          <Link
            href="/"
            className="text-lg font-bold hover:text-customgreys-dirtyGrey sm:text-xl"
          >
            Kepi
          </Link>
          <div className="flex items-center gap-4">
            <div className="group relative">
              <Link
                href="/search"
                className="rounded-xl bg-customgreys-secondarybg py-3 pl-10 pr-6 text-sm text-customgreys-dirtyGrey transition-all duration-300 hover:bg-customgreys-darkerGrey hover:text-white-50 sm:py-4 sm:pl-14 sm:pr-20 sm:text-base"
              >
                <span className="hidden sm:inline">Search Courses</span>
                <span className="sm:hidden">Search</span>
              </Link>
              <BookOpen
                className="absolute left-3 top-1/2 -translate-y-1/2 transform text-customgreys-dirtyGrey transition-all duration-300 sm:left-5"
                size={18}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 sm:h-8 sm:w-8">
          <span className="rounded-full; absolute right-0 top-0 h-1.5 w-1.5 bg-blue-500 sm:h-2 sm:w-2"></span>
          <Bell className="h-4 w-4 text-gray-400 sm:h-5 sm:w-5" size={18} />
        </button>
      </div>
    </nav>
  );
};

export default TestNonDashboardPage;
