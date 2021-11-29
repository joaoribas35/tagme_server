import { Router } from "express";
import { register, login } from "../controllers/user.controller";
import {
  registerValidator,
  loginValidator,
} from "../middlewares/user.validator";

const router = Router();

export default () => {
  router.post("/register", registerValidator, register);
  router.post("/login", loginValidator, login);

  return router;
};
