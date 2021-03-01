import React from "react";

function Nav(props) {
  const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper teal lighten-3">
          <a href="#!" className="brand-logo">Moon Ink</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="nav nav-tabs right hide-on-med-and-down">
            {tabs.map(tab => (
              <li className="nav-item" key={tab}>
                <a
                  href={'#' + tab.toLowerCase()}
                  onClick={() => props.handlePageChange(tab)}
                  className={
                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                  }
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}



export default Nav;
