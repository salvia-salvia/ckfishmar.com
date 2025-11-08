"use server";
import { Reader } from "@maxmind/geoip2-node";
import path from "path";
import nodemailer from "nodemailer";
import { verifyCaptchaToken } from "../utils";

export async function getVisitorInfo(ip: string) {
  try {
    const dbPath = path.join(
      process.cwd(),
      "/src/lib/database/maxmind/GeoLite2-City.mmdb"
    );
    const reader = await Reader.open(dbPath);
    const geo = reader.city(ip);
    console.log(geo);

    return {
      country: geo.country?.isoCode,
      city: geo.city?.names?.en,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function sendContactInfo(
  token: string | null,
  formData: FormData
) {
  if (!token) {
    return { success: false, error: "Token not found!" };
  }
  // verify the token
  const captchaDate = await verifyCaptchaToken(token);

  if (!captchaDate) {
    return {
      success: false,
      messsage: "Captcha Failed",
    };
  }

  if (!captchaDate.success || captchaDate.score < 0.5) {
    return {
      success: false,
      messsage: "Captcha Failed",
      errors: !captchaDate.success ? captchaDate["error-codes"] : undefined,
    };
  }
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New message from Website - ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    return { success: true };
  } catch (error) {
    console.log("Email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
export async function sendEmailOrNumber({
  contact,
  name,
  source,
  token,
}: {
  contact: string;
  name: string;
  source: string;
  token: string | null;
}) {
  if (!token) {
    return { success: false, error: "Token not found!" };
  }
  // verify the token
  const captchaDate = await verifyCaptchaToken(token);

  if (!captchaDate) {
    return {
      success: false,
      messsage: "Captcha Failed",
    };
  }

  if (!captchaDate.success || captchaDate.score < 0.5) {
    return {
      success: false,
      messsage: "Captcha Failed",
      errors: !captchaDate.success ? captchaDate["error-codes"] : undefined,
    };
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: source,
      to: process.env.EMAIL_TO,
      subject: `New message from Website`,
      text: `
       Name: ${name}
       Email or Phone: ${contact}
      `,
    });

    return { success: true };
  } catch (error) {
    console.log("Email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}

export async function sendOrderInEmail({
  name,
  email,
  phoneNumber,
  company,
  message,
  product,
  productLink,
  token,
}: {
  email: string;
  name: string;
  phoneNumber: string;
  company: string;
  message: string;
  product: string;
  productLink: string;
  token: string | null;
}) {
  try {
    if (!token) {
      return { success: false, error: "Token not found!" };
    }
    // verify the token
    const captchaDate = await verifyCaptchaToken(token);

    if (!captchaDate) {
      return {
        success: false,
        messsage: "Captcha Failed",
      };
    }

    if (!captchaDate.success || captchaDate.score < 0.5) {
      return {
        success: false,
        messsage: "Captcha Failed",
        errors: !captchaDate.success ? captchaDate["error-codes"] : undefined,
      };
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New order from Website`,
      text: `
       Name: ${name}
       Email:${email}
       Phone: ${phoneNumber}
       Company :${company}
       message: ${message}
       Product : ${product}
       Product Link :${productLink}
      `,
    });

    return { success: true };
  } catch (error) {
    console.log("Email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
