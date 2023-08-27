import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvoiceFieldForm from 'src/components/InvoiceField/InvoiceFieldForm'

import type { CreateInvoiceFieldInput } from 'types/graphql'

const CREATE_INVOICE_FIELD_MUTATION = gql`
  mutation CreateInvoiceFieldMutation($input: CreateInvoiceFieldInput!) {
    createInvoiceField(input: $input) {
      id
    }
  }
`

const NewInvoiceField = () => {
  const [createInvoiceField, { loading, error }] = useMutation(
    CREATE_INVOICE_FIELD_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvoiceField created')
        navigate(routes.invoiceFields())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateInvoiceFieldInput) => {
    createInvoiceField({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New InvoiceField</h2>
      </header>
      <div className="rw-segment-main">
        <InvoiceFieldForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInvoiceField
