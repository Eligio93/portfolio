import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
let greetings = ['Ciao', 'Hello', 'Bonjour', 'Hola', 'Hallo', 'Olá', 'Привет', 'Hej']

export default function Hero() {
    const [greetingIndex, setGreetingIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setGreetingIndex(prevIndex => (prevIndex + 1) % greetings.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return <div className="hero">
        <div className="hero-description">
            <p>{greetings[greetingIndex] + '!'}</p>
            <h1>I'm <span>Eligio Cristantielli</span></h1>
            <p>Welcome to my portfolio website! Here, you'll discover my latest projects, the technologies I use, and the services I offer. Don't hesitate to reach out—I'd love to hear from you. Enjoy exploring!</p>
        </div>
        <div className="hero-buttons">
            <Link to='/projects'><button>Explore Portfolio</button></Link>
            <Link to='/contacts'><button>Get in touch</button></Link>
        </div>

    </div>

}