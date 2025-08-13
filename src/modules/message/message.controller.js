import { Router } from "express";
const router = Router()
import * as messageService from "./message.service.js"
import * as validators from "./message.validation.js"
import { validation } from "../../middlewares/validation.middleware.js";
import { authentication } from "../../middlewares/auth.middlewares.js";
import { cloudeFieldUpload } from "../../utils/multer/cloude.multer.js";

router.post(
    "/:receiverId",
    // authentication(), without email
    cloudeFieldUpload({validation: validators.sendMessage}).array("attachments", 3),
    validation(validators.sendMessage),
    messageService.sendMessage
);
router.post(
    "/:receiverId/sender",
    authentication(),
    cloudeFieldUpload({validation: validators.sendMessage}).array("attachments", 3),
    validation(validators.sendMessage),
    messageService.sendMessage
);

export default router