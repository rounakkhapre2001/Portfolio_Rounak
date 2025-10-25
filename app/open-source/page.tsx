import { Metadata } from "next";
import Contributions from "@/components/open-source/Contributions";
import { canonicalUrl } from "@/constants";

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description:
    "Check out my contributions to open source projects. See how I collaborate with the developer community and share code for public benefit.",
  alternates: {
    canonical: `${canonicalUrl}/open-source`,
  },
};

export default function OpenSourcePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Open Source Contributions
      </h1>
      <Contributions />
    </main>
  );
}
