import Logo_navbar from "../images/Logo_navbar.png"
import "./Navbar.css"
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div id="navbar_div">
            <div id="pic_div">
            <Link to="/" style={{ textDecoration: "none" }}><img src={Logo_navbar} id="Nav_pic" /></Link>
            </div>
            <div id="Nav_button_div">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="nav_btn">
                        <b>Home</b>
                    </span>
                </Link>

                <Link to="dove" style={{ textDecoration: "none" }}>
                    <span className="nav_btn">
                        <b>Dove</b>
                    </span>
                </Link>

                <Link to="love-birds" style={{ textDecoration: "none" }}>
                    <span className="nav_btn">
                        <b>Love birds</b>
                    </span>
                </Link>

                <Link to="java" style={{ textDecoration: "none" }}>
                    <span className="nav_btn">
                        <b>Java</b></span>
                </Link>

            </div>
        </div>
       
    )
};
export default Navbar;