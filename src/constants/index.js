import {
    react,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    starbucks,
    rhamnolipid,
    openai,
    gym,
    tiktik,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: react,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Web Development Intern",
      company_name: "Rhamnolipid",
      icon: rhamnolipid,
      iconBg: "#E6DEDD",
      points: [
        "Built client web application that helped in exploring web marketing strategies for a potential crowdfunding campaign.",
        "Helped in exploring web marketing strategies for campaign.",
        "Utilized responsive design practices to make website responsive on all devices.",
      ],
    },
    {
      title: "Barista",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      points: [
        "Provided the signature Starbucks customer service experience to all guests.",
        "Created connections between guests to ensure long-term sales.",
        "Prepared beverages to company standard while working in a fast-paced environment.",
      ],
    }
  ];
  
  const projects = [
    {
      name: "OpenAI Image Generator",
      description:
        "Fullstack web application that allows users to create images from text using DALL-E 2 and OpenAI's API. User-created images are stored and displayed on the home page!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: openai,
      source_code_link: "https://github.com/fenn96/ai-app",
    },
    {
      name: "Social Media App",
      description:
        "Web-based platform that allows users to upload short videos to their profile. Users can search for videos, comment and like individual posts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tiktik,
      source_code_link: "https://github.com/fenn96/tiktok-clone",
    },
    {
      name: "Gym App",
      description:
        "Frontend web application for gym business featuring latest design techniques and modern presentation/transitions to provide a superior user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/fenn96/gym-app",
    },
  ];
  
  export { services, technologies, experiences, projects };