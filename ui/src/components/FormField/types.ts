import { SxProps } from "@mui/material";
import { Control, FieldValues, Path, PathValue } from "react-hook-form";

export type Maybe<T> = T | null;

export interface IFormFieldProps<T extends FieldValues> {
  name: Path<T>;
  error: boolean;
  helperText?: string;
  label: string;
  placeholder?: string;
  control: Control<T, unknown>;
  onIconClick?: () => void;
  icon?: JSX.Element;
  type?: string;
  defaultValue?: Maybe<PathValue<T, Path<T>>> | undefined;
  required?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  maxRows?: number;
  minRows?: number;
  rows?: number;
  sx?: SxProps;
  step?: number;
}
