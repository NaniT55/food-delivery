import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://varuntanniru555:3KY5FLTjgwUHwhYM@cluster0.ntmqb.mongodb.net/food-delivery"
    )
    .then(console.log("DB connected"));
};
