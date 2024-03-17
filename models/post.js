import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tags: {
    type: String,
    required: [true, "tags is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Post = models.Post || model("Post", PostSchema);
