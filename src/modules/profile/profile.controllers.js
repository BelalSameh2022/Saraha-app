import QRCode from "qrcode";
import Message from "../../../database/models/message.model.js";
const profile = async (req, res) => {
  const { loggedIn, user } = req.session;
  const url = `${req.protocol}://${req.get("host")}/message/${user._id}`;
  const qrCode = await QRCode.toDataURL(url);

  if (loggedIn) {
    const messages = await Message.find({ receiver: user._id });
    res.render("profile", { session: req.session, url, qrCode, messages });
  } else {
    res.redirect("/login");
  }
};

const logout = async (req, res) => {
    req.session.destroy((err) => {
      
      res.redirect("/login");
    });
};

export { profile, logout };
