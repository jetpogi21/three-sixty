"use client";
import { Label } from "@/components/ui/Label";
import { useField, useFormikContext } from "formik";
import {
  useEffect,
  useRef,
  useState,
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
} from "react";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/Button";
import { DatePickerProps } from "@/components/ui/DatePicker";
import { Input } from "@/components/ui/Input";
import { toValidDateTime } from "@/utils/utilities";
import { convertDateStringToYYYYMMDD } from "@/utils/utils";

export interface FormikDateProps
  extends ButtonProps,
    Pick<DatePickerProps, "format"> {
  label?: string;
  name: string;
  setFocusOnLoad?: boolean;
  setArrayTouched?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  helperText?: string;
  submitOnChange?: boolean;
  containerClassNames?: ClassValue[];
  showLabel?: boolean;
  setHasUpdate?: () => void;
}

export const FormikDate = forwardRef<HTMLInputElement, FormikDateProps>(
  (
    {
      containerClassNames = "",
      label = "",
      setArrayTouched,
      setFocusOnLoad = false,
      onKeyDown,
      helperText,
      submitOnChange = false,
      showLabel = true,
      format,
      ...props
    },
    ref
  ) => {
    const { submitForm } = useFormikContext();
    const [field, meta, { setValue }] = useField(props.name);
    const fieldValue = field.value
      ? convertDateStringToYYYYMMDD(field.value)
      : undefined;

    const [internal, setInternal] = useState(fieldValue);

    const inputRef = useRef<HTMLInputElement>(null);

    const hasError = meta.touched && meta.error;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setInternal(e.currentTarget.value);
      submitOnChange && submitForm();
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      internal &&
        fieldValue !== internal &&
        setArrayTouched &&
        setArrayTouched();
      internal &&
        fieldValue !== internal &&
        props.setHasUpdate &&
        props.setHasUpdate();

      fieldValue !== internal && setValue(internal);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        //@ts-ignore
        setValue(e.target.value);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    useEffect(() => {
      if (inputRef && setFocusOnLoad) {
        inputRef.current?.focus();
      }
    }, [inputRef, setFocusOnLoad]);

    return (
      <div className={cn("flex flex-col w-full gap-1.5", containerClassNames)}>
        {showLabel && !!label && <Label htmlFor={props.name}>{label}</Label>}
        <Input
          type="date"
          value={fieldValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          ref={ref || inputRef}
          id={props.name}
        />
        {helperText && (
          <span className="mt-1 text-xs font-bold text-muted-foreground">
            {helperText}
          </span>
        )}
        {hasError && <span className="text-xs text-red-500">{meta.error}</span>}
      </div>
    );
  }
);
