export const schema = gql`
  type InvoiceField {
    id: String!
    invoice: Invoice!
    invoiceId: String!
    jobName: String!
    task: String!
    value: Float!
    rate: Float!
    total: Float!
    hours: Float!
    date: DateTime!
    startTime: DateTime!
    endTime: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    invoiceFields: [InvoiceField!]! @requireAuth
    invoiceField(id: String!): InvoiceField @requireAuth
  }

  input CreateInvoiceFieldInput {
    invoiceId: String!
    jobName: String!
    task: String!
    value: Float!
    rate: Float!
    total: Float!
    hours: Float!
    date: DateTime!
    startTime: DateTime!
    endTime: DateTime!
  }

  input UpdateInvoiceFieldInput {
    invoiceId: String
    jobName: String
    task: String
    value: Float
    rate: Float
    total: Float
    hours: Float
    date: DateTime
    startTime: DateTime
    endTime: DateTime
  }

  type Mutation {
    createInvoiceField(input: CreateInvoiceFieldInput!): InvoiceField!
      @requireAuth
    updateInvoiceField(
      id: String!
      input: UpdateInvoiceFieldInput!
    ): InvoiceField! @requireAuth
    deleteInvoiceField(id: String!): InvoiceField! @requireAuth
  }
`
