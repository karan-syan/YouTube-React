import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
type sideprops = {
  Links: { icon: JSX.Element; name: string }[];
};
export default function SubSidebar(props: sideprops) {
  return (
    <ul className="flex flex-col border-b-2 border-gray-200 ">
      {props.Links.map(({ icon, name }) => {
        return (
          <NavLink
            key={name}
            to={name === "Home" ? "/" : name === "History" ? "/history" : ""}
            className={`pl-6 py-3 hover:bg-zinc-200 rounded-xl ${
              name === "Home" ? "sidebarBtn" : ""
            }${name === "History" ? "sidebarBtn" : ""} `}
          >
            <li key={name}>
              <div className="flex items-center gap-5">
                {icon}
                <span className="flex items-center gap-4">{name}</span>
              </div>
            </li>
          </NavLink>
        );
      })}
    </ul>
  );
}
