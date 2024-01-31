import express from "express";
import PageRoutes from "./routes/PagesRoutes.js";



// Creats an app object
const app = express();

app.set ("view engine",  "ejs"); // Sets the view engine to ejs (Embedded JavaScript)


app.use(express.static("public "));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use ("/", PageRoutes);

 app.use((error, _, response) => {
    if (typeof error ==="string") {
        error = new Error (error);
    }

    if (!error.status) error.status = 404;

     console.error(error);

     response.status (error.status).send(error.message);


 });
 
