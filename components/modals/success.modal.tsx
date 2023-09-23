import ModalLayout from "@/layout/modal.layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

const SuccessModal: FC<{ showModal: boolean; onHideModal: () => void }> = ({
  showModal,
  onHideModal,
}) => {
  const router = useRouter();
  return (
    <ModalLayout showModal={showModal} onHideModal={onHideModal}>
      <div>
        <div className="relative min-h-[250px] md:min-h-[300px] lg:min-h-[420px] ">
          <Image
            src="/assets/hurray.png"
            width={500}
            className=" w-[350px] absolute right-0 md:w-[500px] mx-auto lg:w-max scale-[0.6] lg:scale-[0.8]"
            height={500}
            alt="hurray"
          />
          <Image
            src="/assets/tick.png"
            width={500}
            className=" w-[250px] top-4 md:top-0 -left-10   absolute md:w-[400px] mx-auto lg:w-max scale-[0.6] lg:scale-[0.8] "
            height={500}
            alt="tick"
          />
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-center text-[20px] lg:text-[25px]">
            Congratulations <br /> you have successfully Registered!
          </h3>
          <div className="text-center text-[16px] lg:text-[18px]">
            <p>
              Yes, it was easy and you did it! <br /> check your mail box for next step
            </p>
          </div>
          <button onClick={() => router.back()} className="btn-primary w-full text-xl">
            Back
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default SuccessModal;
