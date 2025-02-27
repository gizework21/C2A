import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetCategoryAttributesQueryVariables = Types.Exact<{
  categoryId?: Types.InputMaybe<Types.Scalars['ID']['input']>;
}>;


export type GetCategoryAttributesQuery = { __typename?: 'Query', getCategoryAttributes?: Array<{ __typename?: 'CategoryAttributeType', id: string, attributeType: Types.ProductsCategoryAttributeAttributeTypeChoices, name: string, isRequired: boolean, options?: Array<string | null> | null } | null> | null };


export const GetCategoryAttributesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategoryAttributes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategoryAttributes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributeType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isRequired"}},{"kind":"Field","name":{"kind":"Name","value":"options"}}]}}]}}]} as unknown as DocumentNode<GetCategoryAttributesQuery, GetCategoryAttributesQueryVariables>;