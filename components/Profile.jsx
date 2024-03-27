"use client";
import { PromptCardList } from "./Feed";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, onDelete, onEdit }) => {
  const handleTagClick = () => {
    //
  };
  
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
        <p className="desc text-left">{desc}</p>
        <p className="text-xl mt-5">Your Posts</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 mb-5">
          {data.map((post, index) => (
            <PromptCard
              key={index}
              post={post}
              onDelete={onDelete}
              onEdit={onEdit}
              onTagClick={handleTagClick}
              className="bg-white shadow-md rounded-md p-4"
            />
          ))}
        </div>
      </h1>
    </section>
  );
};

export default Profile;
