const MessageSchema = {
  sender: { type: ObjectId, ref: "User" }, // Message sender
  recipient: { type: ObjectId, ref: "User" }, // Message recipient
  content: String, // Message content
  isRead: { type: Boolean, default: false }, // Read status
  createdAt: { type: Date, default: Date.now },
};
