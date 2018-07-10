import mongoose, { Schema } from 'mongoose';

const GameSchema = new Schema({
    text: String,
});

export default mongoose.model('Game', GameSchema);