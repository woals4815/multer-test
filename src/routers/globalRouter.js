import express from "express";
import { getHome, postHome } from "../controllers/globalControllers";
import { uploadText } from "../middlewares/localMiddleware";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.post("/", uploadText, postHome);

export default globalRouter;
