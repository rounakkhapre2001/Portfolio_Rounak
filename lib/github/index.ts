// lib/github/index.ts

export const GITHUB_API_BASE_URL = "https://api.github.com";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // ✅ Server-only, not exposed publicly

export const githubApiHeaders = {
  ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` }), // ✅ Only add if exists
  Accept: "application/vnd.github.v3+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

import { GitHubEvent } from "@/types/github";

export async function fetchGitHubContributions(): Promise<GitHubEvent[] | null> {
  const username = "rounakkhapre2001";

  try {
    const res = await fetch(`${GITHUB_API_BASE_URL}/users/${username}/events/public`, {
      headers: githubApiHeaders,
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`GitHub API Error: ${res.status}`);

    const data = (await res.json()) as GitHubEvent[];

    return data.filter(
      (event) => event.type === "PushEvent" || event.type === "PullRequestEvent"
    );
  } catch (err) {
    console.error("GitHub fetch error:", err);
    return null;
  }
}
