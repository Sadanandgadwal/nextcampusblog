import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../static/logoLight.webp";
import pLogo from "../static/martin-sanchez-G78c3DPmD_A-unsplash.jpg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
const API_BASE = "https://ncblogbackend-production.up.railway.app/api/";
// const API_BASE='https://nextcampusblog.onrender.com/';
import { formatDateTime } from "./utility";

import Link from "next/link";

import axios from "axios";

const PostCard = ({ blog }) => {
  //const [categories, setCategories] = useState([]);

  const handleShare = () => {
    //setShowPopup(true);
    // Add your logic to handle sharing
  };

  const readFullBlog = async () => {
    // try {
    //   const response = await axios.get(
    //     API_BASE + "api/auth/login/api/blog/${blog._id}",
    // {});
    //   }catch(error){
    //     console.log(error);
    //   }
  };
  return (
    <Link key={blog._id} href={`/post/${blog._id}`}>
      <div className="flex place-content-center">
        <div className="max-w-[110rem] h-[11rem] flex pl-2 items-center gap-[2rem] cursor-pointer">
          <div className="flex-[3.5] flex flex-col">
            <div className="flex gap-[1rem]">
              <div className="grid place-items-center rounded-full overflow-hidden h-[1.6rem] w-[1.6rem]">
                {/* <Image
                  src={Logo}
                  alt="author"
                  className="object-cover"
                  height={40}
                  width={40}
                /> */}
              </div>
              {/* <div className="font-semibold">{blog.author}</div> */}
            </div>
            <h2>{blog.user_id.name}</h2>
            <h1 className="font-bold text-2xl">{blog.title}</h1>
            {/* <div className="text-[#787878]">{blog.description}</div> */}
            <div className="flex items-center justify-between text-[#787878]">
              <span className="my-2 text-[1rem]">
                {formatDateTime(blog.date)}
              </span>
              <div className="flex items-center gap-2">
                <BookmarkBorderIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={handleShare}
                />
              </div>
              {/* <div>
        <span className="bg-[#F2F3F2] p-1 rounded-full">
                {blog.content[0].text}</span>
        </div> */}
            </div>
          </div>
          <div className="flex-1">
            <img src={blog.images} alt="thumbnail" height={120} width={120} />
            {/* <Image src={images} alt="thumbnail" height={120} width={120} /> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

const AllPosts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(API_BASE + "blog/readAllBlogs");
        // "https://nextcampusblog.onrender.com/api/blog/readAllBlogs"
        const blogs = response.data.data;
        setBlogs(blogs);
        console.log(blogs.title);
        //console.log();
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      {Array.isArray(blogs) &&
        blogs.map((blog) => <PostCard key={blog._id} blog={blog} />)}
    </>
  );
};

export default AllPosts;

// const [selectedCategory,setSelectedCategory] = useState([]);
// const showCategory = async (event) => {
//   event.preventDefault();
//   try {
//     const response = await axios.get(API_BASE + "api/category/list", {});
//     const categoriesData = response.data.data;
//     setCategories(categoriesData);
//     console.log('---------',categories.name,'++++++++++',selectedCategory);
//   } catch (error) {
//     console.error(error);
//     setCategories([]);
//   }
// };
