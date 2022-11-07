const mongoose = require("mongoose");

const blogDB = "blogDBnew";

mongoose.connect(`mongodb://localhost/${blogDB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`You are connected to the database called ${blogDB}`)
    })
    .catch((err) => {
        console.log(`you had a problem connecting the ${dbName}. Here is your error`,err)
    })