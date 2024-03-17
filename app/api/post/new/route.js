import { Post } from "@/models/post";
import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
  const { tags, prompt, userId } = await req.json();
  try {
    await connectToDB();
    const newPost = new Post({
      tags,
      prompt,
      creator: userId,
    });
    await newPost.save();
    console.log("a post",JSON.stringify(newPost))
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (er) {
    console.error("errr",err)
    return new Response("Failed to create new post", { status: 500 });
  }
};
