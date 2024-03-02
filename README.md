# Bank Clients MongoDB Database

## Description
This is a bank clients database using MongoDB. It includes sample data for managing bank clients and their accounts.

## Technologies Used
- **Database**: MongoDB
- **Languages**: JavaScript node.js
- **Library**: MongoDB Node.js Driver

## Database Structure
The database consists of a collection named `clients`, where each document represents a bank client. Each client document includes the following fields:
- `first_name`: First name of the client.
- `last_name`: Last name of the client.
- `address`: Address of the client.
- `email`: Email address of the client.
- `phone_number`: Phone number of the client.
- `accounts`: Array of objects representing client accounts, each with:
  - `account_number`: Account number.
  - `balance`: Current balance in the account.

## Usage
1. Install MongoDB and Node.js if not already installed.
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. Run `node bankClients.js` to execute the sample script.
5. The script will connect to the MongoDB server, insert sample clients with their accounts, perform CRUD operations, and log the results.

## Sample Data
The script includes sample data for two bank clients:
- **John Doe:**
  - First Name: John
  - Last Name: Doe
  - Address: 123 Main St
  - Email: john.doe@example.com
  - Phone Number: 555-1234
  - Accounts:
    - Account Number: 123456789
      - Balance: $5000
    - Account Number: 987654321
      - Balance: $7500

- **Jane Smith:**
  - First Name: Jane
  - Last Name: Smith
  - Address: 456 Oak Ave
  - Email: jane.smith@example.com
  - Phone Number: 555-5678
  - Accounts:
    - Account Number: 111222333
      - Balance: $3000

## Notes
- This demonstrates basic MongoDB operations with Node.js.
- Make sure to have MongoDB running locally on the default port 27017 before running the script.
- You may need to modify the MongoDB connection URI in the script (uri variable) if your MongoDB setup is different.

