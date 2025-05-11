import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import * as dynamoose from "dynamoose";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

// Route Imports
import courseRoutes from "./routes/courseRoutes";
// Configurations
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
  dynamoose.aws.ddb.local();
}

const app = express();
app.use(express.json());

app.use(helmet());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Hello World!\n");
});

app.use("/courses", courseRoutes);

app.get("/kkp", (req, res) => {
  res.send("Hello KKP!\n");
});

/* SERVER */
const port = process.env.PORT || 3000;

if (!isProduction) {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}
