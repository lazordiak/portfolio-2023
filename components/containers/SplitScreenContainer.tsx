type SplitScreenContainerProps = {
  title: string;
  blurb: string;
  img: string;
};

const SplitScreenContainer = ({ title, blurb, img }) => {
  return (
    <div className="w-full h-full flex flex-row text-snow">
      <div className="flex flex-1">
        <h1>{title}</h1>
        <p>{blurb}</p>
      </div>
      <div className="flex flex-1">
        <img src={img} />
      </div>
    </div>
  );
};

export default SplitScreenContainer;
