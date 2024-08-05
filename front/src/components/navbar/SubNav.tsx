import React from "react";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import UserDropdown from "./UserOptions";
import { HiOutlineShoppingCart } from "react-icons/hi";
import PATHROUTES from "@/helpers/PathRoutes";
import { usePathname } from "next/navigation";

interface SubNavProps {
  typeClass: boolean;
  scrollDirection?: string;
  handleLogout?: () => void | undefined;
}

const SubNav: React.FC<SubNavProps> = ({
  typeClass,
  scrollDirection,
  handleLogout,
}) => {
  const classHeader: string =
    "flex flex-col rounded-bl-2xl md:visible invisible md:flex-row text-custom-white justify-start fixed md:relative top-0 right-0 text-right md:justify-between md:w-1/3 w-1/4 min-w-36 md:min-w-80 items-center z-50 md:py-0 md:px-0 px-5 pt-14 translate-x-full md:translate-x-0 h-3/4 md:h-6";
  const classFooter: string =
    "md:flex flex-col gap-3 hidden text-custom-white justify-between items-start w-auto text-sm";
  const pathName = usePathname();

  return (
    <nav
      id="menu"
      className={`${typeClass ? classHeader : classFooter} ${
        scrollDirection === "down" ? "bg-transparent" : ""
      }`}
    >
      <Link
        href={PATHROUTES.LANDING}
        className={`enlaces hover:text-custom-blue ${
          pathName === PATHROUTES.LANDING ? "text-custom-blue" : ""
        } `}
      >
        INICIO
      </Link>
      <Link
        href={PATHROUTES.HOME}
        className={`enlaces hover:text-custom-blue ${
          pathName === PATHROUTES.HOME ? "text-custom-blue" : ""
        } `}
      >
        SHOP
      </Link>
      <Link
        href={PATHROUTES.CONTACT}
        className={`enlaces hover:text-custom-blue ${
          pathName === PATHROUTES.CONTACT ? "text-custom-blue" : ""
        } `}
      >
        CONTACTO
      </Link>

      <Link
        href={PATHROUTES.CART}
        className={`enlaces hover:text-custom-blue text-xl ${
          pathName === PATHROUTES.CART ? "text-custom-blue" : ""
        } `}
      >
        <HiOutlineShoppingCart />
      </Link>

      {handleLogout && (
        <UserDropdown main={false} handleLogout={handleLogout} />
      )}
      <span
        id="cerrar"
        className="md:hidden block cursor-pointer text-2xl absolute right-5 top-5"
      >
        <IoCloseSharp />
      </span>
    </nav>
  );
};

export default SubNav;
