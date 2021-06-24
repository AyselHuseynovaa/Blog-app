import React, { useState } from "react";
import "./style/App.css";
import BlogForm from "./componenets/BlogForm";
import Blog from "./componenets/Blog";

const currentPosts = [
  {
    id: Math.floor(Math.random() * 1000),
    title: "Post 1",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, corrupti. ",
    imgUrl:"https://images.pexels.com/photos/5799946/pexels-photo-5799946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: "Post 2",
    content: "This is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, corrupti.  !",
    imgUrl:"https://images.pexels.com/photos/6262732/pexels-photo-6262732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: "Post 3",
    content: "This is my Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, corrupti.!",
    imgUrl:"https://images.pexels.com/photos/5731337/pexels-photo-5731337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
];

function App() {
  const [posts, setPosts] = useState(currentPosts);
  const addPostHandler = (post) => {
    console.log(post);
    setPosts((prevPosts) => [...prevPosts, post]);
  };


  const onDeleteHandler = (id) => {
    setPosts((prevPosts) => prevPosts.filter((p) => p.id !== id));
  };
  return (
    <div className="App container">
      <BlogForm addPost={addPostHandler} />
      <Blog posts={posts} onDelete={onDeleteHandler} />
    </div>
  );
}

export default App;
