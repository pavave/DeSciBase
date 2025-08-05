const hre = require("hardhat");

async function main() {
  const registry = await hre.ethers.deployContract("PublicationRegistry");

  await registry.waitForDeployment();

  console.log("✅ PublicationRegistry deployed to:", await registry.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
