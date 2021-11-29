import User from "../../models/user.model";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const user = new User(req.body);
  const { username } = req.body;

  try {
    await user.save();
    return res.status(201).send({ username });
  } catch (err) {
    console.log("user register error", err);
    return res.status(400).send(err);
  }
};

export const login = async (req, res) => {
  const { username } = req.body;
  const user = await User.findOne({ username }).exec();

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return res.status(200).send({ token });
};
