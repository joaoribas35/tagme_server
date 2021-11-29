import User from "../../models/user.model";

export const registerValidator = async (req, res, next) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ username }).exec();

  if (userExists)
    return res.status(400).send({ error: "Este usuário já existe." });
  if (!username)
    return res
      .status(400)
      .send({ error: "Necessário informar o nome do usuário." });
  if (!password)
    return res.status(400).send({ error: "Necessário informar a senha." });
  if (password.length < 6)
    return res
      .status(400)
      .send({ error: "A senha deve conter no mínimo 6 caracteres." });

  return next();
};

export const loginValidator = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).exec();

  try {
    if (!user)
      return res.status(400).send({ error: "O usuário informado é invalido." });

    user.comparePassword(password, (err, match) => {
      if (!match || err) {
        return res.status(400).send({ error: "A senha informada é invalida." });
      }

      return next();
    });
  } catch (error) {
    console.log("user login error", error);
    res.status(400).send(error);
  }
};
