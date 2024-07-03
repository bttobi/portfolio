interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className="h-screen w-full mt-16">{children}</section>;
};

export default Section;
