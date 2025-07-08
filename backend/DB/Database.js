import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = "mongodb+srv://simranjot:simran348@cluster0.iqv8xyw.mongodb.net/";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}