"use client";

import React, { useEffect, useState } from "react";
import { GitHubEvent } from "@/types/github";

export default function Contributions() {
  const [data, setData] = useState<GitHubEvent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("Failed to load GitHub contributions");
        const json: GitHubEvent[] = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError("Error loading contributions");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Loading contributions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Recent GitHub Contributions</h2>
      <ul className="space-y-2 text-sm">
        {data.slice(0, 5).map((event) => (
          <li key={event.id} className="border rounded p-2 bg-background/50">
            <strong>{event.type.replace("Event", "")}</strong> on{" "}
            <a
              href={`https://github.com/${event.repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {event.repo.name}
            </a>{" "}
            at {new Date(event.created_at).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
