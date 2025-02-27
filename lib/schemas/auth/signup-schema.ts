"use client";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const SignupSchema = z
  .object({
    firstName: z.string().min(4, {
      message: "First name must be at least 4 characters.",
    }),
    lastName: z.string().min(4, {
      message: "Last name must be at least 4 characters.",
    }),
    email: z.string().email("Enter valid email address"),
    phone: z
      .string()
      .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    gender: z.string().min(1, {
      message: "Gender is required",
    }),
    username: z.string().min(4, {
      message: "Username must be at least 4 characters",
    }),
    dateOfBirth: z.date().optional(),
    profilePic: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
