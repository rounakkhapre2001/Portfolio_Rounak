import PdfViewer from '@/components/ui/pdfViewer';
import { canonicalUrl } from '@/constants';
import { Metadata } from 'next';
import { memo } from 'react';

export const metadata:Metadata = {
  title: "Resume",
  description: "View my professional resume detailing my experience as a Full Stack Developer, technical skills, projects, and achievements in web development.",
  openGraph: {
    title: "Resume | Rounak Khapre",
    description: "Professional resume of Rounak Khapre - Full Stack Developer specializing in MERN stack development",
    images: [
      {
        url: "/screenshots/resume-og.png",
        width: 1200,
        height: 630,
        alt: "Rounak Khapre's Resume",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Rounak Khapre",
    description: "Professional resume of Rounak Khapre - Full Stack Developer specializing in MERN stack development",
    images: ["/screenshots/resume-og.png"],
  },
  alternates: {
    canonical: `${canonicalUrl}/resume`,
  },
};

const page = () => {
  return (
    <PdfViewer />
  );
};

export default memo(page);