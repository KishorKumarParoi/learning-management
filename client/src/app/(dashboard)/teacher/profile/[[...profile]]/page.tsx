import Header from '@/app/(dashboard)/Header'
import { UserProfile } from '@clerk/nextjs'
import React from 'react'
import { dark } from '@clerk/themes';

const TeacherProfilePage = () => {
    return (
        <>
            <Header title="Profile" subtitle="View your profile information" />
            <UserProfile
                path='/teacher/profile'
                routing='path'
                appearance={{
                    baseTheme: dark,
                    elements: {
                        scrollBox: "bg-customgreys-darkGrey",
                        navbar: {
                            "& > div:nth-child(1)": {
                                background: "none",
                            }
                        }
                    }
                }}
            />
        </>
    )
}

export default TeacherProfilePage