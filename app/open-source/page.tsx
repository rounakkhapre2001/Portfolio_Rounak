// app/open-source/page.tsx
import { Metadata } from "next";
import Contributions from "@/components/open-source/Contributions";
import { canonicalUrl } from "@/constants";
import Script from "next/script";
import { openSourcePageSchema, contributionsSchema } from "./schema";

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
      <h1 className="text-4xl font-bold text-center mb-4">
        Open Source Contributions
      </h1>

      {/* 👇 Description: bold + larger font size */}
      <p className="text-center text-lg md:text-xl font-semibold text-white max-w-3xl mx-auto mb-10">
        Check out my contributions to open source projects. See how I collaborate
        with the developer community and share code for public benefit.
      </p>

      <Contributions />

      {/* ✅ JSON-LD for SEO */}
      <Script
        id="open-source-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(openSourcePageSchema),
        }}
      />
      <Script
        id="contributions-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contributionsSchema),
        }}
      />
    </main>
  );
}
