const { MongoClient, ServerApiVersion } = require("mongodb");
const dbConnect = async() => {
  const uri =
    "mongodb+srv://uttamsaha:komolsaha@cluster0.ejbisre.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
    await client.connect();
    const userCollection = client.db("attend").collection("users");
    const adminCollection = client.db("attend").collection("admins");
    return {
      userCollection: userCollection,
      adminCollection: adminCollection
    }
};
module.exports = dbConnect;
