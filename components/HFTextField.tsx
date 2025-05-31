import React from "react";
import {Control, Controller} from "react-hook-form";
import {Input} from "./ui/input";

type Props = {
  control: Control<any>;
  name: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  title: string;
  type?: string;
  defaultValue?: string;
};

function HFTextField({
  control,
  name,
  required,
  disabled,
  title,
  placeholder = "Your answer",
  type = "text",
  defaultValue = "",
}: Props) {
  return (
    <div className="md:col-span-1 col-span-2">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {title} {required && <span className="text-red-400">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{required}}
        render={({field, fieldState}) => (
          <>
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring ${
                fieldState.error
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {fieldState.error && (
              <p className="text-red-500 text-sm mt-1">{title} is required.</p>
            )}
          </>
        )}
      />
    </div>
  );
}

export default HFTextField;
