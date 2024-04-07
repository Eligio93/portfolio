import Header from "./components/Header";
import Hero from "./components/Hero";
import SpecCard from "./components/SpecCard";
import frontEndIcon from './assets/frontendIcon.svg'
import mobileIcon from './assets/mobileIcon.svg'
import "./style.css"

function App() {


  return (
    <>
      <Header />
      <Hero />

      <section className="areas-specialization">
        <h2>Areas of Interest</h2>
        <div className="cards-container">
          <SpecCard
            icon={frontEndIcon}
            title={"Front-End Development"}
          />
          <SpecCard
            icon={mobileIcon}
            title={"Mobile Development"}
          />
        </div>

      </section>
    </>
  )
}

export default App
