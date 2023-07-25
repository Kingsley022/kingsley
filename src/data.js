import game_hub from './assets/game_hub.png';
import amazon_clone from './assets/amazon_clone.png';
import netflix_clone from './assets/netflix_clone.png';
import avail_water from './assets/avail_waters.jpeg';
import quizzy2 from './assets/quizzy002.png';
import quizzy01 from './assets/quizzy001.png';
import quizzy3 from './assets/quizzy003.png';
import quizzy1 from './assets/quizzy1.png';
import quizzy6 from './assets/quizzy6.png';
import quizzy8 from './assets/quizzy8.png';
// Amazon
import amazon1 from './assets/amazon1.png';
import amazon2 from './assets/amazon2.png';
import amazon3 from './assets/amazon3.png';
// Netflix
import netflix1 from './assets/netflix1.png';
import netflix2 from './assets/netflix2.png';
import netflix5 from './assets/netflix5.png';
import netflix4 from './assets/netflix4.png';
// Avails
import avails1 from './assets/avails1.png';
import avails2 from './assets/avails2.png';
import avails3 from './assets/avails3.png';

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
        img: quizzy1,
        img_slides: [quizzy01, quizzy8, quizzy2, quizzy3,quizzy6],
        name: 'Quiz Website',
        language: ['ReactJs ', 'NodeJs', 'ExpressJs', 'MongoDB', 'Firebase'],
        funtionalities: ["Authentication & Authorization", "Quiz Taking", "Quiz Creation by users", 
            "Admin Functionalities(Analyzing created quizzes and posting them)",
            "Sending authomated messages",
            "Filtering and Searching etc."
        ],
        weblink: '',
        gitlink: 'https://github.com/Kingsley022/Quiz-app',
        description: 'This is a quiz website where users can take a quiz and also create and delete quizzes they created. The site also has an admin dashboard. Where the admin can accept or reject a quiz from a user. The admin can also send automated masseges depending on his action.'
    },
    {
        id: 1,
        isToggled: false,
        img: game_hub,
        img_slides: [game_hub],
        name: 'Game Website',
        language: ['ReactJs', 'Typescript', 'Chakra-UI', 'Rawg-api'],
        funtionalities: ["Game Search", "Game Filtering", "Dark and Light Mode Activation"],
        weblink: 'https://game-hub-ebon-seven.vercel.app',
        gitlink: 'https://github.com/Kingsley022/game-hub',
        description: "I created this site after mastering Chakra_ui to analyze my progress and expert level. Though is just a game search and filtering functionality but what i love most about this project is the code structure and reusability of my custom components in fetching data and also the fast page load even after ultilizing the rawg api which come's with high quality images.",
    },
    {
        id: 2,
        isToggled: false,
        img: amazon_clone,
        img_slides: [amazon1, amazon2, amazon3],
        name: 'Amazon Clone',
        language: ['ReactJs', 'Typescript', 'CSS', 'JSX', 'Fake-store-api'],
        funtionalities: ["Cart Funtionalities"],
        weblink: 'https://amazon-clone-gamma-eight.vercel.app/',
        gitlink: 'https://github.com/Kingsley022/amazon_clone',
        description: "Although the project is still in progress but it's absolutly one of my best projects so far due to it's complexity. Aniticipate for it to be finished soon, mean while you can check my current progress.",
        status: 'In-Progress'
    },
    {
        id: 3,
        isToggled: false,
        img: netflix_clone,
        img_slides: [netflix1, netflix2, netflix5, netflix4],
        name: 'Netflix Clone',
        language: ['ReactJs', 'CSS', 'Firebase', 'React-Youtube'],
        funtionalities: ["Firebase Authentication", "Search for Movies", "Filter Movies", "Play Movie"],
        weblink: 'https://netflix-clone-beige-eta.vercel.app/',
        gitlink: 'https://github.com/Kingsley022/netflix_clone',
        description: "Made a clone of Netflix using reactjs, though i encountered some difficulties mostly while trying to get the movies played when clicked form using React_YouTube.        In case it shows insecure site 'Click on Details' then scrow down 'Click on Visit unsafe site.'",
    },
    {
        id: 5,
        isToggled: false,
        img: avail_water,
        img_slides: [avails1, avails2, avails3],
        name: 'Ecommerce Website',
        language: ['ReactJs', 'CSS', 'JSX'],
        funtionalities: ["Booking of water", "Adding to cart", "Delete cart item", "Auto price calculation"],
        weblink: 'https://avail-water.vercel.app/',
        gitlink: 'https://github.com/Kingsley022/avail_water',
        description: "My first ever react project, not so good though but I've improved allot ever since this project.",
    }
];
export const socials =[
    {id:1, iconn:'fa fa fa-linkedin',url:"https://www.linkedin.com/in/kingsley-okereke-5b3426221"},
    {id:2, iconn:'fa fa fa-github', url:"https://github.com/Kingsley022"},
    {id:3, iconn:'fa fa fa-instagram', url: "https://instagram.com/_just_kingsley?igshid=ZGUzMzM3NWJiOQ=="}
]

export const experiencies = [
    {   
        id: 1, 
        school: "Federal Government College Okigwe Imo State, Nigeria",
        certification: "High School Diploma",
        category: 'education',
        date: "Sept.2014 - Dec.2023",
    },
    {   
        id: 2, 
        school: "Aptech Computer Education, Enugu State Nigeria",
        certification: "Advanced Diploma in Software Engineering",
        category: 'education',
        date: "Apr.2020 - May.2023",
    },
    {   
        id: 3, 
        school: "Freelancer at Fiveer | Web Development Tutor, Enugu Nigeria",
        certification: "Web Developer and Private Tutor",
        category: 'work',
        date: "Nov.2021 - Jan.2023",
    },
    {   
        id: 4, 
        school: "World Brain Technology",
        certification: "Frontend Developer(React.js)",
        category: 'work',
        date: "Feb.2023 - Present",
    }
];