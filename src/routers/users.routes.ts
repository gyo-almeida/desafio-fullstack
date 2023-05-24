import { Router } from "express";
import {
  CreateUserController,
  deleteUserController,
  getUsersController,
  getUserByIdController,
  updateUserController,
} from "../controllers/users.controller";
import { validateData } from "../middlewares/validateData";
import { updateUserSchema, userReqSchema } from "../schemas/users";
import { validateEmail } from "../middlewares/validateEmail";
import { validateUser } from "../middlewares/validateUser";
import { validateToken } from "../middlewares/validateToken";

export const userRoutes = Router();

userRoutes.post(
  "/",
  validateData(userReqSchema),
  validateEmail,
  CreateUserController
);
userRoutes.get("/", validateToken, getUsersController);
userRoutes.get("/:id", validateUser, validateToken, getUserByIdController);
userRoutes.patch(
  "/:id",
  validateUser,
  validateData(updateUserSchema),
  validateToken,
  updateUserController
);
userRoutes.delete("/:id", validateUser, validateToken, deleteUserController);
