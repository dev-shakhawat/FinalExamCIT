const mongoose = require('mongoose');


async function dbConnect(params) {
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.mn2y2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
        .then(() => console.log('DB Connected'))
        .catch(err => console.log(err));
}


module.exports = dbConnect;