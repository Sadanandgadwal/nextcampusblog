import Image from "next/image";
import Link from "next/link";
import Logo from "../static/logoLight.webp";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";
const API_BASE = "http://localhost:8080";
const signinByGoogle = async (event) => {
  try {
    const response = await axios.get(API_BASE + "/api/auth/google/url", {});
    toast.success("Registeration successfully done");
    console.log(response.data); // Handle the response data as needed
  } catch (error) {
    toast.error(error);
  }
  return;
};
export default function Register() {
  //const [Result, setResult] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //name validation
  const validateName = () => {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(name)) {
      toast.error("Invalid name. Only letters and spaces are allowed.");
      // alert(error);
      // alert('Hi');
      return false;
    }
    return true;
  };
  //email validation
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      toast.error("Invalid email address.");
      return false;
    }
    return true;
  };
  //mobile validation
  const validateMobile = () => {
    const regex = /^\d{10}$/;
    if (!regex.test(mobile)) {
      toast.error("Invalid mobile number. Only 10-digit numbers are allowed.");
      return false;
    }
    return true;
  };
  //password validation
  const validatePassword = () => {
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    if (password !== cpassword) {
      toast.error("Passwords and confirm password do not match.");
      return false;
    }
    return true;
  };
  function toggleModel(model) {
    if (model.style.display === "none") {
      model.style.display = "block";
    } else {
      model.style.display = "none";
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      validateName() &&
      validateEmail() &&
      validateMobile() &&
      validatePassword()
    ) {
      try {
        const response = await axios.post(API_BASE + "/api/auth/register", {
          name,
          email,
          mobile,
          password,
        });
        toast.success("Registeration successfully done");
        console.log(response.data); // Handle the response data as needed
      } catch (error) {
        toast.error(error);
      }
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-2 py-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <ToastContainer />
              <Image className="h-20 w-auto" src={Logo} alt="Logo" />
              <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="Username"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="enter Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mobile
                    </label>
                    <div className="mt-2">
                      <input
                        id="mobile"
                        name="mobile"
                        type="text"
                        value={mobile}
                        maxLength={10}
                        onChange={(event) => setMobile(event.target.value)}
                        autoComplete="mobile"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="enter Number"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email Address
                      </label>
                      <div className="absolute">
                        <i className=" text-gray-400 z-20 hover:text-gray-500"></i>
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete="email"
                        className=" leading-6 pr-20 z-0 focus:shadow focus:outline-none block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="enter email"
                      />
                      <div className="absolute top-7  right-2">
                        <button
                          onClick={() => setIsOpen(true)}
                          className="h-7 w-20 text-white rounded-lg bg-blue-700 hover:bg-blue-600"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <div>
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
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="absolute top-2 right-2">
                        <button className="h-10 w-20 text-white rounded-lg bg-blue-700 hover:bg-blue-600">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div> */}
                  <div>
                    <Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                    >
                      <div className=" bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                          <button onClick={() => setIsOpen(false)}>
                            Close
                          </button>
                          <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                              <p>Email Verification</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                              <p>
                                We have sent a code to your email
                                Sadanandgadwal@gmail.com
                              </p>
                            </div>
                          </div>

                          <div>
                            <form action="" method="post">
                              <div className="flex flex-col space-y-16">
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                  <div className="w-16 h-16 ">
                                    <input
                                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                      type="text"
                                      name=""
                                      id=""
                                    />
                                  </div>
                                  <div className="w-16 h-16 ">
                                    <input
                                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                      type="text"
                                      name=""
                                      id=""
                                    />
                                  </div>
                                  <div className="w-16 h-16 ">
                                    <input
                                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                      type="text"
                                      name=""
                                      id=""
                                    />
                                  </div>
                                  <div className="w-16 h-16 ">
                                    <input
                                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                      type="text"
                                      name=""
                                      id=""
                                    />
                                  </div>
                                  <div className="w-16 h-16 ">
                                    <input
                                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                      type="text"
                                      name=""
                                      id=""
                                    />
                                  </div>
                                  <div className="w-16 h-16 ">
                                    <input
                                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                      type="text"
                                      name=""
                                      id=""
                                    />
                                  </div>
                                </div>

                                <div className="flex flex-col space-y-5">
                                  <div>
                                    <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                      Verify Account
                                    </button>
                                  </div>

                                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                    <p>Didn't recieve code?</p>{" "}
                                    <a
                                      className="flex flex-row items-center text-blue-600"
                                      href="http://"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Resend
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>{" "}
                    </Modal>
                  </div>
                  {/* otp section */}
                  {/* <button className="bg-green-500 px-7 py-2 ml-40 rounded-md text-sm text-white font-semibold" onClick={toggleModel}>verify your Email</button> */}
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
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="enter Password"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="Confirm password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="cpassword"
                        name="password"
                        type="password"
                        value={cpassword}
                        onChange={(event) => setCpassword(event.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="enter Confirm Password"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Create New Account
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  {/* <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      Or continue with
                    </span>
                  </div> */}
                </div>
              </div>

              <div>
                {/* <button
                  type="submit"
                  onClick={signinByGoogle}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in with Google
                </button> */}
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
            Login if you already have account ?{"  "}
            <Link href="/Signin">Click Here</Link>
          </div>
        </div>
      </div>
    </>
  );
}
