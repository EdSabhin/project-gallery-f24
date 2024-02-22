interface Project {
  image: string;
  title: string;
  description: string;
}

export const projects: Record<string, Project> = {
  projectOne: {
    image: "/assets/images/img1.jpg",
    title: "PROJECT 1",
    description: "Description of Project 1",
  },
  projectTwo: {
    image: "/assets/images/img2.jpg",
    title: "PROJECT 2",
    description: "Description of Project 2",
  },
  projectThree: {
    image: "/assets/images/img3.jpg",
    title: "PROJECT 3",
    description: "Description of Project 3",
  },
  projectFour: {
    image: "/assets/images/img4.jpg",
    title: "PROJECT 4",
    description: "Description of Project 4",
  },
};
