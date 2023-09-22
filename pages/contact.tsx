import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import React from "react";
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import * as Yup from "yup";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdOutlineArrowBackIos } from "react-icons/md";
import toast from "react-hot-toast";

interface ContactForm {
  firstName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const router = useRouter();
  const initialValues:ContactForm = {
    firstName: "",
    email: "",
    message: "",
  };

  const sendForm = (data: ContactForm) => {
    fetch("https://backend.getlinked.ai/hackathon/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: data.firstName,
        email: data.email,
        message: data.message,
      }),
    })
      .then((res) => res.json())
      .then((_) => {
        toast.success("Thank you for contacting us!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter your first name"),
    email: Yup.string().email("Invalid email"),
    message: Yup.string()
      .required("Please send us a message")
      .min(20, "Message should be more than 20 characters"),
  });

  const handleSubmit = async (values: ContactForm, { resetForm }: any) => {
    sendForm(values);
    resetForm(initialValues);
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
          <div className="top-10 absolute left-4 md:">
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
          <div className="lg:bg-zinc-300 lg:bg-opacity-5 flex flex-col py-10 space-y-4 rounded-[5px] lg:py-16">
            <div className="w-[90%]  md:w-[80%] lg:min-w-[400px] xl:min-w-[500px] mx-auto">
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
                        name="firstName"
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
