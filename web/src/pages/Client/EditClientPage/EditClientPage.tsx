import EditClientCell from 'src/components/Client/EditClientCell'

type ClientPageProps = {
  id: string
}

const EditClientPage = ({ id }: ClientPageProps) => {
  return <EditClientCell id={id} />
}

export default EditClientPage
