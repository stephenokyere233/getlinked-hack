import React, { FC, ReactNode } from "react";

const SectionLayout: FC<{ className?: string; children: ReactNode }> = ({
  className="",
  children,
}) => {
  return <div style={{maxWidth:"1380px",paddingInline:"20px",margin:"20px auto"}} className={`${className} `}>{children}</div>;
};

export default SectionLayout;
