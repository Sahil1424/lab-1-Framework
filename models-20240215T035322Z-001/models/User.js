import mongoose from "mongoose"
import PassportSetupMongoose from "passport-local-mongoose";
const UserScheme = new mongoose.Scheme({
     firstName : {
        required : [true, "you must provide  a first name"],
        maxlength : [25, "your  first name canont exceed 25 characters"]
     },
     lastName : {
        type: String,
        required : [true, "you must provide  a last name"],
        maxlength : [25, "your  last name canont exceed 25 characters"]
     },
     nickName: {
        type: String,
        required : [true, "you must provide  a nick name"],
        maxlength : [25, "your nickname canont exceed 25 characters"]
     },

     email: {
        type: String,
        required: [true, "Must be valid email"],
        unique: true
        maxlength: [75, "Ypur email cannot exced 75 characters"],
        match: [/\S+@\S+\.\S+/, "Please enter a valid email address"]
     },
     avatar: {
        type: String,
        required: false,
        maxlength: [59,"Filename cannot exceed 50 charaters"]
     },
     role: {
        type: String,
        enum: ["USER" , "ADMIN"],
        default: "USER"
     }
    

},{timestamp: true}
);
UserScheme.plugin(PassportSetupMongoose,
    {
        usernameField: "email"
    })

UserScheme.plugin(PassportSetupMongoose,{
    usernameField: "email"
});