import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import toast from "react-hot-toast";
import Input from "./Input";
import { useEffect } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Form(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
    control,
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");
  // console.log("watch", watch("firstName"));

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted data:", data);
    notify(data.firstName);
  };

  const notify = (name: string): void => {
    // Note: The second argument is optional
    toast.success(`Welcome aboard, ${name}`, {
      duration: 3000,
      position: "top-center",
    });
  };

  useEffect(() => {
    // Reset the form only after a successful submission
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-white rounded-[10px] shadow-[0_0.5rem_0_0_rgba(0,0,0,0.2)]"
      >
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="First Name"
            // id="firstName"
            // disabled={isLoading}
            {...register("firstName", {
              required: "First Name cannot be empty",
            })}
            maxLength={15}
            error={errors.firstName?.message}
          />
          <Input
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: "Last Name cannot be empty",
            })}
            maxLength={15}
            error={errors.lastName?.message}
          />
          <Input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email cannot be empty",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Please enter a valid email address",
              },
            })}
            maxLength={254}
            error={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password cannot be empty",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            error={errors.password?.message}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
            error={errors.confirmPassword?.message}
          />
          <button
            type="submit"
            className="bg-green h-14 rounded-[5px] text-white font-semibold text-[0.9375rem] tracking-wider shadow-green-button hover:bg-light-green hover:shadow-light-green-button"
          >
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="text-[0.6875rem] leading-[1.3125rem] text-center text-grayish-blue font-medium w-[15.5625rem] mx-auto">
            By clicking the button, you are agreeing to our{"    "}
            <span className="text-red font-bold">Terms and Services</span>
          </p>
        </div>
      </form>
      <DevTool control={control} /> {/* set up the React Hook Form DevTools */}
    </>
  );
}

export default Form;
