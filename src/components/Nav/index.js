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
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#about" onClick={() => setContactSelected(false)}>
                About me</a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setContactSelected(false)}>
                Portfolio</a>
            </li>
            <li>
              <a href="#resume" onClick={() => setContactSelected(false)}>
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

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#about" onClick={() => setContactSelected(false)}>
            About me</a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setContactSelected(false)}>
            Portfolio</a>
        </li>
        <li>
          <a href="#resume" onClick={() => setContactSelected(false)}>
            Resume</a>
        </li>
        <li className={`${contactSelected && 'navActive'}`}>
          <a onClick={() => setContactSelected(true)}>
            Contact
              </a>
        </li>
      </ul>
    </div>
  );
}



export default Nav;
