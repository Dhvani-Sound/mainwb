import 'dotenv/config';
import express from "express";
import cors from "cors";
import axios from"axios";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;
console.log(API_KEY);

app.post("/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;
        if (!userMessage) {
            return res.status(400).json({ error: "No message provided" });
        }

        console.log("User message:", userMessage);

        const response = await axios.post(GEMINI_URL, {
            contents: [{ parts: [{ text: userMessage }] }]
        });

        console.log("Gemini API Response:", response.data);

        res.json({ response: response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response" });

    } catch (error) {
        console.error("Error from Gemini API:", error.response?.data || error.message);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

app.listen(5000, () => {
    console.log("Server running on https://dhvani-backend.onrender.com");
});
