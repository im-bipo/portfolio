/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TechnologyUsed from "./TechnologyUsed";
import { getSiteImage } from "@/lib/getSiteImage";
import { tech } from "@/components/ui/technology";

type ProjectTypes = {
  title: string;
  thumbnail?: string | (() => Promise<string>);
  description: string;
  github?: string;
  live?: string;
  technologies: (keyof typeof tech)[];
};

const projectsList: ProjectTypes[] = [
  {
    title: "Bhandari Bros",
    thumbnail: async () => await getSiteImage("https://bhandaribros.com/"),
    description:
      "An online recruitment platform allowing companies to post jobs and users to apply. Built with authentication, file upload, and dashboard features.",
    live: "https://bhandaribros.com/",
    technologies: ["NextJs", "TailwindCss", "Appwrite"],
  },

  {
    title: "InnovateX Website",
    thumbnail: async () =>
      await getSiteImage("https://innovatex.csitabmc.com/"),
    description:
      "BMC InnovateX is a 48-hour national level hackathon, presented by Butwal Multiple Campus and organized by CSIT Association of BMC",
    github: "https://github.com/CSIT-Association-of-BMC/BMC_InnovateX",
    live: "https://innovatex.csitabmc.com/",
    technologies: ["NextJs", "Supabase", "TailwindCss", "Prisma", "PostgreSQL"],
  },
  {
    title: "Kreebi Hotel",
    thumbnail: async () =>
      await getSiteImage("https://im-bipo-kreebi-hotel.netlify.app/", 1500),

    description:
      "A modern UI website for a fictional hotel named Kreebi. Built for design and responsiveness practice.",
    github: "https://github.com/im-bipo/kreebi-hotel",
    live: "https://im-bipo-kreebi-hotel.netlify.app/",
    technologies: ["ReactJs", "TailwindCss", "CSS", "JavaScript"],
  },
  {
    title: "Eligibility Checker",
    thumbnail: async () =>
      await getSiteImage("https://im-bipo-project-e.netlify.app/"),

    description:
      "A tool to check your eligibility for academic courses like MBBS, BSc CSIT, Civil Engineering, and more based on your grades.",
    github: "https://github.com/im-bipo/eligibilityChecker",
    live: "https://im-bipo-project-e.netlify.app/",
    technologies: ["ReactJs", "TailwindCss", "CSS", "JavaScript"],
  },

  {
    title: "CSITABMC Official Website",
    thumbnail: async () => await getSiteImage("https://csitabmc.com/"),
    description:
      "The official website for CSITABMC featuring events, resources, and announcements for IT students.",
    github: "https://github.com/CSIT-Association-of-BMC/csitabmcweb",
    live: "https://csitabmc.com/",
    technologies: ["NextJs", "NodeJs", "TailwindCss", "Prisma", "PostgreSQL"],
  },
  {
    title: "Bipo's Notes",
    thumbnail: async () =>
      await getSiteImage("https://bipos-notes.vercel.app/"),
    description:
      "A note-sharing platform with science resources for grades 11 and 12. Lightweight, fast, and useful for exam prep.",
    github: "https://github.com/im-bipo/biposNotes",
    live: "https://bipos-notes.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Nep Express",
    thumbnail: async () => await getSiteImage(),
    description:
      "A tourist guide destination web app that recommends tourist spots within a 4km radius of the user's route between two destinations. Built using geocoding APIs and PostgreSQL.",
    github: "https://github.com/im-bipo/nep-express",
    technologies: [
      "NextJs",
      "ReactJs",
      "Supabase",
      "TailwindCss",
      "NodeJs",
      "PostgreSQL",
    ],
  },
  {
    title: "Neo Cart",
    thumbnail: async () => await getSiteImage(),
    description:
      "Neocart is an AI Integrated online marketplace dedicated to selling authentic Nepali products, with a focus on supporting small-scale businesses. It showcases a wide variety of traditional handicrafts, clothing, and artisanal goods made by local artisans. The platform helps preserve Nepal&apos;s rich cultural heritage while promoting sustainable economic growth for small businesses.",
    github: "https://github.com/sanchitpandeyyy/NeoCart",
    technologies: [
      "NextJs",
      "ReactJs",
      "TailwindCss",
      "NodeJs",
      "PostgreSQL",
      "Supabase",
      "Gemini",
      "Pinecone",
      "NextJs",
      "ReactJs",
      "TailwindCss",
      "NodeJs",
      "PostgreSQL",
      "Supabase",
      "Gemini",
      "Pinecone",
    ],
  },
];

export default async function Projects() {
  const defaultImage = await getSiteImage();
  return (
    <div className="container py-5 mt-10 border-t-accent border-t-2">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsList.map(async (project, index) => {
          const thumbnail =
            typeof project.thumbnail === "function"
              ? await project.thumbnail()
              : project.thumbnail;
          return (
            <Card
              key={index}
              className="bg-gray-100 group dark:bg-zinc-900 overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src={thumbnail ?? defaultImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <TechnologyUsed
                    technologies={
                      project.technologies.length < 6
                        ? ([
                            ...project.technologies,
                            ...project.technologies,
                          ] as ProjectTypes["technologies"])
                        : project.technologies
                    }
                  />
                </div>
                <div className="relative border-t border-zinc-800 pt-4">
                  <div className="flex justify-start gap-2">
                    {project.live && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="group-hover:bg-accent duration-300"
                      >
                        <Link href={project.live} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Link>
                      </Button>
                    )}
                    {project.github ? (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" asChild disabled>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Lock className="w-4 h-4 mr-2" />
                          Private Repo
                        </div>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
