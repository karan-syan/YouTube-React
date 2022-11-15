import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsYoutube, BsFillMicFill, BsCameraVideo } from "react-icons/bs";
import Avatar from "./Avatar";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full pt-1">
      <div className="flex justify-center self-center px-7">
        <div className="flex self-center rounded-3xl p-2 cursor-pointer hover:bg-zinc-200 active:bg-zinc-300">
          <AiOutlineMenu className="text-xl" />
        </div>
        <div className="flex pl-4 self-center">
          <Link to={"/"} className="flex m-0 p-0 cursor-pointer">
            <BsYoutube className="text-3xl text-red-500" />
            <p className="text-xl font-bold pl-2">YouTube</p>
          </Link>
        </div>
      </div>

      <div className="flex justify-center w-5/12 self-center">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search"
            className="border-2 w-11/12 border-slate-300 rounded-l-3xl px-6 py-1 focus:border-blue-400 outline-none"
          />
          <div className=" flex p-0 m-0 items-center border-r-2 border-t-2 border-b-2 cursor-pointer bg-zinc-200 border-slate-300 rounded-r-3xl px-6 py-1 hover:bg-zinc-300 active:bg-zinc-400">
            <AiOutlineSearch className="text-center" />
          </div>
          <div className=" bg-zinc-100 rounded-3xl ml-2 cursor-pointer p-3 hover:bg-zinc-200 active:bg-zinc-300">
            <BsFillMicFill />
          </div>
        </div>
      </div>

      <div className="flex justify-center self-center">
        <div className=" rounded-3xl ml-2 p-2 cursor-pointer hover:bg-zinc-200 active:bg-zinc-300">
          <AiOutlineBell className="text-2xl" />
        </div>
        <div className=" rounded-3xl mr-2 p-2 cursor-pointer hover:bg-zinc-200 active:bg-zinc-300">
          <BsCameraVideo className="text-2xl" />
        </div>
        <div className=" self-center cursor-pointer rounded-3xl mr-4 p-0 w-10 h-10 ">
          <Avatar
            item={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </div>
      </div>
    </div>
  );
}
