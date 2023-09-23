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
        style={{ background: "rgba(21, 14, 40, 0.93)" }}
        className="modal-layout"
        onClick={handleBackgroundClick}
      >
        <div className="mx-4">
          <div
            className="modal"
          >
            {children}
          </div>
        </div>
      </motion.div>
    );
};

export default ModalLayout;
