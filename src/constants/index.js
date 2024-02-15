import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    video,
    typescript,
    server,
    image,
    threejs
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: threejs,
        name: "Threejs",
        type: "3d stuffs",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Wrote my first code❤️",
        company_name: 'Embarked on coding with my initial script.',
        icon: starbucks,
        iconBg: "#accbe1",
        date: "~Feb 2019",
        points: [
            "I started my coding journey when I was just 15.",
            "I began my coding journey with HTML, considering it as my first coding language.",
            "I delved into coding out of curiosity, driven by a desire to understand how apps and websites work and to create something similar myself.",
            "When I started coding, I didn't know that I could even land a job by learning to code.😂",
        ],
    },
    {
        title: "Wrote my first code❤️",
        company_name: 'Embarked on coding with my initial script.',
        icon: starbucks,
        iconBg: "#accbe1",
        date: "~Feb 2019",
        points: [
            "I started my coding journey when I was just 15.",
            "I began my coding journey with HTML, considering it as my first coding language.",
            "I delved into coding out of curiosity, driven by a desire to understand how apps and websites work and to create something similar myself.",
            "When I started coding, I didn't know that I could even land a job by learning to code.😂",
        ],
    },
    {
        title: "Enrolled in college.",
        company_name: "Opted for a B.S.C. in Computer Science.",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "2021",
        points: [
            "I have enrolled at Surya Sen College, University of North Bengal.",
            "I have chosen to pursue a B.S.C. in Computer Science to delve into and explore various aspects of computer science and programming.",
            "In addition to programming and computer science, I have actively engaged in opportunities to enhance my leadership and communication skills, public speaking",
            "I have also learned to establish a good connections with peoples.",
        ],
    },
    {
        title: "Started my FullStack journey",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/saurav-prasad',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/saurav-prasadd/',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Sociol Media app',
        description: 'Built a complete sociol media application which is a blend of LinkedIn and Instagram, allowing users to share photos also follow and connect with friends.',
        link: 'https://socioll.vercel.app',
        repo: 'https://github.com/saurav-prasad/Sociol'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Full Stack Ecommerce app',
        description: 'Developed a robust full-stack e-commerce application that empowers users to effortlessly add items to their cart and wishlist. Additionally, the application ensures a secure checkout process through an integrated payment gateway.',
        link: 'https://big-cart.vercel.app/',
        repo: 'https://github.com/saurav-prasad/big-cart'
    },
    {
        iconUrl: video,
        theme: 'btn-back-green',
        name: 'Full Stack Netflix clone',
        description: "Successfully developed a full-stack replica of the renowned video streaming platform 'Netflix.' This comprehensive application allows users to watch videos, maintain a complete history of their watched content, and even add videos to a personalized wishlist.",
        link: 'https://netflix--saurav.vercel.app/',
        repo: 'https://github.com/saurav-prasad/Netflix2.0'
    },
    {
        iconUrl: server,
        theme: 'btn-back-blue',
        name: 'Backend social media app',
        description: "Crafted a backend application tailored for constructing various social media platforms. It encompasses all the essential routes needed for seamless integration between the backend and frontend, providing a solid foundation for diverse social media applications.",
        link: 'https://sociol-backend.vercel.app/',
        repo: 'https://github.com/saurav-prasad/Sociol-backend'
    },
    {
        iconUrl: image,
        theme: 'btn-back-orange',
        name: 'Images repository app',
        description: "This app houses a diverse collection of photos, providing users with the ability to find any image they desire. Whether you're searching for specific themes, subjects, or simply exploring, this app ensures a comprehensive and easily navigable repository of photos",
        link: 'https://photo-ki-dukan.vercel.app/',
        repo: 'https://github.com/saurav-prasad/Photo-ki-Dukan'
    },
];