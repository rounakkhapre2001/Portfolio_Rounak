import { canonicalUrl, hostedUrl, profile } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: `Rounak Khapre - Full Stack Developer `,
        template: "%s | Rounak Khapre - Full Stack Developer",
    },
    description: "Full Stack Developer specializing in MERN stack. Building scalable web apps with React, Node.js, Express, MongoDB, and Next.js. Open for collaboration.",
    keywords: [
        "Rounak Khapre",
        "Rounak Khapre Developer",
        "Rounak R. Khapre, Nagpur, India",
        "Rounakptm Portfolio",
        "Rounak Khapre projects",
        "Rounak Khapre tech stack",
        "Rounak Khapre Portfolio",
        "Full Stack Developer Portfolio",
        "MERN Stack Specialist",
        "React Developer Portfolio",
        "Node.js Developer Portfolio",
        "Kerala Full Stack Developer",
        "India MERN Stack Developer",
        "Kozhikode Software Engineer",
        "Portfolio Web Developer India",
        "Rounak Khapre MERN",
        "Software Engineer Portfolio India",
        "MERN Developer in Kerala",
        "Rounak Khapre Professional Portfolio",
        "Top MERN Stack Developer India",
        "Next.js Developer Portfolio",
        "Rounak Khapre kozhikode"
    ],
    authors: [
        {
            name: "Rounak Khapre",
            url: "https://github.com/rounakkhapre2001",
        }
    ],
    creator: "Rounak Khapre (Rounak)",
    publisher: "Rounak",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    applicationName: "Rounak Portfolio",
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: hostedUrl,
        siteName: "Rounak Portfolio",
        title: `${profile.name} | ${profile.title}`,
        description: "Full Stack Developer specializing in MERN stack development. Building scalable web applications with React, Node.js, Express, MongoDB, and Next.js.",
        images: [
            {
                url: "/screenshots/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Rounak Khapre - Full Stack Developer Portfolio",
                type: "image/png",
            }
        ],
        countryName: "India",
    },
    appleWebApp: {
        capable: true,
        title: "Rounak Khapre  Portfolio",
        statusBarStyle: "black-translucent",
    },
    verification: {
        google: "google332e521595495b52",
    },
    twitter: {
        card: "summary_large_image",
        title: `${profile.name} | ${profile.title}`,
        description: "Full Stack Developer specializing in MERN stack development. Building scalable web applications with React, Node.js, Express, MongoDB, and Next.js.",
        images: ["/screenshots/twitter-image.png"],
        creator: `@${profile.xUserName}`,
        site: `@${profile.xUserName}`,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            //{ url: "/icons/favicon.ico" },
            //{ url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            //{ url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            //{ url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            //{ url: "/icons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
            //{ url: "/icons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
            //{ url: "/icons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
           // { url: "/icons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
            //{ url: "/icons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
           // { url: "/icons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
           // { url: "/icons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
            //{ url: "/icons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
            //{ url: "/icons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
        ],
        //shortcut: ["/icons/favicon.ico"]
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: canonicalUrl,
        languages: {
            "en-US": canonicalUrl,
        },
    },
    category: "technology",
    classification: "Portfolio Website",
    metadataBase: new URL(hostedUrl),
    assets: '/assets',
    other: {
        "google-site-verification": "google332e521595495b52",
        "msapplication-TileColor": "#d830dc",
        "msapplication-TileImage": "/icons/ms-icon-144x144.png",
        "msapplication-config": "/browserconfig.xml",
        "llms-txt": `${hostedUrl}/llms.txt`
    },
};

export default metadata;