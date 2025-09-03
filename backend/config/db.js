import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://lrtraviteja:tomatoApp@cluster0.ojnyaky.mongodb.net/TOMATO-APP').then(() => console.log("DB Connected"))
}