import Form from "./ui/Form";

function App(): JSX.Element {
  return (
    <div className="bg-red min-h-screen">
      <div className="bg-[url('/src/assets/bg-intro-mobile.png')] md:bg-[url('/src/assets/bg-intro-desktop.png')] pt-[5.5rem] pb-[4.25rem] xl:flex xl:justify-center xl:items-center min-h-screen">
        <div className="w-[20.4375rem] mx-auto xl:w-auto xl:mx-0 xl:flex xl:items-center xl:gap-[2.8125rem]">
          <div className="xl:w-[32.8125rem]">
            <h1 className="font-bold text-white text-[1.75rem] text-center -tracking-[0.29px] leading-[2.25rem] mb-4 xl:text-[3.125rem] xl:-tracking-[0.52px] xl:leading-[3.4375rem] xl:text-left xl:mb-5">
              Learn to code by watching others
            </h1>
            <p className="xl:text-left font-medium text-[1rem] text-white leading-7 text-center mb-16">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.{" "}
            </p>
          </div>
          <div className="xl:w-[33.75rem]">
            <p className="xl:h-[3.75rem] bg-blue py-[1.125rem] px-[4.125rem] text-center text-[0.9375rem] tracking-[0.27px] text-white font-normal rounded-[10px] mb-6 shadow-[0_0.4rem_0_0_rgba(0,0,0,0.2)]">
              <span className="font-bold">Try it free 7 days</span> then $20/mo.
              thereafter
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
