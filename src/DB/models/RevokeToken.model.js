import mongoose from "mongoose";

const revokTokenSchema = new mongoose.Schema(
    {
        idToken: {
            type: String,
            required: true,
        },
        expiresAccessDate: {
            type: Number,
            required: true,
        },
        expiresRefreshDate: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const RevokeTokenModel =
    mongoose.models.RevokeTokenModel ||
    mongoose.model("RevokeTokenModel", revokTokenSchema);
RevokeTokenModel.syncIndexes();
