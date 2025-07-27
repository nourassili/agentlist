import AgentList from "@/components/AgentList";
import { getAgents } from "@/lib/getAgents";
import { LeaderBoardContainer } from "@/components/LeaderBoardContainer";
import { Navbar } from "@/components/sections/Navbar";
import { SignUP } from "@/components/SignUp";
import { Hero } from "@/components/sections/Hero";

export default async function Home() {
  const agents = await getAgents(); 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <Navbar />
      <Hero />
      <LeaderBoardContainer />
      <SignUP />
      <AgentList agents={agents} />
    </div>
  );
}
