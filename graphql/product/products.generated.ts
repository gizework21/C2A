import * as Types from "../types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type ProductReviewsQueryVariables = Types.Exact<{
  productId: Types.Scalars["Int"]["input"];
  page?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  pageSize?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
}>;

export type ProductReviewsQuery = {
  __typename?: "Query";
  productReviews?: {
    __typename?: "PaginatedReviewsType";
    page?: number | null;
    pages?: number | null;
    hasNext?: boolean | null;
    hasPrev?: boolean | null;
    objects?: Array<{
      __typename?: "ReviewType";
      content: string;
      rating: number;
      createdAt: any;
      id: string;
      title: string;
      user: {
        __typename?: "UserType";
        id: any;
        firstName?: string | null;
        lastName?: string | null;
        language: string;
        profilePic?: string | null;
        isVerified: boolean;
        username: string;
      };
    } | null> | null;
  } | null;
};

export type GetProductQueryVariables = Types.Exact<{
  productId: Types.Scalars["ID"]["input"];
}>;

export type GetProductQuery = {
  __typename?: "Query";
  GetProduct?: {
    __typename?: "ProductsType";
    price: number;
    discountPercent: number;
    productName: string;
    productId: string;
    description: string;
    rating?: number | null;
    availableUnit?: number | null;
    dateCreated: any;
    reviewCount: number;
    color: Array<{
      __typename?: "ColorsType";
      hexCode?: string | null;
      rgbCode?: string | null;
    }>;
    images: Array<{
      __typename?: "ProductsImageType";
      imageUrl?: string | null;
      id: string;
    }>;
    vendor: {
      __typename?: "VendorType";
      id: any;
      storeName: string;
      isVerified: boolean;
      customerRating?: string | null;
      user: { __typename?: "UserType"; id: any; username: string };
    };
    variants?: Array<{
      __typename?: "ProductVariantsType";
      availableUnit: number;
      material?: string | null;
      size?: string | null;
      variantPrice: any;
      weight?: any | null;
      id: string;
      color?: {
        __typename?: "ColorsType";
        id: string;
        name?: string | null;
        hexCode?: string | null;
        rgbCode?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type CreateProductsMutationVariables = Types.Exact<{
  image: Types.Scalars["Upload"]["input"];
  availableUnit?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  categoryId: Types.Scalars["ID"]["input"];
  productName: Types.Scalars["String"]["input"];
  discountPercent?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  price: Types.Scalars["Float"]["input"];
  colors?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.Scalars["String"]["input"]>>
    | Types.InputMaybe<Types.Scalars["String"]["input"]>
  >;
  description?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  attributes?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.ProductAttributeInput>>
    | Types.InputMaybe<Types.ProductAttributeInput>
  >;
  variations?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.ProductVariationInput>>
    | Types.InputMaybe<Types.ProductVariationInput>
  >;

}>;

export type CreateProductsMutation = {
  __typename?: "Mutations";
  createProduct?: {
    __typename?: "CreateProduct";
    products?: {
      __typename?: "ProductsType";
      price: number;
      slug?: string | null;
      rating?: number | null;
      status: Types.ProductsProductsModelStatusChoices;
      images: Array<{
        __typename?: "ProductsImageType";
        imageUrl?: string | null;
      }>;
      variants?: Array<{
        __typename?: "ProductVariantsType";
        availableUnit: number;
        weight?: any | null;
        color?: { __typename?: "ColorsType"; hexCode?: string | null } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetRelatedProductsQueryVariables = Types.Exact<{
  productId: Types.Scalars["ID"]["input"];
}>;

export type GetRelatedProductsQuery = {
  __typename?: "Query";
  getRelatedProducts?: Array<{
    __typename?: "ProductsType";
    productId: string;
    productName: string;
    rating?: number | null;
    price: number;
    images: Array<{
      __typename?: "ProductsImageType";
      id: string;
      imageUrl?: string | null;
    }>;
  } | null> | null;
};

export type GetRelatedProductsQuery = { __typename?: 'Query', getRelatedProducts?: Array<{ __typename?: 'ProductsType', productId: string, productName: string, rating?: number | null, price: number, images: Array<{ __typename?: 'ProductsImageType', id: string, imageUrl?: string | null }> } | null> | null };


export const ProductReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productReviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"objects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"profilePic"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrev"}}]}}]}}]} as unknown as DocumentNode<ProductReviewsQuery, ProductReviewsQueryVariables>;
export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discountPercent"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hexCode"}},{"kind":"Field","name":{"kind":"Name","value":"rgbCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"storeName"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"customerRating"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availableUnit"}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"reviewCount"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availableUnit"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"hexCode"}},{"kind":"Field","name":{"kind":"Name","value":"rgbCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"material"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"variantPrice"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;
export const CreateProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"availableUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"discountPercent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"colors"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"var_image"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vavailableUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vsize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vvariantPrice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vsku"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vmaterial"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vcolorId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vweight"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductAttributeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"availableUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"availableUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}},{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"productName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productName"}}},{"kind":"Argument","name":{"kind":"Name","value":"discountPercent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"discountPercent"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"images"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"colors"},"value":{"kind":"Variable","name":{"kind":"Name","value":"colors"}}},{"kind":"Argument","name":{"kind":"Name","value":"variations"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"availableUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vavailableUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vsize"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"variantPrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vvariantPrice"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sku"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vsku"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"material"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vmaterial"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"colorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vcolorId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"images"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"variantImages"},"value":{"kind":"Variable","name":{"kind":"Name","value":"var_image"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"weight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vweight"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availableUnit"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hexCode"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateProductsMutation, CreateProductsMutationVariables>;
export const GetRelatedProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRelatedProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRelatedProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<GetRelatedProductsQuery, GetRelatedProductsQueryVariables>;
