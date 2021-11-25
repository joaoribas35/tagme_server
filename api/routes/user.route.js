import { Router } from "express";
import { register, login } from "../controllers/user.controller";
import { userRegisterValidator } from "../middlewares/user.validator";

const router = Router();

export default () => {
  router.post("/register", userRegisterValidator, register);
  router.post("/login", login);

  return router;
};
