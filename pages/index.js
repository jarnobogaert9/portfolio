import Navbar from '../components/Navbar';
import Head from 'next/head'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jarno Bogaert</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <div class="hero">
        <div>
          <Fade left>
            <h1 className="title">Jarno <span className="purple">Bogaert.</span></h1>
          </Fade>
          <Fade right>
            <p className="subtitle">Full stack <span className="underline">software</span> engineer.</p>
          </Fade>

        </div>
      </div>
      {/* <Navbar />
      <div className="container">
        <section id="home_section" className="section">
          <div className="center">
            <h1 className="title">Jarno <span className="purple-text">Bogaert.</span></h1>
            <p>Full stack <span className="purple-underline">software</span> engineer.</p>
          </div>
        </section>
        <section id="projects_section" className="section">
          <h1>Projects.</h1>
        </section>
        <section id="about_section" className="section">
          <h1>About.</h1>
        </section>
        <section id="contact_section" className="section">
          <h1>Contact.</h1>
        </section>
      </div> */}
    </>
  )
}
