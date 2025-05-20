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
    <div className="col-span-1">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {title} {required && <span className="text-red-400">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({field: {onChange, value}}) => {
          return (
            <Input
              value={value}
              defaultValue={defaultValue}
              onChange={(e) => onChange(e.target.value)}
              id={name}
              type={type}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
              placeholder={placeholder}
              required={required}
              disabled={disabled}
            />
          );
        }}
      />
    </div>
  );
}

export default HFTextField;
