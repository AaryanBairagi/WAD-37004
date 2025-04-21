import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/prac3b")
  .then(() => console.log("MongoDB connection completed"))
  .catch(err => console.error("MongoDB connection failed:", err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export const user = mongoose.model("User", userSchema);
