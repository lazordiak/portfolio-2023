import { fragmentMono } from "../cards/GridCard";
import { spectral } from "./MainHeader";

export const Footer = () => {
  return (
    <footer
      className={`w-full text-snow px-6 pb-6 lg:px-12 lg:pb-12 text-center ${spectral.className}`}
    >
      <p className="text-left">© Schuyler deVos 2021</p>
    </footer>
  );
};
