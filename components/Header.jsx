import Image from "next/image";
import Logo from "../static/logoLight.webp";
import Link from "next/link";
import Signin from "@/pages/Signin";
import { useEffect, useState } from "react";
const API_BASE = "https://ncblogbackend-production.up.railway.app/api/";
//const API_BASE = "https://nextcampusblog.onrender.com/api/";

const Header = () => {
  const [user_id, setuser_id] = useState({ log: "Signin", out: false });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setuser_id({
        out: true,
        log: "Hi , " + localStorage.getItem("userInfo"),
      });
    }
  }, []);

  const CreateBlog = () => {
    if (user_id == "sign In") window.location.href = "/Signin";
    else {
      const headers = {
        "X-User-ID": user_id,
      };
      (window.location.href = "/upload"), { headers };
    }
    window.location.href = `/Upload`;
  };
  const EraseToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("ally-supports-cache");
  };
  // const writeBlog=async ()=>{
  //   try {
  //     const response = await axios.get(API_BASE+"blog/"+user_id+"/create", {});
  //     window.location.href = response.data.data.authorizeUrl;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  return (
    <div className="flex justify-center gap-10 p-5 bg-[#1a1919]">
      <div className="max-w-7xl flex-1 flex justify-between gap-10">
        <div className="flex items-center flex-start">
          <Image
            className="cursor-pointer object-contain"
            src={Logo}
            alt="logo"
            height={40}
            width={200}
          />
        </div>
        <div className="flex cursor-pointer items-center space-x-5 text-white">
          <Link href="/Signin">{user_id.log}</Link>
          <div className="bg-[#3B91F8] text-white py-2 px-4 rounded-full">
            <Link href="" onClick={CreateBlog}>
              Lets Begin{" "}
            </Link>
          </div>
          {user_id.out && (
            <div className="bg-[#f83b3b] text-white py-2 px-4 rounded-full">
              <Link href="/Signin" onClick={EraseToken}>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
