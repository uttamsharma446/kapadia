import { Post } from "@/models/post";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    const searchValue=request?.nextUrl.searchParams.get("q")
    let query = {};
 
    await connectToDB();

    if (searchValue) {
      query.$or = [
        { tags: { $regex: searchValue, $options: "i" } },
        { "creator.username": { $regex: searchValue, $options: "i" } },
        { prompt: { $regex: searchValue, $options: "i" } }
      ];
    }

    const post = await Post.find(query).populate("creator");
    
    return new Response(JSON.stringify(post), {
      status: 200,
    });
  } catch (e) {
    return new Response("Failed to failed", {
      status: 500,
    });
  }
};
