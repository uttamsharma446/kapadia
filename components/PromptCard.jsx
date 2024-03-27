"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
const PromptCard = ({ post, onTagClick,onDelete,onEdit }) => {
  const { data: session } = useSession();
  const pathName=usePathname()
  const [copied, setCopied] = useState("");
  console.log(pathName,session)
  console.log(post.creator)
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };
  return (
    <div className="prompt_card">
      <div className="flex flex-col justify-between items-start ">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <p className="font-satoshi font-semibold text-gray-900 text-lg">
              {post.creator.username}
            </p>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
          <div className="copy_btn" onClick={handleCopy}>
            <Image
              src={
                copied === post.prompt
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              alt=""
              width={12}
              height={12}
            />
          </div>
        </div>

        <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
        <p
          className="font-inter text-sm blue_gradient cursor-pointer"
          onClick={() => onTagClick && onTagClick(post.tags)}
        >
          {post.tags}
        </p>
        {session?.user?.id === post?.creator?._id && pathName === "/profile" && (
          <div className="flex-center gap-2  mt-5">
            <p onClick={()=>onEdit(post)} className="font-inter text-sm green_gradient cursor-pointer">
              Edit
            </p>
            <p onClick={()=>onDelete(post)} className="font-inter text-sm orange_gradient cursor-pointer">
              Delete
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptCard;
