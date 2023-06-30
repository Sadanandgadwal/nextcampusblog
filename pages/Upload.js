import TextEditor from "../components/TextEditor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
const API_BASE = "http://localhost:8080/";

const UploadModal = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState([]);
  const [content,setContent]=useState();  
  // Fetch Categories 
  const showCategory = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(API_BASE + "api/category/list", {});
      const categoriesData = response.data.data;
      setCategories(categoriesData);
      console.log('---------',categories.name,'++++++++++',selectedCategory);
    } catch (error) {
      console.error(error);
      setCategories([]);
    }
  };
  // useEffect(() => {
  //   showCategory();
  // }, []); // Empty dependency array
  const handleSubmitBlog = async (event) => {
    event.preventDefault();
      try {
        const response = await axios.post(API_BASE + "api/blog/6415a5f0d951b3b2baba185c/create", {
          title,
          selectedCategory,
          content
        });
        toast.success("Blog Created Successfully");
        console.log(response.data); // Handle the response data as needed
      } catch (error) {
        toast.error(error);
      }
    }
  return (
    <div className="w-[40rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll" onClick={showCategory}>
      <div className="my-[2rem] font-bold text-3xl">Upload a Post</div>
      <div>
        <form className="space-y-6"
                  method="POST"
                  onSubmit={handleSubmitBlog}
                  >
          <div className="w-full flex justify-between gap-[1rem]">
            <span className="flex-1 text-end">Title</span>
            <span className="flex-[5] h-min border-2 border-[#787878]">
              <input
                className="w-full border-0 outline-none bg-transparent"
                type="text"
                id="title"
                name="title"
                autoComplete="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </span>
          </div>
          {/* <div className="w-full flex justify-between gap-[1rem]" onLoad={showCategory}>
            <span className="flex-1 text-end">Categories</span>
            <span className="flex-[5] h-min border-2 border-[#787878]">
              <input
                className="w-full border-0 outline-none bg-transparent"
                type="text"
                placeholder="Brief"
                id="category"
                name="category"
                autoComplete="category"
                value={category}
                onChange={(event) => setName(event.target.value)}        
              />
            </span>
          </div> */}

          <div className="w-full flex justify-between gap-[1rem]">
          <span className="flex-1 text-end">Category</span>
          <span className="flex-[5] h-min border-2 border-[#787878]">
            <select
              id="categoryDropdown"
              className="w-full border-0 outline-none bg-transparent"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {/* Dynamically generated options */}
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </span>
        </div>
        {/* <button type="button" onClick={showCategory}>
          Show Categories
        </button> */}

          <div className="w-full flex justify-between gap-[1rem]">
            <span className="flex-1 text-end">Article Text</span>
            <span className="flex-[5] h-min border-2 border-[#787878]">
            </span>
            <span><TextEditor 
            type="text"
            id="content"
            name="content"
            autoComplete="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            /></span>
          </div>

          <button className="bg-black text-white py-2 px-4 rounded-full">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UploadModal;
