import { FC, ReactNode } from "react";
import Image from "next/image";

const Flex: FC<{ children: ReactNode; reverse?: boolean; className?: string }> = ({
  children,
  className,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center ${
        reverse && "lg:flex-row-reverse"
      } gap-4 md:gap-6 lg:gap-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
