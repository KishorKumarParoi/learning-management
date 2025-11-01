"use client"
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import { Bell, BookOpen } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { SidebarTrigger } from './sidebar';
import { cn } from '@/lib/utils';
import { dark } from '@clerk/themes';

const DashboardNavbar = ({ isCoursePage }: { isCoursePage: boolean }) => {
    const { user } = useUser();
    const userRole = user?.publicMetadata.userType as ("student" | "teacher")

    return (
        <nav className='dashboard-navbar'>
            <div className='dashboard-navbar__container'>
                <div className='dashboard-navbar__search'>
                    <div className='md:hidden'>
                        <SidebarTrigger className='dashboard-navbar__sidebar-trigger' />
                    </div>
                    <Link href={"/"} className='dashboard-navbar__brand'>
                        Pidemy
                    </Link>
                    <div className='flex items-center gap-4'>
                        <div className='relative group'>
                            <Link href={"/search"}
                                className={cn(
                                    'dashboard-navbar__search-input',
                                    isCoursePage && 'bg-customgreys-secondarybg'
                                )}>
                                <span className='hidden sm:inline'>Search Courses</span>
                                <span className='sm:hidden'>Search</span>
                            </Link>
                            <BookOpen
                                className='dahboard-navbar__search-icon' size={18} />
                        </div>
                    </div>
                </div>
                <div className='dashboard-navbar__actions'>
                    <button className='nondashboard-navbar__notification-button'>
                        <span className='nondashboard-navbar__notification-indicator'></span>
                        <Bell className="nondashboard-navbar__notification-icon" size={20} />
                    </button>
                    <SignedIn>
                        <UserButton appearance={{
                            baseTheme: dark,
                            elements: {
                                userButtonOuterIdentifier: "text-customgreys-dirtyGrey",
                                userButtonBox: "scale-90 sm:scale-100",
                            }
                        }}
                            showName={true}
                            userProfileMode='navigation'
                            userProfileUrl={
                                userRole === "teacher" ? "/teacher/profile" : "/user/profile"
                            }
                        />
                    </SignedIn>
                    <SignedOut>
                        <Link href={"/signin"} className='nondashboard-navbar__auth-button--login' >
                            Log in
                        </Link>
                        <Link href={"/signup"} className='nondashboard-navbar__auth-button--signup' >
                            Sign up
                        </Link>
                    </SignedOut>
                </div>
            </div>
        </nav>
    )
}

export default DashboardNavbar