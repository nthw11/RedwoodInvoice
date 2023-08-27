export const schema = gql`
  type Client {
    id: String!
    invoices: [Invoice]!
    name: String!
    address: String!
    city: String!
    state: String!
    zip: String!
    phone: String!
    email: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    clients: [Client!]! @requireAuth
    client(id: String!): Client @requireAuth
  }

  input CreateClientInput {
    name: String!
    address: String!
    city: String!
    state: String!
    zip: String!
    phone: String!
    email: String!
  }

  input UpdateClientInput {
    name: String
    address: String
    city: String
    state: String
    zip: String
    phone: String
    email: String
  }

  type Mutation {
    createClient(input: CreateClientInput!): Client! @requireAuth
    updateClient(id: String!, input: UpdateClientInput!): Client! @requireAuth
    deleteClient(id: String!): Client! @requireAuth
  }
`
