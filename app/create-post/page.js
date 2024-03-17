"use client"
import Form from "@/components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [post, setPost] = useState({ prompt: "", tags: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hello")
    setSubmitting(true);

    if (!session) {
      console.error("User session not found."); // Handle case where session is not available
      setSubmitting(false);
      return;
    }

    const body = {
      ...post,
      userId: session.user.id,
    };

    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Failed to submit post:", response.status); // Log error if request fails
      }
    } catch (error) {
      console.error("Error submitting post:", error); // Log error if fetch operation fails
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type={"new"}
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreatePost;
