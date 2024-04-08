import { Link } from "react-router-dom"


export default function Hero(){
    return <div className="hero">
        <div className="hero-description">
        <p>Welcome to:</p>
        <h1>EC Web Developer</h1>
        <p>Web Development made easy</p>
        </div>
        <div className="hero-buttons">
        <Link to='/projects'><button>Explore Portfolio</button></Link>
        <button>Get in touch</button>
        </div>

    </div>
    
}