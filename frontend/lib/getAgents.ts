import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp, getApps } from "firebase/app";

import { firebaseConfig } from "../firebase"; // Adjust the import path as necessary



if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();

export async function getAgents() {
  const querySnapshot = await getDocs(collection(db, "agents"));
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name ?? "",
      category: data.category ?? "",
      datePublished: data.datePublished?.seconds
        ? new Date(data.datePublished.seconds * 1000).toISOString().split("T")[0]
        : new Date(data.datePublished).toISOString().split("T")[0],
      publisher: data.publisher ?? "",
      upvotes: data.upvotes ?? 0,
      description: data.description ?? "",
      website: data.website ?? "",
    };
  });
}