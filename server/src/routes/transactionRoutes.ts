import express from "express";
import { createStripePaymentIntent, createTransaction, listTransactions } from "../controllers/transactionController";

const router = express.Router();

router.post("/", createTransaction)
router.get("/", listTransactions)
router.post("/create-payment-intent", createStripePaymentIntent);

export default router;
