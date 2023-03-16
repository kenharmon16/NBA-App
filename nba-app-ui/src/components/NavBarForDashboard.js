import React from 'react'
import Footer from './Footer/Footer';
import HeaderForDb from './Header/HeaderForDb';

const NavBar = () => {
    return (
      <div>
        <HeaderForDb/>
        <main style={{minHeight: "93vh"}}></main>
        <Footer/>
      </div>
    )
  }
  
  export default NavBar;