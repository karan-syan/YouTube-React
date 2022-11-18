interface iprops {
  icon: JSX.Element;
  value?: string | number;
  varient: "circle" | "left-rounded" | "right-rounded" | "rounded";
  color: string;
  onclick?: () => void;
}
export default function CustomBtn({
  icon,
  value,
  varient,
  color,
  onclick,
}: iprops) {
  return (
    <button
      onClick={onclick}
      className={`flex flex-row justify-center items-center ${color} ${
        varient === "circle"
          ? "rounded-full px-2  mx-1"
          : varient === "rounded"
          ? "rounded-3xl px-4  mx-1"
          : varient === "left-rounded"
          ? "border-r-2 rounded-l-full  ml-1 border-zinc-300 px-4"
          : varient === "right-rounded"
          ? "border-l-2 rounded-r-full  mr-1 border-zinc-300 px-4"
          : ""
      } hover:bg-zinc-200 active:bg-zinc-300`}
    >
      {icon}
      {value !== undefined ? <p className="text-sm pl-1">{value}</p> : null}
    </button>
  );
}
