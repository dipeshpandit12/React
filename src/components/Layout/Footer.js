import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faEnvelope,
    faLocationDot,
    faPhone
  } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css";
import logoWhiteImage from "./assets/logo-white.png";

const contacts=[
    {icon:faLocationDot,info: '28 piza way, Paris, France'},
    {icon:faPhone,info:'(977) 90000000',},
    {icon:faEnvelope,info:'customer@littlelemon.com',},
];

const socials=[
    {icon:faFacebook,name:"facebook",},
    {icon:faTwitter,name:"twitter",},
    {icon:faInstagram,name:"instagram",},
    {icon:faYoutube,name:"youtube",},
];

export default function Footer(){
    return(
        <footer>
            <div>
                <img src={logoWhiteImage}  alt='Little Lemon'/>
            </div>
            <nav>
                <h4>Sitemap</h4>
                <ul>

                </ul>
            </nav>
            <div>
                <h4>Contact us</h4>
                <address>
                    {contacts.map((contact,index)=>
                    <p key={index}>
                        <FontAwesomeIcon icon={contact.icon}/>{contact.info}
                    </p>)}
                </address>
            </div>
            <div>
                <h4>Connect with us</h4>
                {socials.map((social,index)=>
                <a
                    key={index}
                    href={`https://www.${social.name}.com`}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FontAwesomeIcon icon={social.icon} size="lg"/>
                </a>)}
            </div>
        </footer>
    )
}