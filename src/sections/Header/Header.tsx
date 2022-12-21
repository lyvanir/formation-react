import logo from "../../assets/images/logo.svg"
import style from "./Header.module.scss"

const Header = () => (
    <header className={style.header}>
        <a href="/" className={style.link}>
            <img className={style.logo} src={logo} alt="Logo Pokemon"/>
        </a>
    </header>
)

export default Header