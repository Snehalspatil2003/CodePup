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

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
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

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Landing Page",
  "Portfolio",
  "Blogs",
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
    title: "Describe Your Idea",
    text: "Tell CodePup what you want — like “Build a personal portfolio” or “Create a startup landing page.” The AI understands your prompt and gets everything set up instantly.",
    date: "Step 1",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Customize Your Design",
    text: "Tweak the style, colors, and layout to match your brand. You can even upload brand logos, resumes, or mockups to make your site truly yours.",
    date: "Step 2",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Launch with One Click",
    text: "Preview, export, or deploy your ready-to-use React + Tailwind website instantly. No coding needed — just create and go live!",
    date: "Step 3",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Seamless Integrations",
    text: "Connect Discord, Slack, and more to automate workflows, sync updates, and add AI-powered magic to your favorite platforms with CodePup.ai.",
    date: "Step 4",
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
    description: "AI Website, personalized recommendation",
    price: "0",
    features: [
      "An AI Website straight out of your vision",
      "Personalized recommendations based on your preferences",
      "Ability to explore the website and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI Website, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI website with Additional Features",
      "An analytics dashboard to track your Progress",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI Website, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI Website straight of out vision",
      "Personalized recommendations based on your preferences",
      "Ability to explore the Website and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Build Sites Instantly",
    text: "Turn a simple idea into a polished web app. CodePup.ai generates full React and Tailwind projects fast—no coding required.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Design Your Way",
    text: "Pick from dozens of creative templates or customize your own. Every site is responsive, modern, and lightning quick.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Launch & Grow Effortlessly",
    text: "Export, deploy, and update your site with one click. CodePup makes scaling your digital presence as easy as snapping your fingers.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

