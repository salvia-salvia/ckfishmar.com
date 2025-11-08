import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <div className=" w-full h-[300px] bg-[url('/img/footerImg.png')]   bg-cover bg-center">
      <ul className="w-full h-full flex flex-col md:flex-row justify-end md:justify-around items-center md:items-end gap-5  pb-8 text-white font-medium">
        <li>
          &copy; {currentYear} {t("AllRight")}
        </li>
        <li>{t("morocco")}, Safi</li>
        <li>
          <a href="mailto:contact&#64;ckfishmar.com" className="hover:underline">
            contact&#64;ckfishmar.com
          </a>
        </li>
      </ul>
    </div>
  );
}
