import { Router } from "express";
import { createLoginController } from "../controllers/login.controller";

export const loginRoutes = Router();

loginRoutes.post("/", createLoginController);
