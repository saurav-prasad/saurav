import target from '../assets/images/target.png'
import rocket from '../assets/images/rocket.png'
import graduation_hat from '../assets/images/graduate-hat.png'
import chat from '../assets/icons/chat.png'
import way from '../assets/images/way.png'
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    tailwindcss,
    video,
    server,
    image,
    threejs,
    gmail
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
        title_name: 'Embarked on coding with my initial script',
        icon: rocket,
        iconBg: "#629ed3",
        date: "~Feb 2019",
        points: [
            "I started my coding journey when I was just 15.",
            "I delved into coding out of curiosity, driven by a desire to understand how apps and websites work and to create something similar myself.",
            "I began my coding journey with HTML, considering it as my first coding language.",
            "When I started coding, I didn't know that I could even land a job by learning to code.😂😂",
        ],
    },
    {
        title: "Enrolled into college",
        title_name: "Opted for a B.S.C. in Computer Science",
        icon: graduation_hat,
        iconBg: "#fbc3bc",
        date: "2021",
        points: [
            "I have enrolled at Surya Sen College, University of North Bengal.",
            "I have chosen to pursue a B.S.C. in Computer Science to delve into and explore various aspects of computer science and programming.",
            "In addition to programming and computer science, I have actively engaged in opportunities to enhance my leadership and communication skills, public speaking.",
            "I have also learned to establish a good connections with peoples.",
        ],
    },
    {
        title: "I embarked on my FullStack journey",
        title_name: "I initiated with the  MERN stack",
        icon: target,
        iconBg: "#fae3e3",
        date: "2022",
        points: [
            "I have a strong intrest for creating websites and working on UI designs.",
            "I learned JavaScript because it encompasses a wide range of cool and interesting libraries and frameworks, allowing me to build almost anything with this versatile language.",
            "And that's how I chose the MERN stack.",
            "JavaScript also enables the creation of native mobile apps through React Native.",
        ],
    },
    {
        title: "On the way...",
        title_name: "Developing multiple end-to-end full-stack projects",
        icon: way,
        iconBg: "#c4ffff",
        // date: "2022",
        points: [
            "I have been working on many different project on varying niches.",
            "Acquired knowledge in various tools and technologies.",
            "I also worked on integrating the payment gateways.",
        ],
    },
];

export const socialLink = [
    {
        name: 'Phone',
        link: "tel:+91-9064007452",
        img: contact
    },
    {
        name: 'Gmail',
        link: "mailto:sauravprasad2050@gmail.com",
        img: gmail
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/saurav-prasadd/",
        img: linkedin,
    },
    {
        name: "GitHub",
        link: "https://github.com/saurav-prasad",
        img: github,
    },
];

export const projects = [
    {
        iconUrl: chat,
        theme: 'btn-back-yellow',
        name: 'Real-time Chatting App',
        description: "Engineered a full-stack chat application, Chattila, incorporating features inspired by WhatsApp along with custom functionalities, such as real-time messaging with Socket.io for instant communication. Integrated AI-driven chat functionality to enhance user experience and smart conversational assistance.",
        link: 'https://chattila.vercel.app/',
        repo: 'https://github.com/saurav-prasad/chattila'
    },
    {
        iconUrl: image,
        theme: 'btn-back-orange',
        name: 'Images repository app',
        description: "This app houses a diverse collection of photos, providing users with the ability to find any image they desire. Whether you're searching for specific themes, subjects, or simply exploring, this app ensures a comprehensive and easily navigable repository of photos",
        link: 'https://photo-ki-dukan.vercel.app/',
        repo: 'https://github.com/saurav-prasad/Photo-ki-Dukan'
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Sociol Media app',
        description: 'Built a complete sociol media application which is a blend of LinkedIn and Instagram, allowing users to share photos also follow and connect with friends.',
        link: 'https://socioll.vercel.app',
        repo: 'https://github.com/saurav-prasad/Sociol'
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Full Stack Ecommerce app',
        description: 'Developed a robust full-stack e-commerce application that empowers users to effortlessly add items to their cart and wishlist. Additionally, the application ensures a secure checkout process through an integrated payment gateway.',
        link: 'https://big-cart.vercel.app/',
        repo: 'https://github.com/saurav-prasad/big-cart'
    },
    {
        iconUrl: server,
        theme: 'btn-back-blue',
        name: 'Backend social media app',
        description: "Crafted a backend application tailored for constructing various social media platforms. It encompasses all the essential routes needed for seamless integration between the backend and frontend, providing a solid foundation for diverse social media applications.",
        repo: 'https://github.com/saurav-prasad/Sociol-backend'
    },
];