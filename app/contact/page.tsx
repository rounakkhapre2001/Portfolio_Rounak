import { Metadata } from "next";
import Contact from "@/components/Contact";
import { canonicalUrl } from "@/constants";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Me | Rounak Khapre",
  description:
    "Get in touch with me for web development projects, collaborations, or any inquiries. Let’s create something amazing together!",
  openGraph: {
    title: "Contact | Rounak Khapre",
    description:
      "Reach out to discuss your next project or for any inquiries. I’m always excited to connect with like-minded professionals and clients.",
    images: [
      {
        url: "/screenshots/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Rounak Khapre",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Rounak Khapre",
    description:
      "Let’s connect! Reach out to discuss web development, collaborations, or inquiries.",
    images: ["/screenshots/contact-og.png"],
  },
  alternates: {
    canonical: `${canonicalUrl}/contactus`,
  },
};

const ContactUsPage = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact | Rounak Khapre",
    description:
      "Reach out for web development collaborations, freelance projects, or any queries.",
    url: `${canonicalUrl}/contactus`,
    mainEntity: {
      "@type": "Person",
      name: "Rounak Khapre",
      jobTitle: "Web Developer",
      sameAs: [
        "https://github.com/rounakkhapre",
        "https://www.linkedin.com/in/rounakkhapre",
        "https://twitter.com/rounakkhapre",
      ],
    },
  };

  return (
    <>
      <Contact />
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </>
  );
};

export default ContactUsPage;
