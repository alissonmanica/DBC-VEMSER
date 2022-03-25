import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import style from "./Footer.module.css"


function Footer() {
    return (
        <div className={style.footerIcons}>
            <a href="https://www.facebook.com/alisson.manica" ><FaFacebook /></a>
            <a href="https://www.instagram.com/alissonmnc/" ><FaInstagram /></a>
            <a href="https://github.com/alissonmanica" ><FaGithub /></a>
            <a href="https://www.linkedin.com/in/alisson-manica-a02a38212/" ><FaLinkedin /></a>
        </div>
    )
}

export default Footer;