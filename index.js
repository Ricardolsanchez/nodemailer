import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./SendEmail.js";
import mongoose from "mongoose";


// mongodb+srv://ricksanchez:<password>@mern.tg7kcif.mongodb.net/test

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

//DATABASE CONNECTION

const user = 'ricksanchez';
const password = 'Ricardo1496'; 
const uri = `mongodb+srv://${user}:${password}@mern.tg7kcif.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log('base de datos conectada'))
.catch(e => console.log(e))
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

app.listen(process.env.PORT || 5000, () => {
    console.log(`http://localhost:${port}`);
});