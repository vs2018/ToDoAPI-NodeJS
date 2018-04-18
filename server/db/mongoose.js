// let mongoose = require('mongoose')
//
// mongoose.Promise = global.Promise
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp')
//
// module.exports = {
//   mongoose
// }

var mongoose = require('mongoose');

                // //copy the link from "To connect using a driver via the standard MongoDB URI" section
                // //insert db user name and password here
                // const REMOTE_MONGO = 'mongodb://vs2018:Yogesh22@ds247479.mlab.com:47479/todoappvs2018';
                // const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
                // const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;
                //
                // mongoose.Promise = global.Promise;
                // mongoose.connect(MONGO_URI).then(() => {
                //     console.log('Connected to Mongo instance.')
                // }, (err) => {
                //     console.log('Error connecting to Mongo instance: ', err);
                // });
                //
                // module.export = { mongoose };

                //copy the link from "To connect using a driver via the standard MongoDB URI" section
                //insert db user name and password here
                const REMOTE_MONGO = 'mongodb://vs2018:Yogesh22@ds247479.mlab.com:47479/todoappvs2018';
                const MONGO_URI = REMOTE_MONGO

                mongoose.Promise = global.Promise;
                mongoose.connect(MONGO_URI).then(() => {
                    console.log('Connected to Mongo instance.')
                }, (err) => {
                    console.log('Error connecting to Mongo instance: ', err);
                });

                module.export = { mongoose };
