import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../static/nextcampus.jpg";
import pLogo from "../static/martin-sanchez-G78c3DPmD_A-unsplash.jpg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Link from "next/link";

import axios from "axios";

const PostCard = ({ blog }) => {
  const [categories, setCategories] = useState([]);
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
  
  return (
    <Link key={blog._id} href={`/post/${blog._id}`}>
      <div className="flex place-content-center">
        <div className="max-w-[110rem] h-[11rem] flex pl-2 items-center gap-[2rem] cursor-pointer">
        
          <div className="flex-[3.5] flex flex-col">
            <div className="flex gap-[1rem]">
              <div className="grid place-items-center rounded-full overflow-hidden h-[1.6rem] w-[1.6rem]">
                <Image
                  src={Logo}
                  alt="author"
                  className="object-cover"
                  height={40}
                  width={40}
                />
              </div>
              {/* <div className="font-semibold">{blog.author}</div> */}
            </div>
            <h1 className="font-bold text-2xl">{blog.title}</h1>
            {/* <div className="text-[#787878]">{blog.description}</div> */}
            <div className="flex items-center justify-between text-[#787878]">
              <span className="my-2 text-[1rem]">
                {blog.date}{blog.category}
                <span className="bg-[#F2F3F2] p-1 rounded-full">
                  
                </span>
              </span>
              <span className="cursor-pointer">
                <BookmarkBorderIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
          <div className="flex-1">
            <Image src={pLogo} alt="thumbnail" height={120} width={120} />
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
        const response = await axios.get(
          "http://localhost:8080/api/blog/readAllBlogs"
        );
        const blogs = response.data.data;
        setBlogs(blogs);
        console.log(blogs.title);
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
