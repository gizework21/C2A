import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetVendorIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetVendorIdQuery = { __typename?: 'Query', vendorData?: { __typename?: 'VendorType', id: any } | null };

export type GetVendorSupplierDashboardQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetVendorSupplierDashboardQuery = { __typename?: 'Query', vendorDashboardSummery?: { __typename?: 'DashboardSummeryType', canceledOrders?: number | null, categories?: number | null, deletedProducts?: number | null, pendingOrders?: number | null, deliveredOrders?: number | null, products?: number | null, returnedOrders?: number | null, promotions?: number | null, shippedOrders?: number | null, soldOutProducts?: string | null, totalMoney?: number | null } | null };

export type IsVendorQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IsVendorQuery = { __typename?: 'Query', vendorData?: { __typename?: 'VendorType', isSupplier: boolean } | null };


export const GetVendorIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVendorId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendorData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetVendorIdQuery, GetVendorIdQueryVariables>;
export const GetVendorSupplierDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVendorSupplierDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendorDashboardSummery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canceledOrders"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"deletedProducts"}},{"kind":"Field","name":{"kind":"Name","value":"pendingOrders"}},{"kind":"Field","name":{"kind":"Name","value":"deliveredOrders"}},{"kind":"Field","name":{"kind":"Name","value":"products"}},{"kind":"Field","name":{"kind":"Name","value":"returnedOrders"}},{"kind":"Field","name":{"kind":"Name","value":"promotions"}},{"kind":"Field","name":{"kind":"Name","value":"shippedOrders"}},{"kind":"Field","name":{"kind":"Name","value":"soldOutProducts"}},{"kind":"Field","name":{"kind":"Name","value":"totalMoney"}}]}}]}}]} as unknown as DocumentNode<GetVendorSupplierDashboardQuery, GetVendorSupplierDashboardQueryVariables>;
export const IsVendorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"isVendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendorData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isSupplier"}}]}}]}}]} as unknown as DocumentNode<IsVendorQuery, IsVendorQueryVariables>;