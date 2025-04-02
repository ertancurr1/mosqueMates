const UserSchema = {
  username: String, // Unique username
  email: String, // Unique email
  password: String, // Hashed password
  name: String, // Full name
  profileImage: String, // URL to profile image
  bio: String, // Short user biography
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: [Number], // [longitude, latitude]
  },
  interests: [String], // Islamic topics of interest
  role: { type: String, enum: ["user", "scholar", "admin"], default: "user" },
  isVerified: { type: Boolean, default: false },
  following: [{ type: ObjectId, ref: "User" }], // Users they follow
  followers: [{ type: ObjectId, ref: "User" }], // Users following them
  saved: [{ type: ObjectId, ref: "Post" }], // Saved posts
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
};

// Add indexes
UserSchema.index({ username: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ location: "2dsphere" });
