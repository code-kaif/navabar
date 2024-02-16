import React from "react";
import { FaAmazon } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";

const Footer = () => {
  let copy = String.fromCodePoint(169)
  return (
    <>
      <div className="foot-1">
        <h4>Back to Top</h4>
      </div>
      <div className="footer">
        <div className="discription">
          <div className="dis-1">
            <h4>Get to Know Us</h4>
            <div>About Us</div>
            <div>Career</div>
            <div>Press Release</div>
            <div>Amazone Science</div>
          </div>
          <div className="dis-2">
            <h4>Connect with Us</h4>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
          </div>
          <div className="dis-3">
            <h4>Make Money with Us</h4>
            <div>Sell on Amazone</div>
            <div>Sell Under Amazone Accelator</div>
            <div>Protect and build your Brand</div>
            <div>Amazone Global Setting</div>
            <div>Become an Affilate</div>
            <div>Fulfilment by Amazone</div>
            <div>Advertise your Product</div>
            <div>Amazone Pay on Merchant</div>
          </div>
          <div className="dis-4">
            <h4>Let Us Help You</h4>
            <div>COVID-19 and Amazone</div>
            <div>Your Account</div>
            <div>Return Center</div>
            <div>100% Purchase Protection</div>
            <div>Amazone App Download</div>
            <div>Help</div>
          </div>
        </div>
        <div className="location">
          <div className="loc-logo">
            <FaAmazon/>
          </div>
          <div className="loc-english">
            <div> <span><TbWorld/></span> English</div>
          </div>
          <div className="loc-rupee">
            <div> <span><FaRupeeSign/></span> Rupees</div>
          </div>
        </div>
      </div>
      <div className="foot-2">
        <div>Condition of Use & Sale Privacy Notice Interest-Based Ads</div>
        <div>{copy} 1996-2023, Amazone.com, Inc, or its affiliates</div>
      </div>
    </>
  );
};

export default Footer;
