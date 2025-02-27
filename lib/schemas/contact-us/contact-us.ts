// import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from "zod";

export const ContactUsSchema = z.object({
  firstname: z.string().min(4, {
    message: "First name must be at least 4 characters.",
  }),
  lastname: z.string().min(4, {
    message: "Last name must be at least 4 characters.",
  }),
  email: z.string().email("Enter valid email address"),
  // TODO: add phone validation
  phone: z.string(),
  // .refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
  subject: z.enum(["general", "general2", "general3"], {
    required_error: "You need to select subject",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});
