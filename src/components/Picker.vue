<template>
  <section class="picker-section w-100">
    <b-container>
      <div class="picker-wrapper mx-auto">
        <div class="picker-main">
          <div class="top d-flex align-items-center justify-content-center">
            <GameButton :button="buttonScissors" />
          </div>
          <div class="middle d-flex align-items-center justify-content-between">
            <GameButton :button="buttonSpock" />
            <GameButton :button="buttonPaper" />
          </div>
          <div class="bottom d-flex align-items-center justify-content-between">
            <GameButton :button="buttonLizard" />
            <GameButton :button="buttonRock" />
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
import GameButton from "@/components/GameButton.vue";
import {
  buttonRock,
  buttonPaper,
  buttonScissors,
  buttonLizard,
  buttonSpock,
} from "@/constants.js";
export default {
  components: {
    GameButton,
  },
  data() {
    return {
      buttonRock: buttonRock,
      buttonPaper: buttonPaper,
      buttonScissors: buttonScissors,
      buttonLizard: buttonLizard,
      buttonSpock: buttonSpock,
    };
  },
};
</script>
