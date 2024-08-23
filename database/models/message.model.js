import { model, Schema, Types } from "mongoose";

const messageSchema = new Schema(
  {
    message: {
      type: String,
      trim: true,
    },
    receiver: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Message = model("Message", messageSchema);
export default Message;
