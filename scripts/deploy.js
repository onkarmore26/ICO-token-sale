const hre = require("hardhat");
const { error } = require("waffle/lib/utils/Log");

const tokens = (nToken) => {
  return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
  //DEPLOY TOKEN CONTRACT
  const _initialSupply = tokens(500000000);

  const RadiantBlockCore = await hre.ethers.getContractFactory(
    "RadiantBlockCore"
  );

  const radiantBlockCore = await RadiantBlockCore.deploy(_initialSupply);

  await radiantBlockCore.deployed();
  console.log(`RadiantBlockCore: ${radiantBlockCore.address}`);

  //TOKEN SALE CONTRACT
  const _tokenPrice = tokens(1);

  const TokenSale = await hre.ethers.getContractFactory("TokenSale");
  const tokenSale = await TokenSale.deploy(
    radiantBlockCore.address,
    _tokenPrice
  );

  await tokenSale.deployed();
  console.log(`TokenSale: ${tokenSale.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
