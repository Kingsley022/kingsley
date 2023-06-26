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
                {skill: 'Bootstrap'},
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
        name: 'Gaming' ,
        language: 'ReactJs | NodeJs | ExpressJs | MongoDB',
        funtionalities: ["Users can take quizzes", "Users can ceate quizzes", "Users can delete quizzes they created", "Authenticate user"],
        weblink: '',
        gitlink: ' https://github.com/Kingsley022/Quiz-app'
    },
    {
        id: 1,
        isToggled: false,
        img: game_hub,
        name: 'Gaming',
        language: 'ReactJs | Typescript | chakraUI',
        funtionalities: ["Search for games", "Filter games"],
        weblink: 'https://game-hub-ebon-seven.vercel.app',
        gitlink: 'https://github.com/Kingsley022/game-hub'
    },
    {
        id: 2,
        isToggled: false,
        img: amazon_clone,
        name: 'e-Commerce' ,
        language: 'ReactJs | Typescript',
        funtionalities: ["shopping Cart Funtionalities"],
        weblink: 'https://amazon-clone-gamma-eight.vercel.app/',
        gitlink: 'https://github.com/Kingsley022/amazon_clone'
    },
    {
        id: 3,
        isToggled: false,
        img: netflix_clone,
        name: 'Netflix',
        language: 'ReactJs | Firebase',
        funtionalities: ["Authentication using firebase", "Search for movies", "Filter movies", "Play movie"],
        weblink: 'https://netflix-clone-beige-eta.vercel.app/',
        gitlink: 'https://github.com/Kingsley022/netflix_clone'
    },
    {
        id: 5,
        isToggled: false,
        img: avail_water,
        name: 'Avail_waters',
        language: 'ReactJs',
        funtionalities: ["Booking of water", "Adding to cart", "Delete cart item", "Auto price calculation"],
        weblink: 'https://avail-water.vercel.app/',
        gitlink: 'https://github.com/Kingsley022/avail_water'
    }
];