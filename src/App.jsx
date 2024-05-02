import Header from "./components/Header";
import Hero from "./components/Hero";
import SpecCard from "./components/SpecCard";
import frontEndIcon from './assets/frontendIcon.svg'
import mobileIcon from './assets/mobileIcon.svg'
import javascriptIcon from './assets/javascriptIcon.svg'
import cssIcon from './assets/cssIcon.svg'
import gitHubIcon from './assets/gitHubIcon.svg'
import htmlIcon from './assets/htmlIcon.svg'
import nodeIcon from './assets/nodeIcon.svg'
import reactIcon from './assets/reactIcon.svg'
import viteIcon from './assets/viteIcon.svg'
import vsIcon from './assets/vsIcon.svg'
import webpackIcon from './assets/webpackIcon.svg'
import expressIcon from './assets/expressIcon.svg'
import mongoDbIcon from './assets/mongoDbIcon.svg'
import backEndIcon from './assets/backEndIcon.svg'
import "./style.css"
import Footer from "./components/Footer";

let technologies = [
  {
    name: 'HTML',
    icon: htmlIcon
  },
  {
    name: 'CSS',
    icon: cssIcon
  },
  {
    name: 'Javascript',
    icon: javascriptIcon
  },
  {
    name: 'React',
    icon: reactIcon
  },
  {
    name: 'Vite',
    icon: viteIcon
  },
  {
    name: 'WebPack',
    icon: webpackIcon
  },
  {
    name: 'Node',
    icon: nodeIcon
  },
  {
    name: 'GitHub',
    icon: gitHubIcon
  },
  {
    name: 'Visual Studio',
    icon: vsIcon
  },
  {
    name:'Express',
    icon:expressIcon
  },
  {
    name:'Mongo DB',
    icon:mongoDbIcon
  }
]


function App() {
  window.scrollTo(0, 0)
  return (
    <>
      <Header />
      <Hero />
      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="technologies-container">
          {technologies.map((technologie) => {
            return <div className="technology" key={technologie.name}>
              <img src={technologie.icon} alt={technologie.name + '_icon'} />
              <p>{technologie.name}</p>
            </div>
          })}
        </div>
      </section>

      <section className="areas-specialization">
        <h2>Areas of Interest</h2>
        <div className="cards-container">
          <SpecCard
            icon={frontEndIcon}
            title={"Front-End Development"}
            description={'Specializing in front-end development, I create visually appealing and interactive user interfaces for websites and web apps. With expertise in HTML, CSS, and JavaScript, I ensure seamless functionality across platforms. Let me bring your vision to life for an exceptional user experience.'}
          />
          <SpecCard
            icon={mobileIcon}
            title={"Responsive Development"}
            description={'Experience personalized responsiveness tailored just for you, ensuring seamless compatibility across all screens, including mobile devices. Your content, perfectly optimized for every viewing experience, at your fingertips'}
          />
          <SpecCard
            icon={backEndIcon}
            title={"Back-End Development"}
            description={'Specializing in back-end development, I utilize Node.js and JavaScript, paired with MongoDB for database management. Let me bolster your project with a robust back-end system, seamlessly syncing with front-end interfaces for an enhanced user experience.'}
          />
        </div>
      </section>
      <Footer />

    </>
  )
}

export default App
