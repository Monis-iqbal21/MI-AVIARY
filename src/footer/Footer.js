import React from 'react'
import "./Footer.css"
import fb_logo from "../images/fb_logo.png"
import whatsapp_logo from "../images/whatsapp_logo.png"
import youtube from "../images/youtube.png"
import Logo_navbar from "../images/Logo_navbar.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={{ padding: "0px" }}>
            <div id="footer_grid">
                <div id='grid_1' >
                    <div id='img_div'> <img src={Logo_navbar} id="footer_img" /></div>
                    <div id='img_div_btn'>
                        <Link to="/"  className='footer_btn'>Home</Link >
                        | &nbsp;&nbsp;&nbsp;
                        <Link to="dove" className='footer_btn'>Dove</Link >
                        |&nbsp;&nbsp;&nbsp;
                        <Link to="love-birds" className='footer_btn'>Love birds</Link >
                        |&nbsp;&nbsp;&nbsp;
                        <Link  to="java" className='footer_btn'>Java</Link >
                        <br></br>
                        <h1 style={{ color: "#fff", }}>MI AVIARY</h1>
                    </div>

                </div>

                <div id='grid_2'>
                    
                        <h1 className='no_margin_padding' style={{ color: "", marginBottom:"2%", }}>About US</h1>
                    
                        <p className='no_margin_padding' style={{ color: "white" }}>
                            <b className='no_margin_padding' style={{ color: "black", fontSize: "15px" }}>Company name :&nbsp;</b>MI AVIARY</p>
                        <br />
                        <p className='no_margin_padding' style={{ color: "white" }}>
                            <b className='no_margin_padding' style={{ color: "black", fontSize: "15px" }}>Location : &nbsp;</b>Abbasi shaheed Nazimabad karachi </p>
                        <br />
                        <p className='no_margin_padding' style={{ color: "white" }}>
                            <b className='no_margin_padding' style={{ color: "black", fontSize: "15px" }}>Phone: </b>+923112288510</p>
                    






                </div>

                <div className="social-icons" id='grid_3'>
                    <div>
                        <h1 className='no_margin_padding'>Social</h1>
                    </div>
                    <div className='footer_social'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={fb_logo} alt="Facebook" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="YouTube" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp_logo} alt="WhatsApp" />
                        </a>
                        <br />
                        <p style={{
                            fontSize: "20px",
                            fontStyle: "italic",
                            color: "white",
                            textDecoration: "underline"
                        }}>  Made by<span style={{
                            color: "rgb(38, 67, 90)",
                        }}> MONIS IQBAL</span> </p></div>
                </div>
            </div>
        </footer>
    )
}
 
export default Footer;