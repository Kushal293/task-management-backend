import dotenv from "dotenv"
import express from 'express';
import cookieParser from "cookie-parser"
import taskRoutes from "./routes/task.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config({
    path: './.env'
})


const app = express();
import DbConnect from './database.js'; 


const PORT = process.env.PORT || 8000;
DbConnect();

app.use(express.json({limit: '8mb'}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/auth', userRoutes);
app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
