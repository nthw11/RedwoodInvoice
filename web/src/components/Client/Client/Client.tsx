import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteClientMutationVariables,
  FindClientById,
} from 'types/graphql'

const DELETE_CLIENT_MUTATION = gql`
  mutation DeleteClientMutation($id: String!) {
    deleteClient(id: $id) {
      id
    }
  }
`

interface Props {
  client: NonNullable<FindClientById['client']>
}

const Client = ({ client }: Props) => {
  const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION, {
    onCompleted: () => {
      toast.success('Client deleted')
      navigate(routes.clients())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteClientMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete client ' + id + '?')) {
      deleteClient({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Client {client.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{client.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{client.name}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{client.address}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{client.city}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{client.state}</td>
            </tr>
            <tr>
              <th>Zip</th>
              <td>{client.zip}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{client.phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{client.email}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(client.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(client.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editClient({ id: client.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(client.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Client
