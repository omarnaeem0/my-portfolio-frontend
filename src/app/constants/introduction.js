import profilePic from '../../../public/profile.png'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default {
  name: 'Omar Naeem',
  jobTitle: 'Front-End React and React-Native Developer',
  content: `Frontend Developer providing services for developing Web applications using React and Android/iOS applications using React Native`,
  image: profilePic,
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
}
