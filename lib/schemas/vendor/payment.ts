import { z } from 'zod';

export const VendorPaymentSchema = z.object({
  bank: z.string(),
  country: z.string(),
  bankName: z.string(),
  schedulePayout: z.enum(['daily', 'weekly', 'BiWeekly', 'monthly']),
  defaultPayment: z.boolean(),
});
