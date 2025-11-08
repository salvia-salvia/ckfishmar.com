"use client";
import { sendOrderInEmail } from "@/lib/actions/visitorInfo.actions";
import { getCaptchaToken } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React, { FormEvent, useRef, useState } from "react";
import { toast } from "sonner";

export default function OrderForm({
  product,
  productLink,
}: {
  product: string;
  productLink: string;
}) {
  const t = useTranslations("contact_us");
  const tFishprod = useTranslations("fish_product");
  const tMsg = useTranslations("contactPopup");
  const [errors, setErrors] = useState<"email" | "phone" | null>(null);

  const form = useRef<HTMLFormElement>(null);
  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhone = /^[0-9+\s\-()]{10,15}$/.test(phone);

    if (!isEmail) return setErrors("email");
    if (!isPhone) return setErrors("phone");

    const token = await getCaptchaToken();
    const result = await sendOrderInEmail({
      name,
      email,
      phoneNumber: phone,
      message,
      token,
      company,
      product,
      productLink,
    });
    if (result.success) {
      toast.success(tMsg("successMessage"));
      form.current.reset();
      setErrors(null);
    } else {
      toast.error(tMsg("errorMessage"));
    }
  };
  return (
    <div className="w-full  flex justify-center items-center mt-20 p-2   bg-white">
      {" "}
      <form
        ref={form}
        onSubmit={handleSendEmail}
        className="w-full flex flex-col items-center lg:items-start gap-10 lg:px-0 mt-7"
      >
        <div className="w-[300px] sm:w-[400px] md:w-[600px]   flex flex-col md:flex-row gap-10 items-center justify-center">
          <input
            placeholder={`${t("form.placeholder_name")} *`}
            type="text"
            name="name"
            className="border-b-2 focus:outline-none w-full  py-3 focus:border-[#34699a] placeholder:font-semibold placeholder:text-black  placeholder:uppercase focus:placeholder:text-white"
            required
          />
          <div className="w-full">
            <input
              placeholder={`${t("form.placeholder_email")} *`}
              type="email"
              name="email"
              className="border-b-2 focus:outline-none w-full  py-3 focus:border-[#34699a] placeholder:font-semibold placeholder:text-black  placeholder:uppercase focus:placeholder:text-white"
              required
            />
            <p className="text-red-500 font-medium text-sm">
              {errors == "email" && t("email_error")}
            </p>
          </div>
        </div>
        <div className="w-[300px] sm:w-[400px] md:w-[600px]   flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="flex flex-col w-full">
            <input
              placeholder={`${t("form.placeholder_phone")} *`}
              type="text"
              name="phone"
              className="border-b-2 focus:outline-none  w-full   py-3 focus:border-[#34699a] placeholder:font-semibold placeholder:text-black  placeholder:uppercase focus:placeholder:text-white"
              required
            />
            <p className="text-red-500 font-medium text-sm">
              {errors == "phone" && t("phone_error")}
            </p>
          </div>

          <input
            placeholder={`company *`}
            type="text"
            name="company"
            className="border-b-2 focus:outline-none w-full py-3 focus:border-[#34699a] placeholder:font-semibold placeholder:text-black  placeholder:uppercase focus:placeholder:text-white"
            required
          />
        </div>

        <textarea
          placeholder={`${t("form.placeholder_msg")} *`}
          className="border-b-2 focus:outline-none w-[310px] sm:w-[400px] md:w-[600px]  placeholder:font-semibold placeholder:text-black  placeholder:uppercase py-3 focus:border-[#34699a] focus:placeholder:text-white"
          required
          name="message"
        ></textarea>
        <button
          type="submit"
          className=" text-sm w-[200px]  py-3 md:py-4 px-4 font-medium  uppercase bg-[#34699a] text-white"
        >
          {tFishprod("submit")}
        </button>
      </form>
    </div>
  );
}
