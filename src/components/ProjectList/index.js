// Project Images
import LookUpImg from "../../assets/images/LookUp-image.jpg";
import CollaborateImg from "../../assets/images/Collaborate-image.png";
import TechnicalImg from "../../assets/images/Technical-image.jpg";
import OhSnapImg from "../../assets/images/OhSnap-image.jpg";
import BudgetTrakImg from "../../assets/images/BudgetTrak-image.jpg";
// import RunBuddyImg from "../../assets/images/RunBuddy-image.jpg";
import TacoImg from "../../assets/images/TacoBoutIt-image.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  projects: [
    {
      id: 1,
      title: "LookUp",
      para:
        "Interested in knowing which celestial bodies are (or will be) above you at any given time? Allow the browser to gauge your location, then enter a date and time to find out! Results will show you the planets/bodies that will be overhead and will pull images of each from the NASA Image and Video Library.",
      imageSrc: LookUpImg,
      alt: "planet",
      url: "https://kristinmoon.github.io/lookup/",
      githubUrl: "https://github.com/benmcrae5/lookup-by-ben-kara-kristin",
    },
    {
      id: 2,
      title: "Taco 'Bout It",
      para:
        "Taco 'Bout It is a full-service application for a Mexican restaurant. A user can view the menu, place an order, send a message to us, view our story, and find our store location.",
      imageSrc: TacoImg,
      alt: "taco ingredients",
      url: "http://quiet-beach-11732.herokuapp.com/",
      githubUrl: "https://github.com/amiedawn/taco-shop",
    },
    {
      id: 3,
      title: "Collaborate",
      para:
        "A collaborative whiteboard for sharing ideas: Whether you're creating a MMORPG or designing an event, this is the place to share and develop your ideas with collaborators. This app is still a work in progress and is a product of a group project for the UA Coding Bootcamp.",
      imageSrc: CollaborateImg,
      alt: "collaborative drawing",
      url: "https://glacial-dusk-52239.herokuapp.com/",
      githubUrl: "https://github.com/kristinmoon/collaborate",
    },
    {
      id: 4,
      title: "Let's Get Technical",
      para:
        "Writing about tech can be just as important as making it. Let's Get Technical is a CMS-style blog site where developers can publish blog posts and comment on other developers’ posts as well.",
      imageSrc: TechnicalImg,
      alt: "keyboard",
      url: "https://powerful-temple-08997.herokuapp.com/",
      githubUrl: "https://github.com/kristinmoon/lets-get-technical",
    },
    {
      id: 5,
      title: "Oh Snap",
      para:
        "A no-frills site to display photos for a budding photographer using React.",
      imageSrc: OhSnapImg,
      alt: "photo studio",
      url: "https://kristinmoon.github.io/photo-port/",
      githubUrl: "https://github.com/kristinmoon/photo-port",
    },
    {
      id: 6,
      title: "BudgetTrak",
      para:
        "BudgetTrak is a PWA that gives users a fast and easy way to track their money. This application allows for offline access and functionality so that the user will be able to add expenses and deposits to their budget with or without an internet connection.",
      imageSrc: BudgetTrakImg,
      alt: "money",
      url: "https://murmuring-depths-29548.herokuapp.com/",
      githubUrl: "https://github.com/kristinmoon/budget-tracker",
    },
  ],
};
