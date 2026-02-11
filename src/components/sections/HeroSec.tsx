import { Download, Mail } from "lucide-react";
import { Doto as DotoFont } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../shadcnui/button";
import { Separator } from "../shadcnui/separator";
import FooterSec from "./FooterSec";
import MyProjects from "./MyProjects";
import SkillsSec from "./SkillsSec";

const dotoFont = DotoFont({
  weight: ["400", "600"],
});

const HeroSec = () => {
  return (
    <div className="flex flex-col justify-start gap-6 pt-20">
      <div className="flex items-center space-x-4">
        <Image
          src="/mypic.jpg"
          alt="RishiK Roy"
          width={60}
          height={60}
          className="rounded-full"
        />

        <div className={`${dotoFont.className} text-3xl font-bold italic`}>
          Rishik Roy
        </div>
      </div>
      <div className="mt-6 space-y-4 text-sm text-gray-400">
        <div className="">
          Hello. I&apos;m Rishik, a 23yo Frontend Web & Mobile App Developer
          based in Kolkata, India.
        </div>
        <div className="">
          I build modern, user-focused applications using React, React Native,
          and modern frontend tools — blending clean design with scalable,
          production-ready code and apps.
        </div>
        <div className="">
          Passionate about UI/UX, performance, and developer experience. I enjoy
          turning complex ideas into simple, intuitive digital products.
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center justify-center gap-3 rounded-md border border-sky-400 bg-sky-900 px-4 py-1 text-sm dark:border-sky-500">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
          </span>
          <div className="text-sm text-gray-100">Open to work!</div>
        </div>

        <a
          href="/resume/MyResume.pdf"
          target="_blank">
          <Button
            variant="outline"
            className="w-full cursor-pointer">
            <Download /> Resume
          </Button>
        </a>
      </div>

      <Separator className="mt-3 bg-gray-800" />
      <div className="flex flex-col gap-4 text-sm text-gray-300">
        <div className="">Where to find me (digitally) if you wish to</div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Link
            href={"https://www.linkedin.com/in/rishik-roy-7828093ab/"}
            className="">
            <Button
              variant="outline"
              className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin">
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
              </svg>
              Lindin
            </Button>
          </Link>
          <Link
            href={"https://github.com/rishik-24"}
            className="">
            <Button
              variant="outline"
              className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              Github
            </Button>
          </Link>
          <Link
            href={"https://x.com/i_am_Rik_?t=LjCL_PhvDnq-6EjOQ_EIhg&s=08 "}
            className="">
            <Button
              variant="outline"
              className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x">
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              X
            </Button>
          </Link>
          <a href="mailto:rishikroy2402@gmail.com">
            <Button
              className="w-full cursor-pointer"
              variant="outline">
              <Mail />
              Email
            </Button>
          </a>
        </div>
      </div>

      <Separator className="mt-3" />

      <SkillsSec />

      <Separator className="mt-3" />

      <MyProjects />

      <Separator className="mt-3" />

      <FooterSec />
    </div>
  );
};

export default HeroSec;
