import { ProjectProps } from "components/Projects";

const projects : ProjectProps [] = [
    {
        name: "Interesting",
        type: "Website",
        background: "interesting.png",
        tecs: ["Next.js", "Javascript", "CSS"],
        link: "http://interesting-photos.vercel.app/"
    },
    {
        name: "Tasker Man(ager)",
        type: "Node Module",
        background: "taskerman.jpeg",
        tecs: ["Typescript"],
        link: "https://www.npmjs.com/package/tasker-man"
    },
    {
        name: "Communicate",
        type: "Website",
        background: "communicate.jpeg",
        tecs: ["Next.js", "Prisma", "Chakra-UI", "Javascript", "CSS"],
        link: "https://github.com/brunojunqueira/communicate"
    },
    {
        name: "Hackathon 2022",
        type: "Website",
        background: "hackathon.jpeg",
        tecs: ["Python", "Typescript", "React.js", "Chakra-UI"],
        link: "https://github.com/brunojunqueira/hackathon2022"
    },
    {
        name: "Portfolio",
        type: "Website",
        background: "portfolio.jpeg",
        tecs: ["Next.js", "Chakra-UI", "Typescript"],
        link: "https://brunojunqueira.vercel.app/pt-BR"
    }
]

export default projects;