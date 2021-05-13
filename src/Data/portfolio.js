import portfolioApp from "../images/portfolioApp.png";
import liquiorStore from "../images/liquiorStore.png";

const projects = [
  {
    alt: "Ecommerce Liquior Store",
    image: liquiorStore,
    title: "Ecommerce Liquior Store",
    link: "https://jith-ecommerce.herokuapp.com/",
    code: "https://github.com/Mulkijeetu/shop-ecommerce.git",
    content:
      "A fully functional ecommerce Liquior store that uses latest hooks along with React Node and Mongo DB. User has a choice to add items into their card and make payment with any credit card or Googlepay.",
  },
  {
    alt: "Portfolio Website",
    image: portfolioApp,
    title: "Portfolio Website",
    link: "https://jith-portfolio.herokuapp.com/",
    code: "https://github.com/Hoang-Minh/mern_portfolio.git",
    content:
      "A beautiful portfolio that you are seeing right now is built with React and Material UI",
  },
];

export default projects;
