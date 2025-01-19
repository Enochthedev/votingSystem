# Decentralized Voting Application

learnt and deployed
This repository contains a demo decentralized voting application. The application is built with a Solidity smart contract for voting and a ReactJS frontend for user interaction.

---

## Features

- **Decentralized Voting:** Voting functionality implemented in Solidity.
- **ReactJS Frontend:** User-friendly interface to interact with the smart contract.
- **Customizable Blockchain Network:** Supports various blockchain networks by configuring Hardhat.

---

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Hardhat](https://hardhat.org/)
- A wallet such as [MetaMask](https://metamask.io/)
- Access to a blockchain endpoint (e.g., [Volta](https://volta.net/))

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Enochthedev/decentralized-voting.git
   cd decentralized-voting
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

---

## Deployment

### Compile the Smart Contract

Compile the Solidity contract to generate the necessary artifacts:

```bash
npx hardhat compile
```

### Deploy the Smart Contract

Deploy the contract to your blockchain network:

```bash
npx hardhat run --network volta scripts/deploy.js
```

> **Note:** Replace `volta` with your desired network defined in `hardhat.config.js`.

### Configure the Environment

1. Copy the deployed contract address from the deployment output.
2. Create a `.env` file in the root directory if it does not already exist:

   ```bash
   touch .env
   ```

3. Add the following keys to the `.env` file:

   ```env
   REACT_APP_CONTRACT_ADDRESS=<Your_Contract_Address>
   PRIVATE_KEY=<Your_Private_Key>
   NETWORK_ENDPOINT=<Blockchain_Network_Endpoint>
   ```

---

## Running the Application

Start the application locally:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

---

## Customization

### Switching Blockchain Networks

To use a different blockchain network:

1. Update the `networks` configuration in `hardhat.config.js`.
2. Provide the corresponding endpoint in your `.env` file.

### Extending the Smart Contract

The Solidity contract can be extended to include additional features like weighted voting or vote delegation. Modify the `contracts/` directory as needed and recompile/deploy the contract.

---

## Troubleshooting

- **Compilation Errors:** Ensure the Solidity version in `hardhat.config.js` matches your contract's pragma.
- **Deployment Errors:** Verify your network configuration and ensure your wallet has sufficient funds for gas fees.
- **React Errors:** Ensure your `.env` variables are correctly configured and restart the development server.

---

## Resources

- [Hardhat Documentation](https://hardhat.org/docs)
- [ReactJS Documentation](https://reactjs.org/docs/getting-started.html)
- [Solidity Documentation](https://docs.soliditylang.org/)

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
