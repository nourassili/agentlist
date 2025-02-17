import { LeaderBoardContainer } from "@/components/LeaderBoardContainer";
import { WelcomeLB } from "@/components/sections/WelcomeLB";

export default function Home() {
  return (
    <div className="pt-2 px-8">
      <WelcomeLB />
      <LeaderBoardContainer />
    </div>
  );
}
