import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email("Invalid email format", ),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
