const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(50, { message: "Username must be at most 50 characters long" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email format" })
    .max(100, { message: "Email must be at most 100 characters long" }),

  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
    .min(8, { message: "Phone number must be at least 8 digits long" })
    .max(15, { message: "Phone number must be at most 15 digits long" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(4, { message: "Password must be at least 4 characters long" })
    .max(50, { message: "Password must be at most 50 characters long" })
    .regex(/[A-Za-z]/, { message: "Password must contain at least one letter" })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),

});

module.exports = signupSchema;
