// import { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Blog = () => {
  const { data: blogs, isPending, error, setData } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading . . . </div>}
      {blogs && <BlogList blogs={blogs} setData={setData} title="All blogs" />}
    </div>
  );
};

export default Blog;
