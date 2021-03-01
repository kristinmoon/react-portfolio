import React from "react";

function Nav(props) {
  const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper teal lighten-3">
          <a href="#about" className="brand-logo">Moon Ink</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="nav nav-tabs right hide-on-med-and-down">
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

      <ul className="sidenav" id="mobile-demo">
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
  );
}

export default Nav;
