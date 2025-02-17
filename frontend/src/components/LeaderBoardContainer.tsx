import { LeaderBoardEntry } from "./LeaderBoardEntry";

export const LeaderBoardContainer = () => {
  return (
    <>
      <div className="text-white font-bold text-sm md:text-lg mb-2">
        Top Products Launching Today
      </div>
      <div className="grid grid-rows-5 grid-cols-1">
        <LeaderBoardEntry
          tempy={"WILL BE AN IMAGE"}
          title={"POS + TITLE"}
          description={"PROD DESCRIPTION"}
          tags={["tag1", "tag2", "tag3"]}
          valueLikes={22}
          valueComments={89}
        />{" "}
        <LeaderBoardEntry
          tempy={"WILL BE AN IMAGE"}
          title={"POS + TITLE"}
          description={"PROD DESCRIPTION"}
          tags={["tag1", "tag2", "tag3"]}
          valueLikes={22}
          valueComments={89}
        />{" "}
        <LeaderBoardEntry
          tempy={"WILL BE AN IMAGE"}
          title={"POS + TITLE"}
          description={"PROD DESCRIPTION"}
          tags={["tag1", "tag2", "tag3"]}
          valueLikes={22}
          valueComments={89}
        />{" "}
        <LeaderBoardEntry
          tempy={"WILL BE AN IMAGE"}
          title={"POS + TITLE"}
          description={"PROD DESCRIPTION"}
          tags={["tag1", "tag2", "tag3"]}
          valueLikes={22}
          valueComments={89}
        />{" "}
        <LeaderBoardEntry
          tempy={"WILL BE AN IMAGE"}
          title={"POS + TITLE"}
          description={"PROD DESCRIPTION"}
          tags={["tag1", "tag2", "tag3"]}
          valueLikes={22}
          valueComments={89}
        />{" "}
      </div>
    </>
  );
};
