import { useAppDispatch } from "@/hooks/reduxHooks";
import { updateShaderIndex } from "@/store/slice";
import { useCallback, useMemo } from "react";

interface PageTrackerProps {
  shaderIndex: number;
}

export const PageTracker: React.FC<PageTrackerProps> = ({ shaderIndex }) => {
  const buttons = useMemo(() => [0, 1, 2, 3, 4, 5, 6], []);
  const dispatch = useAppDispatch();

  const handleButtonClick = useCallback((button: number) => {
    dispatch(updateShaderIndex(button));
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <div className="w-48 flex justify-between">
        {buttons.map((button) => {
          const bg = shaderIndex === button ? "bg-snow" : "bg-transparent";
          const style = `rounded-full w-3 h-3 ${bg} border-2 border-snow`;
          return (
            <button
              onClick={() => handleButtonClick(button)}
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
