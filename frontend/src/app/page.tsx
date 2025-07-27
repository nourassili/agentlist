"use client";

import { useEffect, useState } from "react";
import AgentList from "@/components/AgentList";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { getAgents } from "@/lib/getAgents";
import { SignUP } from "@/components/SignUp";
import { LeaderBoardContainer } from "@/components/LeaderBoardContainer";

export default function HomePage() {
  const [agents, setAgents] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Tools");

  useEffect(() => {
    const fetchAgents = async () => {
      const res = await getAgents();
      setAgents(res);
    };
    fetchAgents();
  }, []);

  return (
    <>
      <Navbar />
      <main className="mt-10 flex flex-col items-center justify-center space-y-12 px-4">
        <Hero
          search={search}
          setSearch={setSearch}
          activeGroup={activeCategory}
          setActiveGroup={setActiveCategory}
        />

        <SignUP />
        <AgentList agents={agents} search={search} />
        <LeaderBoardContainer />
      </main>
    </>
  );
}
