import type { FindInvoiceFields } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InvoiceFields from 'src/components/InvoiceField/InvoiceFields'

export const QUERY = gql`
  query FindInvoiceFields {
    invoiceFields {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No invoiceFields yet. '}
      <Link to={routes.newInvoiceField()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  invoiceFields,
}: CellSuccessProps<FindInvoiceFields>) => {
  return <InvoiceFields invoiceFields={invoiceFields} />
}
