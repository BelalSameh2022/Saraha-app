import { Router } from "express";
import { profile, logout } from "./profile.controllers.js";

const profileRouter = Router();

profileRouter.get("/profile", profile);
profileRouter.get("/logout", logout);

export default profileRouter;
