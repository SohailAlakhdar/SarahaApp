import { generalFields } from "../../middlewares/validation.middleware.js";
import joi from "joi";

export const sendMessage = {
    params: joi.object().keys({
        receiverId: generalFields.receiverId.required(),
    }),
    body: joi.object().keys({
        content: generalFields.content,
    }).required(),
    files: joi.array().items(generalFields.fileSchema).max(3),
};
