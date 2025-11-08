"use client";
import { sendContactInfo } from "@/lib/actions/visitorInfo.actions";
import { getCaptchaToken } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useRef } from "react";
import { toast } from "sonner";

export default function ContactContent() {
  const t = useTranslations("contact_us");
  const tMsg = useTranslations("contactPopup");
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);

    const token = await getCaptchaToken();

    const result = await sendContactInfo(token, formData);

    if (result.success) {
      toast.success(tMsg("successMessage"));
      form.current.reset();
    } else {
      toast.error(tMsg("errorMessage"));
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto flex flex-col-reverse xl:flex-row justify-around  items-center mt-[100px] min-h-screen md:px-20 ">
      <div className=" flex flex-col gap-12 font-open-sans flex-1 pb-20 md:pb-0 ">
        <div className="flex items-center gap-8">
          <Image
            src={"/icons/location-icon.svg"}
            width={60}
            height={60}
            alt="location"
            className="w-[40px] md:w-[60px]"
          />
          <div className="">
            <h2 className="uppercase text-[#8f8f8f] py-2 font-light">
              {t("info.address")}:
            </h2>
            <p className="md:text-xl">Safi, Morocco</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Image
            src={"/icons/phone-call.svg"}
            width={60}
            height={60}
            alt="phone"
            className="w-[40px] md:w-[60px]"
          />
          <div>
            <h2 className="uppercase text-[#8f8f8f] py-2 font-light">
              {t("info.phone")}:
            </h2>
            <p className="md:text-xl">+34 691 40 09 44</p>
          </div>
        </div>
        <div>
          <h2 className="uppercase text-[#8f8f8f] py-2 font-light">
            {t("info.contactMedia")}:
          </h2>
          <div className="flex items-center gap-4 p-2">
            <Link href={`#`}>
              <Image
                src={"/icons/linkedin.svg"}
                width={25}
                height={25}
                alt="LinkedIn profile"
                aria-label="LinkedIn profile"
              />
            </Link>
            <Link href={`#`}>
              <Image
                src={"/icons/facebook.svg"}
                width={25}
                height={25}
                alt="Facebook profile"
                aria-label="Facebook profile"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start  font-open-sans  justify-center max-w-7xl mx-auto min-h-screen ">
        {" "}
        <h2 className="text-xl w-full sm:text-3xl 2xl:text-5xl  font-semibold tracking-widest md:leading-20 px-8 lg:px-0 mb-6  text-gray-800">
          {t("title")}
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full flex flex-col items-center lg:items-start gap-10  lg:px-0 mt-7"
        >
          <div className="  w-full sm:w-[400px] md:w-[600px] lg:w-[800px] flex flex-col md:flex-row gap-10 items-center justify-center">
            <input
              placeholder={`${t("form.placeholder_name")} *`}
              type="text"
              name="name"
              className="min-w-[300px] border-b-2 focus:outline-none w-full  py-3 focus:border-[#34699a]  focus:placeholder:text-white"
              required
            />
            <input
              placeholder={`${t("form.placeholder_email")} *`}
              type="email"
              name="email"
              className="border-b-2 focus:outline-none w-full py-3 focus:border-[#34699a] focus:placeholder:text-white"
              required
            />
          </div>
          <input
            placeholder={`${t("form.placeholder_phone")} *`}
            type="text"
            name="phone"
            className="border-b-2 focus:outline-none   w-full sm:w-[400px] md:w-[600px] lg:w-[800px] py-3 focus:border-[#34699a] focus:placeholder:text-white"
            required
          />

          <textarea
            placeholder={`${t("form.placeholder_msg")} *`}
            className="border-b-2 focus:outline-none   w-full sm:w-[400px] md:w-[600px] lg:w-[800px] py-3 focus:border-[#34699a] focus:placeholder:text-white"
            required
            name="message"
          ></textarea>
          <button
            type="submit"
            className=" text-sm w-fit  py-3 md:py-4 px-4 font-medium  uppercase bg-[#34699a] text-white"
          >
            {t("form.btn_text")}
          </button>
        </form>
      </div>
    </div>
  );
}
