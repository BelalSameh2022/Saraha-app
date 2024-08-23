import { Router } from "express";
import { message, handleMessage } from "./message.controllers.js";

const messageRouter = Router();

messageRouter.get("/message/:receiverId", message);
messageRouter.post("/handleMessage", handleMessage);

export default messageRouter;
