import useWindowSize from "../../hooks/useWindowSize";

export default function WindowSizeCalculateTwo() {
  const size = useWindowSize(700);
  return <div className={size ? "Small" : "Big"}>window Size</div>;
}
