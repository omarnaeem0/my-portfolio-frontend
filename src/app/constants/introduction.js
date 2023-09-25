import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GOOGLE_DRIVE_BASE_URL } from "./common";

const INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID =
  "1TE9oJoft7jqPJQWLi1YIfHBujnw5SdKS";

const introduction = {
  name: "Omar Naeem",
  jobTitle: "Front-End React and React-Native Developer",
  content: `Frontend Heavy Fullstack Developer providing services for developing Web applications using React, Android/iOS applications using React Native, Backend Services using NodeJS, ExpressJS and MongoDB`,
  image: `${GOOGLE_DRIVE_BASE_URL}${INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID}`,
  links: [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/omar-naeem-janjua",
      Icon: AiFillLinkedin,
    },
    {
      title: "Github",
      url: "https://github.com/omarnaeem0",
      Icon: AiFillGithub,
    },
  ],
};

export default introduction;
