"use client";

import { useUiStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

const SideBar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUiStore((state) => state.closeSideMenu);

  return (
    <div className="">
      {/* bg gray*/}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      )}
      {/* blur*/}
      {isSideMenuOpen && (
        <div onClick={() => closeSideMenu()} className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm backdrop-filter"></div>
      )}
      {/* side menu*/}
      <nav className={
        clsx(
            "fixed p-5 right-0 top-0 w-[360px] md:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",{
                "translate-x-full":!isSideMenuOpen
            }
        )
      }>
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeSideMenu()}
        />

        <div className="relative mt-14 ">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 text-xl border-gray-200 focus:border-blue-500"
          />
        </div>

        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100  rounded transition-all "
          href={"/"}
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-xl">perfil</span>
        </Link>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100  rounded transition-all "
          href={"/"}
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100  rounded transition-all "
          href={"/"}
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100  rounded transition-all "
          href={"/"}
        >
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-xl">Salir</span>
        </Link>

        <div className="w-full h-px bg-gray-200 my-10 " />

        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100  rounded transition-all "
          href={"/"}
        >
          <IoShirtOutline size={30} />
          <span className="ml-3 text-xl">Productos</span>
        </Link>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100  rounded transition-all "
          href={"/"}
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100  rounded transition-all "
          href={"/"}
        >
          <IoPeopleOutline size={30} />
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
