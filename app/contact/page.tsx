import { Metadata } from "next";
import Contact from "../../components/Contact";
import { canonicalUrl } from "@/constants";

export const metadata: Metadata = {
  title: "Contact Me | Rounak Khapre",
  description: "Get in touch with me for web development projects, collaborations, or any inquiries. Let’s create something amazing together!",
  openGraph: {
    title: "Contact | Rounak Khapre",
    description: "Reach out to discuss your next project or for any inquiries. I’m always excited to connect with like-minded professionals and clients.",
    images: [
      {
        url: "/screenshots/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Rounak Khapre",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Rounak Khapre",
    description: "Let’s connect! Reach out to discuss web development, collaborations, or inquiries.",
    images: ["/screenshots/contact-og.png"],
  },
  alternates: {
    canonical: `${canonicalUrl}/contact`,
  },
};

const page = () => {
  return (
    <Contact />
  );
}

export default page;
