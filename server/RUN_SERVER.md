# Server Run Karne Ka Tarika

## Steps:

### 1. Server folder mein jao:
```bash
cd server
```

### 2. Dependencies install karo (agar pehle se nahi hain):
```bash
npm install
```

### 3. Server run karo:

**Development mode (auto-reload ke saath):**
```bash
npm run dev
```

**Ya Production mode:**
```bash
npm start
```

### 4. Server chalega:
- Server `http://localhost:5000` par chalega
- Console mein "✅ Connected to MongoDB Atlas" aur "🚀 Server is running on port 5000" dikhega

### 5. Test karo:
Browser mein jao: `http://localhost:5000`
Ya Postman/Thunder Client se test karo

## Important:
- Server chalane se pehle MongoDB Atlas connection string sahi hona chahiye
- Database connection `config/database.js` file mein hai

