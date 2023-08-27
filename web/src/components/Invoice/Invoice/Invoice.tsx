import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

import type {
  DeleteInvoiceMutationVariables,
  FindInvoiceById,
} from 'types/graphql'

const DELETE_INVOICE_MUTATION = gql`
  mutation DeleteInvoiceMutation($id: String!) {
    deleteInvoice(id: $id) {
      id
    }
  }
`

interface Props {
  invoice: NonNullable<FindInvoiceById['invoice']>
}

const Invoice = ({ invoice }: Props) => {
  const [deleteInvoice] = useMutation(DELETE_INVOICE_MUTATION, {
    onCompleted: () => {
      toast.success('Invoice deleted')
      navigate(routes.invoices())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteInvoiceMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete invoice ' + id + '?')) {
      deleteInvoice({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Invoice {invoice.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{invoice.id}</td>
            </tr>
            <tr>
              <th>Client id</th>
              <td>{invoice.clientId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{invoice.userId}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{invoice.amount}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(invoice.date)}</td>
            </tr>
            <tr>
              <th>Submitted</th>
              <td>{checkboxInputTag(invoice.submitted)}</td>
            </tr>
            <tr>
              <th>Paid</th>
              <td>{checkboxInputTag(invoice.paid)}</td>
            </tr>
            <tr>
              <th>Paid date</th>
              <td>{timeTag(invoice.paidDate)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(invoice.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(invoice.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInvoice({ id: invoice.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(invoice.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Invoice
