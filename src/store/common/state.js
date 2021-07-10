export const getInitialState = () => {
  return {
    score: 0,
    waiting: true,
    user: null,
    house: null,
  };
};

const state = getInitialState();

export default state;
