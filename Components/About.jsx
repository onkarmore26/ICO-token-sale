import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="small_pt">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text_md_center">
              <img
                src="assets/images/about_img2.png"
                alt=""
                data-animation="zoomIn"
                data-animation-dalay="0.2s"
                className="animation"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div className="title_default_light title_border">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-dalay="0.2s"
              >
                About The Cryptocash
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-dalay="0.4s"
              >
                CryptoCash is a next-generation decentralized finance (DeFi)
                ecosystem designed to make crypto transactions seamless, secure,
                and accessible to everyone. Built on Ethereum and soon expanding
                to Arbitrum, our platform empowers users with secure token
                storage, fast transactions, and innovative financial solutions.
              </p>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-dalay="0.8s"
              >
                With CryptoCash, you can store, trade, invest, and spend your
                ERC-20 tokens effortlessly. Whether you're a trader, investor,
                or DeFi enthusiast, our ecosystem provides the tools needed to
                navigate the evolving digital economy.
              </p>
            </div>
            <a
              href=""
              className="btn btn-default btn-radius video animation"
              data-animation="fadeInUp"
              data-animation-dalay="1s"
            >
              let's Start
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
