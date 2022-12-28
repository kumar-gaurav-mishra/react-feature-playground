import "./App.css";
import RenderPropsCounter from "./components/RenderPropsCounter";
import ClickCounterWithRenderProps from "./components/ClickCounterWithRenderProps";
import HoverCounterWithRenderProps from "./components/HoverCounterWithRenderProps";
function App() {
  return (
    <div className="App">
      <RenderPropsCounter
        render={(count, countHandler) => (
          <ClickCounterWithRenderProps
            count={count}
            countHandler={countHandler}
          />
        )}
      />
      <RenderPropsCounter
        render={(count, countHandler) => (
          <HoverCounterWithRenderProps
            count={count}
            countHandler={countHandler}
          />
        )}
      />
    </div>
  );
}

export default App;
