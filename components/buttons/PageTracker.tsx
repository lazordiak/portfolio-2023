export const PageTracker = ({ shaderIndex, setShaderIndex }) => {
  const buttons = [0, 1, 2, 3, 4];
  return (
    <div className="w-48 flex justify-between">
      {buttons.map((button) => {
        const bg = shaderIndex === button ? "bg-white" : "bg-transparent";
        const style = `rounded-full w-3 h-3 ${bg} border-2 border-white`;
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
  );
};
