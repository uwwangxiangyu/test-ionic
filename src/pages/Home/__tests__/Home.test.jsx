import { render } from '@testing-library/react'
import React from 'react'
import Home from '../Home'

test('Render Home page', async () => {
  const { container } = render(<Home history={[]}/>)

  expect(container).toMatchSnapshot()
})