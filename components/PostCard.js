import Image from "next/image";
import Logo from "../static/nextcampus.jpg";
import pLogo from "../static/martin-sanchez-G78c3DPmD_A-unsplash.jpg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Link from "next/link";

const PostCard = () => {
  return (
    <Link href={`/post/123`}>
      <div className="flex place-content-center">
        <div className="max-w-[110rem] h-[11rem] flex pl-2 items-center gap-[2rem] cursor-pointer">
          <div className="flex-[3.5] flex flex-col ">
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
              <div className="font-semibold">Sadanandgadwal</div>
            </div>
            <h1 className="font-bold text-2xl">
              {" "}
              This website is static for now with api integration it will
              dynamic website
            </h1>
            <div className="text-[#787878]">
              {" "}
              because at present api is not ready so far to complete the design
              we are going for static
            </div>
            <div className="flex items-center justify-between text-[#787878]">
              <span className="my-2 text-[1rem]">
                07 May 2023 • 5 min read •
                <span className="bg-[#F2F3F2] p-1 rounded-full">Content</span>
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

export default PostCard;