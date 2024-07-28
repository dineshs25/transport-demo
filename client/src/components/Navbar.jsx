/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';

// function Navbar() {
//   const [active, setActive] = useState(false);

//   const toggleNav = () => {
//     setActive(!active);
//   };

//   return (
//    <div className="nav-bar-sec">
//      <nav className={active ? 'active' : ''}>
//       <h2 className="logo">ASMR2Dev</h2>
//       <div className="bars" onClick={toggleNav}>
//         <i className="fa fa-bars"></i>
//       </div>
//       <ul className="nav-links">
//         <li className="nav-link"><a href="#">Home</a></li>
//         <li className="nav-link"><a href="#">About</a></li>
//         <li className="nav-link"><a href="#">Contact</a></li>
//         <li className="nav-link auth"><a href="#">Register</a></li>
//         <li className="nav-link auth"><a href="#">Login</a></li>
//       </ul>
//     </nav>
//    </div>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from 'react';
import FormOne from './Form';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleResize = () => {
    if (window.innerWidth >= 992 && menuActive) {
      setMenuActive(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuActive]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('darkmode');
      document.body.classList.add('darkmode');
    } else {
      document.documentElement.classList.remove('darkmode');
      document.body.classList.remove('darkmode');
    }
  }, [darkMode]);

  return (
    <div className='nav-bar-sec' >
      <header className="header" id="header">
        <nav className="navbar container">
          <a href="#" className="brand">
            <img src="/logo.jpg" alt="" />
          </a>
          <div className={`burger ${menuActive ? 'is-active' : ''}`} id="burger" onClick={toggleMenu}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <div className={`menu ${menuActive ? 'is-active' : ''}`} id="menu">
            <ul className="menu-inner">
              <li className="menu-item"><a href="#" className="menu-link" onClick={toggleMenu}>Home</a></li>
              <li className="menu-item"><a href="#" className="menu-link" onClick={toggleMenu}>Services</a></li>
              <li className="menu-item"><a href="#" className="menu-link" onClick={toggleMenu}>Blogs</a></li>
              <li className="menu-item"><a href="#" className="menu-link" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
          <button className="switch" id="switch" onClick={toggleDarkMode}>
            <i className={`switch-light bx ${darkMode ? 'bx-moon' : 'bx-sun'}`}></i>
            <i className={`switch-dark bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
          </button>
        </nav>
      </header>
      <main className="main">
        <section className="section banner banner-section">
          <div className="container banner-column">
            <div className="banner-form">
          <FormOne/>
            </div>
            <div className="banner-inner">
              <h1 className="heading-xl">Experience the Spiritual Essence of Andhra Pradesh with Mr. Pilgrim</h1>
              <p className="paragraph">
              Discover the divine beauty and spiritual heritage of Andhra Pradesh with Mr. Pilgrim. From the majestic Tirupati Temple, one of the holiest pilgrimage sites in India, to the tranquil shores of the Kanaka Durga Temple in Vijayawada, our tailored tours offer a deeply enriching experience for every devotee.
              </p>
              <button className="btn btn-darken btn-inline">
                Get Started<i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Navbar;
