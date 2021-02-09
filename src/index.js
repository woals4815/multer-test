import express from "express";
import path from "path";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import { localMiddleware } from "./middlewares/localMiddleware";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/text", express.static("text"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localMiddleware);
app.use("/", globalRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
