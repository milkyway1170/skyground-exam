import React, { ReactElement } from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import { Controller, FieldValues, Path, PathValue } from 'react-hook-form'
import { FormTextField } from './styles'
import { IFormFieldProps } from './types'

export default function FormField<T extends FieldValues>({
  name,
  error,
  helperText,
  label,
  placeholder,
  control,
  onIconClick,
  icon,
  type = 'text',
  defaultValue,
  required = true,
  disabled = false,
  multiline = false,
  maxRows,
  minRows,
  rows,
  step,
  sx
}: IFormFieldProps<T>): ReactElement {
  const defaultValueString = defaultValue ?? ''

  return (
    <Controller
      control={control}
      defaultValue={defaultValueString as PathValue<T, Path<T>>}
      name={name}
      render={({ field }) => (
        <FormTextField
          disabled={disabled}
          error={error}
          helperText={helperText}
          id={name}
          InputProps={{
            endAdornment: icon ? (
              <InputAdornment position="end">
                <IconButton onClick={onIconClick}>{icon}</IconButton>
              </InputAdornment>
            ) : null,
            inputProps: { step }
          }}
          label={label}
          maxRows={maxRows}
          minRows={minRows}
          multiline={multiline}
          placeholder={placeholder}
          required={required}
          rows={rows}
          sx={sx}
          type={type}
          value={String(field.value || '')}
          fullWidth
          onChange={e => field.onChange(e)}
        />
      )}
    />
  )
}
