import User from "../../models/User.model";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const user = new User(req.body);
  const { email, name } = req.body;

  try {
    await user.save();
    res.status(201).send({ name: name, email: email });
  } catch (err) {
    console.log("user register error", err);
    res.status(400).send(err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).exec();

    if (!user) res.status(400).send({ error: "O email informado é invalido." });

    user.comparePassword(password, (err, match) => {
      if (!match || err) {
        return res.status(400).send({ error: "A senha informada é invalida." });
      }

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.status(200).send({ token });
    });
  } catch (error) {
    console.log("user login error", error);
    res.status(400).send(error);
  }
};