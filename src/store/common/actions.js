import {
  buttonPaper,
  buttonRock,
  buttonLizard,
  buttonSpock,
  buttonScissors,
} from "@/constants.js";

const options = [
  buttonPaper,
  buttonRock,
  buttonLizard,
  buttonSpock,
  buttonScissors,
];
const houseAI = () => {
  return new Promise((resolve) => {
    let i = Math.floor(Math.random() * 5);
    setTimeout(() => {
      resolve(options[i]);
    }, 1000);
  });
};
const lazyCompare = function (user, house) {
  return new Promise((resolve) => {
    const idxUser = options.indexOf(user);
    const idxHouse = options.indexOf(house);
    let diff = idxHouse - idxUser;
    if (diff < 0) {
      diff += options.length;
    }
    while (diff > 2) {
      diff -= 2;
    }
    setTimeout(() => {
      if (diff === 0) {
        //same
        resolve(0);
      } else if (diff === 1) {
        //win
        resolve(1);
      } else {
        //lose
        resolve(-1);
      }
    }, 1000);
  });
};

export default {
  async userPick({ commit }, userPick) {
    commit("userPick", userPick);
    commit("updateWaiting", false);
    const housePick = await houseAI();
    commit("housePick", housePick);
    const result = await lazyCompare(userPick, housePick);
    commit("updateResult", result);
    commit("updateScore", result);
  },
  replay({ commit }) {
    commit("reset");
  },
};
