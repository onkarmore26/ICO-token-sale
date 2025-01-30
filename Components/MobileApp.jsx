import React from "react";
import { IoLogoApple } from "react-icons/io";
import { AiFillAndroid } from "react-icons/ai";
const MobileApp = () => {
  return (
    <section
      id="mobileapp"
      className="bg_light_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/app_bg.png"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="title_default_light title_border text_md_center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Download Mobile App
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Take full control of your RBC tokens with our user-friendly
                mobile app. Designed for convenience and security, the app
                allows you to store, send, and receive tokens effortlessly while
                keeping your assets protected.
              </p>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Stay ahead with real-time market updates, seamless trading, and
                portfolio tracking, all in one place. Whether you're a trader or
                investor, our app ensures smooth interaction with the DeFi
                ecosystem—anytime, anywhere. Coming soon to iOS & Android.
              </p>
            </div>

            <div
              className="btn_group text_md_center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.6s"
            >
              <a
                href="https://play.google.com/store/"
                className="btn btn-default btn-radius"
              >
                <AiFillAndroid className="new_font_size" />
                Google Store
              </a>
              <a
                href="https://www.apple.com/in/store"
                className="btn btn-default btn-radius"
              >
                <IoLogoApple className="new_font_size" />
                Apple Store
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12">
            <div
              className="res_md_mt_50 res_sm_mt_30 text-center animation"
              data-animation="fadeInRight"
              data-animation-delay="0.2s"
            >
              <img src="assets/images/mobile_app3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
