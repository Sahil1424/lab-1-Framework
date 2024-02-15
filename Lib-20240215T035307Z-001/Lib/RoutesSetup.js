import PageRoutes from "../routes/PageesRoutes.js";
import CardRoutes from "../routes/CardRoutes.js";

export default (app) => {
    app.use("/", PageRoutes);
    app.use("/cards", CardRoutes);
};