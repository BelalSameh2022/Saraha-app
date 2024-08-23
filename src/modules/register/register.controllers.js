import bcrypt from "bcrypt";
import User from "../../../database/models/user.model.js";
import { capitalize } from "../../utils/capitalize.js";

const register = (req, res) => {
  res.render("register", { error: false, session: null });
};

const handleRegister = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.render("register", { error: "All fields are required", session: null });
  }

  const user = await User.findOne({ email: email.toLowerCase() });
  if (user) {
    return res.render("register", { error: "User already exists", session: null });
  }

  if (password !== confirmPassword) {
    return res.render("register", { error: "Passwords do not match", session: null });
  }

  const hashedPassword = bcrypt.hashSync(password, +process.env.SALT_ROUNDS);

  await User.create({ name: capitalize(name), email, password: hashedPassword });
  res.redirect("/login");
};

export { register, handleRegister };
