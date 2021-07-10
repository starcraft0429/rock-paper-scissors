<template>
  <div class="main w-100">
    <Picker v-if="waiting" />
    <div v-else class="game-w w-100">
      <div class="picked-w mb-5 w-100 child-center">
        <div class="d-flex flex-column align-items-center mx-4 mx-xl-5">
          <div class="button-container order-0 order-xl-1">
            <GameButton :button="user" />
          </div>
          <h6 class="my-4 text-uppercase order-1 order-xl-0">You picked</h6>
        </div>
        <Rusult v-if="false" class="mx-5 d-none d-xl-flex" />
        <div class="d-flex flex-column align-items-center mx-4 mx-xl-5">
          <div class="button-container order-0 order-xl-1">
            <GameButton :button="house" />
          </div>
          <h6 class="my-4 text-uppercase order-1 order-xl-0">
            The house picked
          </h6>
        </div>
      </div>
      <Rusult class="d-flex d-sm-flex d-xl-none" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Picker from "@/components/Picker.vue";
import GameButton from "@/components/GameButton.vue";
import Rusult from "@/components/Result.vue";
export default {
  components: {
    Picker,
    GameButton,
    Rusult,
  },
  computed: {
    ...mapState("common", ["waiting", "user", "house"]),
  },
  data() {
    return {};
  },
};
</script>
