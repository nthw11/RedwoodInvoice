import InvoiceCell from 'src/components/Invoice/InvoiceCell'

type InvoicePageProps = {
  id: string
}

const InvoicePage = ({ id }: InvoicePageProps) => {
  return <InvoiceCell id={id} />
}

export default InvoicePage
