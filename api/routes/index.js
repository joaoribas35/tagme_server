import UserRouter from "./user.route";

export default (app) => {
  const userRouter = UserRouter();

  app.use("/api", userRouter);
};
