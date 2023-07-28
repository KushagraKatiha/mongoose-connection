import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required field"],
        maxLength: [50, "Name should be less than 50 chars"]
    },

    email: {
        type: String,
        unique: true
    },
    
    username: {
        type: String, 
        unique: true
    }
});


export default mongoose.model("User", userSchema)

//users, products 

