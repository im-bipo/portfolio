/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TechnologyUsed from "./TechnologyUsed";
import { getSiteImage } from "@/lib/getSiteImage";
import { tech } from "@/components/ui/technology";

type ProjectTypes = {
  title: string;
  description: string;
  github: string;
  live?: string;
  technologies: (keyof typeof tech)[];
};

const Projects: ProjectTypes[] = [
  {
    title: "Bhandari Bros",
    description:
      "An online recruitment platform allowing companies to post jobs and users to apply. Built with authentication, file upload, and dashboard features.",
    github: "https://github.com/bipinkhatri/bhandari-bros",
    live: "https://bhandaribros.com/",
    technologies: ["NextJs", "TailwindCss", "Appwrite"],
  },

  {
    title: "InnovateX Website",
    description:
      "The official website for CSITABMC featuring events, resources, and announcements for IT students.",
    github: "https://github.com/bipinkhatri/csitabmc-website",
    live: "https://innovatex.csitabmc.com/",
    technologies: ["NextJs", "Supabase", "TailwindCss", "Prisma", "PostgreSQL"],
  },
  {
    title: "Kreebi Hotel",
    description:
      "A modern UI website for a fictional hotel named Kreebi. Built for design and responsiveness practice.",
    github: "https://github.com/im-bipo/kreebi-hotel",
    live: "https://im-bipo-kreebi-hotel.netlify.app/",
    technologies: ["ReactJs", "TailwindCss", "CSS", "JavaScript"],
  },
  {
    title: "Eligibility Checker",
    description:
      "A tool to check your eligibility for academic courses like MBBS, BSc CSIT, Civil Engineering, and more based on your grades.",
    github: "https://github.com/im-bipo/eligibilityChecker",
    live: "https://im-bipo-project-e.netlify.app/",
    technologies: ["ReactJs", "TailwindCss", "CSS", "JavaScript"],
  },

  {
    title: "CSITABMC Official Website",
    description:
      "The official website for CSITABMC featuring events, resources, and announcements for IT students.",
    github: "https://github.com/bipinkhatri/csitabmc-website",
    live: "https://csitabmc.com/",
    technologies: ["NextJs", "NodeJs", "TailwindCss", "Prisma", "PostgreSQL"],
  },
  {
    title: "Bipo's Notes",
    description:
      "A note-sharing platform with science resources for grades 11 and 12. Lightweight, fast, and useful for exam prep.",
    github: "https://github.com/im-bipo",
    live: "https://bipos-notes.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Nep Express",
    description:
      "A tourist guide destination web app that recommends tourist spots within a 4km radius of the user's route between two destinations. Built using geocoding APIs and PostgreSQL.",
    github: "https://github.com/bipinkhatri/nep-express",
    technologies: [
      "NextJs",
      "ReactJs",
      "Supabase",
      "TailwindCss",
      "NodeJs",
      "PostgreSQL",
    ],
  },
];

export default async function OtherProjects() {
  const defaultImage = await getSiteImage();
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Other Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Projects.map(async (project, index) => {
          const siteImage = await getSiteImage(project.live);
          return (
            <Card key={index} className="bg-zinc-900 overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={siteImage !== "" ? siteImage : defaultImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
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
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.live} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Link>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Link>
                    </Button>
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
