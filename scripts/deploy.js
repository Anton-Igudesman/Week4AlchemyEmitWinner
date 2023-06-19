const hre = require("hardhat");

async function main() {
    
    const EmitWinner = await hre.ethers.getContractFactory("emitWinner");
    const emitWinner = await EmitWinner.deploy();
    console.log(emitWinner);
    await emitWinner.deployed();
    console.log(emitWinner);
    console.log(emitWinner.address);
    
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});