import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";

// Define the type for each project item if using TypeScript (optional)
type ProjectItem = {
  title: string;
  description: string;
  link: string;
};

// Define and export the projects array
export const projects: ProjectItem[] = [
  {
    title: "Stripe",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description: "A streaming service with award-winning TV shows, movies, and more.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description: "A multinational technology company specializing in Internet-related services.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description: "A technology company focused on bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description: "A technology company in e-commerce, cloud computing, and AI.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description: "Develops and sells software, electronics, and services.",
    link: "https://microsoft.com",
  },
];

// FeaturedWebinars component
const FeaturedWebinars: React.FC = () => {
  return (
    <div className="'bg-black  px-8 w-full bg-red-500">
      <HoverEffect items={projects} /> {/* Pass 'projects' array here */}
    </div>
  );
};

export default FeaturedWebinars;
