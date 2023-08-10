const json_server = require("json-server");
const cors = require('cors')
const path = require("path")
const server = json_server.create()
const router = json_server.router("db.json")
const middleware=json_server.defaults()
server.use(cors())
server.use(middleware)
server.use(json_server.bodyParser)
server.use(router)
server.listen(8000,()=>{
    console.log('server run at 8000')
})