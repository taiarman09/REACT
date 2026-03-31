import { useReducer } from "react";
import "./App.css";

function Reduc(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(Reduc, 0);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ color: count >= 0 ? "green" : "red", fontSize: "60px" }}>
        {count}
      </h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          style={{ padding: "10px 20px", fontSize: "18px" }}
        >
          ➕ Increment
        </button>

        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{ padding: "10px 20px", fontSize: "18px" }}
        >
          ➖ Decrement
        </button>

        <button
          onClick={() => dispatch({ type: "RESET" })}
          style={{ padding: "10px 20px", fontSize: "18px" }}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default App;