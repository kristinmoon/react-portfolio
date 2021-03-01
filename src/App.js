import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import ContactForm from './components/Contact';
import Footer from "./components/Footer";

const App = () => {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <Header></Header>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
        <Footer></Footer>
      </main>
    </div>
  );
};

export default App;
