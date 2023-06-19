import { useReducer } from "react";
import "./App.css";

const initialState = { step: 1, completedSteps: [] };

function reducer(state, action) {
  switch (action.type) {
    case "prev":
      return {
        ...state,
        step: state.step - 1,
        completedSteps: state.completedSteps.filter((s) => s < state.step - 1),
      };
    case "next":
      return {
        ...state,
        step: state.step + 1,
        completedSteps: [...state.completedSteps, state.step],
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="pages">
        <div
          style={{
            border: `3px solid ${
              state.completedSteps.includes(1) || state.step === 1
                ? "rgb(70, 92, 216)"
                : "gray"
            }`,
          }}
        >
          1
        </div>
        <span
          style={{
            backgroundColor: state.completedSteps.includes(1)
              ? "rgb(70, 92, 216)"
              : "gray",
          }}
        ></span>
        <div
          style={{
            border: `3px solid ${
              state.completedSteps.includes(2) || state.step === 2
                ? "rgb(70, 92, 216)"
                : "gray"
            }`,
          }}
        >
          2
        </div>
        <span
          style={{
            backgroundColor: state.completedSteps.includes(2)
              ? "rgb(70, 92, 216)"
              : "gray",
          }}
        ></span>
        <div
          style={{
            border: `3px solid ${
              state.completedSteps.includes(3) || state.step === 3
                ? "rgb(70, 92, 216)"
                : "gray"
            }`,
          }}
        >
          3
        </div>
        <span
          style={{
            backgroundColor: state.completedSteps.includes(3)
              ? "rgb(70, 92, 216)"
              : "gray",
          }}
        ></span>
        <div
          style={{
            border: `3px solid ${
              state.completedSteps.includes(4) || state.step === 4
                ? "rgb(70, 92, 216)"
                : "gray"
            }`,
          }}
        >
          4
        </div>
      </div>
      <div className="btns">
        <button
          data-testid="prevBtn"
          className="prevBtn"
          onClick={() => dispatch({ type: "prev" })}
          disabled={state.step === 1}
          style={{
            backgroundColor:
              state.step === 1 ? "gray" : "rgb(70, 92, 216)",
          }}
        >
          Prev
        </button>
        <button
          data-testid="nextBtn"
          onClick={() => dispatch({ type: "next" })}
          disabled={state.step === 4}
          style={{
            backgroundColor:
              state.step === 4 ? "gray" : "rgb(70, 92, 216)",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
