import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PRO_URL } from "../componenets/URL";
import { BloggCard } from "../componenets/BloggCard"; // 👈 import your card
import { AppBar } from "../componenets/AppBar";

interface BlogType {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author?: { name: string };
  name?: string; // fallback if backend sends just "name"
}

export const BlogByIdPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogType >();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get(`${PRO_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBlog(response.data.msg);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found</div>;

  // Format date safely (your backend may return ISO date string)
  const publishedDate = new Date().toLocaleDateString("en-GB"); // placeholder; update if you have real `createdAt`

  return (
    <div className="p-6">
    
        <AppBar  authname={String(blog.author?.name)}/>
      <BloggCard                     // you can pass blog.author?.profile if available
        authname={blog.author?.name || blog.name || "Unknown"}
        content={blog.content}
        publishedDate={publishedDate}
        title={blog.title}
        BloggImg={' /vite.svg'}     // placeholder, replace with blog.image if you add one
      />
    </div>
  );
};
