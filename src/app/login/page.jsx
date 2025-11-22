"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

const Page = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { data } = useSession();
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", { redirect: true, email, password });
    console.log(res);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <button
        onClick={() => {
          signOut();
        }}
        className="text-black"
      >
        dignout
      </button>
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{isLogin ? "Welcome back" : "Create account"}</h1>
          <p className="text-gray-600">{isLogin ? "Sign in to your account" : "Get started with your account"}</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${isLogin ? "bg-white text-gray-900 shadow-xs" : "text-gray-600"}`}>
              Sign In
            </button>
            <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${!isLogin ? "bg-white text-gray-900 shadow-xs" : "text-gray-600"}`}>
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                name="email" // important for e.target.email
                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password" // important for e.target.password
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>
            )}

            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {isLogin ? "Sign in" : "Create account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;

// user validarion ok now add something like on auth
