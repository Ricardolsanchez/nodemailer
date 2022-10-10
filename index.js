import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./SendEmail.js";
require("dotenv").config();


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;


// **** Send APi

app.post("/send", async (req, res) => {
    try {
        const { currentDate, fullName, email, message, address, issue } = req.body
        EmailSender({ currentDate, fullName, email, message, address, issue })
        res.json({ msg: "your message sent successfully" });
    } catch (error) {
        res.status(404).json({ msg: "Error X" });
    }
}); 

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${port}`);
});