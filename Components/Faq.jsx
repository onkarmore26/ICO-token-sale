import React, { useState } from "react";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestion, setOpenQuestion] = useState(null);

  const tabs = [
    { id: "general", label: "General" },
    { id: "tokens", label: "ERC-20 Tokens" },
    { id: "dex", label: "Decentralized Exchanges (DEX)" },
  ];

  const questions = {
    general: [
      {
        id: 1,
        question: "What is DeFi?",
        answer:
          "Decentralized Finance (DeFi) refers to blockchain-based financial services that operate without traditional banks or intermediaries. It enables users to lend, borrow, trade, and earn interest using smart contracts.",
      },
      {
        id: 2,
        question: "How does DeFi ensure security?",
        answer:
          "DeFi platforms use blockchain transparency, smart contract audits, and decentralized governance to enhance security. However, users should always research projects and use secure wallets to protect their assets.",
      },
      {
        id: 3,
        question: "What are the benefits of DeFi?",
        answer:
          "DeFi offers financial freedom, global accessibility, lower transaction costs, and passive income opportunities through staking, lending, and liquidity mining. It removes reliance on centralized institutions.",
      },
      {
        id: 4,
        question: "Is DeFi safe to use?",
        answer:
          "While DeFi provides enhanced transparency and security, risks like smart contract vulnerabilities and market volatility exist. Choosing well-audited projects and secure platforms helps mitigate these risks.",
      },
    ],
    tokens: [
      {
        id: 1,
        question: "What is an ERC-20 token?",
        answer:
          "An ERC-20 token is a standard for fungible tokens on the Ethereum blockchain. It defines a common set of rules and functions that allow tokens to be exchanged and used across decentralized applications (dApps).",
      },
      {
        id: 2,
        question: "How do ERC-20 tokens work?",
        answer:
          "ERC-20 tokens are created and managed via smart contracts on the Ethereum network. They follow specific functions, like transferring tokens, checking balances, and approving transactions, ensuring compatibility with Ethereum-based platforms.",
      },
      {
        id: 3,
        question: "What are the benefits of ERC-20 tokens?",
        answer:
          "ERC-20 tokens provide interoperability between decentralized applications, liquidity, and easy integration into the Ethereum ecosystem. They also allow easy trading and token management on platforms like exchanges and wallets.",
      },
      {
        id: 4,
        question: "Can I create my own ERC-20 token?",
        answer:
          "Yes! Creating your own ERC-20 token is possible using Ethereum’s Solidity programming language. Developers can define the token’s supply, name, symbol, and functions, allowing for tailored use cases like rewards, investments, or utility within dApps.",
      },
    ],
    dex: [
      {
        id: 1,
        question: "What is a decentralized exchange (DEX)?",
        answer:
          "A decentralized exchange (DEX) allows users to trade cryptocurrencies directly with one another without relying on a central authority. Trades are executed via smart contracts, providing greater control and privacy for users.",
      },
      {
        id: 2,
        question: "How do liquidity pools work on DEX platforms?",
        answer:
          "Liquidity pools are groups of funds provided by users (liquidity providers) that enable trading on decentralized exchanges. In return, liquidity providers earn a share of the trading fees based on the amount of liquidity they contribute to the pool.",
      },
      {
        id: 3,
        question:
          "What are the advantages of using a DEX over a centralized exchange (CEX)?",
        answer:
          "DEXs offer greater privacy, control, and security by allowing users to retain control of their private keys. They also reduce the risks of hacking or downtime that can affect centralized exchanges.",
      },
      {
        id: 4,
        question: "What are the risks associated with using a DEX?",
        answer:
          "While DEXs offer enhanced privacy and control, they also come with risks such as smart contract vulnerabilities, low liquidity, and higher transaction fees during network congestion. Users need to exercise caution and conduct proper research before trading.",
      },
    ],
  };

  return (
    <section id="faq" className="faq-section py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          HAVE ANY QUESTIONS?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          We’re here to help! Find answers to commonly asked questions below.
        </p>

        {/* Tabs */}
        <div className="tabs flex justify-center mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-2 mx-2 rounded-md text-lg ${
                activeTab === tab.id
                  ? "bg-white text-gray-800 font-bold"
                  : "text-white border border-gray-500"
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                setOpenQuestion(null);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Questions Grid */}
        <div className="questions-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {questions[activeTab].map((q, index) => (
            <div
              key={q.id}
              className="faq-box border border-gray-500 rounded-md p-4 space-y-2 transition-all duration-300"
              onClick={() =>
                setOpenQuestion(openQuestion === q.id ? null : q.id)
              }
              style={{
                marginBottom: "1rem",
                borderRadius: "0.5rem",
                marginTop: index === 0 ? "20px" : "0px",
              }}
            >
              <div className="question text-white text-lg font-semibold">
                {q.question}
              </div>
              {openQuestion === q.id && (
                <>
                  <hr className="border-t border-gray-500 my-2" />
                  <div className="answer text-gray-300">{q.answer}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
