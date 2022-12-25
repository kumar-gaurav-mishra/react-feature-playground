import "./App.css";
import ErrorBoundaryDemo from "./components/ErrorBoundaryDemo";
import ErrorBoundaryErrorHandler from "./components/ErrorBoundaryErrorHandler";

function App() {
  return (
    <div className="App">
      <ErrorBoundaryErrorHandler>
        <ErrorBoundaryDemo heroName={"Batman"} />
      </ErrorBoundaryErrorHandler>
      <ErrorBoundaryErrorHandler>
        <ErrorBoundaryDemo heroName={"SuperMan"} />
      </ErrorBoundaryErrorHandler>
      <ErrorBoundaryErrorHandler>
        <ErrorBoundaryDemo heroName={"Joker"} />
      </ErrorBoundaryErrorHandler>
    </div>
  );
}

export default App;
