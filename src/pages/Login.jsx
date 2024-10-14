import React from "react";
import assets from "../assets/assets";

function Login() {
  return (
    <>
      <div className="h-[100vh] object-cover flex items-center justify-evenly bg-[url('/background.png')] grid-cols-2 ">
        <img src={assets.logo_big} alt="logo" className="" />
        <div className="rounded-xl shadow-lg p-10 text-slate-50 backdrop:blur-md border border-slate-400 bg-slate-800 bg-opacity-30 relative ">
          <h2 className="text-center text-3xl font-semibold mb-6 ">Login</h2>
          <form action="">
            <div className="relative my-4">
              <input
                type="email"
                className="block max-w-lg  py-3 px-0 bg-transparent border-b-2 border-gray-300 text-slate-50 focus:outline-none focus:border-white peer"
              />
              <label
                htmlFor=""
                className="absolute bg-transparent text-sm duration-300 transform -translate-y-6 "
              >
                Email
              </label>
            </div>
            <div className="relative my-4">
              <input type="password" />
              <label htmlFor="">Password</label>
            </div>
            <div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember me</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
