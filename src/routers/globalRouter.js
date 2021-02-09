import express from "express";
import { getHome, getRead, postHome } from "../controllers/globalControllers";
import { uploadText } from "../middlewares/localMiddleware";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.post("/", uploadText, postHome);
globalRouter.get("/read", getRead);

export default globalRouter;
