import Header from "./pages/header/header";
import React from "react";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-1.5 row-start-2 items-center sm:items-start">
        <Header />

        <div
          className="relative p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto my-8 transform 
              transition-transform hover:rotate-6"
        >
          <div
            className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: "url(./public/images/moonwalk.png)" }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-2xl text-customGreen font-bold text-dark-green-900">
              Welcome to Homepage of E-Academy
            </h2>
            <p className="mt-4 text-dark-green-700">
              To view the Assessment, kindly click the navbar links to navigate
              you to the figma designs of the assignment.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
