export const asyncHandlar = (fn) => {
    return async (req, res) => {
        try {
            await fn(req, res);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                success: false,
                message: error.message || "Internal Server Error",
            });
        }
    };
};
export const globalErrorHandling = async (error, req, res, next) => {
    return res.status(error.cause || 400).json({
        error,
        message: error.message,
        stack: error.stack,
    });
};

export const successResponse = async ({
    res,
    data = {},
    message = "Done",
    status = 200,
} = {}) => {
    if (!res) {
        // console.log("Missing response in successResponse?");
        return;
    }
    return res.status(status).json({
        message,
        data,
    });
};
