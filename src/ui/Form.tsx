import Input from "./Input";

function Form(): JSX.Element {
  return (
    <form className="p-6 bg-white w-[20.4375rem] rounded-[10px]">
      <div className="flex flex-col gap-4">
        <Input />
        <Input />
        <Input />
        <Input />
        <button className="bg-green h-14 rounded-[5px] text-white font-semibold text-[0.9375rem] tracking-wider shadow-green-button">
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="text-[0.6875rem] leading-[1.3125rem] text-center text-grayish-blue font-medium w-[15.5625rem] mx-auto">
          By clicking the button, you are agreeing to our{"    "}
          <span className="text-red font-bold">Terms and Services</span>
        </p>
      </div>
    </form>
  );
}

export default Form;
