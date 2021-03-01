import React, { useState } from "react";
import Nav from '../Nav';
import Portfolio from "../Portfolio";
import About from "../About";
import ContactForm from '../Contact';
import Resume from '../Resume';

const Header = () => {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <ContactForm />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage(currentPage)}</main>
    </div>
  );
}

export default Header;
