import type { Prisma, InvoiceField } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvoiceFieldCreateArgs>({
  invoiceField: {
    one: {
      data: {
        jobName: 'String',
        task: 'String',
        value: 7036206.822356521,
        rate: 965406.2573147204,
        total: 8986444.392636113,
        hours: 4137129.089945719,
        date: '2023-08-27T19:09:50.872Z',
        startTime: '2023-08-27T19:09:50.872Z',
        endTime: '2023-08-27T19:09:50.872Z',
        updatedAt: '2023-08-27T19:09:50.872Z',
        invoice: {
          create: {
            amount: 6573523,
            date: '2023-08-27T19:09:50.872Z',
            submitted: true,
            paid: true,
            updatedAt: '2023-08-27T19:09:50.872Z',
            user: { create: { email: 'String8115722' } },
            client: {
              create: {
                name: 'String',
                address: 'String',
                city: 'String',
                state: 'String',
                zip: 'String',
                phone: 'String',
                email: 'String',
                updatedAt: '2023-08-27T19:09:50.872Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        jobName: 'String',
        task: 'String',
        value: 9669444.876246275,
        rate: 1161785.451060282,
        total: 713099.0312471086,
        hours: 9388640.983602459,
        date: '2023-08-27T19:09:50.872Z',
        startTime: '2023-08-27T19:09:50.872Z',
        endTime: '2023-08-27T19:09:50.872Z',
        updatedAt: '2023-08-27T19:09:50.872Z',
        invoice: {
          create: {
            amount: 2730640,
            date: '2023-08-27T19:09:50.872Z',
            submitted: true,
            paid: true,
            updatedAt: '2023-08-27T19:09:50.872Z',
            user: { create: { email: 'String3410389' } },
            client: {
              create: {
                name: 'String',
                address: 'String',
                city: 'String',
                state: 'String',
                zip: 'String',
                phone: 'String',
                email: 'String',
                updatedAt: '2023-08-27T19:09:50.872Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<InvoiceField, 'invoiceField'>
