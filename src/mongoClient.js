const mongoose = require("mongoose")
const dataBaseName = 'marketPlace'
const URI = `mongodb+srv://vickytho:test1234@vickythocluster.374dqnu.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`

const mongoClient = {
    initialize: ()=>{
        try {
            mongoose.set('strictQuery', false)
            const client =  mongoose.connect(URI)
            client.then(()=> console.log(`Connected with database : ${dataBaseName}  `))
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = mongoClient