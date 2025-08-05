const hre = require("hardhat");

async function main() {
  const contractAddress = "0xe3562ee3d35C3Cf004691Ea37cC2687f9d5BD784";
  const constructorArgs = []; // если есть аргументы конструктора, добавь их сюда

  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: constructorArgs,
  });

  console.log("✅ Contract verified");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
