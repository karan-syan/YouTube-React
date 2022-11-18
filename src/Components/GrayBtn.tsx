interface iprops {
  icon: JSX.Element;
  value?: string | number;
  varient: "circle" | "left-rounded" | "right-rounded" | "rounded";
}
export default function GreyBtn({ icon, value, varient }: iprops) {
  return (
    <button
      className={`flex flex-row justify-center items-center bg-zinc-200 mx-1 ${
        varient === "circle"
          ? "rounded-full px-2"
          : varient === "rounded"
          ? "rounded-3xl px-4"
          : varient === "left-rounded"
          ? "border-r-2 rounded-l-full border-zinc-300 px-4"
          : varient === "right-rounded"
          ? "border-l-2 rounded-r-full border-zinc-300 px-4"
          : ""
      } hover:bg-zinc-200 active:bg-zinc-300`}
    >
      {icon}
      {value !== undefined ? <p className="text-sm pl-1">{value}k</p> : null}
    </button>
  );
}
