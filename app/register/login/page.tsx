import React from "react";
import Image from "next/image";
import googleLogo from "/public/images/google.png";
import twitterLogo from "/public/images/twitter.png";
import envelopeLogo from '/public/images/envelope.png';
import Link from "next/link";

const Login = () => {
  return (
    <section className="bg-gray-100 flex items-center justify-center min-h-screen pt-8 pb-8">
      <div className="">
        <div className="rounded-lg w-full max-w-md px-6 py-4 space-y-4 bg-white shadow-md">
          <h2
            className="font-inter leading-[33.6px] tracking-tight text-xl font-semibold
           text-gray-900 text-center"
          >
            Login
          </h2>
          <p className="font-inter  mx-2 text-gray-500 font-inter font-normal text-base leading-[23.2px]">
            Enter your credentials to access your account
          </p>
          <form className="space-y-4 w-full max-w-[512px] h-auto max-h-[842px] rounded-lg px-4 gap-2">
           
            <div className="relative mt-1">
            <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Address
              </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    minLength={6}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Image
                    src={envelopeLogo}
                    alt="envelope icon"
                    className="w-5 h-5 mt-4"
                    width={20}
                    height={20}
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
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="flex justify-between items-center px-2 py-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a
                href="#"
                className="text-golden-pink hover:underline  text-customForgotPassword"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-0"
            >
              Log into Account
            </button>
          </form>
          <div className="flex items-center justify-between left-[183.5px] pr-[16px] pl-[16px]">
            <hr className="w-full border-gray-300 " />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="w-full border-gray-300" />
          </div>
          <div className="space-y-2 w-full max-w-[512px] h-auto max-h-[842px] rounded-lg px-4 gap-2">
            <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-50">
              <Image
                src={googleLogo}
                alt="Google"
                className="w-5 h-5 mr-2"
                width={20}
                height={20}
              />
              Continue with Google
            </button>
            <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-50">
              <Image
                src={twitterLogo}
                alt="Twitter"
                className="w-5 h-5 mr-2"
                width={20}
                height={20}
              />
              Continue with Twitter
            </button>
          </div>

          <div className="text-center mb-0">
            <p className="text-gray-500">
              Are you new here?{" "}
              <Link
                href={"/register/signup"}
                className="text-blue-500 hover:text-blue-800"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
