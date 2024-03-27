import { Post } from "@/models/post";
import { connectToDB } from "@/utils/database";

// GET(read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const post = await Post.findById(params.id).populate("creator");

    if (!post) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(post), {
      status: 200,
    });
  } catch (e) {
    return new Response("Failed to failed", {
      status: 500,
    });
  }
};

// PATCH (update)
export const PATCH = async (request, { params }) => {
  try {
    const { prompt, tags } = await request.json();
    await connectToDB();
    const post = await Post.findById(params.id).populate("creator");

    if (!post) return new Response("Prompt not found", { status: 404 });
    post.prompt = prompt;
    post.tags = tags;
    await post.save();
    return new Response(JSON.stringify(post), {
      status: 200,
    });
  } catch (e) {
    return new Response("Failed to failed", {
      status: 500,
    });
  }
};

// DELETE (delete)

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    console.log(request);
    const post = await Post.findById(params.id).populate("creator");
    if (!post) return new Response("Prompt not found", { status: 404 });
    await Post.deleteOne({_id:params.id})
    return new Response("Post delete sucessfully...", {
      status: 200,
    });
  } catch (e) {
    return new Response("Failed to failed", {
      status: 500,
    });
  }
};
