import type {
  EditInvoiceFieldById,
  UpdateInvoiceFieldInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvoiceFieldForm from 'src/components/InvoiceField/InvoiceFieldForm'

export const QUERY = gql`
  query EditInvoiceFieldById($id: String!) {
    invoiceField: invoiceField(id: $id) {
      id
      invoiceId
      jobName
      task
      value
      rate
      total
      hours
      date
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`
const UPDATE_INVOICE_FIELD_MUTATION = gql`
  mutation UpdateInvoiceFieldMutation(
    $id: String!
    $input: UpdateInvoiceFieldInput!
  ) {
    updateInvoiceField(id: $id, input: $input) {
      id
      invoiceId
      jobName
      task
      value
      rate
      total
      hours
      date
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  invoiceField,
}: CellSuccessProps<EditInvoiceFieldById>) => {
  const [updateInvoiceField, { loading, error }] = useMutation(
    UPDATE_INVOICE_FIELD_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvoiceField updated')
        navigate(routes.invoiceFields())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateInvoiceFieldInput,
    id: EditInvoiceFieldById['invoiceField']['id']
  ) => {
    updateInvoiceField({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit InvoiceField {invoiceField?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InvoiceFieldForm
          invoiceField={invoiceField}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
