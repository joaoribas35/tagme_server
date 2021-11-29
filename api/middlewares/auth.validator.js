import expressJWT from "express-jwt";
import { tokenConfig } from "../../config/token";
require("dotenv").config();

export const isAuth = expressJWT({
  secret: process.env.JWT_SECRET || tokenConfig.secret,
  algorithms: tokenConfig.algorithms,
});
