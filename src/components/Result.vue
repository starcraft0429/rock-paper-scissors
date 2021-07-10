<template>
  <div class="win-status">
    <h1 class="text-uppercase">{{ resultText }}</h1>
    <b-button size="lg" block variant="secondary" @click="replay()">
      PLAY AGAIN
    </b-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Result",
  computed: {
    ...mapState("common", ["result"]),
    resultText() {
      if (this.result === 0) {
        return "Ties";
      } else if (this.result === 1) {
        return "You win";
      } else {
        return "You lose";
      }
    },
  },
  methods: {
    ...mapActions("common", ["replay"]),
  },
};
</script>
