import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,

} from "../assets";
import "../assets/version.png";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#Home",
  },
  {
    id: "1",
    title: "About us",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Features",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Contact us",
    url: "#Contact us",
  },
  {
    id: "4",
    title: "Sign up",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

// export const benefits = [
//   {
//     id: "0",
//     title: "Version control",
//     text: "Version control integrated to ensure seamless collaboration, tracking changes, and managing code efficiently on our platform.",
//     iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDuIQu8eqV00uXIZP_aAY3f0K1alYhI6IPoU9W8J5X4RPRgnEiGIyOlK68g&s",
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "1",
//     title: "Live Chat",
//     text: "Live chat functionality enables real-time communication, enhancing user support and engagement directly on our platform.",
//     backgroundUrl: "./src/assets/benefits/card-2.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "2",
//     title: "Video Conferencing",
//     text: "Video conferencing functionality enables face-to-face meetings, fostering efficient remote collaboration and communication on our platform.",
//     backgroundUrl: "./src/assets/benefits/card-3.svg",
//     iconUrl: benefitIcon3,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "3",
//     title: "SpreadSheet And Documetation",
//     text: "Spreadsheet and documentation functionality allows for organized data management and seamless information sharing on our platform.",
//     backgroundUrl: "./src/assets/benefits/card-4.svg",
//     iconUrl: benefitIcon4,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "4",
//     title: "Task Manager",
//     text: "Task manager functionality facilitates efficient project tracking and task management, enhancing productivity on our platform.",
//     backgroundUrl: "./src/assets/benefits/card-5.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "5",
//     title: "Real time Code Collaboration",
//     text: "Real-time code collaboration enables simultaneous editing and coding, fostering team productivity and seamless development on our platform.",
//     backgroundUrl: "./src/assets/benefits/card-6.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//   },
// ];
export const benefits = [
  {
    id: "0",
    title: "Expense tracker and project planner",
    text: "Creating a comprehensive expense tracker and project planner to keep account of cost incurred and project progress to help in further operations",

    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: "https://cdn-icons-png.flaticon.com/128/10758/10758868.png",
    imageUrl: benefitImage2,
    link: "https://budget-expense-tracker-main-de1-sanskar-jains-projects-dca92dea.vercel.app"
  },
  {
    id: "1",
    title: "Real Time Collaboration Dashboard",
    text: "Real time collaboration dashboard to streamline inter-departmental dealings and reduce conflicts by foreseeing other department's work and proceedings.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: "https://cdn-icons-png.flaticon.com/128/16139/16139688.png",
    imageUrl: benefitImage2,
    light: true,
    link: "https://analytical-dashboard-delta.vercel.app/dashboard"
  },
  {
    id: "2",
    title: "Geo Spatial mapping",
    text: " Geo Spatial mapping by using GIS technology to reduce project overlapping and providinh resource optimization",
    backgroundUrl: "./src/assets/benefits/card-3.svg",

    iconUrl: "https://cdn-icons-png.flaticon.com/128/8672/8672237.png",
    imageUrl: benefitImage2,
    link: "https://gis-mapping.vercel.app"
  },
  {
    id: "3",
    title: "Public Feedback Forum",
    text: "Public feedback forum to raise issues and register complaint against a department or a project to the CMO(One department can also register complaint against other department or other individual)",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: "https://cdn-icons-png.flaticon.com/128/6576/6576105.png",
    imageUrl: benefitImage2,
    light: true,
    link: "https://citysync-community.vercel.app/"
  },
  {
    id: "4",
    title: "Sustainable Project prioritization",
    text: " Creating a sustainability report to analyse impact of each project on environment",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: "https://cdn-icons-png.flaticon.com/128/8239/8239588.png",
    imageUrl: benefitImage2,
    link: "https://dashboard-with-chart-pichart-graph-y7om.vercel.app/"
  },
  
{
    id: "5",
    title: "AI Powered Predictor",
    text: " Ai powered predictor to plan project details and cost in advance to avoid any last minute hassle and to provide a clear picture of the project",
    iconUrl: "https://cdn-icons-png.flaticon.com/128/5278/5278402.png",
    imageUrl: benefitImage2,
    light: true,
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    link: "#"
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
