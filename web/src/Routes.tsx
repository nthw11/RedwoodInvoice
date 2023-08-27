// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import InvoicesLayout from 'src/layouts/InvoicesLayout/InvoicesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Clients" titleTo="clients" buttonLabel="New Client" buttonTo="newClient">
        <Route path="/clients/new" page={ClientNewClientPage} name="newClient" />
        <Route path="/clients/{id}/edit" page={ClientEditClientPage} name="editClient" />
        <Route path="/clients/{id}" page={ClientClientPage} name="client" />
        <Route path="/clients" page={ClientClientsPage} name="clients" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Invoices" titleTo="invoices" buttonLabel="New Invoice" buttonTo="newInvoice">
        <Route path="/invoices/new" page={InvoiceNewInvoicePage} name="newInvoice" />
        <Route path="/invoices/{id}/edit" page={InvoiceEditInvoicePage} name="editInvoice" />
        <Route path="/invoices/{id}" page={InvoiceInvoicePage} name="invoice" />
        <Route path="/invoices" page={InvoiceInvoicesPage} name="invoices" />
      </Set>
      <Set wrap={ScaffoldLayout} title="InvoiceFields" titleTo="invoiceFields" buttonLabel="New InvoiceField" buttonTo="newInvoiceField">
        <Route path="/invoice-fields/new" page={InvoiceFieldNewInvoiceFieldPage} name="newInvoiceField" />
        <Route path="/invoice-fields/{id}/edit" page={InvoiceFieldEditInvoiceFieldPage} name="editInvoiceField" />
        <Route path="/invoice-fields/{id}" page={InvoiceFieldInvoiceFieldPage} name="invoiceField" />
        <Route path="/invoice-fields" page={InvoiceFieldInvoiceFieldsPage} name="invoiceFields" />
      </Set>
      <Set wrap={InvoicesLayout}>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
