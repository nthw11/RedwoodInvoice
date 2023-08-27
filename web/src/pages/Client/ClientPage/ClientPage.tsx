import ClientCell from 'src/components/Client/ClientCell'

type ClientPageProps = {
  id: string
}

const ClientPage = ({ id }: ClientPageProps) => {
  return <ClientCell id={id} />
}

export default ClientPage
