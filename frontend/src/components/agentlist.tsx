/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  ColumnDef,
  flexRender,
  filterFns,
} from "@tanstack/react-table";

type Agent = {
  id: string;
  name: string;
  category: string;
  datePublished: string;
  publisher: string;
  upvotes: number;
  description: string;
  website: string;
};

const AgentList = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "agents"));
        const agentData = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            ...data,
            datePublished: data.datePublished?.seconds
              ? new Date(data.datePublished.seconds * 1000)
                  .toISOString()
                  .split("T")[0]
              : new Date(data.datePublished).toISOString().split("T")[0],
          };
        }) as Agent[];

        setAgents(agentData);
      } catch (error) {
        console.error("Firestore fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  console.log(agents);

  const columns: ColumnDef<Agent>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "category", header: "Category" },
    {
      accessorKey: "datePublished",
      header: "Date Published",
      cell: ({ getValue }) => getValue<string>(),
    },
    { accessorKey: "publisher", header: "Publisher" },
    { accessorKey: "upvotes", header: "Upvotes" },
    { accessorKey: "website", header: "Website" },
  ];

  const table = useReactTable({
    data: agents,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      customSearch: (row, columnId, filterValue) => {
        const value = row.getValue(columnId) as string;
        return value.toLowerCase().includes(filterValue.toLowerCase());
      },
    },
    state: { globalFilter: search },
    onGlobalFilterChange: setSearch,
    globalFilterFn: filterFns.includesString,
  });

  return (
    <div className="flex p-4 flex-col items-center justify-center mb-28">
      <input
        className="border-2 w-[1000px] rounded-xl mt-10 mb-2 p-2"
        type="text"
        id="searchTable"
        placeholder="Search for agents..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="w-full border-collapse border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border p-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentList;
