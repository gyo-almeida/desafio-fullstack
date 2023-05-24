import { Router } from "express";
import {
  CreateUserController,
  deleteUserController,
  getUsersController,
  getUserByIdController,
  updateUserController,
} from "../controllers/users.controller";
import { validateData } from "../middlewares/validateData";
import { userReqSchema } from "../schemas/users";
import { validateEmail } from "../middlewares/validateEmail";

export const userRoutes = Router();

userRoutes.post(
  "/",
  validateData(userReqSchema),
  validateEmail,
  CreateUserController
);
userRoutes.get("/", getUsersController);
userRoutes.get("/:id", getUserByIdController);
userRoutes.patch("/:id", updateUserController);
userRoutes.delete("/:id", deleteUserController);
