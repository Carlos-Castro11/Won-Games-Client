import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // render the component
    const { container } = render(<Main />)
    // Search the element and verify if exists
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // Render the component
    const { container } = render(<Main />)

    // Check if background is with the correct color
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
