import React from "react";
type sideprops = {
  Links: { icon: any; name: string }[];
};
export default function SubSidebar(props: sideprops) {
  return (
    <ul className="flex flex-col border-b-2 border-gray-200">
      {props.Links.map(({ icon, name }) => {
        return (
          <li
            key={name}
            className={`pl-6 py-3 hover:bg-zinc-200 ${
              name === "Home" ? "bg-zinc-200" : ""
            } rounded-xl`}
          >
            <a href="#" className="flex items-center gap-5">
              {icon}
              <span className="flex items-center gap-4">{name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
