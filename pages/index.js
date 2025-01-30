import React from "react";

//INTERNAL IMPORTS
import { useStateContext } from "../Context/index";
import {
  About,
  ArrowUP,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  Timeline,
  TokenSale,
} from "../Components/index";

const index = () => {
  const {
    transferNativeToken,
    buyToken,
    connectWallet,
    setAddress,
    TOKEN_ICO,
    currentHolder,
    tokenSale,
    tokenHolders,
    nativeToken,
    balance,
    address,
  } = useStateContext();
  return (
    <div className="v_dark">
      <Header
        address={address}
        setAddress={setAddress}
        connectWallet={connectWallet}
      />
      <Banner transferNativeToken={transferNativeToken} />
      <Service />
      <About />
      <TokenSale buyToken={buyToken} tokenSale={tokenSale} />
      <Distribution />
      <MobileApp />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
