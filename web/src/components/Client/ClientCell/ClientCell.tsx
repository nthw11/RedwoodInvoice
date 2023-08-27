import type { FindClientById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Client from 'src/components/Client/Client'

export const QUERY = gql`
  query FindClientById($id: String!) {
    client: client(id: $id) {
      id
      name
      address
      city
      state
      zip
      phone
      email
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Client not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ client }: CellSuccessProps<FindClientById>) => {
  return <Client client={client} />
}
