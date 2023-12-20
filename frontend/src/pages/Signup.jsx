import React, { useState } from "react";
import {useDispatch} from "react-redux"
import {registerUserAction} from "../actions/userActions"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const handlePasswordClick = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleConfirmPasswordClick = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const handleFileInputChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FileReader.DONE) {
        // console.log(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Password not matched")
    }else{
      dispatch(registerUserAction(name,email,password,avatar))
    }
  }


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm-rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  value={name}
                  autoComplete="name"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  value={email}
                  name="email"
                  autoComplete="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  name="password"
                  autoComplete="password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                  onChange={(e)=>setPassword(e.target.value)}
                />
                {passwordVisible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={handlePasswordClick}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={handlePasswordClick}
                  />
                )}
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    value={confirmPassword}
                    name="password"
                    autoComplete="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                  {confirmPasswordVisible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={handleConfirmPasswordClick}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={handleConfirmPasswordClick}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember Me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href=".forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-2 flex items-center ">
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                    {avatar ? (
                      <img
                        src={avatar}
                        alt={avatar}
                        className="h-full w-full object-cover rounded"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )}
                  </span>
                  <label
                    htmlFor="input-file"
                    className="ml-5 flex items-center justify-center cursor-pointer px-4 py-2 border border-gray-500 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <span>Upload a File</span>
                    <input
                      type="file"
                      // value={avatar}
                      name="avatar"
                      id="input-file"
                      accept=".jpg, .jpeg, .png"
                      className="sr-only"
                      onChange={handleFileInputChange}
                    />
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
              <div className="flex items-center w-full">
                <h4>Already member?</h4>
                <Link to="/login" className="text-blue-600 pl-2">
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
