import { ethers } from "hardhat";
import { String__factory } from "../typechain";


async function main() {
 
  const StringC : String__factory = await ethers.getContractFactory("String");
  const stringC  = await StringC.deploy();

  await stringC.deployed();

  console.log("Contract deployed to:", stringC.address);

  const data = await stringC.getName();
  console.log("data of age is ", data.toString());

  const name = await stringC.getBytesName("Tariq", "Nawaz");
  console.log("data of age is ", name.toString());
 

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
