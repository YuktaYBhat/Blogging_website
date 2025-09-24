import axios from "axios";
import { useEffect, useState } from "react";
import { PRO_URL } from "../componenets/URL";
interface BlogType{
            title: string,
            content: string,
            published: boolean,
            id: string,
                name: string
            
}

export const useBlogg = () => {
  const [loading, setLoading] = useState(true);
  const [Blogs, setBlogg] = useState<BlogType[]>([]);
  const [user, setuser] = useState({});

  async function fetchBlogs() {
    try {
      const response = await axios.get(`${PRO_URL}/api/v1/blog`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // Directly set the response data instead of stringifying it
      setBlogg(response.data.msg || []);
      setLoading(false);

      const a = localStorage.getItem("username");
      setuser(a || 'anonymous');
      
      console.log("y", response.data.msg);
      console.log("yu1", JSON.stringify(response.data.msg, null, 2));
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false); // Add this line to stop loading on error
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { loading, Blogs, user };
};
