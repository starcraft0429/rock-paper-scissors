<template>
  <div class="main w-100">
    <!-- <Picker /> -->
    <div class="picked-w w-100">
      <div class="mb-5 d-flex w-100 align-items-center justify-content-around">
        <div class="d-flex flex-column align-items-center">
          <div class="button-container">
            <GameButton :button="user" />
          </div>
          <div class="my-4 text-uppercase">You picked</div>
        </div>
        <div class="d-flex flex-column align-items-center">
          <div class="button-container">
            <GameButton :button="house" />
          </div>
          <div class="my-4 text-uppercase">The house picked</div>
        </div>
      </div>
      <div class="win-status">
        <h1 class="text-uppercase">You win</h1>
        <b-button size="lg" block variant="secondary">PLAY AGAIN</b-button>
      </div>
    </div>
  </div>
</template>

<script>
// import Picker from "@/components/Picker.vue";
import GameButton from "@/components/GameButton.vue";
import { buttonRock } from "@/constants.js";
export default {
  components: {
    // Picker,
    GameButton,
  },
  data() {
    return {
      user: buttonRock,
      house: null,
    };
  },
};
</script>
