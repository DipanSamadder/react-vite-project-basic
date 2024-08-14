import useWindowSize from "../../hooks/useWindowSize";
export default function WindowSizeCalculate() {
  const size = useWindowSize(600);
  return <div> window Size {size ? "Small" : "Big"}</div>;
}
