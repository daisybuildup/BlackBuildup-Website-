"use client";
import React, { useState } from "react";

const Sign = ({ setIsOpenProp }) => {
  const [mode, setMode] = useState("signin");

  // Reusable text setup
  const sign = {
    header: mode === "signin" ? "Sign In" : "Create Account",
    text:
      mode === "signin"
        ? "Welcome back! Sign in to your account"
        : "Join our community and help create positive change",
    button: mode === "signin" ? "Sign In" : "Sign Up",
    logstate:
      mode === "signin"
        ? "Don't have an account? "
        : "Already have an account? ",
    toggleText: mode === "signin" ? "Sign Up" : "Sign In",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${mode} submitted`);
  };

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black/70 flex justify-center items-center z-[1000] px-6"
      onClick={() => setIsOpenProp(false)} // close on background click
    >
      <div
        className="text-[#4B5564] rounded-[12px] bg-white py-6 px-4 sm:py-8 sm:px-6 
                   w-full max-w-md sm:max-w-lg md:max-w-xl 
                   max-h-[70vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h1 className="text-[#0F4082] font-bold text-[24px] mb-2">{sign.header}</h1>
        <p className="text-sm mb-6   text-[#4B5564]">{sign.text}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
         {/* {mode === "signup" && (
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                required
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#0F4082]"
              />
            </div>
          )}*/}

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#0F4082]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#0F4082]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0F4082] text-white py-2 rounded-2xl mt-4 hover:bg-[#103e79]"
          >
            {sign.button}
          </button>
        </form>

        <p className="text-lg text-center mt-6 text-[#0F4082]">
          {sign.logstate}
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="text-[#0F4082] hover:underline"
          >
            {sign.toggleText}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Sign;
