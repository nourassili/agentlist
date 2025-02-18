import { Separator } from "../ui/separator";

export const WelcomeLB = () => {
  return (
    <>
      <div className="bg-white w-full max-w-5xl mx-auto py-6 px-10 flex justify-between items-center">
        <div className="font-serif bg-gradient-to-r p-2 from-customGreen to-customLightGreen bg-clip-text text-transparent text-3xl md:text-6xl">
          AgentList
        </div>

        <div className="flex space-x-10 text-black text-xl">
          <a href="#" className="hover:underline">
            Explore
          </a>
          <a href="#" className="hover:underline">
            Launch
          </a>
          <a href="#" className="hover:underline">
            Newsletter
          </a>
        </div>
      </div>
      <Separator />
    </>
  );
};
