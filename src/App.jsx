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
import "./style.css"

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
  }
]


function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="used-technologies">
        <h2>Used Technologies</h2>
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
            description={''}
          />
          <SpecCard
            icon={mobileIcon}
            title={"Mobile Development"}
            description={''}
          />
        </div>
      </section>

    </>
  )
}

export default App
