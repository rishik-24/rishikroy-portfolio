import { Github } from "lucide-react";
import { Doto as DotoFont } from "next/font/google";
import Image from "next/image";
import { Button } from "../shadcnui/button";
import { Card, CardContent } from "../shadcnui/card";

const dotoFont = DotoFont({
  weight: ["400", "600"],
});

const projectInfo = [
  {
    id: 1,
    pic: "/project-1.png",
    title: "Twitter (X) Clone – React Native",
    description:
      "A fully responsive Twitter (X) clone built with React Native, focusing on modern UI/UX, reusable components, and scalable app architecture. Implements core social features like feeds, interactions, and navigation while following real-world mobile development best practices.",
    githubLink: "https://github.com/rishik-24/Twitter-Clone-App-React-Native-",
  },
  {
    id: 2,
    pic: "/project-2.png",
    title: "Expo React Native Starter Template",
    description:
      "A modern and scalable Expo + React Native starter template designed to kick-start mobile app development. Comes with a clean project structure, TypeScript support, and developer-friendly setup for building production-ready apps faster.",
    githubLink:
      "https://github.com/rishik-24/Expo-React-Native-Starter-Template",
  },
];

const MyProjects = () => {
  return (
    <>
      <div className="mt-2 flex flex-col gap-6 pb-6">
        <div className={`${dotoFont.className} text-3xl font-bold text-white`}>
          Projects
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          {projectInfo.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900">
              <CardContent className="flex flex-col gap-4">
                <Image
                  src={project.pic}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="h-auto w-auto rounded-2xl"
                />
                <div className="flex items-center justify-between px-2">
                  <div className="text-xl font-bold">{project.title}</div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button
                      className="cursor-pointer"
                      variant={"ghost"}
                      size={"icon"}>
                      <Github />
                    </Button>
                  </a>
                </div>
                <div className="text-sm text-gray-400">
                  {project.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyProjects;
