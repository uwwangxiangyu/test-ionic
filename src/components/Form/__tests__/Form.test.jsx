import { render, waitFor } from '@testing-library/react'
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils'
import TextInput from '../TextInput'
import FormButton from '../Button'
import Form from '../Form'
import React from 'react'
import Counter from '../Counter'

test('Form input', async () => {
  const submit = jest.fn()
  const { findByTitle, findByText, container } = render(
    <Form initialValues={{ Fruit: '' }} onSubmit={submit}>
      <TextInput name={'Fruit'} label={'Fruit'}/>
      <FormButton title={'submit'}/>
    </Form>
  )

  const input = await findByTitle('ionInput')
  const button = await findByText('submit')
  fireEvent.ionChange(input, 'apple')
  fireEvent.click(button)

  await waitFor(() => expect(submit.mock.calls[0][0]).toEqual({ Fruit: 'apple' }))
  expect(container).toMatchSnapshot()
})

test('Form counter', async () => {
  const submit = jest.fn()
  const { findByTitle, findByText, container } = render(
    <Form initialValues={{ CampaignPhoto: 0 }} onSubmit={submit}>
      <Counter name={'CampaignPhoto'} label={'Campaign Photo'}/>
      <FormButton title={'submit'}/>
    </Form>
  )

  const increment = await findByTitle('counterIncrement')
  const decrement = await findByTitle('counterDecrement')
  const button = await findByText('submit')
  fireEvent.click(increment)
  fireEvent.click(increment)
  fireEvent.click(decrement)
  fireEvent.click(button)

  await waitFor(() => expect(submit.mock.calls[0][0]).toEqual({ CampaignPhoto: 1 }))
  expect(container).toMatchSnapshot()
})