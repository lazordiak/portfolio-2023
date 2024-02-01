import { PageTitle } from "./PageTitle";

interface ContentHeaderProps {
  title: string;
  blurb: string;
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
  title,
  blurb,
}) => {
  return (
    <div className="flex flex-col">
      <PageTitle title={title} />
      <span className="mt-6 lg:mt-12">{blurb}</span>
    </div>
  );
};
