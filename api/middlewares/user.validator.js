import User from "../../models/user.model";

export const userRegisterValidator = async (req, res, next) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email }).exec();

  if (userExists)
    return res.status(400).send({ error: "Este email já está em uso." });
  if (!name)
    return res
      .status(400)
      .send({ error: "Necessário informar nome completo." });
  if (!password)
    return res.status(400).send({ error: "Necessário informar a senha." });
  if (password.length < 6)
    return res
      .status(400)
      .send({ error: "A senha deve conter no mínimo 6 caracteres." });

  return next();
};
