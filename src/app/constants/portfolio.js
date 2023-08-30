import greener from "@/assets/projects/greener";

export default {
  title: 'Portfolio',
  description: 'Some of my recent projects',
  projects: [
    {
      name: 'SUNNDIO',
      content: `SUNNDIO is a healthtech, AI based web application developed with ReactJS, designed to be responsive and accessible on both mobile devices and desktops. Its primary
      purpose is to evaluate patients by gathering information about their pain area, pain behaviour, and symptoms. Based on this evaluation, the application provides
      personalized diagnoses and offers various treatment exercises, including guides and videos, to aid users in their recovery and improve their overall health.`,
      images: greener,
    },
    {
      name: 'GREENER',
      content: `A foodtech/healthtech AI based React-Native app for Android and iOS both that can help users manage kitchen inventory, orders groceries, recommend recipes from
      available inventory and connects with kitchen appliances in the simplest manner. Main goal was to increase automation of grocery orders and decline food waste by 90
      percent. And user goal to receive assistance in managing Kitchen in a personalised and convenient way.`,
      images: greener,
    },
    {
      name: 'Intelligize',
      content: `Intelligize is a regtech/legaltech/fintech project. It is the leading provider of best-in-class content, exclusive news collections, regulatory insights, and powerful
        analytical tools for compliance and transactional professionals. It offers a web-based research platform that ensures law firms, accounting firms, corporations and other
        organizations stay compliant with government regulations, build stronger deals and agreements, and deliver value to their shareholders and clients.
        It's like an advanced search engine that parses documents submitted by companies on SEC and allows users to view different types of information related to the
        documents they are interested in, it can be in the form of dashboards, tables, graphs and so much more.
        There are several apps within this project and each app has a different way of presenting different kinds of information. Each app was introduced as a new feature and
        there are several new advancements still going on in the project. The technologies used to build this project are ReactJS, JavaScript along with Redux and Redux-Saga.
        It's a huge project and is been in development since 2016.`,
      images: greener,
    },
  ]
}
