import { Router } from "express";
import { home } from "./home.controllers.js";

const homeRouter = Router();

homeRouter.get("/", home);

export default homeRouter;
