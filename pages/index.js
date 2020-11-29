import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section id="home_section" className="section">
          <div className="center">
            <h1 className="title">Jarno <span className="purple-text">Bogaert.</span></h1>
            <p>Full stack <span className="purple-underline">software</span> engineer.</p>
          </div>
        </section>
        <section id="projects_section" className="section">
          <h1>Projects</h1>
        </section>
        <section id="about_section" className="section">
          <h1>About</h1>
        </section>
        <section id="contact_section" className="section">
          <h1>Contact</h1>
        </section>
      </div>
    </>
  )
}
