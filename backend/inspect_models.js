import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const testGemini = async () => {
    const apiKey = (process.env.GEMINI_API || "").trim();
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    
    try {
        const response = await axios.get(apiUrl);
        const models = response.data.models;
        console.log("Available Model Names:");
        models.forEach(m => console.log(`- ${m.name}`));
    } catch (error) {
        console.error("Error listing models:", error.response?.status || error.message);
    }
};

testGemini();
