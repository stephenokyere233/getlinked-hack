import React from "react";
import Logo from "../logo";
import Link from "next/link";
import SectionLayout from "@/layout/section.layout";
import Image from "next/image";
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FOOTER_LINKS } from "@/constants";

const Footer = () => {
  return (
    <footer className="relative pt-20 ">
      <Image
        src="/assets/prize-gradient.png"
        className="absolute w-full h-full -z-10 top-0 brightness-[20%] "
        width={2000}
        height={2000}
        alt="prize-gradient"
      />
      <SectionLayout className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:justify-items-center gap-10">
        <div>
          <Logo />
          <p className="pb-10">
            Getlinked Tech Hackathon is a technology innovation program established by a
            group of organizations with the aim of showcasing young and talented
            individuals in the field of technology
          </p>
          <ul className="flex gap-3 font-bold">
            <li>
              <Link href="/">Terms of Use</Link>
            </li>
            <span className="text-pink ">|</span>
            <li>
              {" "}
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <h3 className="text-pink text-[20px] font-bold ">Useful Links</h3>
          <ul className="space-y-4">
            {FOOTER_LINKS.map((link) => {
              return (
                link && (
                  <li key={link.name}>
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                )
              );
            })}
          </ul>
          <div className="flex gap-4">
            <h3 className="text-pink text-[20px] font-bold">Follow us</h3>
            <ul className="flex gap-3">
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
        </div>
        <div>
          <h3 className="text-pink text-[20px] font-bold">Contact Us</h3>

          <ul className="space-y-4 mt-4">
            <li className="flex gap-3">
              <Image
                src="/assets/phone.svg"
                className=" w-[20px] "
                width={500}
                height={500}
                alt="phone-icon"
              />
              <p>+234 6707653444</p>
            </li>
            <li className="flex gap-3 items-start">
              <Image
                src="/assets/location.svg"
                className=" w-[20px] "
                width={500}
                height={500}
                alt="hero-man"
              />
              <p>
                27,Alara Street <br /> Yaba 100012 <br />
                Lagos State
              </p>
            </li>
          </ul>
        </div>
      </SectionLayout>
      <div className="mx-auto text-center py-12  font-bold ">
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
