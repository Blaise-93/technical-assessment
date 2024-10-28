import Header from "./pages/header/header";
import React from "react";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-1.5 row-start-2 items-center sm:items-start">
        <Header />
        <div className="p-2 text-gray-800">
          <h1 className="text-2xl">Welcome to Homepage of E-Academy.</h1>
          <p className="text-base p-0">
            To view the Assessment, kindly click the navbar links to navigate
            you to the figma designs of the assignment
          </p>
        </div>
      </main>
    </div>
  );
}
