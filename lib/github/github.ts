import { GitHubEvent } from "@/types/github";
import { GITHUB_API_BASE_URL, githubApiHeaders } from "./index";

export async function fetchGitHubContributions(): Promise<GitHubEvent[] | null> {
  const username = "rounakkhapre2001";

  try {
    const res = await fetch(`${GITHUB_API_BASE_URL}/users/${username}/events/public`, {
      headers: githubApiHeaders,
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`GitHub API Error: ${res.status}`);

    const data = (await res.json()) as GitHubEvent[];

    // Filter only PushEvent and PullRequestEvent
    return data.filter(
      (event) => event.type === "PushEvent" || event.type === "PullRequestEvent"
    );
  } catch (err) {
    console.error("GitHub fetch error:", err);
    return null;
  }
}
