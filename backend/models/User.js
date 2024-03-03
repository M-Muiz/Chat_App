import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    email: {
        type: Schema.Types.String,
        required: true,
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    gender: {
        type: Schema.Types.String,
        require: true,
    },
    profilePic: {
        type: Schema.Types.String,
        default: ""
    }
},
    {
        timestamps: {
            createdAt: 'create',
            updatedAt: 'update'
        }
    });

const User = mongoose.model('User', UserSchema);

export default User;