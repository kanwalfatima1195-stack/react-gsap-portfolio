import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kanwalfatima1195:kanwal1195@cluster0.da3bel2.mongodb.net/users?retryWrites=true&w=majority');
    console.log('✅ Connected to MongoDB Atlas - Database: users');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;

