import { Button } from "./components/ui/button";

const App = () => {
  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>

      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </>
  );
};

export default App;
