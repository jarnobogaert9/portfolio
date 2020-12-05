import React from 'react'
// import styles from '../styles/Navbar.module.css'
import { Link } from 'react-scroll';

const DURATION = 300;

const Navbar = () => {

  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar">
            <a href="" id="brand">Jarno Bogaert</a>
            <span className="ham-btn">
              <i className="fas fa-bars fa-2x"></i>
            </span>
            <div className="links">
              <div className="wrapper">
                <a href="">Projects</a>
                <a href="">About</a>
                <a href="">Contact</a>
              </div>
            </div>
            <span className="close-btn">
              <i className="fas fa-times fa-2x"></i>
            </span>
          </div>
        </div>
      </nav>
      {/* <nav className={styles.nav}>
        <div className="container">
          <Link id={styles.brand} to="home_section" smooth={true} duration={DURATION}>Jarno Bogaert</Link>
          <div className={styles.links}>
            <Link to="home_section" smooth={true} duration={DURATION} spy={true} activeClass={styles.active}>Home</Link>
            <Link to="projects_section" smooth={true} duration={DURATION} spy={true} activeClass={styles.active} offset={10}>Projects</Link>
            <Link to="about_section" smooth={true} duration={DURATION} spy={true} activeClass={styles.active} offset={10}>About</Link>
            <Link to="contact_section" smooth={true} duration={DURATION} spy={true} activeClass={styles.active} offset={10}>Contact</Link>
          </div>
        </div>
      </nav> */}
    </>
  )
}

export default Navbar
