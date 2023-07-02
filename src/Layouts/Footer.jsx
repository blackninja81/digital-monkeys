import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LayoutStyle from '../styles/Layout.module.scss'
import { FaAngular, FaReact, FaVuejs, FaLaravel } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGooglePlusSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={LayoutStyle.footer_section}>
      <Footer className="text-center text-lg-start text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="footer-section-1 me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className={LayoutStyle.footersection1}>
            <a href="" className="me-4 text-reset">
              <i>
                <AiFillFacebook />
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter">
                <AiFillTwitterSquare />
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google">
                <AiFillGooglePlusSquare />
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram">
                <AiFillInstagram />
              </i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Digital Monkeys
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/" className="text-decoration-none text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="/Games/Sale"
                    className="text-decoration-none text-reset"
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href="/Games/Playstation"
                    className="text-decoration-none text-reset"
                  >
                    Contact Us
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        <div className="footer-section-2 text-center p-4">
          <h6>
            © {new Date().getFullYear()} Copyright:
            <a className="text-reset fw-bold" href="https://timbaktum.com">
              Digital Monkeys
            </a>
          </h6>
        </div>
        {/* <!-- Copyright --> */}
      </Footer>
    </div>
  );
};

export default Footer;
