import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose';

const carSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            default: 0,
        },
        countInStock: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

export const Car = mongoose.model('Car', carSchema)
export const CarTC = composeWithMongoose(Car);

export default Car