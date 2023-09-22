import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const ModalLayout: React.FC<{
  showModal: boolean;
  children: ReactNode;
  onHideModal: () => void;
}> = ({ showModal, children, onHideModal }) => {
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      if (onHideModal) {
        onHideModal();
      }
    }
  };

  if (showModal === false) return <></>;
  else
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ background: "rgba(21, 14, 40, 0.93)"}} 
        className="w-screen h-screen   z-20 fixed top-0 left-0 flex items-center justify-center"
        onClick={handleBackgroundClick}
      >
        <div className=" md:p-0 absolute mx-2 ">
          <div
            className={`p-6 md:p-10 rounded-xl border border-purple bg-zinc-300 bg-opacity-5 w-full md:w-[500px] lg:w-[700px]`}
          >
            {children}
          </div>
        </div>
      </motion.div>
    );
};

export default ModalLayout;
