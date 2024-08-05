"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import SubNav from "./navbar/SubNav";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import PATHROUTES from "@/helpers/PathRoutes";

const Footer: React.FC = () => {
  const { dataUser } = useAuth();
  return (
    <footer className="bg-custom-grey w-full h-48 px-6 pb-5">
      <div className="flex justify-between h-4/5 pt-5">
        <div className="italic text-3xl flex items-center">
          <Image loading="lazy" src="/logo-tech.png" alt="AH-Tech" width={80} height={80} />
          <p className="text-3xl text-white">
            <span className="text-custom-blue text-3xl">AH</span>Tech
          </p>
        </div>
        <div className="flex justify-around w-1/5">
          {dataUser?.token ? (
            <SubNav typeClass={false} />
          ) : (
            <div className="text-custom-white sm:flex flex-col gap-3 hidden">
              <Link
                href={PATHROUTES.REGISTER}
                className={`hover:text-custom-blue `}
              >
                REGISTER
              </Link>
              <Link href={PATHROUTES.LOGIN} className="hover:text-custom-blue">
                LOGIN
              </Link>
            </div>
          )}

          <div className="flex flex-col justify-between items-center gap-2">
            <Link
              href={"https://www.instagram.com/agushaag22/"}
              className="text-2xl"
            >
              <FaInstagram className="text-red-600" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/agustin-gerardo-haag-letterucci-8a6546225/"
              }
              className="text-2xl"
            >
              <FaLinkedin className="text-blue-700" />
            </Link>
            <Link href={"mailto:agustin-haag@hotmail.com"} className="text-2xl">
              <IoMdMail className="text-cyan-600" />
            </Link>
            <Link
              href={"tel:+543548604817"}
              className="text-2xl text-custom-white"
            >
              <MdOutlinePhoneAndroid />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-white pt-5">
        &copy;All rights reserved AH Tech - 2024
      </p>
    </footer>
  );
};

export default Footer;
