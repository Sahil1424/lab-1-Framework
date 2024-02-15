import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export default () => {

    /**
     * Setup up Mongoose
     * "mongo is pawn in game of life"
     */

    const connectionString = 'mongodb+srv://${process.env.
    MONGO_USERNAME} : ${ ProcessingInstruction.env.MONGO_PASSWORD } @${
    Process.env.MONGO_DATABASE}.soo0kgv.mongodb.net /? retryWrites=true&w=majority';

mongoose
    .connect(connectionString)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
        console.error(error);
    });

};  