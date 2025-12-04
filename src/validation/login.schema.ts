import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  valueSavePassword: z.boolean().optional(),
  valuePrivacy: z.boolean()
});

export type loginSchema = z.infer<typeof loginSchema>;