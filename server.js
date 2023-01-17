const fastify = require('fastify')({logger:true})

const PORT = 80

fastify.register(require('./routes/list'))

const mongoose = require('mongoose')

const DB = 'mongodb+srv://ahad:o0QOyu2WFwsQQTX8@cluster0.wgvm1id.mongodb.net/toDoappp?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log('connection successful..');
}).catch((err) => console.log('no connection'))

const start = async()=> {
    try {
        fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()   
