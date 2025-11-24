import Stripe from 'stripe';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import Course from '../models/courseModel';
import Transaction from '../models/transactionModel';
import UserCourseProgress from '../models/userCourseProgressModel';

dotenv.config();

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createStripePaymentIntent = async (req: Request, res: Response): Promise<void> => {
    let { amount } = req.body;
    if (!amount || amount <= 0) {
        amount = 50;
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never"
            }
        })

        res.json({
            message: '',
            data: {
                clientSecret: paymentIntent.client_secret
            }
        });

    } catch (error) {
        res.status(500).json({
            message: 'Failed to create Payment Intent',
            error
        });
    }
}

export const listTransactions = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.query;

    try {
        const transactions = userId ? await Transaction.query("userId").eq(userId as string).exec() :
            await Transaction.scan().exec();

        console.log("transactions: ", transactions);

        res.json({
            message: 'Transactions retrieved successfully',
            data: transactions
        });

    } catch (error) {
        console.log("Error Retrieving transactions: ", error);
        res.status(500).json({
            message: 'Failed to retrieve transactions',
            error
        });
    }
}

export const createTransaction = async (req: Request, res: Response): Promise<void> => {
    const { userId, courseId, transactionId, amount, paymentProvider } = req.body

    console.log("courseId:", courseId);

    try {
        // 1. get course info 
        const course = await Course.get(courseId);
        console.log("course", course);

        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }

        // 2. create transaction record 
        const newTransaction = new Transaction({
            dateTime: new Date().toISOString(),
            userId,
            courseId,
            transactionId,
            amount,
            paymentProvider,
        });


        try {
            await newTransaction.save();
        } catch (error) {
            console.log("Error on new Transaction", error);
        }

        // 3. create initial user course progress
        const initialProgress = new UserCourseProgress({
            userId,
            courseId,
            enrollmentDate: new Date().toISOString(),
            overallProgress: 0,
            sections: course.sections.map((section: any) => ({
                sectionId: section.sectionId,
                chapters: section.chapters.map((chapter: any) => ({
                    chapterId: chapter.chapterId,
                    completed: false
                }))
            })),
            lastAccessedTimestamp: new Date().toISOString()
        })

        try {
            await initialProgress.save();
        } catch (error) {
            console.log("Error on initial Progress", error);
        }

        // 4. add enrollment to course

        try {
            await Course.update(
                { courseId },
                {
                    $ADD: {
                        enrollments: [{ userId }]
                    }
                }
            )
        } catch (error) {
            console.log("Course Update Error: ", error);
        }

        console.log("initial Progress", initialProgress);

        res.json({
            message: "Purchased Course Successfully",
            data: {
                transaction: newTransaction,
                courseProgress: initialProgress
            }
        })

    } catch (error) {
        res.status(500).json({
            message: 'Failed to create transaction and enroll user',
            error
        });
    }
}
