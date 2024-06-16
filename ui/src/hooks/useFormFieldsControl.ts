import {
  Control,
  DefaultValues,
  FieldValues,
  Resolver,
  useForm,
  UseFormHandleSubmit,
  UseFormReset,
  UseFormResetField,
  useFormState,
} from "react-hook-form";

export type IFormFieldsControlResponse<T extends FieldValues> =
  | Record<
      keyof T,
      {
        control: Control<T, unknown>;
        error: boolean;
        helperText: string | undefined;
      }
    >
  | Record<string, never>;

interface IFormControlRespose<T extends FieldValues> {
  handleSubmit: UseFormHandleSubmit<T>;
  controlFields: IFormFieldsControlResponse<T>;
  reset: UseFormReset<T>;
  resetField: UseFormResetField<T>;
}

export default function useFormFieldsControl<T extends FieldValues>(
  fields: Array<keyof T>,
  validationSchema?: { resolver: Resolver<T, unknown> },
  defaultValues?: DefaultValues<T>
): IFormControlRespose<T> {
  const { handleSubmit, control, reset, resetField } = useForm<T>({
    resolver: validationSchema?.resolver,
    defaultValues,
  });
  const { errors } = useFormState({
    control,
  });

  const controlFields = fields.reduce((acum, current) => {
    return {
      ...acum,
      [current]: {
        control,
        error: Boolean(errors?.[current]?.message),
        helperText: errors?.[current]?.message,
      },
    };
  }, {});

  return { handleSubmit, controlFields, reset, resetField };
}
