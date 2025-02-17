export const WelcomeLB = () => {
  return (
    <div className="bg-white flex justify-between items-center py-4 px-7 border-b mb-5">
      <div className="font-serif bg-gradient-to-r from-customGreen to-customLightGreen bg-clip-text text-transparent text-xl md:text-4xl">
        AgentList
      </div>

      <div className="flex space-x-8 text-black text-lg">
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
  );
};
