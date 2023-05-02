import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="secondary-bg">
      <footer className="footer p-10  text-base-content main-container">
        <div>
          <Link to="/">
            <p className="text-4xl font-extrabold border-red-800 border">
              Tred
              <small className=" text-white main-bg p-1 border border-red-800 border-b-0">
                Food
              </small>
            </p>
          </Link>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
