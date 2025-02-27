"use client";

import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const CreateAddressSchema = z.object({
  city: z.string(),
  country: z.string(),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  state: z.string(),
  zipcode: z.string(),
  street1: z.string(),
  street2: z.string().optional(),
  isDefault: z.boolean(),
});
