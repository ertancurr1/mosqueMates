const MosqueSchema = {
  name: String, // Mosque name
  description: String, // About the mosque
  images: [String], // Mosque images
  location: {
    address: String, // Human-readable address
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: [Number], // [longitude, latitude]
  },
  contact: {
    phone: String,
    email: String,
    website: String,
  },
  services: [String], // Services offered
  prayerTimes: {
    fajr: String,
    dhuhr: String,
    asr: String,
    maghrib: String,
    isha: String,
    jummah: String,
  },
  addedBy: { type: ObjectId, ref: "User" }, // User who added mosque
  verified: { type: Boolean, default: false }, // Verified mosque
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
};

// Add indexes
MosqueSchema.index({ location: "2dsphere" });
MosqueSchema.index({ "location.address": "text", name: "text" });
