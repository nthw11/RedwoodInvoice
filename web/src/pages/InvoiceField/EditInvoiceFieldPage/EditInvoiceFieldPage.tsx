import EditInvoiceFieldCell from 'src/components/InvoiceField/EditInvoiceFieldCell'

type InvoiceFieldPageProps = {
  id: string
}

const EditInvoiceFieldPage = ({ id }: InvoiceFieldPageProps) => {
  return <EditInvoiceFieldCell id={id} />
}

export default EditInvoiceFieldPage
