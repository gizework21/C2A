"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, FormField } from "@/components/ui";
import { CreateProductSchema } from "@/lib";
import { z } from "zod";
import { useForm, useFormContext, useFieldArray } from "react-hook-form";

import { C2AButton } from "@/components/buttons";
import { C2AInputFormField, FileUpload } from "@/components/input";
import { C2AMultiSelectForm } from "@/components/select/c2a-multi-select-form";
import { useMemo, useState, useTransition } from "react";
import { CreateProductsDocument } from "@/graphql/product/products.generated";
import { FormError, FormSuccess } from "@/components/form-message";
import { CircularLoading } from "@/components/loading";
import { C2ASelectForm } from "@/components/select";
import { useMutation, useQuery } from "@urql/next";
import { CategoryType } from "@/graphql/types.generated";
import { GetCategoryByParentDocument } from "@/graphql/categories/categories.generated";
import { CirclePlus, Trash } from "lucide-react";

import { GetCategoryAttributesDocument } from "@/graphql/attributes/getAttributes.generated";

export const AddProductForm = () => {
  const [isPending, startTransaction] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [selectedCategoryPath, setSelectedCategoryPath] = useState<string[]>(
    []
  );

  const form = useForm<z.infer<typeof CreateProductSchema>>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {
      productName: "",
      categoryId: "0",
      availableUnit: 0,
      colors: [],
      images: undefined,
      price: 0,
      discountPercent: 0,
      description: "",
      attributes: [],
      variations: [],

    },
  });

  const [
    { data: categoryData, fetching: categoryFecthing, error: categoryError },
  ] = useQuery({
    query: GetCategoryByParentDocument,
  });

  const [, createProduct] = useMutation(CreateProductsDocument);

  const { fields, append, remove } = useFieldArray({
    name: "variations",
    control: form.control,
  });

  if (fields.length === 0) {
    append({
      availableUnit: 0,
      size: "",
      sku: "",
      variantPrice: 0,
      material: "",
      weight: 0,
      images: undefined,
    });
  }

  const addVariation = () => {
    append({
      availableUnit: 0,
      size: "",
      sku: "",
      variantPrice: 0,
      material: "",
      weight: 0,
      images: undefined,
    });
  };

  const onSubmit = (data: z.infer<typeof CreateProductSchema>) => {
    console.log(data);
    setError(undefined);
    setSuccess(undefined);
    startTransaction(async () => {
      const res = await createProduct({
        availableUnit: data.availableUnit,
        categoryId: data.categoryId,
        colors: data.colors ?? [],
        discountPercent: data.discountPercent,
        price: data.price,
        productName: data.productName,
        description: data.description,
        image: data.images,
        attributes: data.attributes,
        variations:
          data.variations?.map((v) => ({
            availableUnit: v?.availableUnit,
            colorId: "1",
            images: [{ variantImages: v?.images }],
            material: v?.material,
            size: v?.size,
            sku: v?.sku,
            variantPrice: v?.variantPrice,
            weight: v?.weight,
          })) ?? [],

      });

      if (res.error) {
        setError(res.error.message);
      }

      if (res.data?.createProduct) {
        setSuccess("Product created successfully");
        form.reset();
      }
    });
  };

  if (categoryFecthing || !categoryData) return <CircularLoading />;

  const handleCategorySelect = (categoryId: string, depth: number) => {
    setSelectedCategoryPath((prev) => {
      const newPath = [...prev.slice(0, depth), categoryId];
      form.setValue("categoryId", newPath[newPath.length - 1]);
      return newPath;
    });
  };

  const topLevelCategories: Category[] =
    categoryData?.getCategoryByParent?.map((item) => ({
      __typename: undefined,
      title: item?.title ?? "",
      id: item?.id ?? "",
      children: (item?.children as Category[]) ?? [],
    })) ?? [];

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 my-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-4 bg-white p-4 rounded-[8px] shadow-md">
              <C2AInputFormField
                showIcon={false}
                inputWrapperClassName="border"
                label={"Product name"}
                placeholder={"Enter product name"}
                name={"productName"}
                control={form.control}
              />

              <RecursiveCategorySelect
                categories={topLevelCategories}
                onSelect={handleCategorySelect}
                selectedPath={selectedCategoryPath}
              />

              <C2AInputFormField
                showIcon={false}
                inputWrapperClassName="border"
                label={"Available unit"}
                placeholder={"Enter available unit"}
                name={"availableUnit"}
                control={form.control}
                type="number"
              />

              <C2AMultiSelectForm
                label={"Available Colors"}
                placeholder={"Available Colors"}
                name={"colors"}
                control={form.control}
                items={[{ label: "Black", value: "black" }]}
              />

              <FormField
                control={form.control}
                name={"images"}
                render={({ field }) => (
                  <FileUpload
                    onChange={(e) => {
                      if (!e) return;
                      field.onChange(e);
                    }}
                  />
                )}
              />

              <C2AInputFormField
                showIcon={false}
                inputWrapperClassName="border"
                label={"Price"}
                placeholder={"Enter price"}
                name={"price"}
                control={form.control}
                type="number"
              />

              <C2AInputFormField
                showIcon={false}
                inputWrapperClassName="border"
                label={"Discount"}
                placeholder={"Enter discount"}
                name={"discountPercent"}
                control={form.control}
                type="number"
              />

              <C2AInputFormField
                showIcon={false}
                inputWrapperClassName="border"
                label={"Description"}
                placeholder={"Enter description"}
                name={"description"}
                control={form.control}
              />
            </div>

            <div className="space-y-10 bg-white p-4 rounded-[8px] shadow-md">
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-4 border p-2 rounded-md">
                  {index > 0 && (
                    <div className="flex justify-end">
                      <Button
                        onClick={() => remove(index)}
                        variant="destructive"
                        size="icon"
                      >
                        <Trash />
                      </Button>
                    </div>
                  )}
                  <C2AInputFormField
                    showIcon={false}
                    inputWrapperClassName="border"
                    label={"Available unit"}
                    placeholder={"Enter available unit"}
                    name={`variations.${index}.availableUnit`}
                    control={form.control}
                    type="number"
                  />

                  <C2AInputFormField
                    showIcon={false}
                    inputWrapperClassName="border"
                    label={"Size"}
                    placeholder={"Enter size"}
                    name={`variations.${index}.size`}
                    control={form.control}
                    type="number"
                  />

                  <C2AInputFormField
                    showIcon={false}
                    inputWrapperClassName="border"
                    label={"Sku"}
                    placeholder={"Enter sku"}
                    name={`variations.${index}.sku`}
                    control={form.control}
                  />

                  <C2AInputFormField
                    showIcon={false}
                    inputWrapperClassName="border"
                    label={"Variant price"}
                    placeholder={"Enter variant price"}
                    name={`variations.${index}.variantPrice`}
                    control={form.control}
                    type="number"
                  />

                  <C2AInputFormField
                    showIcon={false}
                    inputWrapperClassName="border"
                    label={"material"}
                    placeholder={"Enter material"}
                    name={`variations.${index}.material`}
                    control={form.control}
                  />

                  <FormField
                    control={form.control}
                    name={`variations.${index}.images`}
                    render={({ field }) => (
                      <FileUpload
                        onChange={(e) => {
                          if (!e) return;
                          field.onChange(e);
                        }}
                      />
                    )}
                  />

                  <C2AInputFormField
                    showIcon={false}
                    inputWrapperClassName="border"
                    label={"Weight"}
                    placeholder={"Enter weight"}
                    name={`variations.${index}.weight`}
                    control={form.control}
                    type="number"
                  />
                </div>
              ))}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={addVariation}
                  className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
                >
                  <CirclePlus className="h-5 w-5" />
                  <span>Add another variation</span>
                </button>
              </div>
            </div>
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />

          <C2AButton className="max-w-xs" disabled={isPending}>
            {isPending ? <CircularLoading /> : " Publish Product"}
          </C2AButton>
        </form>
      </Form>
    </>
  );
};

interface Category {
  __typename?: CategoryType | undefined;
  title: string;
  id: string;
  children?: Category[];
}

interface RecursiveCategorySelectProps {
  categories: Category[];
  depth?: number;
  onSelect: (value: string, depth: number) => void;
  selectedPath?: string[];
}

const RecursiveCategorySelect = ({
  categories,
  depth = 0,
  onSelect,
  selectedPath = [],
}: RecursiveCategorySelectProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [categoryId, setCategoryId] = useState<string | null>(null);

  // Fetch attributes if category has no children
  const [{ data: attributeData, fetching: attributeFetching }] = useQuery({
    query: GetCategoryAttributesDocument,
    variables: { categoryId: categoryId },
    pause: !categoryId, // Pause query if no category ID
  });

  const handleCategoryChange = (value: string) => {
    const selected = categories.find((cat) => cat.id === value);
    setSelectedCategory(selected || null);
    onSelect(value, depth);

    // If the selected category has no children, set categoryId for querying attributes
    if (selected && (!selected.children || selected.children.length === 0)) {
      setCategoryId(selected.id);
    } else {
      setCategoryId(null); // Reset if category has children
    }
  };

  const currentSelectedCategory = selectedPath[depth]
    ? categories.find((cat) => cat.id === selectedPath[depth]) || null
    : null;

  return (
    <>
      <C2ASelectForm
        label={`Category Level ${depth + 1}`}
        placeholder={`Choose category level ${depth + 1}`}
        name={`category_${depth}`}
        items={categories.map((cat) => ({ label: cat.title, value: cat.id }))}
        onChange={handleCategoryChange}
        control={undefined}
        value={currentSelectedCategory?.id || ""}
      />

      {/* Recursively render next category if there are children */}
      {currentSelectedCategory &&
        currentSelectedCategory.children &&
        currentSelectedCategory.children.length > 0 && (
          <RecursiveCategorySelect
            categories={currentSelectedCategory.children}
            depth={depth + 1}
            onSelect={onSelect}
            selectedPath={selectedPath}
          />
        )}

      {attributeFetching && <CircularLoading />}
      {categoryId && !attributeFetching && attributeData && (
        <AttributeForm
          attributes={attributeData?.getCategoryAttributes ?? []}
        />
      )}
    </>
  );
};

const AttributeForm = ({ attributes }: { attributes: any[] }) => {
  const { control, setValue, watch } = useFormContext();

  const attributeValues = watch("attributes") || [];

  const handleAttributeChange = (attributeName: string, value: string) => {
    const updatedAttributes = attributeValues.map((attr: any) =>
      attr.key === attributeName ? { ...attr, value } : attr
    );

    if (!attributeValues.find((attr: any) => attr.key === attributeName)) {
      updatedAttributes.push({ key: attributeName, value });
    }

    setValue("attributes", updatedAttributes);
  };

  return (
    <>
      {attributes.map((attribute) => {
        if (attribute.attributeType === "SELECT") {
          return (
            <C2ASelectForm
              key={attribute.id}
              label={attribute.name}
              placeholder={`Select ${attribute.name}`}
              name={`attributes.${attribute.name}`}
              items={attribute.options.map((opt: string) => ({
                label: opt,
                value: opt,
              }))}
              control={control} // Connect with form control
              onChange={(value) => handleAttributeChange(attribute.name, value)}
            />
          );
        }
        return null;
      })}
    </>
  );
};
