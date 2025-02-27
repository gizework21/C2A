"use client";
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const BusinessSignupSchema = z.object({
  storeName: z.string().min(4, {
    message: "Store name must be at least 4 characters.",
  }),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  storeLocations: z
    .array(z.object({ id: z.string(), name: z.string() }))
    .nonempty({
      message: "At least one store location is required",
    }),
  tinNumber: z.string().min(4, {
    message: "tin number must be at least 4 characters.",
  }),
  region: z.string().min(3, {
    message: "region is required",
  }),
  woreda: z.string().min(3, {
    message: "woreda is required",
  }),
});

export const FinacialInfoSchema = z.object({
  accountNumber: z.string().min(5, {
    message: "account number must be at least 5 characters",
  }),
  accountHolderName: z.string().min(1, {
    message: "accountHolderName is required",
  }),
  bankName: z.string().min(3, {
    message: "bank name is required",
  }),
  country: z.string().min(3, {
    message: "country is required",
  }),
  accountType: z.string().min(3, {
    message: "country is required",
  }),
  bankBranch: z.string().min(3, {
    message: "country is required",
  }),
});

export const IdentityInfoSchema = z.object({
  image: z.instanceof(File).optional(),
});

export const CombinedFormDataVendorSignupSchema = z.object({
  storeName: z.string().min(4, {
    message: "Store name must be at least 4 characters.",
  }),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  storeLocations: z
    .array(z.object({ id: z.string(), name: z.string() }))
    .nonempty({
      message: "At least one store location is required",
    }),
  tinNumber: z.string().min(4, {
    message: "tin number must be at least 4 characters.",
  }),
  region: z.string().min(3, {
    message: "region is required",
  }),
  woreda: z.string().min(3, {
    message: "woreda is required",
  }),
  accountNumber: z.string().min(5, {
    message: "account number  is required",
  }),
  accountHolderName: z.string().min(3, {
    message: "accountHolderName is required",
  }),
  bankName: z.string().min(3, {
    message: "bank name is required",
  }),
  country: z.string().min(3, {
    message: "country is required",
  }),
  bankBranch: z.string().min(3, {
    message: "country is required",
  }),
  accountType: z.string().min(3, {
    message: "country is required",
  }),
  image: z.instanceof(File).optional(),
});
