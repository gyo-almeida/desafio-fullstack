import { Router } from "express";
import {
  CreateUser,
  deleteUser,
  getUsers,
  getUserById,
  updateUser,
} from "../controllers/users.controller";
import { validateData } from "../middlewares/validateData";
import { userReqSchema } from "../schemas/users";
import { validateEmail } from "../middlewares/validateEmail";

export const userRoutes = Router();

userRoutes.post("/", validateData(userReqSchema), validateEmail, CreateUser);
userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUserById);
userRoutes.patch("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);
