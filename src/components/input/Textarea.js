import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, placeholder = "", children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className="w-full px-6 py-4 text-sm font-medium bg-transparent border border-strock rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white resize-none min-h-[200px] outline-none"
      placeholder={placeholder}
      spellCheck={false}
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
