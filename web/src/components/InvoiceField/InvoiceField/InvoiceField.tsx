import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteInvoiceFieldMutationVariables,
  FindInvoiceFieldById,
} from 'types/graphql'

const DELETE_INVOICE_FIELD_MUTATION = gql`
  mutation DeleteInvoiceFieldMutation($id: String!) {
    deleteInvoiceField(id: $id) {
      id
    }
  }
`

interface Props {
  invoiceField: NonNullable<FindInvoiceFieldById['invoiceField']>
}

const InvoiceField = ({ invoiceField }: Props) => {
  const [deleteInvoiceField] = useMutation(DELETE_INVOICE_FIELD_MUTATION, {
    onCompleted: () => {
      toast.success('InvoiceField deleted')
      navigate(routes.invoiceFields())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteInvoiceFieldMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete invoiceField ' + id + '?')) {
      deleteInvoiceField({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            InvoiceField {invoiceField.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{invoiceField.id}</td>
            </tr>
            <tr>
              <th>Invoice id</th>
              <td>{invoiceField.invoiceId}</td>
            </tr>
            <tr>
              <th>Job name</th>
              <td>{invoiceField.jobName}</td>
            </tr>
            <tr>
              <th>Task</th>
              <td>{invoiceField.task}</td>
            </tr>
            <tr>
              <th>Value</th>
              <td>{invoiceField.value}</td>
            </tr>
            <tr>
              <th>Rate</th>
              <td>{invoiceField.rate}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{invoiceField.total}</td>
            </tr>
            <tr>
              <th>Hours</th>
              <td>{invoiceField.hours}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(invoiceField.date)}</td>
            </tr>
            <tr>
              <th>Start time</th>
              <td>{timeTag(invoiceField.startTime)}</td>
            </tr>
            <tr>
              <th>End time</th>
              <td>{timeTag(invoiceField.endTime)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(invoiceField.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(invoiceField.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInvoiceField({ id: invoiceField.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(invoiceField.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default InvoiceField
