import { render } from '@redwoodjs/testing/web'

import InvoicesLayout from './InvoicesLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvoicesLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvoicesLayout />)
    }).not.toThrow()
  })
})
