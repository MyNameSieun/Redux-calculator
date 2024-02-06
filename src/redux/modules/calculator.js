const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";

// 초기 상태값
const initialState = {
  number: 0,
};

export const plusOne = (value) => {
  return {
    type: PLUS_ONE,
    payload: value,
  };
};

export const minusOne = (value) => {
  return {
    type: MINUS_ONE,
    payload: value,
  };
};
// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case MINUS_ONE:
      return {
        ...state,
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
