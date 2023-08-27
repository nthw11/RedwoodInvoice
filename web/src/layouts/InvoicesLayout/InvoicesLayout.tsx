import { VStack, Text, UnorderedList, ListItem } from '@chakra-ui/react'
// import { Header } from 'components/Header'
import { Link, routes } from '@redwoodjs/router'

type InvoiceLayoutProps = {
  children?: React.ReactNode
}

const InvoiceLayout = ({ children }: InvoiceLayoutProps) => {
  return <>
    <VStack spacing={4} align="stretch">
  {/* <Header /> */}
  <header>
    <Text as="h1" fontSize="2xl" fontWeight="bold">
      Invoices
    </Text>
    <UnorderedList>
      <ListItem>
        <Link to={routes.about()}>About</Link>
      </ListItem>
      <ListItem>
        <Link to={routes.home()}>Home</Link>
      </ListItem>
    </UnorderedList>
  </header>
  {children}
</VStack>
  </>
}

export default InvoiceLayout
