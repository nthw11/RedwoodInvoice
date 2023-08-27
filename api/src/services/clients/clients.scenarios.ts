import type { Prisma, Client } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ClientCreateArgs>({
  client: {
    one: {
      data: {
        name: 'String',
        address: 'String',
        city: 'String',
        state: 'String',
        zip: 'String',
        phone: 'String',
        email: 'String',
        updatedAt: '2023-08-27T19:11:29.531Z',
      },
    },
    two: {
      data: {
        name: 'String',
        address: 'String',
        city: 'String',
        state: 'String',
        zip: 'String',
        phone: 'String',
        email: 'String',
        updatedAt: '2023-08-27T19:11:29.531Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Client, 'client'>
