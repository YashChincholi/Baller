import {
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
  brandB,
  brandBL,
  brandPL,
  brandNBA,
  sportsIcon1,
  sportsIcon2,
  sportsIcon3,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Why ballers",
    url: "#why",
  },
  {
    id: "2",
    title: "How to works",
    url: "#howitworks",
  },
  {
    id: "3",
    title: "For you",
    url: "#foryou",
  },
  {
    id: "4",
    title: "New account",
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

export const faq = [
  {
    id: "0",
    question: "Is Ballers for you?",
    answer:
      "This platform is tailored for Ultra-High-Net-Worth Individuals (UHNIs) and Family Offices who aspire to be part of a passionate and luxurious lifestyle built around sports and are looking for more than just buying and selling sports assets.",
  },
  {
    id: "1",
    question: "Who is it for?",
    answer:
      "Sports personalities, actors, influencers, and entrepreneurs with a minimum net worth of $5 million who seek to immerse themselves in the world of sports beyond just the game & transactions.",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [brandB, brandBL, brandNBA, brandPL];

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
    title: "Most exclusive, Made Accessible.",
    features: [
      "Front-row tickets, Exclusive sports clubs, Invite-only events,",
      "Networking with billionaires - are these things almost impossible to access? Yes.",
      "But do members get access to all of them? Also YES!",
    ],
  },
  {
    id: "1",
    title: "Remarkable Portfolio, Undeniable results.",
    features: [
      "With over 15 years of combined experience, our team has dedicated over",
      "130,000 hours to refining strategies, processes, and resources. Our goal?",
      "To deliver exceptional experiences and even better results.",
    ],
  },
  {
    id: "2",
    title: "Save Time, Save Money",
    features: [
      "Every second wasted is $$$ wasted. Ballers makes",
      "investments and managements of sports assets 5x faster,",
      "saving you more than 3000 hours per investment.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Sports beyond the game.",
    text: "Valued at nearly $1 trillion, sports is more than just about the game. With top athletes, exclusive clubs, global leagues, and more, it offers a vast opportunity for lifestyle of experiences and investments.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: sportsIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Exclusive access. Extraordinary Returns.",
    text: "Beyond traditional investments, wealth creation hinges on spotting the right opportunities. Given sports' substantial potential upside, it's an opportunity too big to miss. With the increasing commercialization.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: sportsIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "For those who don’t just play the game.",
    text: "It's the 0.01% experience for the 0.01%. Get access to exclusive events, invite-only clubs, unique opportunities, and VIPs. It's a lifestyle that yields compounded returns in experiences & wealth.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: sportsIcon3,
    imageUrl: benefitImage2,
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
    url: "https://www.instagram.com/ballerslife.official/?igsh=MzNlNGNkZWQ4Mg%3D%3D#",
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
