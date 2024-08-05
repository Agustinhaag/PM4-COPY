"use client";
import PATHROUTES from "@/helpers/PathRoutes";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdLogout } from "react-icons/md";

interface UserProps {
  main: boolean;
  handleLogout: () => void;
}

const UserDropdown: React.FC<UserProps> = ({ main, handleLogout }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={main ? "relative md:block hidden" : "relative md:hidden block"}
    >
      <button
        onClick={toggleDropdown}
        className="text-2xl hover:text-custom-blue focus:outline-none"
      >
        <HiOutlineUserCircle className="text-white text-6xl hover:text-custom-blue" />
      </button>
      {isOpen && (
        <div className="absolute right-0 w-48 bg-custom-grey text-white border-2 rounded-lg shadow-lg py-2 z-10 flex flex-col items-center gap-2 transition-all duration-500">
          <Link
            href={PATHROUTES.DASHBOARD}
            onClick={() => setIsOpen(false)}
            className="enlaces hover:text-custom-blue my-0"
          >
            PROFILE
          </Link>
          <div className="w-full border"></div>
          <button
            onClick={handleLogout}
            className="enlaces hover:text-custom-blue my-0 text-2xl"
          >
            <MdLogout />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
