import Link from "next/link";

export const PageTracker = ({ shaderIndex, setShaderIndex }) => {
  const buttons = [0, 1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col">
      <div className="w-48 flex justify-between">
        {buttons.map((button) => {
          const bg = shaderIndex === button ? "bg-snow" : "bg-transparent";
          const style = `rounded-full w-3 h-3 ${bg} border-2 border-snow`;
          return (
            <button
              onClick={() => setShaderIndex(button)}
              className={style}
              type="button"
              key={button}
            />
          );
        })}
      </div>
      {/*<Link className="text-snow" href="/about">
        About me
      </Link>*/}
    </div>
  );
};
