import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Logo from "../static/logoLight.webp";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_BASE = "http://localhost:8080/";

const handleSigninWithGoogle = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.get(API_BASE + "api/auth/google/url", {});
    window.location.href = response.data.data.authorizeUrl;
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.error(error);
  }
};
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(API_BASE + "/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      toast.success("Signed successfully");
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      toast.error(error);
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-2 py-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <ToastContainer />
              <Image className="h-20 w-auto " src={Logo} alt="Logo" />
              <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign In
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSignin}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {/* <div>
                        {" "}
                        <Link href="/Register">Create New Account </Link>
                      </div> */}
                    </div>

                    <div className="text-sm leading-6">
                      <div
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        <Link href="/Forget">Forget Password </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              <div>
                    <button
                      type="button"
                      className="flex w-full justify-center mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={handleSigninWithGoogle}
                    >
                      SignUp with Google
                    </button>
                  </div>
            </div>
          </div>
        </div>
        <div className=" relative hidden w-0 h-screen flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://img.freepik.com/free-vector/blurred-abstract-background-design_1107-169.jpg?w=1060&t=st=1687438155~exp=1687438755~hmac=31acfba67267137d7efc6580b30b550c5b62c1bcaf8a153bf880994521fe97ed
            "
            alt=""
          />
          <div className="absolute text-5xl text-white  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Register if you Don't have account ?{"  "}
            <div className="text-4xl mt-3 text-gray-300">
              <Link href="/Register">Click Here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
