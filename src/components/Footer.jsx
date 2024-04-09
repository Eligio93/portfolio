import emailIcon from '../assets/emailIcon.svg'
import locationIcon from '../assets/locationIcon.svg'
import linkedinIcon from '../assets/linkedinIcon.svg'
import githubIcon from '../assets/gitHubIcon.svg'

export default function Footer(){
    return <footer className="footer">
        <div className="footer-description">
            <p>Eligio Cristantielli</p>
            <p>Web Developer</p>

        </div>
        <div className="footer-contacts">
            <div className="footer-email">
                <img src={emailIcon} alt="email-icon" />
                <a href="mailto: eligio.cristantielli@gmail.com">eligio.cristantielli@gmail.com</a>
            </div>
            <div className="footer-location">
                <img src={locationIcon} alt="location-icon" />
                <p>Sydney</p>
            </div>

        </div>
        <div className="footer-social">
            <div className="footer-linkedin">
                <img src={linkedinIcon} alt="" />
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eligio-cristantielli">Linkedin</a>
            </div>
            <div className="footer-github">
                <img src={githubIcon} alt="" />
                <a href="https://github.com/Eligio93" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    </footer>
}