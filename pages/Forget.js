import Image from "next/image";
import Logo from "../static/nextcampus.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
const API_BASE = "http://localhost:8080";
export default function Forget() {
  const [email,setEmail]=useState();
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      toast.error("Invalid email address.");
      return false;
    }
    return true;
  };
  const sendOtp=async()=>{
    if(validateEmail())
    {
    try {
      const response = await axios.post(API_BASE + "api/otp/sendOtp", {
        email
      });
      toast.success("otp send successfully");
    } catch (error) {
      toast.error(error);
    }
    }
  }
  return (
    <div className="flex justify-items-center">
      <div className="mt-10 w-96 my-8">
        <div>
          <ToastContainer />
          <Image className="h-20 w-auto" src={Logo} alt="Logo" />
          <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot Password
          </h2>
        </div>
        <div>
          <form method="POST" className="space-y-6" onSubmit={sendOtp}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
                value={email}
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
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative hidden w-0 h-screen flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt=""
        />
      </div>
    </div>
  );
}