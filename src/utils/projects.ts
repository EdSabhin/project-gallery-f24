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
  alt: string;
  href: string;
}

export const projects: Projects[] = [
  {
    id: "allytera",
    imageLarge: "/assets/images/bg-moons-allytera.jpg",
    imageMedium: "/assets/images/bg-allytera.jpg",
    imageSmall: "/assets/images/bg-allytera.jpg",
    imageXLarge: "/assets/images/bg-allytera.jpg",
    video: "/assets/videos/allytera-video-demo.mp4",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "Allytera",
    description:
      "A full-fledged poetry reading application, featuring original design, theming and ambiance for 21st Century lovers of verse and song.",
    alt: "Allytera",
    href: "https://allytera.vercel.app/ShakespearesRespite",
  },
  {
    id: "altafi",
    imageLarge: "/assets/images/bg-logo-altafi.jpg",
    imageMedium: "/assets/images/bg-altafi.jpg",
    imageSmall: "/assets/images/bg-altafi.jpg",
    imageXLarge: "/assets/images/bg-altafi.jpg",
    video: "/assets/videos/altafi-video-demo.mp4",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "AltaFi",
    description:
      "Currency converting tool, leveraging Frankfurter.app's API to display several daily, up-to-date data points. A converter's converter.",
    alt: "Altafi",
    href: "https://altafi-currency.netlify.app/",
  },
  {
    id: "word-glyph",
    imageLarge: "/assets/images/bg-logo-word-glyph.jpg",
    imageMedium: "/assets/images/bg-word-glyph.jpg",
    imageSmall: "/assets/images/bg-word-glyph.jpg",
    imageXLarge: "/assets/images/bg-word-glyph.jpg",
    video: "/assets/videos/word-glyph-video-demo.mp4",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "Word Glyph",
    description:
      "Sentence builder prototype for a language tool, designed to assist the learner with syntax visualization. © 2024 Ed Sabhin. All rights reserved.",
    alt: "Word Glyph",
    href: "https://word-glyph.netlify.app/",
  },
  {
    id: "sigma-tracker",
    imageLarge: "/assets/images/bg-logo-sigma-tracker.jpg",
    imageMedium: "/assets/images/bg-sigma-tracker.jpg",
    imageSmall: "/assets/images/bg-sigma-tracker.jpg",
    imageXLarge: "/assets/images/bg-sigma-tracker.jpg",
    video: "/assets/videos/sigma-tracker-video-demo.mp4",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "Sigma Tracker",
    description:
      "The latest cryptocurrency updates are made readily (and stylishly) available for crypto-curious traders, hodlers and degens alike.",
    alt: "Sigma Tracker",
    href: "https://sigma-tracker.netlify.app/",
  },
];
