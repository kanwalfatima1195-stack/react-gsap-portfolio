import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import Message from './models/Message.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
connectDB();

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Server is running!' });
});

// Save message endpoint
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const newMessage = new Message({
      name: name || 'Anonymous',
      email: email || '',
      message: message,
      createdAt: new Date()
    });

    const savedMessage = await newMessage.save();
    res.status(201).json({ 
      success: true, 
      message: 'Message saved successfully',
      data: savedMessage 
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// Get all messages endpoint (optional, for admin)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

