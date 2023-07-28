import mongoose from 'mongoose'
import app from './app.js'
const port = 3000

const dbString = 'mongodb+srv://kushagrakatiha:kusha@123@cluster0.eqwon2e.mongodb.net/'

// mongoose.connect(dbString)
// TODO: use env for such sensitive values

(async ()=>{
    try {
        await mongoose.connect(dbString)
        console.log("DB connected successfully !");

        app.on("error", (err)=>{
            console.log("ERROR: ", err);
            throw err; 
        })

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error;
    }
})()



