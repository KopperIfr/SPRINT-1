require('hardhat-deploy');
require('hardhat-contract-sizer');
require('hardhat-gas-reporter');
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.0",
    defaultNetwork: 'hardhat',
    networks: {
        sepolia: {
            url: process.env.SEPOLIA_RPC_URL,
            accounts: [process.env.PRIVATE_API_KEY],
            chainId: 11155111
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            chainId: 31337
        }
    },
    namedAccounts: {
        deployer: {
            default: 0
        }
    },
    etherscan: {
        enabled: true,
        apiKey: {
            sepolia: process.env.ETHERSCAN_API_KEY
        }
    }
};