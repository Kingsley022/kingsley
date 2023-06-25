import game_hub from '../assets/game_hub.png';
import amazon_clone from '../assets/amazon_clone.png';
import netflix_clone from '../assets/netflix_clone.png';
import avail_water from '../assets/avail_waters.jpeg';
import quizzy from '../assets/quizzy2.png'

export const myNavLinks = [
    {
        id:1,
        name: "Home",
        isActive: true,
    },
    {
        id:2,
        name: "Skills",
        isActive: false,
    },
    {
        id:3,
        name: "About",
        isActive: false,
    },
    {
        id:4,
        name: "Projects",
        isActive: false,
    }
];

export const skills = [
    {
        id:1,
        name: 'Front-End',
        classname: 'frontend',
        skillNames:[
                {skill: 'React.Js'},
                {skill: 'JavaScript'},
                {skill: 'TypeScript'},
                {skill: 'Next.js'},
                {skill: 'Bootstrap'},
                {skill: 'SASS'},
                {skill: 'Tailwind'},
                {skill: 'Chakra UI'},
                {skill: 'Styled Component'},
                {skill: 'CSS'},
                {skill: 'Html'}
            ],
    },

    {
        id:2,
        name: 'Back-End',
        classname: 'backend',
        skillNames:[
                {skill: 'Node.Js'}, 
                {skill: 'MongoDB'}, 
                {skill: 'Express.Js'}, 
                {skill: 'Python'},
                {skill: 'PHP'},
                {skill: 'MySQL'},
            ],
    },

    {
        id:3,
        name: '-Others',
        classname: 'others',
        skillNames:[ 
                {skill: 'Dart'},
                {skill: 'Git'},
                {skill: 'Github'}
            ],
    }
];

export const projects = [
    {
        id: 4,
        isToggled: false,
        img: quizzy,
        name: 'e-Commerce' ,
        language: 'ReactJs',
        description: `I built this project from scratch using React as a result of mastering the use of CRUD operations in React.
        I also made use of React-Hooks such as useEffect, 
     useState and few customHooks. i aslo used some react libraries such as react-hook-form, react-scroll, react-router-dom and more.`,
        weblink: '',
        gitlink: 'https://github.com/Kingsley022/game-hub'
    },
    {
        id: 1,
        isToggled: false,
        img: game_hub,
        name: 'e-Commerce' ,
        language: 'ReactJs',
        description: `I built this project from scratch using React as a result of mastering the use of CRUD operations in React.
        I also made use of React-Hooks such as useEffect, 
     useState and few customHooks. i aslo used some react libraries such as react-hook-form, react-scroll, react-router-dom and more.`,
        weblink: 'https://game-hub-ebon-seven.vercel.app',
        gitlink: 'https://github.com/Kingsley022/game-hub'
    },
    {
        id: 2,
        isToggled: false,
        img: amazon_clone,
        name: 'e-Commerce' ,
        language: 'JavaScript',
        description: `I built this project from scratch using React as a result of mastering the use of CRUD operations in React.
        I also made use of React-Hooks such as useEffect, 
        useState and few customHooks. i aslo used some react libraries such as react-hook-form, react-scroll, react-router-dom and more.`,
        weblink: 'https://amazon-clone-gamma-eight.vercel.app/',
        gitlink: 'https://github.com/Kingsley022/amazon_clone'
    },
    {
        id: 3,
        isToggled: false,
        img: netflix_clone,
        name: 'Todo',
        language: 'JavaScript',
        description: `I built this project from scratch using React as a result of mastering the use of CRUD operations in React.
        I also made use of React-Hooks such as useEffect, 
        useState and few customHooks. i aslo used some react libraries such as react-hook-form, react-scroll, react-router-dom and more.`,
        weblink: 'https://netflix-clone-beige-eta.vercel.app/',
        gitlink: 'https://github.com/Kingsley022/netflix_clone'
    }
];