export const selectState = () => {
  let state = {};

  const addToState = (text) => {
    state[text] = true;
  };

  const changeState = (text) => {
    const bool = state[text];

    if (bool === true) {
      state[text] = false;
    }
    if (bool === false) {
      state[text] = true;
    }
  };

  const showState = () => state;

  const resetState = () => {
    state = {};
  };

  return { addToState, showState, resetState, changeState };
};
