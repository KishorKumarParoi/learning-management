interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return <div className="bg-white-100">{children}</div>;
};

export default layout;
