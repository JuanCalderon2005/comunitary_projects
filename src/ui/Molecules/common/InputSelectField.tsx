"use client"

import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form'

interface IPropsSelectField<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  options: { label: string; value: string }[];
  error?: FieldError;
  id?: string;
  placeholder?: string;
}

export const InputSelectField = <T extends FieldValues>({
  label,
  name,
  control,
  options,
  error,
  id,
  placeholder,
}: IPropsSelectField<T>) => {
  return (
    <div className="w-full flex flex-col mb-6">
      <label
        htmlFor={id || label.toLowerCase()}
        className="text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            id={id || label.toLowerCase()}
            className={`border rounded-md p-2 text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
            {...field}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error.message}</span>}
    </div>
  );
};
