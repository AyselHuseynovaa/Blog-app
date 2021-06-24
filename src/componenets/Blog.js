import React from "react";

const Blog = (props) => {
  return (
    <div className="blog-box">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.posts.map((post) => (
          <div className="col" key={post.id}>
            <img src={post.imgUrl} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <span className="card-text">{post.content}</span>
              <button onClick={() => props.onDelete(post.id)}>
                Delete
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
