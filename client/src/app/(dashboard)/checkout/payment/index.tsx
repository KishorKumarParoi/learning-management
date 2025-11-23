import React from 'react'
import StripeProvider from './StripeProvider'
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useCheckoutNavigation } from '@/hooks/useCheckoutNavigation';
import { useCurrentCourse } from '@/hooks/useCurrentCourse';
import { useUser } from '@clerk/nextjs';
import CoursePreview from '@/components/Course-Components/CoursePreview';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PaymentPageContent = () => {
    const stripe = useStripe();
    const elements = useElements();

    const { navigateToStep } = useCheckoutNavigation();
    const { course, courseId } = useCurrentCourse();

    const { user } = useUser();


    return (
        <div className='payment'>
            <div className='payment__container'>
                {/* Order Summary */}
                <div className='payment__preview'>
                    <CoursePreview course={course!} />
                </div>

                {/* Payment Form */}
                <div className='payment__form-container'>
                    <form
                        id='payment-form'
                        // onSubmit={handleSubmit}
                        className='payment__form'
                    >
                        <div className='payment__content'>
                            <h1 className='payment__title'>Checkout</h1>
                            <p className='payment_subtitle'>
                                Fill out the payment details to complete your purchase.
                            </p>

                            <div className='payment__method'>
                                <h3 className='payment__method-title'>Payment Method</h3>

                                <div className='payment__card-container'>
                                    <div className='payment__card-header'>
                                        <CreditCard size={24} />
                                        <span>Credit/Debit Card</span>
                                    </div>
                                    <div className='payment__card-element'>
                                        <PaymentElement />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className='payment__actions'>
                <Button
                    // onClick={handleSignOutandNavigate}
                    className="hover: bg-white-50/10"
                    variant={'outline'}
                    type='button'
                >
                    Switch Account
                </Button>

                <Button
                    form='payment-form'
                    type='submit'
                    className='payment__submit'
                    disabled={!stripe || !elements}>
                    Pay with Credit Card
                </Button>
            </div>

        </div>
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