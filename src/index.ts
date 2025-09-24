import express, {Request, Response} from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);

app.listen(PORT, ()=>{
    console.log("Running on port " + PORT);
});