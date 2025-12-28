export interface Projects {
  id: string;
  imageLarge: string;
  imageMedium: string;
  imageSmall: string;
  imageXLarge: string;
  video: string;
  author: string;
  title: string;
  projectTitle: string;
  description: string;
  abridgedDescription: string;
  shortDescription: string;
  alt: string;
  href: string;
}

export const projects: Projects[] = [
  {
    id: "allytera",
    imageLarge: "/assets/images/bg-moons-allytera-alt.webp",
    imageMedium: "/assets/images/bg-allytera-alt.webp",
    imageSmall: "/assets/images/bg-allytera-alt.webp",
    imageXLarge: "/assets/images/bg-allytera-alt.webp",
    video: "/assets/videos/allytera-video-demo.mp4",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "Allytera",
    description:
      "A full-fledged poetry reading application, featuring original design, theming and ambiance for 21st Century lovers of verse and song.",
    abridgedDescription:
      "Elegant design and theming, for the modern verse and song enjoyer.",
    shortDescription: "Poetry Reader",
    alt: "Allytera",
    href: "https://allytera.vercel.app/ShakespearesRespite",
  },
  {
    id: "altafi",
    imageLarge: "/assets/images/bg-logo-altafi.webp",
    imageMedium: "/assets/images/bg-altafi.webp",
    imageSmall: "/assets/images/bg-altafi.webp",
    imageXLarge: "/assets/images/bg-altafi.webp",
    video: "/assets/videos/altafi-video-demo.mp4",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "AltaFi",
    description:
      "Currency converting tool, leveraging Frankfurter.app's API to display several daily, up-to-date data points. A converter's converter.",
    abridgedDescription:
      "A converter's converter, get updates on the € and extra data points.",
    shortDescription: "Currency Converter",
    alt: "Altafi",
    href: "https://altafi-currency.netlify.app/",
  },
  {
    id: "word-glyph",
    imageLarge: "/assets/images/bg-logo-word-glyph.webp",
    imageMedium: "/assets/images/bg-word-glyph.webp",
    imageSmall: "/assets/images/bg-word-glyph.webp",
    imageXLarge: "/assets/images/bg-word-glyph.webp",
    video: "/assets/videos/word-glyph-video-demo.mp4",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "Word Glyph",
    description:
      "Sentence builder prototype for a language tool, designed to assist the learner with syntax visualization. © 2024 Ed Sabhin. All rights reserved.",
    abridgedDescription:
      "A unique prototype learning tool for language learners.",
    shortDescription: "Syntax Visualizer",
    alt: "Word Glyph",
    href: "https://word-glyph.netlify.app/",
  },
  {
    id: "sigma-tracker",
    imageLarge: "/assets/images/bg-logo-sigma-tracker.webp",
    imageMedium: "/assets/images/bg-sigma-tracker.webp",
    imageSmall: "/assets/images/bg-sigma-tracker.webp",
    imageXLarge: "/assets/images/bg-sigma-tracker.webp",
    video: "/assets/videos/sigma-tracker-video-demo.mp4",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "Σ Tracker",
    description:
      "The latest cryptocurrency updates are made readily (and stylishly) available for crypto-curious traders, hodlers and degens alike.",
    abridgedDescription:`Get "cryptocurrent" and track the hottest coins in decentralized markets.`,
    shortDescription: "Crypto Market Cap",
    alt: "Sigma Tracker",
    href: "https://sigma-tracker.netlify.app/",
  },
];
