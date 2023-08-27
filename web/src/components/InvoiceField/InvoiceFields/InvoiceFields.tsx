import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/InvoiceField/InvoiceFieldsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteInvoiceFieldMutationVariables,
  FindInvoiceFields,
} from 'types/graphql'

const DELETE_INVOICE_FIELD_MUTATION = gql`
  mutation DeleteInvoiceFieldMutation($id: String!) {
    deleteInvoiceField(id: $id) {
      id
    }
  }
`

const InvoiceFieldsList = ({ invoiceFields }: FindInvoiceFields) => {
  const [deleteInvoiceField] = useMutation(DELETE_INVOICE_FIELD_MUTATION, {
    onCompleted: () => {
      toast.success('InvoiceField deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteInvoiceFieldMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete invoiceField ' + id + '?')) {
      deleteInvoiceField({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Invoice id</th>
            <th>Job name</th>
            <th>Task</th>
            <th>Value</th>
            <th>Rate</th>
            <th>Total</th>
            <th>Hours</th>
            <th>Date</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {invoiceFields.map((invoiceField) => (
            <tr key={invoiceField.id}>
              <td>{truncate(invoiceField.id)}</td>
              <td>{truncate(invoiceField.invoiceId)}</td>
              <td>{truncate(invoiceField.jobName)}</td>
              <td>{truncate(invoiceField.task)}</td>
              <td>{truncate(invoiceField.value)}</td>
              <td>{truncate(invoiceField.rate)}</td>
              <td>{truncate(invoiceField.total)}</td>
              <td>{truncate(invoiceField.hours)}</td>
              <td>{timeTag(invoiceField.date)}</td>
              <td>{timeTag(invoiceField.startTime)}</td>
              <td>{timeTag(invoiceField.endTime)}</td>
              <td>{timeTag(invoiceField.createdAt)}</td>
              <td>{timeTag(invoiceField.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.invoiceField({ id: invoiceField.id })}
                    title={'Show invoiceField ' + invoiceField.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInvoiceField({ id: invoiceField.id })}
                    title={'Edit invoiceField ' + invoiceField.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete invoiceField ' + invoiceField.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(invoiceField.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InvoiceFieldsList
