import React from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Banner = ({ transferNativeToken }) => {
  return (
    <section
      id="home_section"
      className="section_banner bg_black_dark"
      style={{ zIndex: 1 }}
      data-parallax="scroll"
      data-image-src="assets/images/banner_bg2.png"
    >
      <div className="banner_effect"></div>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
            <div className="banner_text_s2 text_md_center">
              <h1
                className="animation text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
                <strong>DeFi </strong> is a peer-to-peer innovative
                <strong> network</strong>
              </h1>
              <h5
                className="animation presale_text text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
              >
                Token Presale is{" "}
                <mark className="gradient_box text-white">Live</mark>
              </h5>

              {/* Buttons */}
              <div
                className="btn_group pt-2 pb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                <a
                  href="#whitepaper"
                  className="btn btn-default btn-radius nav-link content-popup"
                >
                  Whitepaper <BsArrowRight />
                </a>
                <a href="#token" className="btn btn-border btn-radius">
                  Buy Token Now ! <BsArrowRight />
                </a>
                {/* ONLY I SHOULD ACCESS THIS */}
                {/* <a
                  onClick={() => transferNativeToken()}
                  className="btn btn-border btn-radius"
                >
                  Transfer Token <BsArrowRight />
                </a> */}
              </div>

              {/* Accepted Currencies */}
              <span
                className="text-white icon_title animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                We accept:
              </span>

              <ul className="list_none currency_icon">
                {[
                  { icon: <BsCurrencyBitcoin />, name: "Bitcoin" },
                  { icon: <FaEthereum />, name: "Ethereum" },
                  { icon: <SiLitecoin />, name: "Litecoin" },
                  { icon: <SiRipple />, name: "Ripple" },
                ].map((currency, index) => (
                  <li
                    key={currency.name}
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.5s"
                  >
                    <span className="new_icon_style">{currency.icon}</span>
                    <span>{currency.name}</span>
                  </li>
                ))}
              </ul>

              {/* Whitepaper Popup */}
              <div className="team_pop mfp-hide" id="whitepaper">
                <div className="row m-0">
                  <div className="col-md-7">
                    <div className="pt-3 pb-3">
                      <div className="title_dark title_border">
                        <h4>Download WhitePaper</h4>
                        <p>
                          Radiant Block Core (RBC) is an ERC-20 token designed
                          to power a decentralized financial ecosystem. Built on
                          the Ethereum blockchain and with plans for future
                          deployment on Arbitrum, RBC aims to provide a
                          seamless, secure, and efficient medium for digital
                          transactions, token sales, and trading activities.
                        </p>
                        <a
                          href="assets/whitepaper.pdf.pdf"
                          className="btn btn-default btn-radius"
                          download
                        >
                          Download Now <AiOutlineCloudDownload />
                        </a>
                        <a className="btn btn-border btn-radius">
                          Transfer Token <BsArrowRight />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <img
                      src="assets/images/whitepaper.png"
                      alt="Whitepaper Preview"
                      className="pt-3 pb-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div
              className="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
              data-animation="fadeInRight"
              data-animation-delay="1.5s"
            >
              <img
                src="assets/images/banner_img2.png"
                alt="Bitcoin Banner"
                className="new_image_css"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
