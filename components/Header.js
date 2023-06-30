import Image from "next/image";
import Logo from "../static/logo.svg";
import Link from "next/link";
import { useRouter } from 'next/router';
const API_BASE = "http://localhost:8080/api/";
const Header = () => {
  const router = useRouter();
  let { user_id } = router.query;
  if(!user_id )
    user_id="sign In"
  const CreateBlog=()=>{
    if(user_id=='sign In')
      window.location.href = '/Signin';
    else
      {
        const headers = {
          'X-User-ID': user_id,
        };
        window.location.href = '/upload', { headers };
      }
      console.log('8888888888888888',user_id);
      window.location.href=`/Upload`;
  }
  // const writeBlog=async ()=>{
  //   try {
  //     const response = await axios.get(API_BASE+"blog/"+user_id+"/create", {});
  //     window.location.href = response.data.data.authorizeUrl;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }      
  return (
    <div className="flex justify-center gap-10 p-5 bg-[#1a1919]" >
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
          <Link href="/Register">{user_id}</Link>
          <div className="bg-[#3B91F8] text-white py-2 px-4 rounded-full">
            <Link href="" onClick={CreateBlog} >Lets Begin </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
