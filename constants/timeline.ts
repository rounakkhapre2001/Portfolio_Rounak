import type { TimelineEntry } from "@/types";

export const timelineData: TimelineEntry[] = [
  {
    id: "iitian-infotech-sde",
    title: "Associate Software Developer Engineer",
    company: "IITian Infotech",
    type: "fulltime",
    duration: {
      start: "Jan 2024",
      end: "Present",
    },
    description: `
Developed scalable backend services using Python (FastAPI) and real-time streaming pipelines with Kafka, efficiently processing 500K+ requests/day with 99.99% uptime, 
Built and maintained dynamic UI components with React.js integrated with RESTful APIs, improving user responsiveness by 25% and streamlining data synchronization,  
Designed and deployed a MongoDB-backed microservices architecture, enhancing performance, fault tolerance, and modularity across services.
    `,
  },
  {
    id: "iitian-infotech-intern",
    title: "Software Development Intern",
    company: "IITian Infotech",
    type: "internship",
    duration: {
      start: "Oct 2023",
      end: "Jan 2024",
    },
    description: `
Built scalable data pipelines using Python and AWS (SQS, Lambda) to collect and process market data with 10x performance and 40% lower latency  
,Automated error handling and ensured reliable, test-driven, maintainable code
,Integrated CI/CD pipelines for efficient and consistent deployments.
    `,
  },
];
