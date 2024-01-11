import { object, string } from "zod";
const userRegisterValidator = object({
  userName: string()
    .min(3, { message: "Please enter a valid username" })
    .max(50, { message: "username should be at most 50 characters" }),
  fullName: string()
    .min(3, { message: "Please enter a valid name" })
    .max(50, { message: "Name should be at most 50 characters" }),
  email: string()
    .email({ message: "Please enter a valid email" })
    .min(1, { message: "Email is required" })
    .max(255, { message: "Email should be at most 255 characters" }),
  password: string()
    .min(8, { message: "Password should be at least 8 characters" })
    .max(50, { message: "Password should be at most 50 characters" }),
});

export { userRegisterValidator };
