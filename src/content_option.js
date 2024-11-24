import img1 from "../src/assets/images/img1.jpg"
import img2 from "../src/assets/images/img2.jpg"
import img3 from "../src/assets/images/img3.jpg"
import img4 from "../src/assets/images/img4.jpg"

const logotext = "Pawan Poojary";
const meta = {
    title: "Pawan Poojary",
    description: "I am Pawan Poojary , Software developer. Currently studying at PICT Pune.",
};

const introdata = {
    title: "I’m Pawan Poojary",
    animated: {
        first: "Frontend Developer",
        second: "I code cool websites",
        third: "I create meaningful software solutions.",
    },
    description: "Proficient in frontend technologies like ReactJS, HTML, CSS, and JavaScript for creating dynamic and responsive user interfaces. Capable of full-stack project development with a solid understanding of software development principles.",
    your_img_url: img4,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Hello! I'm Pawan Poojary, a passionate Bachelor of Engineering student in Information Technology at Pune Institute of Computer Technology. Currently in my second year, I have a strong academic foundation with a CGPA of 9.45. My interests lie in frontend development, algorithms, and creating meaningful software solutions.",
};

// Adding resume link
const resume = {
    title: "Resume",
    link: "https://drive.google.com/file/d/11n9RzKHzVk5vdDILKybKPEDRGNyNPm3C/view?usp=sharing", // Replace with the actual URL of your resume
};

const skills = [
    {
        name: "ReactJs",
        value: 60,
    },
    {
        name: "HTML",
        value: 85,
    },
    {
        name: "CSS",
        value: 80,
    },
    {
        name: "Bootstrap",
        value: 60,
    },
    {
        name: "NodeJs",
        value: 55,
    },
];


const dataportfolio = [
    {
        img: img1,
        description: "Past To Present (P2P): A software system enabling PICT students to share books, drafting materials, and stationery items within the college community.",
        link: "https://github.com/PPOOJARY989/past_to_present_frontend", 
    },
    {
        img: img2,
        description: "The Learning Roadmaps: A platform for exploring coding skills and accessing placement statistics of top companies with integrated quiz sections.",
        link: "https://github.com/yourusername/learning-roadmaps", 
    },
    {
        img: img3,
        description: "Movie Recommender System: A Python-based system recommending movies using machine learning techniques and similarity analysis.",
        link: "https://github.com/PPOOJARY989/Movie-Recommender-System", 
    },
];

const contactConfig = {
    YOUR_EMAIL: "pawanpoojary989@gmail.com",
    YOUR_FONE: "+91 9028626989",
    description: "Do reach out to me for any Queries!.",
    // create an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/PPOOJARY989",
    linkedin: "www.linkedin.com/in/pawanpoojary27",
};

export {
    meta,
    dataabout,
    dataportfolio,
    resume, // Added resume
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
