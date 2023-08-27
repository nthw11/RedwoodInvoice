import type {
  QueryResolvers,
  MutationResolvers,
  InvoiceRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const invoices: QueryResolvers['invoices'] = () => {
  return db.invoice.findMany()
}

export const invoice: QueryResolvers['invoice'] = ({ id }) => {
  return db.invoice.findUnique({
    where: { id },
  })
}

export const createInvoice: MutationResolvers['createInvoice'] = ({
  input,
}) => {
  return db.invoice.create({
    data: input,
  })
}

export const updateInvoice: MutationResolvers['updateInvoice'] = ({
  id,
  input,
}) => {
  return db.invoice.update({
    data: input,
    where: { id },
  })
}

export const deleteInvoice: MutationResolvers['deleteInvoice'] = ({ id }) => {
  return db.invoice.delete({
    where: { id },
  })
}

export const Invoice: InvoiceRelationResolvers = {
  user: (_obj, { root }) => {
    return db.invoice.findUnique({ where: { id: root?.id } }).user()
  },
  client: (_obj, { root }) => {
    return db.invoice.findUnique({ where: { id: root?.id } }).client()
  },
  fields: (_obj, { root }) => {
    return db.invoice.findUnique({ where: { id: root?.id } }).fields()
  },
}
