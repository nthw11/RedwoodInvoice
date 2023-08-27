import type { Meta, StoryObj } from '@storybook/react'

import InvoiceLayout from './InvoicesLayout'

const meta: Meta<typeof InvoiceLayout> = {
  component: InvoiceLayout,
}

export default meta

type Story = StoryObj<typeof InvoiceLayout>

export const Primary: Story = {}
