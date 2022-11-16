import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="w-full md:auto md:static h-[15vh] lg:h-[8vh]"></div>
      <div className="fixed top-0 left-0 w-full  flex items-center justify-center border-b-2  bg-white z-[2] min-h-[60px] px-7 md:flex">
        <div className="text-blue-700 my-auto text-3xl font-semibold">
          Expense Tracker
        </div>
      </div>
    </>
  );
};

export default Navbar;
