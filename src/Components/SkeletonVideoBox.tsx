import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function SkeletonVideoBox(
  times: number,
  varient: "grid" | "list"
) {
  return Array(times)
    .fill(0)
    .map((item, index) => (
      <div
        className={`flex ${
          varient === "grid" ? "flex-col" : "flex-row w-full"
        }`}
        key={index + item}
      >
        <Skeleton width={280} height={160} />
        <div
          className={`flex ${
            varient === "grid" ? "flex-row" : "flex-col ml-2"
          }`}
        >
          {varient === "list" ? <Skeleton count={1} width={400} /> : null}
          <Skeleton circle width={40} height={40} />
          <div>
            <Skeleton width={varient === "grid" ? 200 : 100} />
            <Skeleton width={varient === "grid" ? 200 : 400} />
          </div>
        </div>
      </div>
    ));
}
