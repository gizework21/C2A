import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://china2afrika-api.onrender.com/graphql/": {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UzIiwiZXhwIjoxNzI1OTY5MTAzLCJvcmlnSWF0IjoxNzI1ODgyNzAzfQ.BhLKDX6Iqzg0vCGi7yJHy38LVT1mTyUm1zxVs4xUJIY`,
        },
      },
    },
  ],
  documents: ["graphql/**/*.graphql"],
  generates: {
    "graphql/types.generated.ts": { plugins: ["typescript"] },
    "graphql/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.generated.ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
