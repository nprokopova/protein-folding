import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const className = {
  wrapper: "font-proxima h-[443px] flex flex-col gap-6 p-8",
  heading: "font-grotesk uppercase text-headings-md",
};

export const Section = async ({ title, children }: SectionProps) => {
  return (
    <div className={className.wrapper}>
      <h1 className={className.heading}>{title}</h1>
      <div>{children}</div>
    </div>
  );
};
