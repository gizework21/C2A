import { z } from "zod";

export const UpdateVendorAddressSchema = z.object({
  addressId: z.string(),
  country: z.string(),
  city: z.string().trim().min(1),
  // region: z.string().trim().optional(),
  street1: z.string().trim().min(1),
  street2: z.string().trim().optional(),
  state: z.string().trim().optional(),
  zipcode: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  // additionalInfo: z.string().trim().optional(),
  isDefault: z.boolean().optional(),
});
