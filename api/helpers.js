module.exports = {
    getUserId(req) {
        if (!req) throw 'req parameter is required';
        const header = req.headers['x-ms-client-principal'];
        const encoded = Buffer.from(header, 'base64');
        const decoded = encoded.toString('ascii');
        const clientPrincipal = JSON.parse(decoded);
        return clientPrincipal.userId;
    },
    getMongoClient() {
        const { MongoClient } = require("mongodb");
        const uri = process.env.MONGO_CONNECTION_STRING;
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        return client;
    }
}
