import React from 'react'
import StripeProvider from './StripeProvider'
import { useElements, useStripe } from '@stripe/react-stripe-js'
import { useCheckoutNavigation } from '@/hooks/useCheckoutNavigation';
import { useCurrentCourse } from '@/hooks/useCurrentCourse';
import { useUser } from '@clerk/nextjs';

const PaymentPageContent = () => {
    const stripe = useStripe();
    const elements = useElements();

    const { navigateToStep } = useCheckoutNavigation();
    const { course, courseId } = useCurrentCourse();

    const { user } = useUser();


    return (
        <div>PaymentPage</div>
    )
}

const PaymentPage = () => {

    return (
        <StripeProvider >
            <PaymentPageContent />
        </StripeProvider>
    )
}

export default PaymentPage