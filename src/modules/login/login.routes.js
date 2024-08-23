import { Router } from "express";
import { login, handleLogin } from "./login.controllers.js";

const loginRouter = Router();

loginRouter.get("/login", login);
loginRouter.post("/handleLogin", handleLogin);

export default loginRouter;
