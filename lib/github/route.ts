// D:\portfolio\portfolio\app\api\github\route.ts
import { NextResponse } from "next/server";
import { fetchGitHubContributions } from "@/lib/github";

export async function GET() {
  const data = await fetchGitHubContributions();

  if (!data) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
