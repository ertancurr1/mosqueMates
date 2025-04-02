const PostSchema = {
  user: { type: ObjectId, ref: "User" }, // Post author
  content: String, // Text content
  images: [String], // Array of image URLs
  type: { type: String, enum: ["general", "question", "event", "resource"] },
  likes: [{ type: ObjectId, ref: "User" }], // Users who liked the post
  commentsCount: { type: Number, default: 0 }, // Number of comments
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: [Number], // Optional location data
  },
  tags: [String], // Topic tags
  isModerated: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
};

// Add indexes
PostSchema.index({ user: 1 });
PostSchema.index({ type: 1 });
PostSchema.index({ tags: 1 });
PostSchema.index({ location: "2dsphere" });
PostSchema.index({ createdAt: -1 });
