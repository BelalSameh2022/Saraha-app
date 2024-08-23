import Message from "../../../database/models/message.model.js";

const message = (req, res) => {
  const { receiverId } = req.params;
  const name = req.session.user.name;
  res.render("message", { name, receiverId, error: false, session: null });
};

const handleMessage = async (req, res) => {
  const { message, receiverId } = req.body;
  const name = req.session.user.name;

  if (!message.trim()) return res.render("message", { name, receiverId, error: "You can't send an empty message", session: null });

  await Message.create({ message, receiver: receiverId });
  res.redirect(`/message/${receiverId}`);
};

export { message, handleMessage };
