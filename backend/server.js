const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to store messages
const messagesFilePath = path.join(__dirname, 'messages.json');

// Initialize messages file if it doesn't exist
if (!fs.existsSync(messagesFilePath)) {
    fs.writeFileSync(messagesFilePath, JSON.stringify([]));
}

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running!' });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Simple validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }
    
    // Create new message object
    const newMessage = {
        id: Date.now().toString(),
        name,
        email,
        message,
        date: new Date().toISOString()
    };
    
    try {
        // Read existing messages
        const data = fs.readFileSync(messagesFilePath, 'utf8');
        const messages = JSON.parse(data);
        
        // Add new message
        messages.push(newMessage);
        
        // Save back to file
        fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));
        
        console.log(`New message received from: ${name} (${email})`);
        
        // Success response
        setTimeout(() => {
            // Add a simulated small delay to show frontend loading states nicely
            res.status(200).json({ success: true, message: 'Your message has been received successfully!' });
        }, 800);
        
    } catch (err) {
        console.error('Error saving message:', err);
        res.status(500).json({ error: 'Failed to save message. Please try again later.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Contact API endpoint available at POST http://localhost:${PORT}/api/contact`);
});
