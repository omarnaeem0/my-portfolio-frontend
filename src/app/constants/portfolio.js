const portfolio = {
  title: "Portfolio",
  description: "Some of my recent projects",
  projects: [
    {
      name: "SUNNDIO",
      intro:
        "Sunndio is a health solution for musculoskeletal pain and lesser injuries. It is based on an automated diagnosis algorithm, which leads to the three most probable diagnostics.",
      content: `Sunndio is a healthtech, AI based web application, designed to be responsive and accessible on both mobile devices and desktops. Its primary
      purpose is to evaluate patients by gathering information about their pain area, pain behavior, and symptoms. Based on this evaluation, the application provides
      personalized diagnoses and offers various treatment exercises, including guides and videos, to aid users in their recovery and improve their overall health.`,
      techStack: {
        frameworks: "ReactJS, Redux, Redux Thunk, NodeJS, ExpressJS",
        languages: "JavaScript, HTML5, CSS3, SASS",
        database: "MongoDB",
      },
      baseUrl: "https://omar-naeem-portfolio.s3.eu-north-1.amazonaws.com/projects/sunndio/",
      images: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.png",
        "11.png",
        "12.png",
      ],
      demo: "https://glittery-gumdrop-7e09c0.netlify.app/",
    },
    {
      name: "PORTFOLIO",
      intro:
        "My Portfolio, highly responsive and compatible with all types of screens, designed and developed by myself.",
      techStack: {
        frameworks: "ReactJS, NextJS, Tailwind CSS",
        languages: "JavaScript, HTML5, CSS3",
      },
      baseUrl: "https://omar-naeem-portfolio.s3.eu-north-1.amazonaws.com/projects/portfolio/",
      images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    },
    {
      name: "GREENER",
      intro:
        "A kitchen management AI app for Android and iOS, aimed at automating grocery orders and reducing food waste while offering personalized kitchen assistance.",
      content: `A foodtech/healthtech AI based React-Native app for Android and iOS both that can help users manage kitchen inventory, orders groceries, recommend recipes from
      available inventory and connects with kitchen appliances in the simplest manner. Main goal was to increase automation of grocery orders and decline food waste by 90
      percent. And user goal to receive assistance in managing Kitchen in a personalized and convenient way.`,
      techStack: {
        frameworks: "React Native, React Navigation, React Native Community, Redux, React Context",
        languages: "JavaScript",
      },
      baseUrl: "https://omar-naeem-portfolio.s3.eu-north-1.amazonaws.com/projects/greener/",
      images: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.png",
        "11.png",
        "12.png",
      ],
    },
  ],
};

export default portfolio;
