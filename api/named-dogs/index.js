module.exports = async function (context, req) {
    const {getUserId, getMongoClient} = require('../helpers.js')

    const userId = getUserId(req);
    const client = getMongoClient();
    
    try {
        client.connect();
        const database = client.db('loved-mutt');
        const collection = database.collection('dogs');
        const namedDogs = await collection.find({userId}).toArray();
        context.res.body = {namedDogs};
    } catch (ex) {
        context.res = {
            body: ex,
            status: 500
        }
    } finally {
        client.close();
    }

}