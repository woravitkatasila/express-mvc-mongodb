let mongoose = require('mongoose');

   let server = "mongodb://localhost:27017/"
    let db = "chaton"
    let url = server  + db ;

    module.exports =    mongoose.connect(url, {
        useNewUrlParser: true
      })
    