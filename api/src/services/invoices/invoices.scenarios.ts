import type { Prisma, Invoice } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvoiceCreateArgs>({
  invoice: {
    one: {
      data: {
        amount: 5134920,
        date: '2023-08-27T19:10:51.394Z',
        submitted: true,
        paid: true,
        updatedAt: '2023-08-27T19:10:51.394Z',
        user: { create: { email: 'String8877562' } },
        client: {
          create: {
            name: 'String',
            address: 'String',
            city: 'String',
            state: 'String',
            zip: 'String',
            phone: 'String',
            email: 'String',
            updatedAt: '2023-08-27T19:10:51.394Z',
          },
        },
      },
    },
    two: {
      data: {
        amount: 5990598,
        date: '2023-08-27T19:10:51.394Z',
        submitted: true,
        paid: true,
        updatedAt: '2023-08-27T19:10:51.394Z',
        user: { create: { email: 'String2606851' } },
        client: {
          create: {
            name: 'String',
            address: 'String',
            city: 'String',
            state: 'String',
            zip: 'String',
            phone: 'String',
            email: 'String',
            updatedAt: '2023-08-27T19:10:51.394Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invoice, 'invoice'>
