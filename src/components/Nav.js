import logo from "../logo.png"

export default function Nav(){
    return(
        <nav>
             <img src={logo} alt="logo"></img>
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