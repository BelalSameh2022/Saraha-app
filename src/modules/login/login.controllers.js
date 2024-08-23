import bcrypt from "bcrypt";
import User from "../../../database/models/user.model.js";

const login = (req, res) => {
  res.render("login", { error: false, session: null });
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.render("login", { error: "All fields are required", session: null });

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user || !bcrypt.compareSync(password, user.password)) return res.render("login", { error: "Invalid credentials", session: null });

  user.password = undefined;
  req.session.user = user;
  req.session.loggedIn = true;

  res.redirect("/profile");
};

export { login, handleLogin };
