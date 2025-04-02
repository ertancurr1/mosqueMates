const CommentSchema = {
  post: { type: ObjectId, ref: "Post" }, // Related post
  user: { type: ObjectId, ref: "User" }, // Comment author
  content: String, // Comment text
  likes: [{ type: ObjectId, ref: "User" }], // Users who liked the comment
  parent: { type: ObjectId, ref: "Comment" }, // For threaded comments
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
};
