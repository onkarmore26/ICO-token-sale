import React from "react";

const Service = () => {
  const Services = [
    {
      title: "Service Storage",
      description:
        "Securely store your tokens in our blockchain-based wallet. Our platform ensures top-notch security, allowing you to hold your ERC-20 tokens with full control over your assets.",
    },
    {
      title: "Mobile App",
      description:
        "Manage your tokens anytime, anywhere with our intuitive mobile app. Easily track balances, send and receive tokens, and interact with decentralized applications (dApps) on the go.",
    },
    {
      title: "Exchange Service",
      description:
        "Seamlessly swap, buy, or sell tokens with our built-in exchange service. We offer fast transactions and competitive rates, ensuring smooth liquidity within the ecosystem.",
    },
    {
      title: "Investment Project",
      description:
        "Unlock investment opportunities with staking and yield farming. Earn rewards by holding tokens, providing liquidity, or participating in governance decisions within our platform.",
    },
    {
      title: "Credit Card use",
      description:
        "Use your ERC-20 tokens like never before! Our platform enables crypto-to-fiat transactions, allowing you to link tokens to a virtual or physical credit card for real-world purchases.",
    },
    {
      title: "Planning",
      description:
        "We are constantly innovating to improve your experience. From new partnerships to upcoming features like lending, borrowing, and DeFi integrations, our roadmap is designed for sustainable growth.",
    },
  ];

  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet our solution for you
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Powering the future of decentralized finance, our ERC-20 token
                ecosystem provides seamless solutions for secure transactions,
                investment opportunities, and financial growth. Whether you’re
                looking to store, trade, or invest, we have the right tools for
                you.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {Services.map((service, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${i + 1}s`}
              >
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
