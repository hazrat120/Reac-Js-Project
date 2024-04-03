import logo from "../assets/images/logo-bg.png";
import Classes from "../style/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    //  Navigation Bar
    <nav className={Classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={Classes.brand}>
            <img src={logo} alt="Learn With sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
