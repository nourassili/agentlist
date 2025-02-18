import { LeaderBoardContainer } from "@/components/LeaderBoardContainer";
import { WelcomeLB } from "@/components/sections/WelcomeLB";
import { SignUP } from "@/components/SignUp";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <WelcomeLB />
      <div>
        <LeaderBoardContainer />
      </div>
      <SignUP />
    </div>
  );
}
