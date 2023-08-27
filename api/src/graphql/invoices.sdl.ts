export const schema = gql`
  type Invoice {
    id: String!
    user: User!
    client: Client!
    clientId: String!
    userId: String!
    amount: Int!
    date: DateTime!
    submitted: Boolean!
    paid: Boolean!
    paidDate: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
    fields: [InvoiceField]!
  }

  type Query {
    invoices: [Invoice!]! @requireAuth
    invoice(id: String!): Invoice @requireAuth
  }

  input CreateInvoiceInput {
    clientId: String!
    userId: String!
    amount: Int!
    date: DateTime!
    submitted: Boolean!
    paid: Boolean!
    paidDate: DateTime
  }

  input UpdateInvoiceInput {
    clientId: String
    userId: String
    amount: Int
    date: DateTime
    submitted: Boolean
    paid: Boolean
    paidDate: DateTime
  }

  type Mutation {
    createInvoice(input: CreateInvoiceInput!): Invoice! @requireAuth
    updateInvoice(id: String!, input: UpdateInvoiceInput!): Invoice!
      @requireAuth
    deleteInvoice(id: String!): Invoice! @requireAuth
  }
`
