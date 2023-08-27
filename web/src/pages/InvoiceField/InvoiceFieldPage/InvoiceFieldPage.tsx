import InvoiceFieldCell from 'src/components/InvoiceField/InvoiceFieldCell'

type InvoiceFieldPageProps = {
  id: string
}

const InvoiceFieldPage = ({ id }: InvoiceFieldPageProps) => {
  return <InvoiceFieldCell id={id} />
}

export default InvoiceFieldPage
