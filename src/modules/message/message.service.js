import { asyncHandlar, successResponse } from "../../utils/response.js";
import * as DBService from "../../DB/db.service.js";
import { UserModel } from "../../DB/models/User.model.js";
import { MessageModel } from "../../DB/models/Message.model.js";
import { uploadFiles } from "../../utils/multer/cloudinary.js";
export const sendMessage = asyncHandlar(async (req, res, next) => {
    // if (!req.body.content && !req.files) {
    //     return next(
    //         new Error("Content or attachments are required", { cause: 400 })
    //     );
    // }
    const { receiverId } = req.params;
    if (
        !(await DBService.findOne({
            model: UserModel,
            filter: {
                _id: receiverId,
                deletedAt: { $exists: false },
                // confirmEmail: { $exists: true },
            },
        }))
    ) {
        return next(
            new Error("User not found or not authorized", { cause: 404 })
        );
    }
    const { content } = req.body;
    let attachments = [];
    if (req.files) {
        attachments = await uploadFiles({
            files: req.files,
            path: `message/${receiverId}`,
        });
    }
    const [message] = await DBService.create({
        model: MessageModel,
        data: [
            {
                receiverId,
                content,
                attachments,
                senderId: req.user?._id,
            },
        ],
    });

    return successResponse({ res, data: { message }, status: 201 });
});
