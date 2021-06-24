import React, { useState } from "react";

const BlogForm = (props) => {
  const [addTitle, setAddTitle] = useState("");
  const [addContent, setAddContent] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPost({
      title: addTitle,
      content: addContent,
      id: Math.floor(Math.random() * 1000),
    });
    setAddContent("");
    setAddTitle("");
  };
  return (
    <div className="form-box">
    <h1>  Blog App</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label>Add title</label>
          <input
            type="text"
            placeholder="Title..."
            value={addTitle}
            onChange={(e) => setAddTitle(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label>Add content</label>
          <input
            ype="text"
            placeholder="Content..."
            value={addContent}
            onChange={(e) => setAddContent(e.target.value)}
          />
        </div>
        
        <div className="btn">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};
export default BlogForm;
