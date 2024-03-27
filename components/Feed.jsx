"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

export const PromptCardList = ({ data, onTagClick }) => {
  return (
    <div className="mt-8 prompt_layout">
      {data.map((post, index) => (
        <PromptCard key={index} post={post} onTagClick={onTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("api/post");
      const data = await response.json();
      setPosts(data);
    })();
  }, []);

  return (
    <section>
      <form className="relative w-full flex-center mt-10">
        <input
          type="text"
          placeholder="Search for tag or a username"
          value={searchText}
          onChange={handleSearchText}
          className="search_input peer"
        ></input>
      </form>
      <PromptCardList data={posts} onTagClick={() => {}}></PromptCardList>
    </section>
  );
};

export default Feed;
