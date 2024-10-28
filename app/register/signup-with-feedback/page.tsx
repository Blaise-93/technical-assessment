"use client";

import React, { useState } from "react";
import Image from "next/image";
import googleLogo from "/public/images/google.png";
import twitterLogo from "/public/images/twitter.png";
import alertIcon from "/public/images/alert-circle.png";
import Link from "next/link";

/**
 * An interface representing an alert with an id, type, and message for the feedback signup.
 */
interface Alert {
  id: number;
  type: "red" | "yellow" | "green";
  message: string;
}

/**
 * React component managing alerts with their state for the signup with feedback.
 *
 * The component contains three initial alerts of different types: red, yellow, and green.
 * Users can remove an alert by clicking the close button.
 *
 * @returns JSX.Element - The rendered signup form and alerts.
 */
const SignupWithFeedBack = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    { id: 1, type: "red", message: "A placeholder for alert" },
    { id: 2, type: "yellow", message: "A placeholder for alert" },
    { id: 3, type: "green", message: "A placeholder for alert" },
  ]);

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <section className="bg-gray-100 flex items-center justify-center min-h-screen pt-8 pb-8">
      <div className="">
        <h1 className="p-2 text-2xl font-inter font-semibold leading-9 text-gray-900 text-center">
          E-Academy
        </h1>
        <div className="rounded-lg w-full max-w-md px-6 py-4 space-y-4 bg-white shadow-md">
          <h2 className="font-inter leading-[33.6px] tracking-tight text-xl font-semibold text-gray-900 text-center">
            Create an account
          </h2>
          <p className="text-gray-500 font-inter font-normal text-base leading-[23.2px]">
            Enter your credentials to create your account
          </p>

          <form className="space-y-4 w-full max-w-[512px] h-auto max-h-[842px] rounded-lg px-4 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md 
                shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
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
                minLength={6}
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                minLength={6}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-0"
            >
              Create an account
            </button>
          </form>

       
          {/* Alerts Section */}
          <div className="space-y-2 w-full max-w-[512px] h-auto max-h-[842px] rounded-lg px-4 gap-2">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-center justify-between px-2 py-1 rounded-md relative ${
                  alert.type === "red"
                    ? "bg-customLightOrange text-customError"
                    : alert.type === "yellow"
                    ? "bg-yellow-100 text-customOrange"
                    : "bg-green-200 text-customGreen"
                }`}
              >
                <button
                  className="absolute left-3"
                  onClick={() => removeAlert(alert.id)}
                >
                  <Image
                    src={alertIcon}
                    alt="alert icon"
                    className="mr- w-5 h-5"
                    width={16}
                    height={16}
                  />
                </button>
                <span className="font-medium ml-[2em]">{alert.message}</span>
              </div>
            ))}
          </div>

          {/* End of Alerts Section */}

          <div className="space-y-2 w-full max-w-[512px] h-auto max-h-[842px] rounded-lg px-4 gap-2">
            <button
              className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm flex 
                items-center justify-center text-gray-700 hover:bg-gray-50"
            >
              <Image
                src={googleLogo}
                alt="Google"
                className="w-5 h-5 mr-2"
                width={20}
                height={20}
              />
              Continue with Google
            </button>
            <button
              className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm flex 
            items-center justify-center text-gray-700 hover:bg-gray-50"
            >
              <Image
                src={twitterLogo}
                alt="Twitter"
                className="w-5 h-5 mr-2"
                width={20}
                height={20}
              />{" "}
              Continue with Twitter
            </button>
          </div>

          <div className="flex items-center justify-between">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="w-full border-gray-300" />
          </div>

          <div className="text-center mb-0">
            <p className="text-gray-500">
              Already here?{" "}
              <Link
                href="/register/login"
                className="text-blue-500 hover:text-blue-800"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupWithFeedBack;
