import { z } from 'zod';

export const VendorStoreSchema = z.object({
  storeName: z.string().trim().min(1, 'Store name is required'),
  country: z.string().trim().min(1, 'Country are required'),
  region: z.string().trim().min(1, 'Country are required'),
  subCity: z.string().trim().optional(),
  location: z.string().trim().optional(),
  description: z.string().trim().optional(),
  referenceCode: z.string().trim().optional(),
  // catagories: z.array(z.string()),
  tinNumber: z.string().trim().optional(),
  email: z.string().email('Invalid email format'),
  phone: z.string().optional(),
  supportPhone: z.string().optional(),
  tradeName: z.string().optional(),
});
