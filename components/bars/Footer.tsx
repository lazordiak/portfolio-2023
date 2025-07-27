import { fragmentMono } from "../cards/GridCard";
import { spectral } from "./MainHeader";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer
      className={`w-full text-snow px-6 pb-6 lg:px-12 lg:pb-12 text-center ${spectral.className}`}
    >
      <p className={`${spectral.className} text-left`}>© Schuyler deVos 2025</p>
    </footer>
  );
};
