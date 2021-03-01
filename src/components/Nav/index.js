import React from "react";
// import scrollTo from "gatsby-plugin-smoothscroll"

function Nav(props) {
  const {
    contactSelected,
    setContactSelected
  } = props;

  // const handleClick = (item) => {
  //   return item;
  // };

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Moon Ink</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                About me</a>
            </li>
            <li>
              <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
                Portfolio</a>
            </li>
            <li>
              <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
                Resume</a>
            </li>
            <li className={`${contactSelected && 'navActive'}`}>
              <a onClick={() => setContactSelected(true)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
