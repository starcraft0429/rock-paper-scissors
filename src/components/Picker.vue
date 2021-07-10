<template>
  <section class="picker-section w-100">
    <b-container>
      <div class="picker-wrapper mx-auto">
        <div class="picker-main">
          <div class="top d-flex align-items-center justify-content-center">
            <b-button variant="link" @click="userPick(buttonScissors)">
              <GameButton :button="buttonScissors" />
            </b-button>
          </div>
          <div class="middle d-flex align-items-center justify-content-between">
            <b-button variant="link" @click="userPick(buttonSpock)">
              <GameButton :button="buttonSpock" />
            </b-button>
            <b-button variant="link" @click="userPick(buttonPaper)">
              <GameButton :button="buttonPaper" />
            </b-button>
          </div>
          <div class="bottom d-flex align-items-center justify-content-between">
            <b-button variant="link" @click="userPick(buttonLizard)">
              <GameButton :button="buttonLizard" />
            </b-button>
            <b-button variant="link" @click="userPick(buttonRock)">
              <GameButton :button="buttonRock" />
            </b-button>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions("common", ["userPick"]),
  },
};
</script>
