"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Profile from "@/components/Profile";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const handleDelete = async (post) => {
    console.log(post);
    try {
      const respones = await fetch(`/api/post/${post?._id}/`, {
        method: "DELETE",
      });
      if (respones.ok) {
        toast.success("Post deleted successfully");
      }
    } catch (err) {
      console.log(err);
    }
    //
  };
  const handleEdit = (post) => {
    console.log(post);
    router.push(`/update-post/${post?._id}`)
  };

  const getPosts = async () => {
    try {
      const response = await fetch(`/api/users/${session.user.id}/posts`);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (status === "authenticated") getPosts();
  }, [status]);

  return (
    <>
      {!isLoading && (
        <Profile
          name="My"
          desc="Welcome to your personalized profile page"
          data={posts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        ></Profile>
      )}
    </>
  );
};

export default ProfilePage;
