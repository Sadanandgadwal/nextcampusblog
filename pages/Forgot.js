import Image from "next/image";
import Logo from "../static/nextcampus.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const API_BASE = "http://localhost:8080";
export default function Forgot() {
  const sendOTP = async (email, otp) => {
    const data = {
      type: "number",
      input: email,
      otp: otp,
    };

    return await axios.post(API_BASE + "/api/otp", data);
  };

  const handleotp = () => {
    const email = document.getElementById("email").value;
    const otp = document.getElementById("otp").value;

    sendOTP(email, otp).then((response) => {
      if (response.data.success) {
        console.log("OTP sent successfully");
      } else {
        console.log("Error sending OTP");
      }
    });
  };
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
          <form action="#" method="POST" className="space-y-6">
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
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleotp}
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
