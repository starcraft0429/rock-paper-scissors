<template>
  <section class="header-section w-100">
    <b-container>
      <div
        class="
          header-wrapper
          d-flex
          align-items-center
          justify-content-between
          p-3
        "
      >
        <div class="logo-w">
          <a href="/">
            <img
              :src="require('@/assets/images/logo-bonus.svg')"
              alt="logo-bonus"
            />
          </a>
        </div>
        <div
          class="
            score-wrapper
            rounded
            bg-light
            py-2
            px-3
            d-flex
            flex-column
            align-items-center
            justify-content-around
          "
        >
          <div class="text text-uppercase">Score</div>
          <div class="score">{{ score }}</div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState("common", ["score"]),
  },
};
</script>
