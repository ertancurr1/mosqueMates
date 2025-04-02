const NotificationSchema = {
  recipient: { type: ObjectId, ref: "User" }, // User to notify
  sender: { type: ObjectId, ref: "User" }, // User who triggered notification
  type: {
    type: String,
    enum: ["like", "comment", "follow", "mention", "event"],
  },
  reference: {
    type: { type: String, enum: ["Post", "Comment", "User", "Event"] },
    id: ObjectId, // ID of referenced document
  },
  isRead: { type: Boolean, default: false }, // Read status
  message: String, // Notification text
  createdAt: { type: Date, default: Date.now },
};
