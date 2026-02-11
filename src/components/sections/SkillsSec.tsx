import { Doto as DotoFont } from "next/font/google";
import Image from "next/image";
import { Button } from "../shadcnui/button";

const dotoFont = DotoFont({
  weight: ["400", "600"],
});

const SkillsSec = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex gap-6">
            <div className={`${dotoFont.className} text-3xl font-bold`}>
              Skills
            </div>
            <div className="pt-2 text-gray-600">Which I use/know</div>
          </div>
          <div className="text-sm text-gray-400">
            These are the technologies I&apos;ve learned and worked with. This
            list is constantly evolving as I continue to learn and grow as a
            developer.
          </div>
        </div>
        <div className="tracking-widest text-gray-400">{"< Languages />"}</div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          <Button variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48">
              <path
                fill="#E65100"
                d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
              <path
                fill="#FF6D00"
                d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
              <path
                fill="#FFF"
                d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
              <path
                fill="#EEE"
                d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
            </svg>{" "}
            HTML
          </Button>
          <Button variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48">
              <path
                fill="#0277BD"
                d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
              <path
                fill="#039BE5"
                d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
              <path
                fill="#FFF"
                d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
              <path
                fill="#EEE"
                d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
            </svg>
            CSS
          </Button>
          <Button variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48">
              <path
                fill="#ffd600"
                d="M6,42V6h36v36H6z"></path>
              <path
                fill="#000001"
                d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
            </svg>{" "}
            JavaScript
          </Button>
          <Button variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48">
              <rect
                width="36"
                height="36"
                x="6"
                y="6"
                fill="#1976d2"></rect>
              <polygon
                fill="#fff"
                points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon>
              <path
                fill="#fff"
                d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
            </svg>{" "}
            TypeScript
          </Button>
        </div>
      </div>

      <div className="tracking-widest text-gray-400">
        {"< Frameworks and Libraries />"}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Button variant="outline">
          <Image
            src="/icons/react.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          React
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/nextjs.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          Next.js
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/tailwind.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          Tailwind CSS
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/gsap.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />{" "}
          GSAP
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/motion.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />{" "}
          Motion
        </Button>
        <Button
          variant="outline"
          className="">
          <Image
            src="/icons/quary.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />{" "}
          TanStack Query
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/shadcn.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full invert"
          />{" "}
          shadcn/ui
        </Button>
      </div>

      <div className="tracking-widest text-gray-400">
        {"< Backend & Runtime />"}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Button variant="outline">
          <Image
            src="/icons/nodejs.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          Nodejs
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/supabase.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          Supabase
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/fastify.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full invert"
          />
          Fastify
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/prisma.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full invert"
          />
          Prisma
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/directus.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full invert"
          />
          Directus
        </Button>
      </div>

      <div className="tracking-widest text-gray-400">{"< Database />"}</div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Button variant="outline">
          <Image
            src="/icons/postgres.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          PostgreSQL
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/mysql.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          MySQL
        </Button>
      </div>

      <div className="tracking-widest text-gray-400">
        {"< Developer Tools />"}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Button variant="outline">
          <Image
            src="/icons/github.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          GitHub
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/vercel.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          Vercel
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/vsc.png"
            alt="react"
            width={15}
            height={15}
            className="rounded-full"
          />
          VS Code
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/chatgpt.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          ChatGPT
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/copilot.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          Copilot
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/claude-color.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          Claude
        </Button>
      </div>

      <div className="tracking-widest text-gray-400">
        {"< Native App Development />"}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Button variant="outline">
          <Image
            src="/icons/expo.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          Expo
        </Button>
        <Button variant="outline">
          <Image
            src="/icons/react-native.png"
            alt="react"
            width={18}
            height={18}
            className="rounded-full"
          />
          React Native
        </Button>
      </div>
    </>
  );
};

export default SkillsSec;
