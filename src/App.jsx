import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { plusOne, minusOne } from "./redux/modules/calculator";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.calculator);

  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(parseInt(e.target.value));
  };
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={inputValue} onChange={handleInputChange} /> 만큼을{" "}
        <button
          onClick={() => {
            dispatch(plusOne(inputValue));
          }}
        >
          더할게요
        </button>
        <button onClick={() => dispatch(minusOne(inputValue))}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{data.number}</p>
      </div>
    </div>
  );
}

export default App;
