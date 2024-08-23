import { config } from "dotenv";
config();
import express from "express";
import path from "path";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import dbConnection from "./database/connection.js";
import * as routers from "./src/app.routes.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.ONLINE_MONGO_URI,
      collectionName: "sessions",
    }),
  })
);

app.set("views", path.join(path.resolve(), "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routers.homeRouter);
app.use(routers.registerRouter);
app.use(routers.loginRouter);
app.use(routers.profileRouter);
app.use(routers.messageRouter);

// Connect to database
dbConnection();

// Start app server
app.listen(port, () => console.log(`Server is running on port ${port}`));
