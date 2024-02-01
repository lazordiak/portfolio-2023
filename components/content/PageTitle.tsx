interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <span className="lg:text-6xl font-bold mt-12 lg:mt-24">{title}</span>;
};
