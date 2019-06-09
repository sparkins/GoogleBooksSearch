import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Banner from "./components/Banner/banner";
import SearchForm from "./components/SearchForm/searchform";
import Footer from "./components/Footer/footer";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <Banner />
          <SearchForm />
          {/* <Wrapper> */}
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/search" component={Search} /> */}
          {/* </Wrapper> */}
          <Footer />
        </div >
      </Router >
    );
  }
}

export default App;
