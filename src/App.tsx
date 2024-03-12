import Form from "./ui/Form";

function App(): JSX.Element {
  return (
    <div className="bg-red min-h-screen">
      <div>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </p>
      </div>
      <div>
        <p>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </p>
        <Form />
      </div>
    </div>
  );
}

export default App;
