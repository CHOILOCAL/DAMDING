import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Review = new Schema({
    writer: String,
    contents: String,
    starred: [String],
    date: {
        created: {
            type: Date,
            default: Date.now
        },
        edited: {
            type: Date,
            default: Date.now
        }
    },
    is_edited: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('review', Review);