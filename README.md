Author: Breeze Patel
Neu ID: 002821278
Neu Email: patel.bre@northeastern.edu

Bitcoin Transaction History Page
This project focuses on building a transaction history page using React/Typescript for the frontend and Node.js/Express for the backend. The goal is to fetch transaction details from the Bitcoin blockchain testnet using the provided API and display them in a tabular format similar to the layout provided in the provided image.
Project Overview
The transaction history page will retrieve data from the backend server, which fetches information from the Blockexplorer API using the provided transaction ID of Bitcoin Testnet. The backend server will ensure the security of API keys and URLs by keeping them confidential and not exposing them publicly.

Technologies Used
* React/Typescript: Frontend development framework for building user interfaces.
* Node.js/Express: Backend framework for building server-side applications.
* Blockexplorer API: External API used to fetch transaction details from the Bitcoin blockchain.
o https://blockexplorer.one/bitcoin/mainnet/tx/320dbd1c9aaec7404f411aa2bc1447e64c3fb33b69d707c0c18151ac5ded430f#downloadJSON=true
* Crypto APIs: Documentation resource for API integration and technical guidance.
o https://developers.cryptoapis.io/technical-documentation/api/blockchain-data/unified-endpoints/get-transaction-details-by-transaction-id

Project Workflow
1. Frontend Development: Develop the frontend application using React/Typescript to create the transaction history page layout in easy to interpreted data from UI.
2. Backend Setup: Set up the Node.js/Express server to handle API requests and responses. Implement routes to fetch data from the Blockexplorer API securely.
3. API Integration: Utilize the provided documentation from Crypto APIs to integrate the Blockexplorer API into the backend server. Implement secure handling of API keys and URLs to prevent exposure.
4. Data Fetching: When a user accesses the transaction history page, the frontend sends a request to the backend server with the transaction ID. The backend server fetches the transaction details from the Blockexplorer API and sends the data back to the frontend.
5. Display Data: Once the frontend receives the transaction details from the backend, it formats the data into a tabular format and displays it on the transaction history page.
6. Form Integration: Implement a form on the frontend to allow users to input the transaction ID they want to fetch details for. Upon submission, the frontend sends a request to the backend with the provided transaction ID.
a. One can get the Transaction ID to check the working of project: https://live.blockcypher.com/btc-testnet/tx/89caaa23703cda0e9edd71ff016387ff0b525d904e3e275f08a67a17732ba55e/
7. Security Measures: Ensure that sensitive information such as API keys and URLs are securely stored and not exposed to the public. Implement proper error handling and validation to prevent unauthorized access or data breaches.

Implementation for Testnet Transaction History
* Since the free version of the API mentioned above provides access to Testnet transactions only, our implementation focuses on retrieving and displaying Testnet transaction history.

Setting Up the Project
1. Clone the repository from GitHub.
2. Install dependencies for both frontend and backend using npm or yarn.
3. Start the backend server by running npm start or yarn start.
4. Start the frontend server by running npm start or yarn start.
5. Access the transaction history page through the provided URL.
6. Use the form on the frontend to input the transaction ID and fetch details.



Project Documentation and Results
UI & Result Screenshots
For detailed UI screenshots of the transaction history page and To view the result screenshot demonstrating the fetched transaction data, please refer to the Word file provided here.
or
https://docs.google.com/document/d/1Fu4xFcrIJ0cQIQHsDrYtUP9X8iM7DTo4wWD7lRhi7O8/edit?usp=sharing

Video Demonstration
For a video demonstration showing the process of fetching transaction data via transaction ID, please click here.
Or
https://drive.google.com/file/d/1SEJ6kNrafmJFyEY8cQeaxWMeIx0UV2gT/view?usp=drive_link
Conclusion
The Bitcoin Transaction History Page project aims to provide users with a secure and user-friendly interface for viewing detailed information about Bitcoin transactions. By leveraging React/Typescript for the frontend and Node.js/Express for the backend, the project ensures efficient data retrieval and display while maintaining security standards.


Author: Breeze Patel
Neu ID: 002821278
Neu Email: patel.bre@northeastern.edu

