/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-waffle'); // Optional: For testing with Waffle
require('@hardhat-toolbox'); // Includes useful Hardhat plugins

// Helper function to validate required environment variables
const validateEnv = (vars) => {
  for (const v of vars) {
    if (!process.env[v]) {
      console.error(`Missing required environment variable: ${v}`);
      process.exit(1); // Exit the process with an error code
    }
  }
};

// Required environment variables
validateEnv(['API_URL', 'PRIVATE_KEY', 'ETHERSCAN_API_KEY']);

// Destructure environment variables
const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: {
    version: '0.8.21', // Latest Solidity version
    settings: {
      optimizer: {
        enabled: true, // Enable optimizer for gas efficiency
        runs: 200,
      },
    },
  },
  defaultNetwork: 'volta',
  networks: {
    hardhat: {}, // Built-in Hardhat network for local testing
    volta: {
      url: API_URL, // RPC URL for Volta network
      accounts: [`0x${PRIVATE_KEY}`], // Wallet private key
      gas: 'auto', // Automatically adjust gas limit
      gasPrice: 'auto', // Automatically determine gas price
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY, // For contract verification
  },
};