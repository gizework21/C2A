"use client";

import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const ProfileFormSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" })
    .optional(),
  email: z.string().optional(),
  profilePic: z.string().optional(),
  language: z.string().optional(),
  username: z.string().optional(),
});
