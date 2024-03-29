import logo from "./assets/logo.png"
import './Nav.css'
export default function Nav(){
    return(
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
    )
}