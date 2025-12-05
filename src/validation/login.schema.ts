import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  valueSavePassword: z.boolean().optional(),
  valuePrivacy: z.boolean().refine((v) => v === true, {
    message: "You must accept the Privacy Policy",
  }),
});
