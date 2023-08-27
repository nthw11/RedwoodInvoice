import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditInvoiceFieldById,
  UpdateInvoiceFieldInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormInvoiceField = NonNullable<EditInvoiceFieldById['invoiceField']>

interface InvoiceFieldFormProps {
  invoiceField?: EditInvoiceFieldById['invoiceField']
  onSave: (data: UpdateInvoiceFieldInput, id?: FormInvoiceField['id']) => void
  error: RWGqlError
  loading: boolean
}

const InvoiceFieldForm = (props: InvoiceFieldFormProps) => {
  const onSubmit = (data: FormInvoiceField) => {
    props.onSave(data, props?.invoiceField?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInvoiceField> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="invoiceId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Invoice id
        </Label>

        <TextField
          name="invoiceId"
          defaultValue={props.invoiceField?.invoiceId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="invoiceId" className="rw-field-error" />

        <Label
          name="jobName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Job name
        </Label>

        <TextField
          name="jobName"
          defaultValue={props.invoiceField?.jobName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="jobName" className="rw-field-error" />

        <Label
          name="task"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Task
        </Label>

        <TextField
          name="task"
          defaultValue={props.invoiceField?.task}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="task" className="rw-field-error" />

        <Label
          name="value"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Value
        </Label>

        <TextField
          name="value"
          defaultValue={props.invoiceField?.value}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="value" className="rw-field-error" />

        <Label
          name="rate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rate
        </Label>

        <TextField
          name="rate"
          defaultValue={props.invoiceField?.rate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="rate" className="rw-field-error" />

        <Label
          name="total"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total
        </Label>

        <TextField
          name="total"
          defaultValue={props.invoiceField?.total}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="total" className="rw-field-error" />

        <Label
          name="hours"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hours
        </Label>

        <TextField
          name="hours"
          defaultValue={props.invoiceField?.hours}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="hours" className="rw-field-error" />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.invoiceField?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="startTime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start time
        </Label>

        <DatetimeLocalField
          name="startTime"
          defaultValue={formatDatetime(props.invoiceField?.startTime)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startTime" className="rw-field-error" />

        <Label
          name="endTime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End time
        </Label>

        <DatetimeLocalField
          name="endTime"
          defaultValue={formatDatetime(props.invoiceField?.endTime)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="endTime" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InvoiceFieldForm
