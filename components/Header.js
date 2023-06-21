import Image from "next/image";
import Logo from "../static/logo.svg";
import Link from "next/link";
const Header = () => {
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
          <Link href="/Register">Sign up </Link>
          <div className="bg-[#3B91F8] text-white py-2 px-4 rounded-full">
            <Link href="/Blog">Lets Begin </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
