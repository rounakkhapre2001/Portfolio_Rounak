"use client";

import { useEffect, useState } from "react";
import { GitHubEvent } from "@/types/github";
import { CalendarDays, GitBranch } from "lucide-react";

export default function Contributions() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setEvents(data || []);
      } catch (err) {
        console.error("Failed to fetch GitHub events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;

  if (!events.length)
    return <p className="text-center text-gray-400">No recent activity found.</p>;

  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const diff = (Date.now() - date.getTime()) / 1000;
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
    return date.toLocaleDateString();
  };

  return (
    <section className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {events.slice(0, 9).map((event, idx) => {
        const repoName = event.repo.name;
        const repoUrl = `https://github.com/${repoName}`;
        const eventType = event.type === "PushEvent" ? "Push" : "Pull Request";
        const message =
          (event.payload?.commits as { message: string }[])?.[0]?.message ||
          (event.payload?.pull_request as { title: string })?.title ||
          "No description";

        return (
          <a
            key={idx}
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/40 hover:from-indigo-900/40 hover:to-gray-800/60 p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-5 h-5 text-indigo-400" />
              <span className="font-semibold text-indigo-300">{eventType}</span>
            </div>

            <p className="text-sm text-gray-300 line-clamp-2">{message}</p>

            <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
              <span className="truncate">{repoName}</span>
              <div className="flex items-center gap-1">
                <CalendarDays className="w-3 h-3" />
                {formatRelativeTime(event.created_at)}
              </div>
            </div>
          </a>
        );
      })}
    </section>
  );
}
