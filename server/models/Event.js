const EventSchema = {
  title: String, // Event title
  description: String, // Event details
  host: { type: ObjectId, ref: "User" }, // Event creator
  startDate: Date, // Start date and time
  endDate: Date, // End date and time
  location: {
    address: String, // Human-readable address
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: [Number], // [longitude, latitude]
  },
  image: String, // Event image URL
  category: {
    type: String,
    enum: ["lecture", "social", "charity", "prayer", "other"],
  },
  attendees: [{ type: ObjectId, ref: "User" }], // Users attending
  interestedCount: { type: Number, default: 0 }, // Number of interested users
  post: { type: ObjectId, ref: "Post" }, // Associated post (if created from post)
  isVirtual: Boolean, // Whether event is virtual
  meetingLink: String, // Link for virtual events
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
};

// Add indexes
EventSchema.index({ startDate: 1 });
EventSchema.index({ host: 1 });
EventSchema.index({ location: "2dsphere" });
