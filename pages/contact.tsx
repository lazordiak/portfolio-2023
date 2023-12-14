import { Header } from "@/components/bars/Header";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="mt-48 px-72 flex justify-between flex-row w-screen text-snow">
        <div className="flex items-center">
          <span>schuylerdevos@gmail.com</span>
        </div>
        <div>
          <Image
            className="rounded"
            width="300"
            height="300"
            src={"/sky.png"}
            alt={
              "A picture of me with milk treats in my mouth that look like fangs, pretending to be a vampire."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
