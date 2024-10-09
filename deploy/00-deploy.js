const { network, run } = require('hardhat');
module.exports = async ({getNamedAccounts, deployments}) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log(deployer);
    const simpleStorage = await deploy('SimpleStorage', {
        from: deployer,
        log: true
    })

    const otherStorage = await deploy('OtherStorage', {
        from: deployer,
        args: [simpleStorage.address],
        log: true
    })

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...");
        // Not functionable in version 6^ ethers ----->
        
        await verify(simpleStorage.address, []);
        await verify(otherStorage.address, [simpleStorage.address]);
    
        //______________________________________________
    
    }    
}

async function verify(contractAddress, args) {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
        address: contractAddress,
        constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
        console.log("Already Verified!")
        } else {
        console.log(e)
        }
    }
}


module.exports.tags = ['all', 'simpleStorage', 'otherStorage'];