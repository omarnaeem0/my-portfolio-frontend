
import ReactIcon from '../assets/icons/react.svg';
import ReactNativeIcon from '../assets/icons/reactnative.png';
import CSSIcon from '../assets/icons/css.svg';
import HTMLIcon from '../assets/icons/html.svg';
import MUIIcon from '../assets/icons/materialui.svg';
import GitIcon from '../assets/icons/git.svg';
import GithubIcon from '../assets/icons/github.svg';
import JSIcon from '../assets/icons/js.svg';
import TSIcon from '../assets/icons/typescript.svg';
import ReduxIcon from '../assets/icons/redux.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import VSCodeIcon from '../assets/icons/vscode.svg';
import SassIcon from '../assets/icons/sass.svg';
import JestIcon from '../assets/icons/jest.svg';
import WebpackIcon from '../assets/icons/webpack.svg';
import JiraIcon from '../assets/icons/jira.svg';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default {
  introduction: {
    name: 'Omar Naeem',
    jobTitle: 'Front-End React and React-Native Developer',
    content: `Frontend Developer providing services for developing Web applications using React and Android/iOS applications using React Native`,
    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/omar-naeem-janjua',
        Icon: AiFillLinkedin,
      },
      {
        title: 'Github',
        url: 'https://github.com/omarnaeem0',
        Icon: AiFillGithub,
      },
    ]
  },
  about: {
    title: 'About',
    description: 'My introduction',
    content: `Hi, I am a creative and experienced software engineer with over 6 years of experience in delivering high-impact web and mobile solutions,
    my objective is to continue leveraging my skills in translating designs into quality code and crafting intuitive application interfaces.
    I am dedicated to pushing the boundaries of user experience through my proficiency in JavaScript, ReactJS, and React-Native.
    My passion for staying updated with the latest best practices in development ensures that I consistently provide top-notch designs
    that enhance user satisfaction. I am committed to contributing my expertise to create responsive web-based and innovative Android
    and iOS mobile applications that drive success for clients and users alike.`,
    mainHighlights: [
      {
        title: 'Years experience',
        value: '06+'
      },
      {
        title: 'Completed projects',
        value: '12+'
      },
      {
        title: 'Companies worked',
        value: '06+'
      }
    ]
  },
  skills: {
    title: 'My Tech Stack',
    description: 'Technologies I\’ve been working with',
    skills: [
      {
        title: "React JS",
        src: ReactIcon,
      },
      {
        title: "React Native",
        src: ReactNativeIcon,
      },
      {
        title: "Redux",
        src: ReduxIcon,
      },
      {
        title: "JavaScript",
        src: JSIcon,
      },
      {
        title: "TypeScript",
        src: TSIcon,
        className: 'h-13 lg:h-15 w-auto'
      },
      {
        title: "HTML",
        src: HTMLIcon,
      },
      {
        title: "CSS",
        src: CSSIcon,
      },
      {
        title: "SASS",
        src: SassIcon,
      },
      {
        title: "Material UI",
        src: MUIIcon,
      },
      {
        title: "Tailwind",
        src: TailwindIcon,
      },
      {
        title: "VSCode",
        src: VSCodeIcon,
      },
      {
        title: "Git",
        src: GitIcon,
      },
      {
        title: "Github",
        src: GithubIcon,
      },
      {
        title: "Jest",
        src: JestIcon,
      },
      {
        title: "Webpack",
        src: WebpackIcon,
      },
      {
        title: "Jira",
        src: JiraIcon,
      },
    ]
  },
  portfolio: {
    title: 'Portfolio',
    description: 'Some of my recent projects',
    projects: [
      {
        name: 'Intelligize',
        content: `Intelligize is a regtech/legaltech/fintech project. It is the leading provider of best-in-class content, exclusive news collections, regulatory insights, and powerful
        analytical tools for compliance and transactional professionals. It offers a web-based research platform that ensures law firms, accounting firms, corporations and other
        organizations stay compliant with government regulations, build stronger deals and agreements, and deliver value to their shareholders and clients.
        It's like an advanced search engine that parses documents submitted by companies on SEC and allows users to view different types of information related to the
        documents they are interested in, it can be in the form of dashboards, tables, graphs and so much more.
        There are several apps within this project and each app has a different way of presenting different kinds of information. Each app was introduced as a new feature and
        there are several new advancements still going on in the project. The technologies used to build this project are ReactJS, JavaScript along with Redux and Redux-Saga.
        It's a huge project and is been in development since 2016.`
      },
      {
        name: 'SUNNDIO',
        content: `SUNNDIO is a healthtech, AI based web application developed with ReactJS, designed to be responsive and accessible on both mobile devices and desktops. Its primary
        purpose is to evaluate patients by gathering information about their pain area, pain behaviour, and symptoms. Based on this evaluation, the application provides
        personalized diagnoses and offers various treatment exercises, including guides and videos, to aid users in their recovery and improve their overall health.`
      },
      {
        name: 'GREENER',
        content: `A foodtech/healthtech AI based React-Native app for Android and iOS both that can help users manage kitchen inventory, orders groceries, recommend recipes from
        available inventory and connects with kitchen appliances in the simplest manner. Main goal was to increase automation of grocery orders and decline food waste by 90
        percent. And user goal to receive assistance in managing Kitchen in a personalised and convenient way.`
      }
    ]
  }
}