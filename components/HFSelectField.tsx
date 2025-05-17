import React from "react";
import {Control, Controller} from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Options = {
  label: string;
  value: string;
};

type Props = {
  control: Control<any>;
  name: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  title: string;
  type?: string;
  options: Options[];
  defaultValue?: string;
};

function HFSelectField({
  control,
  name,
  options,
  placeholder = "Select",
  title = "",
  required = false,
  defaultValue = "",
}: Props) {
  return (
    <div className="col-span-1">
      <label
        htmlFor="trailerType"
        className="block text-gray-700 font-medium mb-2">
        {title} {required && <span className="text-red-400">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({field: {onChange}}) => {
          return (
            <Select
              required={true}
              onValueChange={(e) => {
                onChange(e);
              }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options?.map((item) => (
                    <SelectItem key={item?.value} value={item?.value}>
                      {item?.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          );
        }}
      />
    </div>
  );
}

export default HFSelectField;
