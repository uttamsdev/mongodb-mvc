const dbConnect = require("../utils/dbConnect")

const collections = dbConnect();
const  getAdmins = async(req, res) => {
    const result = await  (await collections).adminCollection.find({}).toArray();
    res.send(result);
}

module.exports = {getAdmins};