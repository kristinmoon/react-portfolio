import React from 'react';
import Nav from './components/Nav';
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import ContactForm from './components/Contact';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <main>
        <Project></Project>
        <About></About>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default App;
