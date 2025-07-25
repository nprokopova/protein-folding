import { ReactNode } from "react";

const className = {
    baseClass:
    "flex gap-2 justify-center items-stretch h-[443px] bg-gradient-radial from-brand-primary to-brand-secondary rounded-md overflow-hidden",
};

 interface PanelProps {
    children?: ReactNode
    baseClass?: string
    paddingClass?: string
    extraClass?: string
  }

export const Panel = ({ children, paddingClass = 'p-6', baseClass = className.baseClass, extraClass }: PanelProps) => {
  return (
    <div className={baseClass + paddingClass + (extraClass ?? '')}>
     {children}
    </div>
  );
};
