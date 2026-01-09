# Portfolio Server

Backend server for portfolio contact form with MongoDB Atlas integration.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier is fine)
4. Create a database user:
   - Go to Database Access → Add New Database User
   - Create username and password
   - Save the credentials
5. Whitelist your IP:
   - Go to Network Access → Add IP Address
   - Click "Add Current IP Address" or use `0.0.0.0/0` for all IPs (development only)
6. Get your connection string:
   - Go to Database → Connect
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `portfolio` (or your preferred database name)

### 3. Environment Variables

Create a `.env` file in the server folder:

```env
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

Replace the `MONGODB_URI` with your actual MongoDB Atlas connection string.

### 4. Run the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### POST /api/messages
Save a new message to the database.

**Request Body:**
```json
{
  "name": "John Doe",      // Optional
  "email": "john@example.com",  // Optional
  "message": "Hello, I'd like to work with you!"  // Required
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message saved successfully",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'd like to work with you!",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET /api/messages
Get all messages (optional, for admin purposes).

## Notes

- Make sure the server is running before testing the contact form
- The frontend expects the server to be running on `http://localhost:5000`
- Update the API URL in `MessageModal.jsx` if you change the server port

