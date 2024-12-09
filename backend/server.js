import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodrouter from "./routes/foodroute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

connectDB();

//api endpoint
app.use("/api/food", foodrouter);
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

// Static files for uploaded images
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
