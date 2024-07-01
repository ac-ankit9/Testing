import React, { Component } from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }
}
