import { Value } from "@radix-ui/react-select";
import { z } from "zod";

export const ProductSchema = z.object({
  brandname: z.string().min(4, {
    message: "Brand name must be at least 4 characters long.",
  }),
  productName: z.string().min(4, {
    message: "Product name must be at least 4 characters long.",
  }),
  manufacturerName: z.string(),
  productidentificationno: z.string(),
  availablecolors: z.array(z.string()),
  availablecapacities: z.array(z.string()),
  photo: z.string().url(),
  screensize: z.string().optional(),
  mainCamera: z.string().optional(),
  selfiecamera: z.string().optional(),
  condition: z.string().optional(),
  ram: z.string().optional(),
  harddrive: z.string().optional(),
  type: z.string(),
  category: z.string(),
  subcategory: z.string(),
  tags: z.array(z.string()),
  countryofmanufacturer: z.string().optional(),
  minimumorder: z.number().min(1, {
    message: "Minimum order must be a positive integer",
  }),
  stockamount: z.number({ message: "Stock amount must be an integer" }),
  taxstatus: z.string(),
  warrantylength: z.number().min(1, {
    message: "Warranty length must be a positive integer (in months)",
  }),
  warrantypolicy: z.string(),
  shippingoptions: z.array(z.object({})),
  pricing: z.number({ message: "Pricing must be a number" }),
  currency: z.string(),
  productDescription: z.array(z.string()).optional(),
  discountpercentage: z.number().optional(),
});

// const ImageSchema = z.object({
//   image: z.instanceof(File),
// });

// const VariantImageSchema = z.object({
//   variantImages: z.instanceof(File).optional(),
// });

const VariationSchema = z.object({
  availableUnit: z.coerce.number().optional(),
  size: z.string().optional(),
  variantPrice: z.coerce.number().optional(),
  sku: z.string().optional(),
  material: z.string().optional(),
  colorId: z.string().optional(),
  images: z.instanceof(File).optional(),
  weight: z.coerce.number().optional(),
});

const ProductAttributeSchema = z.object({
  key: z.string().min(1, "Attribute key is required"),
  value: z.string().min(1, "Attribute value is required"),

});
export const CreateProductSchema = z.object({
  availableUnit: z.coerce.number().min(1, {
    message: "Available unit must be a positive integer",
  }),
  categoryId: z.string(),
  productName: z.string().min(4, {
    message: "Product name must be at least 4 characters long.",
  }),
  colors: z.array(z.string()).optional(),
  discountPercent: z.coerce
    .number()
    .min(0)
    .max(100, {
      message: "Discount percent must be between 0 and 100",
    })
    .optional(),
  price: z.coerce.number().min(0, {
    message: "Price must be a non-negative number",
  }),
  images: z.instanceof(File),
  description: z.string().optional(),
  attributes: z.array(ProductAttributeSchema).optional(),
  variations: z.array(VariationSchema.optional()).optional(),

});
