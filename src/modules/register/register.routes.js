import { Router } from "express";
import { register, handleRegister } from "./register.controllers.js";

const registerRouter = Router();

registerRouter.get("/register", register);
registerRouter.post("/handleRegister", handleRegister);

export default registerRouter;
