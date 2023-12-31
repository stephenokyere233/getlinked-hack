import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SuccessModal from "@/components/modals/success.modal";
import { RegisterForm } from "@/interfaces";
import { motion } from "framer-motion";
import CircularLoader from "@/components/loader";
import toast from "react-hot-toast";

const Register = () => {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const initialValues: RegisterForm = {
    teamName: "",
    phone: "",
    email: "",
    projectTopic: "",
    category: "",
    groupSize: "",
    agree: false,
  };

  const validationSchema = Yup.object().shape({
    teamName: Yup.string().required("Please enter your full name"),
    phone: Yup.string(),
    email: Yup.string().email("Invalid email").required("Please enter your email"),
    projectTopic: Yup.string().required("Please enter a project topic"),
    category: Yup.string(),
    groupSize: Yup.string(),
    agree: Yup.boolean()
      .oneOf([true], "Please confirm before submitting")
      .required("Please confirm before submitting"),
  });

  const sendForm = async (data: RegisterForm) => {
    setLoading(true);
    try {
      await fetch("https://backend.getlinked.ai/hackathon/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          phone_number: data.phone,
          team_name: data.teamName,
          group_size: data.groupSize,
          project_topic: data.projectTopic,
          category: 1,
          privacy_poclicy_accepted: data.agree,
        }),
      });
      setShowSuccess(true);
      setLoading(false);
    } catch (err) {
      toast.error("Oops! Something bad happened");
      setLoading(false);
    }
  };

  const handleSubmit = async (values: any, { resetForm }: any) => {
    sendForm(values)
      .then(() => {
        resetForm(initialValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="relative overflow-clip lg:min-h-[90vh] ">
      <Image
        src="/assets/mobile-hero-gradient.png"
        className="w-[80%] lg:w-[800px] block absolute lg:bottom-20  left-0 -z-10"
        width={500}
        height={500}
        alt="hero-gradient"
      />
      <Image
        src="/assets/mobile-hero-gradient.png"
        className="w-[800px] absolute hidden xl:block -bottom-[200px] -rotate-180  right-0 -z-10"
        width={500}
        height={500}
        alt="hero-gradient"
      />
      <div className="mx-auto w-full px-4">
        <h2 className="font-semibold py-2 lg:hidden text-start block text-pink mb-6 text-[22px] lg:text-[25px]">
          Register
        </h2>
      </div>
      <div className="mx-auto max-w-[1500px] relative justify-between min-h-[90vh] px-4 flex-col lg:flex-row flex items-center">
        <div className=" w-full lg:w-[45%] relative ">
          <Image
            src="/assets/star-pink.svg"
            className=" w-[20px] lg:w-[30px] absolute -top-[50px] left-[80%] lg:left-[20px]"
            width={500}
            height={500}
            alt="star pink"
          />
          <Image
            src="/assets/register.png"
            width={500}
            className=" w-[250px] md:w-[400px] mx-auto lg:w-max scale-[0.8] lg:scale-100"
            height={500}
            alt="boy sitting on chair"
          />
        </div>
        <div className=" w-full relative lg:w-[50%]">
          <Image
            src="/assets/star-purple.png"
            className=" w-[20px] lg:w-[30px] absolute bottom-[100px] left-4 lg:-left-4 -z-10"
            width={500}
            height={500}
            alt="star-purple"
          />
          <Image
            src="/assets/star-gray.png"
            className=" w-[20px] lg:w-[30px] absolute -top-[20px] lg:-top-[50px] right-4 lg:-right-[100px]"
            width={500}
            height={500}
            alt="star-gray"
          />
          <Image
            src="/assets/star.svg"
            className="absolute w-[30px] bottom-0 -right-[150px]"
            width={500}
            height={500}
            alt="star"
          />
          <motion.section
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
            className="lg:bg-zinc-300 pb-10  lg:bg-opacity-5 flex flex-col space-y-4 rounded-[5px] lg:py-16"
          >
            <div className="w-[90%]  md:w-[80%] lg:min-w-[400px] xl:min-w-[500px] mx-auto">
              <div className="">
                <h2 className="font-semibold hidden lg:block text-pink mb-6 text-[22px] lg:text-[25px]">
                  Register
                </h2>
                <div className="flex gap-2 items-baseline">
                  <p>Be part of this movement!</p>
                  <div className="border-b relative items-center justify-center flex border-dashed border-pink min-w-[100px] md:min-w-[150px]">
                    <Image
                      src="/assets/move-girl.png"
                      className=" w-[20px] lg:w-[30px]"
                      width={500}
                      height={500}
                      alt="star"
                    />
                    <Image
                      src="/assets/move-boy.png"
                      width={500}
                      className="w-[20px] lg:w-[30px]"
                      height={500}
                      alt="star"
                    />
                  </div>
                </div>
                <h2 className="text-[25px] tracking-wide">CREATE YOUR ACCOUNT</h2>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors }) => (
                  <Form>
                    <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-4">
                      <div className=" flex flex-col gap-2">
                        <label htmlFor="teamName" className="font-semibold ">
                          Team&apos;s Name
                        </label>
                        <Field
                          type="text"
                          id="teamName"
                          name="teamName"
                          placeholder="Enter the name of your group"
                          className="border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full"
                        />
                        <ErrorMessage
                          name="teamName"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className=" flex flex-col gap-2">
                        <label htmlFor="phone" className="font-semibold ">
                          Phone
                        </label>
                        <Field
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          className="border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className=" flex flex-col gap-2">
                        <label htmlFor="email" className="font-semibold ">
                          Email
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email address"
                          className="border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className=" flex flex-col gap-2">
                        <label htmlFor="projectTopic" className="font-semibold ">
                          Project Topic
                        </label>
                        <Field
                          type="text"
                          id="projectTopic"
                          name="projectTopic"
                          placeholder="What is your group project topic"
                          className="border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full"
                        />
                        <ErrorMessage
                          name="projectTopic"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className=" flex flex-col gap-2">
                        <label htmlFor="category" className="font-semibold ">
                          Category
                        </label>
                        <Field
                          type="text"
                          id="category"
                          name="category"
                          placeholder="Select Category"
                          className="border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full"
                        />
                        <ErrorMessage
                          name="category"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className=" flex flex-col gap-2">
                        <label htmlFor="groupSize" className="font-semibold">
                          Group Size
                        </label>
                        <Field
                          type="number"
                          id="groupSize"
                          name="groupSize"
                          placeholder="Group Size (1-10)"
                          className="border p-4 bg-zinc-300 appearance-none bg-opacity-5 rounded-md w-full"
                        />
                        <ErrorMessage
                          name="groupSize"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    </fieldset>
                    <fieldset className="space-y-3">
                      <span className="text-[#FF25B8]">
                        Please review your registration details before submitting
                      </span>
                      <div className="flex gap-3">
                        <Field
                          type="checkbox"
                          id="agree"
                          name="agree"
                          className="bg-transparent"
                        />
                        <label
                          htmlFor="agree"
                          className={errors.agree ? "text-red-500" : "text-white"}
                        >
                          I agreed with the event terms and conditions and privacy policy
                        </label>
                      </div>
                      <button className="btn-primary w-full text-xl mx-auto">
                        {loading ? <CircularLoader /> : "Register Now"}
                      </button>
                    </fieldset>
                  </Form>
                )}
              </Formik>
            </div>
          </motion.section>
        </div>
      </div>
      {showSuccess && (
        <SuccessModal showModal={showSuccess} onHideModal={() => setShowSuccess(false)} />
      )}
    </section>
  );
};

export default Register;
