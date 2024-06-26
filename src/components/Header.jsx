import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                    <li><NavLink to='/contacts'>Contacts</NavLink></li>
                </ul>
            </nav>
        </header>)


}