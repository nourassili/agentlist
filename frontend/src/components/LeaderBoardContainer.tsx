import { LeaderBoardEntry } from "./LeaderBoardEntry";

export const LeaderBoardContainer = () => {
  return (
    <div className="flex flex-col justify-center w-[1000px] mt-10">
      <div className="text-black font-bold text-lg md:text-2xl mb-4 justify-start">
        Top Products Launching Today
      </div>
      <div
        id="containerofLBContainer"
        className="bg-white border border-gray-300 rounded-lg p-4"
      >
        <div className="flex flex-col space-y-4">
          <LeaderBoardEntry
            tempy={"🖼"}
            title={"1. Supavec"}
            description={"The open-source RAG as a service platform"}
            tags={["Open Source", "Developer Tools"]}
            valueLikes={386}
            valueComments={48}
          />
          <LeaderBoardEntry
            tempy={"🌀"}
            title={"2. UI2Code.ai"}
            description={"Turn UI designs into code instantly"}
            tags={[
              "Productivity",
              "Developer Tools",
              "Artificial Intelligence",
            ]}
            valueLikes={274}
            valueComments={22}
          />
          <LeaderBoardEntry
            tempy={"🔴"}
            title={"3. Reflect"}
            description={"Personal data tracking, insights, and experiments"}
            tags={["Biohacking", "Quantified Self", "Data Visualization"]}
            valueLikes={227}
            valueComments={18}
          />
          <LeaderBoardEntry
            tempy={"📜"}
            title={"4. Devlopea 2.0"}
            description={
              "The social platform for developers to build, learn & grow"
            }
            tags={["Social Media", "Education", "Developer Tools"]}
            valueLikes={209}
            valueComments={18}
          />
          <LeaderBoardEntry
            tempy={"🔷"}
            title={"5. Animate Anyone 2"}
            description={"Next-gen character animation from Alibaba"}
            tags={["Open Source", "Artificial Intelligence", "GitHub"]}
            valueLikes={185}
            valueComments={5}
          />
        </div>
      </div>
    </div>
  );
};
