import logo from './assets/logo.png'
import "./Header.css"
export default function Header(){
    return(
        <header>
            <nav>
            <div className="image">
                <img src={logo} alt="logo"></img>
            </div>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>RESERVATIONS</li>
                <li>ORDER ONINE</li>
                <li>LOGIN IN</li>
            </ul>
        </nav>
        </header>
    )
}