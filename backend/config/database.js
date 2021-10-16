const mongoose = require("mongoose");

const connectDatabase = (host) => {
    mongoose.connect(host).then((data) => {
        console.log(`Mongodb connected at ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
