import { FC } from "react";

const CircularLoader: FC<{ color?: string }> = ({ color = "white" }) => {
  return <span style={{ border: `2px solid ${color}` }} className={`loader`}></span>;
};

export default CircularLoader;
