// lib/getAgents.ts
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/firebase"; // or "../firebase" if you don't use "@/"

export async function getAgents() {
  const snap = await getDocs(collection(db, "agents"));
  return snap.docs.map((doc) => {
    const data = doc.data() as any;

    // Handle Firestore Timestamp or ISO/date string
    let isoDate = "";
    if (data.datePublished instanceof Timestamp) {
      isoDate = data.datePublished.toDate().toISOString().split("T")[0];
    } else if (typeof data.datePublished === "string" || typeof data.datePublished === "number") {
      isoDate = new Date(data.datePublished).toISOString().split("T")[0];
    }

    return {
      id: doc.id,
      name: data.name ?? "",
      category: data.category ?? "",
      datePublished: isoDate,
      publisher: data.publisher ?? "",
      upvotes: data.upvotes ?? 0,
      description: data.description ?? "",
      website: data.website ?? "",
    };
  });
}
