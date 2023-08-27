import type { FindInvoiceFieldById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InvoiceField from 'src/components/InvoiceField/InvoiceField'

export const QUERY = gql`
  query FindInvoiceFieldById($id: String!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>InvoiceField not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  invoiceField,
}: CellSuccessProps<FindInvoiceFieldById>) => {
  return <InvoiceField invoiceField={invoiceField} />
}
