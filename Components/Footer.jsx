import React from "react";

const Footer = () => {
  const footerList = ["Cryptocash", "How it works", "Token", "FAQ", "Contact"];

  return (
    <footer>
      <div
        className="ttop_footer bg_light_dark"
        data-z-index="1"
        data-parallax="scroll"
        data-img-src="assets/image/footer_bg.png"
      >
        <div className="container">
          <div className="row">
            {/* Footer Logo Section */}
            <div
              className="col-lg-4 col-md-12"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <div
                className="footer_logo mb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <a
                  href="#home_section"
                  className="page-scroll"
                  aria-label="Go to home"
                >
                  <img
                    src="assets/images/footer_logo.png"
                    alt="Radiant Block Core Logo"
                    className="footer_logo_image"
                  />
                </a>
              </div>
              <div className="footer_desc">
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  The CryptoCash app brings the power of decentralized finance
                  to your fingertips. With intuitive design and top-tier
                  security, managing your RBC tokens and participating in the
                  DeFi ecosystem has never been easier. Join us today !
                </p>
              </div>
            </div>

            {/* Quick Links Section */}
            <div
              className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <h4
                className="footer_title border_title animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Quick Links
              </h4>
              <ul className="footer_link">
                {footerList.map((list, i) => (
                  <li
                    key={i}
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay={`0.${i + 2}s`}
                  >
                    <a href="#faq" aria-label={`Go to ${list}`}>
                      {list}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Form Section */}
            <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
              <div
                className="newsletter_form"
                style={{ marginTop: "30px", marginBottom: "30px" }}
              >
                <h4 className="footer_title border_title animation">
                  Newsletter
                </h4>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Stay updated with the latest news, updates, and exclusive
                  offers from RadiantBlockCore. Subscribe to our newsletter and
                  be the first to know about upcoming features and developments
                  in the DeFi space!
                </p>
                <form
                  action="#"
                  className="subscribe_form_animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                  aria-label="Subscribe to newsletter"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter Email Address"
                    className="input-rounded"
                    aria-label="Email Address"
                  />
                  <button
                    type="submit"
                    title="Subscribe"
                    className="btn-info"
                    name="submit"
                    value="Submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bottom_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">
                Copyright &copy; 2023 All Rights reserved by @radiantblockcore
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list_none footer_menu">
                <li>
                  <a href="#" aria-label="Privacy Policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Terms and Conditions">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
