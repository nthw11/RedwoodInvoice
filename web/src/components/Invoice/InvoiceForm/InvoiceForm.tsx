import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import { Input, Button } from '@chakra-ui/react'

import type { EditInvoiceById, UpdateInvoiceInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormInvoice = NonNullable<EditInvoiceById['invoice']>

interface InvoiceFormProps {
  invoice?: EditInvoiceById['invoice']
  onSave: (data: UpdateInvoiceInput, id?: FormInvoice['id']) => void
  error: RWGqlError
  loading: boolean
}

const InvoiceForm = (props: InvoiceFormProps) => {
  const onSubmit = (data: FormInvoice) => {
    props.onSave(data, props?.invoice?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInvoice> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="clientId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Client id
        </Label>

        <TextField
          name="clientId"
          defaultValue={props.invoice?.clientId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="clientId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.invoice?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="amount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Amount
        </Label>

        <NumberField
          name="amount"
          defaultValue={props.invoice?.amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="amount" className="rw-field-error" />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.invoice?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="submitted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Submitted
        </Label>

        <CheckboxField
          name="submitted"
          defaultChecked={props.invoice?.submitted}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="submitted" className="rw-field-error" />

        <Label
          name="paid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Paid
        </Label>

        <CheckboxField
          name="paid"
          defaultChecked={props.invoice?.paid}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="paid" className="rw-field-error" />

        <Label
          name="paidDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Paid date
        </Label>

        <DatetimeLocalField
          name="paidDate"
          defaultValue={formatDatetime(props.invoice?.paidDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="paidDate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InvoiceForm
