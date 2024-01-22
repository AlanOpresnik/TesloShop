"use client"
import { titleFont } from "@/config/fonts";
import { useUiStore } from "@/store/ui/ui-store";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const TopMenu = () => {
    const openSideMenu = useUiStore((state) => state.openSideMenu);
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span>| shop</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/men"}
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/women"}
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/kid"}
        >
          kids
        </Link>
      </div>

      <div className="flex items-center">
        <Link className="mx-2" href={"/search"}>
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link className="mx-2" href={"/cart"}>
          <div className="relative">
            <span className="absolute rounded-full text-xs px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">3</span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button onClick={() => openSideMenu()} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
            menu
        </button>
      </div>
    </nav>
  );
};

export default TopMenu;
