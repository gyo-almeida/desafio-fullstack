import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import { userRoutes } from "./routers/users.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use(handleErrors);
export default app;
