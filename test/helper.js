const { ethers } = require("hardhat");


const bigNumberToDecimal = (amount) => ethers.utils.formatEther(amount)
const decimalToBigNumber = (amount) => ethers.utils.parseEther(amount)

module.exports = {
    bigNumberToDecimal,
    decimalToBigNumber
}

