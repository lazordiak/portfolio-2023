import { useAppDispatch } from "@/hooks/reduxHooks";
import { useShaderUpdater } from "@/hooks/useKeyDown";
import { updateShaderIndex } from "@/store/slice";
import Link from "next/link";
import { FC } from "react";

type MainHeaderProps = {
  presStyle: number;
  setPresStyle: (x: number) => void;
};

const MainHeader: FC<MainHeaderProps> = ({ presStyle, setPresStyle }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="absolute p-6 text-lg lg:text-xl flex w-full justify-between lg:pt-24 lg:px-40 text-snow z-10">
      <button
        className="hidden md:block hover:underline"
        onClick={() => {
          dispatch(updateShaderIndex(0));
        }}
      >
        <p className="text-2xl">Schuyler deVos</p>
      </button>
      {/*<button
        onClick={() => {
          if (presStyle > 1) {
            setPresStyle(0);
          } else {
            setPresStyle(presStyle + 1);
          }
        }}
      >
        <p className="text-2xl">Change Styles</p>
      </button>*/}

      <div className="w-full text-xl md:w-fit justify-between md:justify-normal flex flex-row">
        <div>
          <Link href="/about">
            <p className="hover:underline text-2xl">About</p>
          </Link>
        </div>
        <div className="ml-12">
          <Link href="/contact">
            <p className="hover:underline text-2xl">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
