import type { Invoice } from '@prisma/client'

import {
  invoices,
  invoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} from './invoices'
import type { StandardScenario } from './invoices.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('invoices', () => {
  scenario('returns all invoices', async (scenario: StandardScenario) => {
    const result = await invoices()

    expect(result.length).toEqual(Object.keys(scenario.invoice).length)
  })

  scenario('returns a single invoice', async (scenario: StandardScenario) => {
    const result = await invoice({ id: scenario.invoice.one.id })

    expect(result).toEqual(scenario.invoice.one)
  })

  scenario('creates a invoice', async (scenario: StandardScenario) => {
    const result = await createInvoice({
      input: {
        clientId: scenario.invoice.two.clientId,
        userId: scenario.invoice.two.userId,
        amount: 9259787,
        date: '2023-08-27T19:10:51.377Z',
        submitted: true,
        paid: true,
        updatedAt: '2023-08-27T19:10:51.377Z',
      },
    })

    expect(result.clientId).toEqual(scenario.invoice.two.clientId)
    expect(result.userId).toEqual(scenario.invoice.two.userId)
    expect(result.amount).toEqual(9259787)
    expect(result.date).toEqual(new Date('2023-08-27T19:10:51.377Z'))
    expect(result.submitted).toEqual(true)
    expect(result.paid).toEqual(true)
    expect(result.updatedAt).toEqual(new Date('2023-08-27T19:10:51.377Z'))
  })

  scenario('updates a invoice', async (scenario: StandardScenario) => {
    const original = (await invoice({ id: scenario.invoice.one.id })) as Invoice
    const result = await updateInvoice({
      id: original.id,
      input: { amount: 340612 },
    })

    expect(result.amount).toEqual(340612)
  })

  scenario('deletes a invoice', async (scenario: StandardScenario) => {
    const original = (await deleteInvoice({
      id: scenario.invoice.one.id,
    })) as Invoice
    const result = await invoice({ id: original.id })

    expect(result).toEqual(null)
  })
})
