import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IResource extends Document {
    title: string;
    classLevel: string;
    subject: string;
    fileUrl: string;
    uploadedBy: string;
    createdAt: Date;
}

const ResourceSchema: Schema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    classLevel: {
        type: String,
        required: [true, 'Class level is required'],
        trim: true,
    },
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        trim: true,
    },
    fileUrl: {
        type: String,
        required: [true, 'File URL is required'],
        trim: true,
    },
    uploadedBy: {
        type: String,
        default: 'admin',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Resource: Model<IResource> = mongoose.models.Resource || mongoose.model<IResource>('Resource', ResourceSchema);

export default Resource;
