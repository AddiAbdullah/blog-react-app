import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>{blog.body}</p>
          <p>Written by {blog.author}</p>
        </div>
      ))}
      <br />
      <Link to="/create">
        <h3> Add a New Blog</h3>
      </Link>
    </div>
  );
};

export default BlogList;
