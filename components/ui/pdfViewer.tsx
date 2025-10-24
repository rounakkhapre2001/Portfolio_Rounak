"use client";

// ✅ Import styles once, not dynamically
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  async () => {
    const { Viewer, Worker } = await import("@react-pdf-viewer/core");
    const { defaultLayoutPlugin } = await import("@react-pdf-viewer/default-layout");

    const Component = ({ url }: { url: string }) => {
      const defaultLayoutPluginInstance = defaultLayoutPlugin();
      const [scale, setScale] = useState(1.3);

      // ✅ Responsive scaling for mobile
      const calculateScale = useCallback(() => {
        const width = window.innerWidth;
        return width < 768 ? 0.65 : 1.3;
      }, []);

      useEffect(() => {
        const handleResize = () => setScale(calculateScale());
        setScale(calculateScale());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [calculateScale]);

      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
          {/* ✅ Local worker file (copied from node_modules/pdfjs-dist/build/pdf.worker.min.mjs) */}
          <div className="w-full max-w-5xl h-[90vh] shadow-2xl rounded-2xl overflow-hidden border border-gray-700 bg-[#1a1a1a]">
            <Worker workerUrl="/pdfjs/pdf.worker.min.mjs">
              <Viewer
                fileUrl={url}
                initialPage={0}
                enableSmoothScroll
                defaultScale={scale}
                theme="dark"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        </div>
      );
    };

    return Component;
  },
  { ssr: false } // disable SSR for browser-only PDF rendering
);

const PdfViewer = ({ url = "/assets/resume.pdf" }: { url?: string }) => {
  return <PDFViewer url={url} />;
};

export default PdfViewer;
