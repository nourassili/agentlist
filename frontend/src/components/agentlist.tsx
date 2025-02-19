"use client"; 

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase"; 

type Agent = {
  id: string;
  name: string;
  category: string;
  datePublished: number;
  publisher: string;
  upvotes: number;
  description: string;
  website: string;
};

const AgentList = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "agents"));
        const agentData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Agent[];

        setAgents(agentData);
      } catch (error) {
        console.error("Firestore fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Agent List</h1>
      {loading ? (
        <p>Loading agents...</p>
      ) : agents.length === 0 ? (
        <p>No agents found.</p>
      ) : (
        <ul className="mt-4">
          {agents.map(({ id, name, category, publisher, upvotes, website, description }) => (
            <li key={id} className="p-4 border-b">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p>Category: {category}</p>
              <p>Published by: {publisher}</p>
              <p>Upvotes: {upvotes}</p>
              <p>
                Website:{" "}
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {website}
                </a>
              </p>
              <p>Description: {description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AgentList;
