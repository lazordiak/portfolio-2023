import { Header } from "@/components/bars/Header";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="mt-48 flex text-lg justify-between flex-row w-screen text-snow">
        <span className="w-full text-center">schuylerdevos@gmail.com</span>
      </div>
    </div>
  );
};

export default Contact;
