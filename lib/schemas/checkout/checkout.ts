import { z } from "zod";
export const CheckoutSchema = z.object({
  address1: z.string().min(1, {
    message: "Address line 1 is required.",
  }),
  phone: z.string().min(1, {
    message: "Phone number is required.",
  }),
  productIds: z.array(z.string()).nonempty({
    message: "At least one product ID is required.",
  }),
  address2: z.string().optional(),
  postCode: z.string().optional(),
});
