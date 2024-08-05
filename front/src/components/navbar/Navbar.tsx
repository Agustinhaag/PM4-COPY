"use client";
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SubNav from "./SubNav";
import UserDropdown from "./UserOptions";
import Image from "next/image";
import Link from "next/link";
import PATHROUTES from "@/helpers/PathRoutes";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

const Navbar: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isAHBlue, setIsAHBlue] = useState(true);
  const router = useRouter();
  const { dataUser, setDataUser } = useAuth();

  useEffect(() => {
    const menu: HTMLElement | null = document.getElementById("menu");
    const mostrar: HTMLElement | null = document.getElementById("mostrar");
    const cerrar: HTMLElement | null = document.getElementById("cerrar");
    const enlaces: NodeListOf<Element> = document.querySelectorAll(".enlaces");

    mostrar &&
      mostrar.addEventListener("click", () => {
        if (menu) {
          menu.classList.add("visible");
          menu.style.transition = "0.6s";
        }
      });

    cerrar &&
      cerrar.addEventListener("click", () => {
        menu && menu.classList.remove("visible");
      });

    enlaces &&
      enlaces.forEach((enlace) => {
        enlace.addEventListener("click", () => {
          menu && menu.classList.remove("visible");
        });
      });

    const interval = setInterval(() => {
      setIsAHBlue((prevIsAHBlue) => !prevIsAHBlue);
    }, 2000);

    return () => clearInterval(interval);
  }, [dataUser]);

  const handleLogout = () => {
    setDataUser(null);
    Cookies.remove("userData");
    router.push("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos: number = window.scrollY;
      const headerHeight = headerRef.current?.offsetHeight || 0;

      if (currentScrollPos > prevScrollPos && currentScrollPos > headerHeight) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      ref={headerRef}
      className={`flex justify-between items-center fixed w-full py-3 px-6 z-50 transition-colors duration-300 ${
        scrollDirection === "down" ? "bg-black bg-opacity-45" : "bg-custom-grey"
      }`}
    >
      <div className="flex-col flex">
        <div className="italic text-3xl flex items-center">
          <Image
            loading="lazy"
            src={"/logo-tech.png"}
            alt="AH-Tech"
            width={64}
            height={64}
          />
          <p
            className={`${
              isAHBlue ? "text-custom-white" : "text-custom-blue"
            } sm:text-3xl text-2xl`}
            style={{ transition: "color 0.5s ease" }}
          >
            <span
              className={`${
                isAHBlue ? "text-custom-blue" : "text-custom-white"
              } sm:text-3xl text-2xl`}
              style={{ transition: "color 0.5s ease" }}
            >
              AH
            </span>
            Tech
          </p>
        </div>
        {dataUser?.token && (
          <span className="text-white sm:flex hidden">
            <FaMapMarkerAlt />{" "}
            <small className="pl-1"> Enviar a {dataUser?.address}</small>
          </span>
        )}
      </div>

      {dataUser?.token ? (
        <>
          <SubNav
            typeClass={true}
            scrollDirection={scrollDirection}
            handleLogout={handleLogout}
          />
          <span
            id="mostrar"
            className="md:hidden text-white block cursor-pointer text-2xl relative right-1 order-1"
          >
            <RxHamburgerMenu />
          </span>
          <div className="md:flex hidden">
            <UserDropdown main={true} handleLogout={handleLogout} />
          </div>
        </>
      ) : (
        <div className="flex sm:gap-4 sm:text-lg text-sm gap-2 sm:flex-row flex-col text-custom-white">
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
    </header>
  );
};

export default Navbar;
