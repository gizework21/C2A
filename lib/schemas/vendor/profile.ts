"use client";

import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const VendorProfileSchema = z.object({
  firstname: z.string().min(1, {
    message: "First name is required",
  }),
  lastname: z.string().min(1, {
    message: "Last name is required",
  }),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  email: z.string().email("Enter valid email address"),
  gender: z.string().optional(),
  dob: z.string().optional(),
});
