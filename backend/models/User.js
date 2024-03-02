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
    avatar: {
        type: Schema.Types.String,
        default: "https://firebasestorage.googleapis.com/v0/b/mern-estate-e6aeb.appspot.com/o/images%2Fuser.png?alt=media&token=c1e87f8c-fea1-4442-ba10-f2653177c071"
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