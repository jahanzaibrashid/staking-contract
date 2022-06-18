
const hre = require("hardhat");

async function main() {
  
  const RewardToken = await hre.ethers.getContractFactory("RewardToken");
  const rewardToken = await RewardToken.deploy();
  await rewardToken.deployed();
  
  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(rewardToken.address,rewardToken.address);
  await staking.deployed();
  console.log("RewardToken address:", rewardToken.address);
  console.log("Staking contract address:", staking.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
