import { ApiError } from "../utils/ApiError.js";

export const validator = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      throw new ApiError(422, "Received data is not valid", error.errors);
    }
  };
};
