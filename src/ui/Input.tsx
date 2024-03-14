import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, register, error, ...rest }, ref) => {
    return (
      <div>
        <div className="relative">
          <input
            {...register} // Spread register props if provided (React Hook Form)
            {...rest} // Spread the rest of the props (type, id, disabled, etc.)
            ref={ref}
            placeholder={error ? undefined : placeholder}
            className={`px-5 w-full h-14 rounded-[5px] border-light-gray border-[1px] placeholder:tracking-[0.25px] placeholder:text-sm placeholder:font-semibold placeholder:text-dark-blue ${
              error && "border-red border-2"
            }`}
          />
          {error && (
            <img
              src="/src/assets/icon-error.svg"
              alt="Error icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 xl:right-5"
            />
          )}
        </div>
        {error && (
          <p className="text-red text-[0.6875rem] font-medium italic mt-[0.375rem] text-right">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; // Good practice for components that use forwardRef
// Note: When you wrap a component with React.forwardRef, the component you're defining becomes an anonymous function. Without an explicit displayName, it could appear as "ForwardRef" or similar in the React Developer Tools, depending on the version of React and the tools you're using. By setting a displayName, you ensure that the component is labeled clearly.

export default Input;
