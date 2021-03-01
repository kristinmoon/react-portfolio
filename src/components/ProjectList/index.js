// Project Images
import LookUpImg from "../../assets/images/LookUp-image.jpg";
import CollaborateImg from "../../assets/images/Collaborate-image.png";
import TechnicalImg from "../../assets/images/Technical-image.jpg";
import OhSnapImg from "../../assets/images/OhSnap-image.jpg";
import BudgetTrakImg from "../../assets/images/BudgetTrak-image.jpg";
import RunBuddyImg from "../../assets/images/RunBuddy-image.jpg";



// Social Icons
import githubIcon from "../../assets/icons/github.svg"
// import twitterIcon from "./assets/icons/twitter.svg"

export default {
  projects: [
    {
      id: 1,
      title: "LookUp",
      para:
        "Interested in knowing which celestial bodies are (or will be) above you at any given time? Allow the browser to gauge your location, then enter a date and time to find out! Results will show you the planets/bodies that will be overhead and will pull images of each from the NASA Image and Video Library.",
      imageSrc: LookUpImg,
      url: "https://kristinmoon.github.io/lookup/",
      githubUrl: "https://github.com/benmcrae5/lookup-by-ben-kara-kristin",
    },
    {
      id: 2,
      title: "Collaborate",
      para:
        "A collaborative whiteboard for sharing ideas: Whether you're creating a MMORPG or designing an event, this is the place to share and develop your ideas with collaborators. This app is still a work in progress and is a product of a group project for the UA Coding Bootcamp.",
      imageSrc: CollaborateImg,
      url: "https://glacial-dusk-52239.herokuapp.com/",
      githubUrl: "https://github.com/kristinmoon/collaborate",
    },
    {
      id: 3,
      title: "Let's Get Technical",
      para:
        "Writing about tech can be just as important as making it. Let's Get Technical is a CMS-style blog site where developers can publish blog posts and comment on other developers’ posts as well.",
      imageSrc: TechnicalImg,
      url: "https://powerful-temple-08997.herokuapp.com/",
      githubUrl: "https://github.com/kristinmoon/lets-get-technical",
    },
    {
      id: 4,
      title: "Oh Snap",
      para:
        "A no-frills site to display photos for a budding photographer using React.",
      imageSrc: OhSnapImg,
      url: "https://kristinmoon.github.io/photo-port/",
      githubUrl: "https://github.com/kristinmoon/photo-port",
    },
    {
      id: 5,
      title: "BudgetTrak",
      para:
        "BudgetTrak is a PWA that gives users a fast and easy way to track their money. This application allows for offline access and functionality so that the user will be able to add expenses and deposits to their budget with or without an internet connection.",
      imageSrc: BudgetTrakImg,
      url: "https://murmuring-depths-29548.herokuapp.com/",
      githubUrl: "https://github.com/kristinmoon/budget-tracker",
    },
    {
      id: 6,
      title: "Run Buddy",
      para:
        "One of my very first applications built during the UA Coding Bootcamp, Run Buddy is a website that offers fitness training services.",
      imageSrc: RunBuddyImg,
      url: "https://kristinmoon.github.io/run-buddy/",
      githubUrl: "https://github.com/kristinmoon/run-buddy",
    }
  ],
  social: [
    {
      img: githubIcon,
      url: "https://github.com/kristinmoon"
    },
    // {
    //   img: twitterIcon,
    //   url: "https://www.twitter.com/kristindmoon",
    // },
  ]
}
