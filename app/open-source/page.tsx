import { Metadata } from "next";
import OpenSource from "../../components/OpenSource";
import { canonicalUrl } from "@/constants";
import { openSourcePageSchema, contributionsSchema } from './schema';
import SchemaScripts from "@/components/SchemaScripts";

export const metadata: Metadata = {
    title: "Open Source",
    description: "Check out my contributions to open source projects. See how I collaborate with the developer community and share code for public benefit.",
    openGraph: {
        title: "Open Source Contributions | Rounak Khapre",
        description: "Exploring my open source journey and contributions to the developer community",
        images: [
            {
                url: "/screenshots/opensource-og.png.png",
                width: 1200,
                height: 630,
                alt: "Open Source Contributions",
                type: "image/png",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Open Source Contributions | Rounak Khapre",
        description: "Exploring my open source journey and contributions to the developer community",
        images: ["/screenshots/opensource-og.png.png"],
    },
    alternates: {
        canonical:  `${canonicalUrl}/open-source`,
      },
};

const OpenSourcePage = () => {
    return (
        <>
            <SchemaScripts schemas={[openSourcePageSchema, contributionsSchema]} />
            <OpenSource />
        </>
    );
};

export default OpenSourcePage;