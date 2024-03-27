"use client";

import Form from "@/components/Form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const UpdatePost = ({ params }) => {
  const router = useRouter();
  const postId = params?.id;
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);
  console.log(postId);
  const [submitting, setSubmitting] = useState(false);

  const handleUpdate = async (event) => {
    event.preventDefault();

    //
    try {
      setSubmitting(true);
      const response = await fetch(`/api/post/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
          ...post,
        }),
      });
      if (response.ok) {
        router.push("/profile/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/post/${postId}`);
        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {isLoading && <div>Loading</div>}
      {post && (
        <Form
          type={"Update"}
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={handleUpdate}
        />
      )}
    </>
  );
};

export default UpdatePost;
