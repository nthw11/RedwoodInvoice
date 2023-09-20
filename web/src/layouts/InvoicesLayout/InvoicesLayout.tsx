import { VStack, Text, UnorderedList, ListItem, Flex } from '@chakra-ui/react'
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
    <Flex m={5}>
    <UnorderedList>
      <ListItem>
        <Link to={routes.about()}>About</Link>
      </ListItem>
      <ListItem>
        <Link to={routes.home()}>Home</Link>
      </ListItem>
      <ListItem>
        <Link to={routes.users()}>Users</Link>
      </ListItem>
      <ListItem>
        <Link to={routes.invoices()}>Invoices</Link>
      </ListItem>
    </UnorderedList>
    </Flex>
  </header>
  {children}
</VStack>
  </>
}

export default InvoiceLayout
