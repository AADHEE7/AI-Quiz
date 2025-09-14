// // // require('dotenv').config(); // Reads the .env file
// // // const express = require('express');
// // // const { GoogleGenerativeAI } = require('@google/generative-ai');
// // // const cors = require('cors');

// // // const app = express();
// // // const port = 3000;
// // // let studentLevel = 5; // The student's current skill level

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // Securely access the key from the environment variables
// // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // // // Our ADAPTIVE route to get a question
// // // app.get('/api/get-question', async (req, res) => {
// // //     try {
// // //         const model = genAI.getGenerativeModel({ model: "gemini-pro"});
// // //         const difficultyMap = {1: "very easy", 2:"easy", 3:"easy", 4:"medium", 5:"medium", 6:"medium", 7:"hard", 8:"hard", 9:"very hard", 10:"expert"};
// // //         const difficulty = difficultyMap[studentLevel] || "medium";

// // //         const prompt = `Create a multiple-choice question for an algebra quiz at a '${difficulty}' difficulty level. Return ONLY a valid JSON object with the keys: 'question', 'options' (an array of 4 strings), and 'answer' (the correct option string).`;
        
// // //         const result = await model.generateContent(prompt);
// // //         const response = await result.response;
// // //         const text = response.text();
        
// // //         res.send(text);
// // //     } catch (error) {
// // //         console.error("Error in /api/get-question:", error);
// // //         res.status(500).send({ error: "Error generating question" });
// // //     }
// // // });

// // // // Our route to check the answer and UPDATE the student's level
// // // app.post('/api/check-answer', (req, res) => {
// // //     const { wasCorrect } = req.body;

// // //     if (wasCorrect) {
// // //         studentLevel = Math.min(10, studentLevel + 1);
// // //         console.log(`Correct! New level: ${studentLevel}`);
// // //     } else {
// // //         studentLevel = Math.max(1, studentLevel - 1);
// // //         console.log(`Incorrect. New level: ${studentLevel}`);
// // //     }
// // //     res.json({ newLevel: studentLevel });
// // // });

// // // app.listen(port, () => {
// // //     console.log(`Synapse server is running at http://localhost:${port}`);
// // // });

// // // require('dotenv').config(); // No longer needed as the key is hardcoded
// // const express = require('express');
// // const { GoogleGenerativeAI } = require('@google/generative-ai');
// // const cors = require('cors');

// // const app = express();
// // const port = 3000;
// // let studentLevel = 5; // The student's current skill level

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // 🚨 WARNING: Hardcoding API keys is insecure. See explanation below.
// // const apiKey = "AIzaSyC05PRumWnCehxn66lsGjq004Tfn60jLms"; 
// // const genAI = new GoogleGenerativeAI(apiKey);

// // // Our ADAPTIVE route to get a question
// // app.get('/api/get-question', async (req, res) => {
// //     try {
// //         const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});
// //         const difficultyMap = {1: "very easy", 2:"easy", 3:"easy", 4:"medium", 5:"medium", 6:"medium", 7:"hard", 8:"hard", 9:"very hard", 10:"expert"};
// //         const difficulty = difficultyMap[studentLevel] || "medium";

// //         const prompt = `Create a multiple-choice question for an algebra quiz at a '${difficulty}' difficulty level. Return ONLY a valid JSON object with the keys: 'question', 'options' (an array of 4 strings), and 'answer' (the correct option string).`;
        
// //         const result = await model.generateContent(prompt);
// //         const response = await result.response;
// //         const text = response.text();
        
// //         // The Gemini API sometimes wraps the JSON in markdown backticks. This removes them.
// //         const cleanedText = text.replace(/```json\n?/, '').replace(/```$/, '');
// //         res.send(cleanedText);
// //     } catch (error) {
// //         console.error("Error in /api/get-question:", error);
// //         res.status(500).send({ error: "Error generating question" });
// //     }
// // });

// // // Our route to check the answer and UPDATE the student's level
// // app.post('/api/check-answer', (req, res) => {
// //     const { wasCorrect } = req.body;

// //     if (wasCorrect) {
// //         studentLevel = Math.min(10, studentLevel + 1);
// //         console.log(`Correct! New level: ${studentLevel}`);
// //     } else {
// //         studentLevel = Math.max(1, studentLevel - 1);
// //         console.log(`Incorrect. New level: ${studentLevel}`);
// //     }
// //     res.json({ newLevel: studentLevel });
// // });

// // app.listen(port, () => {
// //     console.log(`Synapse server is running at http://localhost:${port}`);
// // });

// // At the VERY TOP of your file, load the environment variables
// require('dotenv').config(); 

// const express = require('express');
// const { GoogleGenerativeAI } = require('@google/generative-ai');
// const cors = require('cors');

// const app = express();
// const port = 3000;
// let studentLevel = 5; 

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Securely access the key from the environment variables
// const apiKey = process.env.GEMINI_API_KEY; 
// const genAI = new GoogleGenerativeAI(apiKey);

// // Our ADAPTIVE route to get a question
// app.get('/api/get-question', async (req, res) => {
//     try {
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
//         const difficultyMap = {1: "very easy", 2:"easy", 3:"easy", 4:"medium", 5:"medium", 6:"medium", 7:"hard", 8:"hard", 9:"very hard", 10:"expert"};
//         const difficulty = difficultyMap[studentLevel] || "medium";

//         const prompt = `Create a multiple-choice question for an algebra quiz at a '${difficulty}' difficulty level. Return ONLY a valid JSON object with the keys: 'question', 'options' (an array of 4 strings), and 'answer' (the correct option string).`;
        
//         const result = await model.generateContent(prompt);
//         const response = await result.response;
//         const text = response.text();
        
//         // The Gemini API sometimes wraps the JSON in markdown backticks. This removes them.
//         const cleanedText = text.replace(/```json\n?/, '').replace(/```$/, '');
//         res.send(cleanedText);
//     } catch (error) {
//         console.error("Error in /api/get-question:", error);
//         res.status(500).send({ error: "Error generating question" });
//     }
// });

// // Our route to check the answer and UPDATE the student's level
// app.post('/api/check-answer', (req, res) => {
//     const { wasCorrect } = req.body;

//     if (wasCorrect) {
//         studentLevel = Math.min(10, studentLevel + 1);
//         console.log(`Correct! New level: ${studentLevel}`);
//     } else {
//         studentLevel = Math.max(1, studentLevel - 1);
//         console.log(`Incorrect. New level: ${studentLevel}`);
//     }
//     res.json({ newLevel: studentLevel });
// });

// app.listen(port, () => {
//     console.log(`Synapse server is running at http://localhost:${port}`);
// });

// module.exports = app;


// At the VERY TOP of your file, load the environment variables
require('dotenv').config(); 

const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');

const app = express();
const port = 3000;
let studentLevel = 5; // The student's initial skill level

// Middleware
app.use(cors());
app.use(express.json());

// Securely access the key from the environment variables
const apiKey = process.env.GEMINI_API_KEY; 

// Check if the API key is loaded
if (!apiKey) {
    console.error("🔴 FATAL ERROR: GEMINI_API_KEY is not defined.");
    console.error("Please create a .env file and add your API key.");
    process.exit(1); // Stop the server if key is missing
}

const genAI = new GoogleGenerativeAI(apiKey);

// Our ADAPTIVE route to get a question
app.get('/api/get-question', async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const difficultyMap = {1: "very easy", 2:"easy", 3:"easy", 4:"medium", 5:"medium", 6:"medium", 7:"hard", 8:"hard", 9:"very hard", 10:"expert"};
        const difficulty = difficultyMap[studentLevel] || "medium";

        const prompt = `Create a multiple-choice question for an algebra quiz at a '${difficulty}' difficulty level. Return ONLY a valid JSON object with the keys: 'question', 'options' (an array of 4 strings), and 'answer' (the correct option string).`;
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        // Clean the markdown fences that Gemini sometimes adds
        let cleanedText = text.replace(/```json\n?/, '').replace(/```$/, '').trim();
        
        // --- ROBUST FIX ---
        // Find the first complete JSON object in the string.
        // This handles cases where the AI might accidentally return "{} {}"
        const match = cleanedText.match(/\{[\s\S]*?\}/); 

        if (match && match[0]) {
            // ✅ Successfully extracted the first JSON object.
            res.setHeader('Content-Type', 'application/json');
            res.send(match[0]); // Send ONLY the first matched JSON object
        } else {
            // ❌ No valid JSON object was found in the AI's response.
            console.error("No valid JSON object found in Gemini's response:", cleanedText);
            res.status(500).send({ error: "Failed to extract valid JSON from AI response." });
        }

    } catch (error) {
        console.error("Error in /api/get-question:", error);
        res.status(500).send({ error: "Error generating question" });
    }
});

// Our route to check the answer and UPDATE the student's level
app.post('/api/check-answer', (req, res) => {
    const { wasCorrect } = req.body;

    if (wasCorrect) {
        studentLevel = Math.min(10, studentLevel + 1);
        console.log(`Correct! New level: ${studentLevel}`);
    } else {
        studentLevel = Math.max(1, studentLevel - 1);
        console.log(`Incorrect. New level: ${studentLevel}`);
    }
    res.json({ newLevel: studentLevel });
});

app.listen(port, () => {
    console.log(`✅ Synapse server is running at http://localhost:${port}`);
});