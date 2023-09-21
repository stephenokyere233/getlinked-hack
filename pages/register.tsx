import React from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

const Register = () => {
  const router = useRouter();
  const initialValues = {
    teamName: "",
    phone: "",
    email: "",
    projectTopic: "",
    category: "",
    groupSize: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Please enter your full name"),
    email: Yup.string().email("Invalid email"),
    message: Yup.string(),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    console.log(values);
  };
  return (
    <section className="relative  overflow-clip lg:min-h-[90vh] ">
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
      <div className="mx-auto max-w-[1500px] justify-between min-h-[90vh] flex items-center">
        <div className="w-[45%] hidden lg:block">
          <Image
            src="/assets/register.png"
            width={500}
            className="w-full"
            height={500}
            alt="hero-man"
          />
        </div>
        <div className=" w-full lg:w-[50%]">
          <section className="lg:bg-zinc-300 py-10  lg:bg-opacity-5 flex flex-col space-y-4 rounded-[5px] lg:py-16">
            <div className="w-[90%]  md:w-[80%] lg:min-w-[400px] xl:min-w-[500px] mx-auto">
              <div className="">
                <h2 className="font-semibold text-pink mb-6 text-[22px] lg:text-[25px]">
                  Register
                </h2>
                <p>Be part of this movement!</p>
                <h2 className="text-[25px] tracking-wide">CREATE YOUR ACCOUNT</h2>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-4">
                    <div className=" flex flex-col gap-2">
                      <label htmlFor="" className="font-semibold ">
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
                      <label htmlFor="" className="font-semibold ">
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
                      <label htmlFor="" className="font-semibold ">
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
                      <label htmlFor="" className="font-semibold ">
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
                      <label htmlFor="" className="font-semibold ">
                        Category
                      </label>
                      <Field
                        type="text"
                        id="category"
                        name="category"
                        placeholder="First Name"
                        className="border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full"
                      />
                      <ErrorMessage
                        name="category"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className=" flex flex-col gap-2">
                      <label htmlFor="" className="font-semibold">
                        Group Size
                      </label>
                      <Field
                        type="email"
                        id="groupSize"
                        name="email"
                        placeholder="Mail"
                        className="border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full"
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
                      <label htmlFor="">
                        I agreed with the event terms and conditions and privacy policy
                      </label>
                    </div>
                    <div className="justify-center flex items-center">
                      <button className="btn-primary w-full text-xl mx-auto">
                        Register Now
                      </button>
                    </div>
                  </fieldset>
                </Form>
              </Formik>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Register;
