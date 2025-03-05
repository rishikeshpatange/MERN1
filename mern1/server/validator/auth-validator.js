const {z} = require("zod")


const signupSchema = z.object({
  username: z
  .string({required_error: "Name is required"})
  .trim()
  .min(3, {message: "Name must be at least of 3 chars"})
  .max(20, {message: "Name should not be more than  20 chars"}),

  email: z
  .string({required_error: "Email is required"})
  .trim()
  .email({message: "Invalid email address"})
  .min(10, {message: "Email must be at least of 3 chars"})
  .max(100, {message: "Email should not be more than  100 chars"}),

  phone: z
  .string({required_error: "Phone is required"})
  .trim()
  .min(10, {message: "Phone must be at least of 10 chars"})
  .max(20, {message: "phone should not be more than  20 chars"}),

  password: z
  .string({required_error: "password is required"})
  .trim()
  .min(5, {message: "password must be at least of 5 chars"})
  .max(50, {message: "password should not be more than  20 chars"}),
});

const loginSchema = z.object({
  email: z
  .string({required_error: "Email is required"})
  .trim()
  .email({message: "Invalid email address"})
  .min(10, {message: "Email must be at least of 3 chars"})
  .max(100, {message: "Email should not be more than  100 chars"}),

  password: z
  .string({required_error: "password is required"})
  .trim()
  .min(5, {message: "password must be at least of 5 chars"})
  .max(50, {message: "password should not be more than  20 chars"}),

})


module.exports = {signupSchema, loginSchema}