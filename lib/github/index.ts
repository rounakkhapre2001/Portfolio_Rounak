export const GITHUB_API_BASE_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';

export const githubApiHeaders = {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28'
};

// add this
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
