import { Prisma, InvoiceField } from '@prisma/client'

import {
  invoiceFields,
  invoiceField,
  createInvoiceField,
  updateInvoiceField,
  deleteInvoiceField,
} from './invoiceFields'
import type { StandardScenario } from './invoiceFields.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('invoiceFields', () => {
  scenario('returns all invoiceFields', async (scenario: StandardScenario) => {
    const result = await invoiceFields()

    expect(result.length).toEqual(Object.keys(scenario.invoiceField).length)
  })

  scenario(
    'returns a single invoiceField',
    async (scenario: StandardScenario) => {
      const result = await invoiceField({ id: scenario.invoiceField.one.id })

      expect(result).toEqual(scenario.invoiceField.one)
    }
  )

  scenario('creates a invoiceField', async (scenario: StandardScenario) => {
    const result = await createInvoiceField({
      input: {
        invoiceId: scenario.invoiceField.two.invoiceId,
        jobName: 'String',
        task: 'String',
        value: 2203150.745020792,
        rate: 4629704.711907794,
        total: 9737063.018006997,
        hours: 6875313.325028667,
        date: '2023-08-27T19:09:50.855Z',
        startTime: '2023-08-27T19:09:50.855Z',
        endTime: '2023-08-27T19:09:50.855Z',
        updatedAt: '2023-08-27T19:09:50.855Z',
      },
    })

    expect(result.invoiceId).toEqual(scenario.invoiceField.two.invoiceId)
    expect(result.jobName).toEqual('String')
    expect(result.task).toEqual('String')
    expect(result.value).toEqual(new Prisma.Decimal(2203150.745020792))
    expect(result.rate).toEqual(new Prisma.Decimal(4629704.711907794))
    expect(result.total).toEqual(new Prisma.Decimal(9737063.018006997))
    expect(result.hours).toEqual(new Prisma.Decimal(6875313.325028667))
    expect(result.date).toEqual(new Date('2023-08-27T19:09:50.855Z'))
    expect(result.startTime).toEqual(new Date('2023-08-27T19:09:50.855Z'))
    expect(result.endTime).toEqual(new Date('2023-08-27T19:09:50.855Z'))
    expect(result.updatedAt).toEqual(new Date('2023-08-27T19:09:50.855Z'))
  })

  scenario('updates a invoiceField', async (scenario: StandardScenario) => {
    const original = (await invoiceField({
      id: scenario.invoiceField.one.id,
    })) as InvoiceField
    const result = await updateInvoiceField({
      id: original.id,
      input: { jobName: 'String2' },
    })

    expect(result.jobName).toEqual('String2')
  })

  scenario('deletes a invoiceField', async (scenario: StandardScenario) => {
    const original = (await deleteInvoiceField({
      id: scenario.invoiceField.one.id,
    })) as InvoiceField
    const result = await invoiceField({ id: original.id })

    expect(result).toEqual(null)
  })
})
