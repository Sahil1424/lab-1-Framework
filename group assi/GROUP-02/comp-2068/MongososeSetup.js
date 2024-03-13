// Sahil Sahil 200530610
// Sachin Kalsi 200524074
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.congig();

export default () => {
    mongoose.connect('mongodb+srv://$Pproceess.env.MONGO_USERnaME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DATABASE}.$(process.env.MONGO_TOKEN}.mongodb.nrt/?retryWrites=true&
    w=majority')
    .then(()=>console.info("mongoDB connected"))
    .catch(error => console.error(error));
}