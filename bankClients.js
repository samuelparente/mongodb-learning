// Samuel Parente
// Mongodb learning

// Import the MongoClient from the mongodb library
const { MongoClient, ObjectId } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'bank';

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect((err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err.message);
        return;
    }
    console.log('Connected to MongoDB server');

    // Get the bank database
    const db = client.db(dbName);

    // Get the clients collection
    const clientsCollection = db.collection('clients');

    // Insert sample clients with account information
    clientsCollection.insertMany([
        {
            first_name: 'John',
            last_name: 'Doe',
            address: '123 Main St',
            email: 'john.doe@example.com',
            phone_number: '555-1234',
            accounts: [
                { account_number: '123456789', balance: 5000 },
                { account_number: '987654321', balance: 7500 }
            ]
        },
        {
            first_name: 'Jane',
            last_name: 'Smith',
            address: '456 Oak Ave',
            email: 'jane.smith@example.com',
            phone_number: '555-5678',
            accounts: [
                { account_number: '111222333', balance: 3000 }
            ]
        }
    ], (insertErr, insertResult) => {
        if (insertErr) {
            console.error('Error inserting clients:', insertErr.message);
            client.close();
            return;
        }
        console.log('Inserted', insertResult.insertedCount, 'clients');

        // Find all clients
        clientsCollection.find({}).toArray((findErr, allClients) => {
            if (findErr) {
                console.error('Error finding clients:', findErr.message);
                client.close();
                return;
            }
            console.log('All Clients:', allClients);

            // Find a client by ID
            clientsCollection.findOne({ _id: ObjectId(insertResult.insertedIds[0]) }, (findOneErr, johnDoe) => {
                if (findOneErr) {
                    console.error('Error finding client by ID:', findOneErr.message);
                    client.close();
                    return;
                }
                console.log('Found Client:', johnDoe);

                // Delete a client by ID
                clientsCollection.deleteOne({ _id: ObjectId(insertResult.insertedIds[1]) }, (deleteErr, deleteResult) => {
                    if (deleteErr) {
                        console.error('Error deleting client:', deleteErr.message);
                        client.close();
                        return;
                    }
                    console.log('Deleted', deleteResult.deletedCount, 'client');

                    // Find all clients after deletion
                    clientsCollection.find({}).toArray((remainingErr, remainingClients) => {
                        if (remainingErr) {
                            console.error('Error finding remaining clients:', remainingErr.message);
                            client.close();
                            return;
                        }
                        console.log('Remaining Clients:', remainingClients);

                        // Close the client connection
                        client.close();
                        console.log('Disconnected from MongoDB server');
                    });
                });
            });
        });
    });
});
