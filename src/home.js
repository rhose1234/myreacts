import { useEffect, useState } from 'react';
import BlogList from './blogList';

const Home = () => {
const  [blogs, setBlogs] = useState ([
    {title: 'my new blog', body:'i stand on the rock', author:'rose', id:1 },
    {title: 'my new blog', body:'i stand on the rock', author:'marvelous', id:2 },
    {title: 'my new blog', body:'i stand on the rock', author:'rose', id:3 }
  ]);

    const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
  
useEffect(() => {
  console.log("my name is rose marvelous");
})
    
    return ( 

    <div className="Home container col-lg-6">
      <BlogList blogs={blogs} title="All blogs are here!"  handleDelete={handleDelete}/>
      <BlogList blogs = {blogs.filter((blog) => blog.author === "rose")} title="ROSIE'S BLOG" />
    
    </div>
     );
    
    }
export default Home;