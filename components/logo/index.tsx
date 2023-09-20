import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-bold text-[36px]">
        get<span className="text-pink">linked</span>
      </h1>
    </Link>
  );
};

export default Logo;
