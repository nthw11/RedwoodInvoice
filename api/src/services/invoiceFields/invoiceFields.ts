import type {
  QueryResolvers,
  MutationResolvers,
  InvoiceFieldRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const invoiceFields: QueryResolvers['invoiceFields'] = () => {
  return db.invoiceField.findMany()
}

export const invoiceField: QueryResolvers['invoiceField'] = ({ id }) => {
  return db.invoiceField.findUnique({
    where: { id },
  })
}

export const createInvoiceField: MutationResolvers['createInvoiceField'] = ({
  input,
}) => {
  return db.invoiceField.create({
    data: input,
  })
}

export const updateInvoiceField: MutationResolvers['updateInvoiceField'] = ({
  id,
  input,
}) => {
  return db.invoiceField.update({
    data: input,
    where: { id },
  })
}

export const deleteInvoiceField: MutationResolvers['deleteInvoiceField'] = ({
  id,
}) => {
  return db.invoiceField.delete({
    where: { id },
  })
}

export const InvoiceField: InvoiceFieldRelationResolvers = {
  invoice: (_obj, { root }) => {
    return db.invoiceField.findUnique({ where: { id: root?.id } }).invoice()
  },
}
