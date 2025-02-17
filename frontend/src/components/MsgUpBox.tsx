import { ReactNode } from "react";

interface MsgUpBoxProps {
  children: ReactNode;
  value: number;
}

export const MsgUpBox = ({ children, value }: MsgUpBoxProps) => {
  return (
    <div className="border-2 rounded-2xl flex flex-col border-slate-500 bg-white p-2 min-w-[60px] items-center space-y-2">
      <span>{children}</span>
      <span className="text-black">{value}</span>
    </div>
  );
};
