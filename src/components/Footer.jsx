import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import name_logo from "./footer_logo.png";
import { TbBrandFacebook } from "react-icons/tb";
import { LuTwitter } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";


function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col" style={{ width: "200px" }}>
              <ul>
                <li>
                  <img src={name_logo} alt="" className="footer_logo" />
                </li>
                <li>
                  <p>
                    VivaDecor your premier
                    <br />
                    destination for luxury and <br />
                    modern interior design
                  </p>
                </li>
                <li>
                  <div className="social-links">
                    <Link to="#">
                      <TbBrandFacebook className="icon" />
                    </Link>
                    <Link to="#">
                     
                        <LuTwitter className="icon" />
                    
                    </Link>
                    <Link to="#">
                    
                        <BsInstagram className="icon" />
                      
                    </Link>
                    <Link to="#">
                   
                        <BiLogoLinkedin className="icon" />
                      
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="#">Interior design</Link>
                </li>
                <li>
                  <Link to="#">Outdoor design</Link>
                </li>
                <li>
                  <Link to="#">Lightning design</Link>
                </li>
                <li>
                  <Link to="#">Office design</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="#">Reviews</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">Press inquires</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col" style={{ width: "200px" }}>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="#">info@vivadecor.com</Link>
                </li>
                <li>
                  <Link to="#">
                    Design Avenue Cityville,
                    <br />
                    CA 90210 United States
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;


    
