// D:\portfolio\portfolio\lib\github.ts

/**
 * Fetch GitHub public contributions for a given user
 * Uses server-side token (process.env.GITHUB_TOKEN)
 */
export async function fetchGitHubContributions() {
    const username = "rounakkhapre2001";
  
    try {
      const res = await fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 }, // Next.js caching
      });
  
      if (!res.ok) {
        console.error("GitHub API Error:", res.status, res.statusText);
        throw new Error(`GitHub API Error: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch GitHub contributions:", error);
      return null;
    }
  }
  