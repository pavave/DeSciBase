const hre = require("hardhat");

async function main() {
  const contractAddress = "0xe3562ee3d35C3Cf004691Ea37cC2687f9d5BD784";

  const registry = await hre.ethers.getContractAt("PublicationRegistry", contractAddress);

  const cid = "bafybeibwzifqx7y4wnhlbs2eyh3u4bw5wqypnxcmg26rqy6kh5x2q5xg5a"; // пример CID
  const doi = "10.1234/descibase.001"; // пример DOI

  const tx = await registry.registerPublication(cid, doi);
  await tx.wait();

  console.log(`✅ Publication registered:
- CID: ${cid}
- DOI: ${doi}
- Transaction hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
