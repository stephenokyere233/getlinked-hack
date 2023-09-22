import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-bold text-[24px] lg:text-[36px]">
        get<span className="text-pink">linked</span>
      </h1>
    </Link>
  );
};

export default Logo;
