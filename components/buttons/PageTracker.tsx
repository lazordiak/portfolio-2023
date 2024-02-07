import { useAppDispatch } from "@/hooks/reduxHooks";
import { updateShaderIndex } from "@/store/slice";

export const PageTracker = ({ shaderIndex }) => {
  const buttons = [0, 1, 2, 3, 4, 5, 6];
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col">
      <div className="w-48 flex justify-between">
        {buttons.map((button) => {
          const bg = shaderIndex === button ? "bg-snow" : "bg-transparent";
          const style = `rounded-full w-3 h-3 ${bg} border-2 border-snow`;
          return (
            <button
              onClick={() => dispatch(updateShaderIndex(button))}
              className={style}
              type="button"
              key={button}
            />
          );
        })}
      </div>
    </div>
  );
};
