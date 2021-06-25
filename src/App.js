import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home"
import Pictures from "./pages/Pictures"
import Location from "./pages/Location"
import Contacts from "./pages/Contacts"
import Navbar from "./components/Menu/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App" >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pictures" component={Pictures} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;