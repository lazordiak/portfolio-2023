import { PropsWithChildren } from "react";

export const ContentContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="px-12 lg:px-72 justify-center w-full text-snow flex flex-col">
      {children}
    </main>
  );
};
