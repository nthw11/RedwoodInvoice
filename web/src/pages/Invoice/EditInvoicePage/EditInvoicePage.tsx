import EditInvoiceCell from 'src/components/Invoice/EditInvoiceCell'

type InvoicePageProps = {
  id: string
}

const EditInvoicePage = ({ id }: InvoicePageProps) => {
  return <EditInvoiceCell id={id} />
}

export default EditInvoicePage
