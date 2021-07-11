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
    state.score = state.score + value;
  },
  reset(state) {
    const initialState = getInitialState();
    state.waiting = initialState.waiting;
    state.user = initialState.user;
    state.house = initialState.house;
    state.result = initialState.result;
  },
};
