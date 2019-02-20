export interface PluginConfig {
  // Typescript type used for GraphQLs `ID` type (defaults to `string`).
  idType?: string

  // Mapping of custom GraphQL scalars to typescript types. If a scalar type is omitted, `any` is used.
  scalarTypes?: { [scalarName: string]: string }
}

export interface PluginIR {
  files: FileIR[]
  inputTypes: TypeIR[]
}

export interface FileIR {
  filePath: string
  operations: OperationIR[]
}

export interface OperationIR {
  name: string
  operationType: OperationType
  gqlExpression: string
  variables: TypeIR
  data: TypeIR
}

export interface TypeIR {
  namespace: string[] // list of nested modules containing the type
  name: string
  modifiers?: Modifier[]
  fields?: TypeIR[] // mutually exclusive with scalar
  scalar?: string // mutually exclusive with fields
}

export type OperationType = 'query' | 'mutation' | 'subscription'
export type Modifier = 'Nullable' | 'ReadonlyArray'