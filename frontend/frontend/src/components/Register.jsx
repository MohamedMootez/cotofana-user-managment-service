import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import {
  faEye,
  faEyeSlash,
  faCircleUser,
  faLock,
  faKey,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import loginImage from "../assets/images/login.png";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [repwd, setRepwd] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !email || !pwd) toast.error("All fields are required");
    else if (pwd != repwd) {
      toast.error("Passwords dont match");
    } else {
      const formData = {
        username: user,
        password: pwd,
        email: email,
      };
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_PROXY_URL}/signup`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        toast.success(`${response.data.message}`);
      } catch (err) {
        if (err?.response && err.response?.data&& err.response.data?.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error(err)
          console.log(`error while sending request to proxy ${err.message}`);
        }
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-row shadow-md  bg-amber-50  p-4 h-fit w-3/4 justify-around border-2 border-gray-200 rounded-2xl">
        <form
          className=" flex justify-center flex-col gap-7"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h1>

          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-gray-500 mr-3"
              size="lg"
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
              placeholder="Username"
              id="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              className="text-gray-500 mr-3"
              icon={faEnvelope}
              size="1x"
            />

            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faLock}
              size="1x"
              className="text-gray-500 mr-3"
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <button
              className=" hover:cursor-pointer ml-6"
              type="button"
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon className="text-gray-500 mr-3" icon={faKey} />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="password"
              id="repassword"
              placeholder="Repeat your password"
              value={repwd}
              onChange={(e) => setRepwd(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:cursor-pointer hover:text-indigo-300 active:accent-indigo-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
        <div className="w-1/4 h-3/4">
          <img
            className=" hidden md:block w-ful h-full object-contain"
            src={loginImage}
            alt="login image"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
