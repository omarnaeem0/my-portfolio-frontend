import pictures from "@/assets/projects";

export default {
  title: 'Portfolio',
  description: 'Some of my recent projects',
  projects: [
    {
      name: 'SUNNDIO',
      content: `SUNNDIO is a healthtech, AI based web application developed with ReactJS, designed to be responsive and accessible on both mobile devices and desktops. Its primary
      purpose is to evaluate patients by gathering information about their pain area, pain behaviour, and symptoms. Based on this evaluation, the application provides
      personalized diagnoses and offers various treatment exercises, including guides and videos, to aid users in their recovery and improve their overall health.`,
      images: pictures.sunndio,
      demo: 'https://glittery-gumdrop-7e09c0.netlify.app/',
    },
    {
      name: 'GREENER',
      content: `A foodtech/healthtech AI based React-Native app for Android and iOS both that can help users manage kitchen inventory, orders groceries, recommend recipes from
      available inventory and connects with kitchen appliances in the simplest manner. Main goal was to increase automation of grocery orders and decline food waste by 90
      percent. And user goal to receive assistance in managing Kitchen in a personalised and convenient way.`,
      images: pictures.greener,
    },
  ]
}
