interface Projects {
  image: string;
  video?: string;
  author: string;
  title: string;
  projectTitle: string;
  description: string;
  href: string;
}

export const projects: Projects[] = [
  {
    image: "/assets/images/img1.jpg",
    video: "/assets/videos/allytera-demo.mp4",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "Allytera",
    description:
      "A full-fledged poetry reading application, featuring original design, theming and ambiance for 21st Century lovers of verse and song.",
    href: "https://allytera.vercel.app/Abode",
  },
  {
    image: "/assets/images/img2.jpg",
    video: "",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "AltaFi",
    description:
      "Currency converting tool, leveraging Frankfurter.app's API to display several daily, up-to-date data points.",
    href: "https://altafi-currency.netlify.app/",
  },
  {
    image: "/assets/images/img3.jpg",
    video: "",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "Word Glyph",
    description:
      "Sentence builder prototype for a language tool, designed to assist the learner with syntax visualization. © 2024 Ed Sabhin. All rights reserved.",
    href: "https://word-glyph.netlify.app/",
  },
  {
    image: "/assets/images/img4.jpg",
    video: "",
    author: "Ed Sabhin",
    title: "Project Gallery",
    projectTitle: "Sigma Tracker",
    description:
      "The latest cryptocurrency updates are made readily (and stylishly) available for crypto-curious traders, hodlers and degens alike.",
    href: "https://sigma-tracker.netlify.app/",
  },
];
