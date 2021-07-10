import { getInitialState } from "./state";
export default {
  userPick(state, value) {
    state.user = value;
  },
  housePick(state, value) {
    state.house = value;
  },
  updateWaiting(state, value) {
    state.waiting = value;
  },
  updateResult(state, value) {
    state.result = value;
  },
  updateScore(state, value) {
    let score = state.score + value;
    state.score = Math.max(score, 0);
  },
  reset(state) {
    const initialState = getInitialState();
    state.waiting = initialState.waiting;
    state.user = initialState.user;
    state.house = initialState.house;
    state.result = initialState.result;
  },
};
