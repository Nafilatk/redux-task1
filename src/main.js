import { createStore } from "redux";

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => {
  document.getElementById("count").innerText = store.getState().count;
});

document.getElementById("increment").addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

document.getElementById("decrement").addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

document.getElementById("count").innerText = store.getState().count;
