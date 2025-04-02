const ResourceSchema = {
  title: String, // Resource title
  description: String, // Resource description
  contentType: {
    type: String,
    enum: ["article", "video", "book", "audio", "link"],
  },
  url: String, // External URL or file path
  tags: [String], // Topic tags
  category: String, // Resource category
  author: { type: ObjectId, ref: "User" }, // User who added resource
  likes: [{ type: ObjectId, ref: "User" }], // Users who liked resource
  post: { type: ObjectId, ref: "Post" }, // Associated post (if created from post)
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
};

// Add indexes
ResourceSchema.index({ tags: 1 });
ResourceSchema.index({ contentType: 1 });
ResourceSchema.index({ title: "text", description: "text" });
