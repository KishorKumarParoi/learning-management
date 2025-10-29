"use client"
import { SignUp, useUser } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useSearchParams } from "next/navigation";

const SignUpPage = () => {
    const { user } = useUser();
    const searchParams = useSearchParams()
    const isCheckoutPage = searchParams.get("showSignUp") !== null
    const courseId = searchParams.get("id");

    const signInUrl = isCheckoutPage ? `/checkout?step=1&showSignUp=false&id=${courseId}` : '/signin';
    const getRedirectUrl = () => {
        if (isCheckoutPage) {
            return `/checkout?step=2&id=${courseId}`;
        }

        const userType = user?.publicMetadata.userType as string;
        if (userType === 'teacher') {
            return "/teacher/courses";
        }

        return "/user/courses";
    }
    return (
        <SignUp appearance={{
            baseTheme: dark,
            elements: {
                formButtonPrimary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:scale-105 transition-transform",
                headerTitle: "text-purple-700 font-bold text-xl",
                headerSubtitle: "text-gray-500",
                rootBox: "flex justify-center items-center py-5",
                cardBox: "shadow-none",
                card: "bg-customgreys-secondarybg w-full shadow-none",
                footer: {
                    background: "#25262F",
                    padding: "0rem 2.5rem",
                    "& > div > div:nth-child(1)": {
                        background: "#25262F",
                    }
                },
                formFieldLabel: "text-white-50 font-medium",
                fontButtonPrimary: "bg-customgreys-primarybg hover:bg-primary-600 text-white-100 !shadow-none",
                formFieldInput: "bg-customgreys-primarybg text-white-50 !shadow-none",
                footerActionLink: "text-primary-750 hover:text-primary-600",
            },
        }}
            signInUrl={signInUrl}
            forceRedirectUrl={getRedirectUrl()}
            routing='hash'
            afterSignOutUrl={"/"}
        />
    )
}

export default SignUpPage