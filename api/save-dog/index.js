module.exports = async function (context, req) {
    const {getUserId, getMongoClient} = require('../helpers')
    const client = getMongoClient();

    try {
        await client.connect();
        const database = client.db('loved-mutt');
        const collection = database.collection('dogs');
        const doc = {
            imageUrl: req.body.imageUrl,
            dogType: req.body.dogType,
            name: req.body.name,
            userId: getUserId(req)
        };
        const result = await collection.insertOne(doc);
        context.res = {
            body: result
        };
    } catch (ex) {
        context.res = {
            body: ex,
            status: 500
        }
    } finally {
        client.close();
    }
}
