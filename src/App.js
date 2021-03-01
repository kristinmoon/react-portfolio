import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    )
  };
}

export default App;
