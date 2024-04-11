import Header from "./Header";
import Footer from "./Footer";
import linkedinIcon from '../assets/linkedinIcon.svg';
import gitHubIcon from '../assets/gitIconFooter.svg'
import mailIcon from '../assets/emailIcon.svg'


export default function Contacts() {
    return (
        <>
            <Header />
            <section className="contacts">
                <div className="contact-description">
                    <p>Get</p>
                    <p>In</p>
                    <p>Touch</p>
                </div>
                <div className="contact-social">
                    <div className="contact-linkedin">
                        <img src={linkedinIcon} alt="linkedin-icon" />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eligio-cristantielli">Linkedin</a>

                    </div>
                    <div className="contact-git">
                        <img src={gitHubIcon} alt="gitHub-icon" />
                        <a href="https://github.com/Eligio93" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div className="contact-mail">
                        <img src={mailIcon} alt="email-icon" />
                        <a href="mailto: eligio.cristantielli@gmail.com">Mail</a>
                    </div>

                </div>

            </section>
            <Footer />

        </>

    )
}