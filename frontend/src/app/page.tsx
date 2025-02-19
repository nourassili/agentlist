import { LeaderBoardContainer } from "@/components/LeaderBoardContainer";
import { SearchTable } from "@/components/SearchTable";
import { WelcomeLB } from "@/components/sections/WelcomeLB";
import { SignUP } from "@/components/SignUp";
import AgentList from "@/components/agentlist";  // ✅ Ensure correct casing

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <WelcomeLB />
      <LeaderBoardContainer />
      <AgentList /> 
      <SignUP />
      <SearchTable />
    </div>
  );
}