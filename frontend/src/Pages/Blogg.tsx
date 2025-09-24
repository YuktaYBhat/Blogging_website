

import { AppBar } from "../componenets/AppBar";
import { BloggCard } from "../componenets/BloggCard";
import { useBlogg } from "./useBlogg";

export const Blogg = () => {
  const { loading, Blogs,user } = useBlogg();

  if (loading) {
    return (
      <div className="pt-2">
        Loading...
      </div>
    );
  }
console.log("we got :",Blogs)
  return (
    <div className="pt-2">
       
      <AppBar  authname={String(user)}/>
      {Blogs.map(blog=> (
        <div key={blog.id}>
          <BloggCard
             BloggImg={'./public/vite.svg'}
             authname={blog.name|| "annymus"}
            content={blog.content}
            publishedDate={"05-09-2024"}
            title={blog.title}
          />
         
        </div>
        
      ))}
    </div>
  );
};
