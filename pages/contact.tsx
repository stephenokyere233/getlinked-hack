import Button from "@/components/button";
import Flex from "@/components/flex";
import SectionLayout from "@/layout/section.layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import React from "react";
import { BiX } from "react-icons/bi";
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import * as Yup from "yup";
import Image from "next/image";
import { useRouter } from "next/router";
import {MdOutlineArrowBackIos} from "react-icons/md"

const Contact = () => {
  const initialValues = {
    firstName: "",
    email: "",
    message: "",
  };

  const router = useRouter();
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Please enter your full name"),
    email: Yup.string().email("Invalid email"),
    message: Yup.string(),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    console.log(values);
  };
  return (
    <section className="relative min-h-[90vh] ">
      <div className=" flex items-center max-w-[1400px] mx-auto justify-center h-[90vh]">
        <section className="lg:w-[40%] hidden lg:block space-y-6 font-medium text-xl">
          <h2 className="text-[32px] text-pink font-semibold">Get in touch</h2>
          <p>
            Contact <br /> Information
          </p>
          <p>
            27,Alara Street <br /> Yaba 100012 <br />
            Lagos State
          </p>
          <p>Call us : 07067981819</p>{" "}
          <p>
            we are open from Monday-Friday <br /> 08:00am - 05:00pm
          </p>
          <div className="flex flex-col gap-4">
            <h3 className="text-pink text-[20px] font-bold">Share on</h3>
            <ul className="flex gap-3 ">
              <li>
                <Link href="#">
                  <FaXTwitter size={24} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram size={24} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaFacebookF size={24} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaLinkedinIn size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="lg:w-[50%] w-full ">
          <div className="top-10 absolute left-10">
            <button
              className="transition-all relative lg:hidden block active:scale-95"
              onClick={() => router.back()}
            >
              <Image
                src="/assets/close.svg"
                className=" w-[30px] "
                width={500}
                height={500}
                alt="hero-man"
              />
              <span className="absolute inset-0 w-full flex items-center justify-center ">
                <MdOutlineArrowBackIos size={20} />
              </span>
            </button>
          </div>
          <div className="lg:bg-zinc-300 lg:bg-opacity-5 flex flex-col space-y-4 rounded-[5px] lg:py-16">
            <div className="w-[80%] lg:min-w-[400px] xl:min-w-[500px] mx-auto">
              <h2 className="font-semibold text-pink mb-6 text-[22px] lg:text-[25px]">
                Questions or need assistance?
                <br />
                Let us know about it!
              </h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <fieldset className=" space-y-8 lg:space-y-10 ">
                    <div className="">
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Mail"
                        className="border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Message"
                      className="border p-4 rounded-md bg-zinc-300 bg-opacity-5 w-full min-h-[200px] h-[200px]"
                    />
                    <div className="justify-center flex items-center">
                      <button className="btn-primary w-[200px] text-xl mx-auto">
                        Submit
                      </button>
                    </div>
                  </fieldset>
                </Form>
              </Formik>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
