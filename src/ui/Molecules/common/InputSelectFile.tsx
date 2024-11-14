"use client"

import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form'

interface IPropsSelectFile<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  id?: string;
  accept?: string;
}

export const InputSelectFile = <T extends FieldValues>({
  label,
  name,
  control,
  error,
  id,
  accept,
}: IPropsSelectFile<T>) => {
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
          <input
            type="file"
            id={id || label.toLowerCase()}
            className={`border rounded-md p-2 text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
            {...field}
            accept={accept}
          />
        )}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error.message}</span>}
    </div>
  );
};
