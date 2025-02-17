import { MsgUpBox } from "./MsgUpBox";
import Image from "next/image";

const im = (
  <Image src="comment.svg" alt="message Icon" width={16} height={16} />
);

interface LBProps {
  tempy: string; // should be ReactNode and be named children but will use string for test
  title: string;
  description: string;
  tags: string[];
  valueLikes: number;
  valueComments: number;
  highlight?: boolean;
  projectImag?: string; // string for now
}

export const LeaderBoardEntry = ({
  tempy,
  title,
  description,
  tags,
  valueLikes,
  valueComments,
  highlight = false,
}: LBProps) => {
  return (
    <div
      className={`group flex items-center justify-between p-4 rounded-lg border border-gray-200 transition 
        ${highlight ? "bg-gray-100" : "bg-white hover:bg-gray-50"}`}
    >
      <div className="flex items-start space-x-4">
        <span className="w-12 h-12 flex items-center justify-center rounded-md overflow-hidden bg-gray-300">
          {tempy}
        </span>

        <div className="flex flex-col">
          <span className="text-black font-semibold text-lg transition duration-200 group-hover:text-orange-500">
            {title}
          </span>{" "}
          <span className="text-gray-600 text-sm">{description}</span>
          <div className="flex flex-wrap text-gray-500 text-xs mt-1 space-x-1">
            {tags.map((tag, index) => (
              <span key={index}>{index > 0 ? `• ${tag}` : tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex space-x-3">
        <MsgUpBox value={valueComments}>{im}</MsgUpBox>
        <MsgUpBox value={valueLikes}>{im} </MsgUpBox>
      </div>
    </div>
  );
};
