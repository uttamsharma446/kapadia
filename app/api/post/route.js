import { Post } from "@/models/post";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();
    const post = await Post.find({}).populate("creator");
    return new Response(JSON.stringify(post), {
      status: 200,
    });
  } catch (e) {
    
    return new Response("Failed to failed",{
        status:500, 
    })
  }
};
