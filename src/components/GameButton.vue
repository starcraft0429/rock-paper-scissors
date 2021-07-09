<template>
  <div>
    <div v-if="button" class="button-wrapper win">
      <div class="button-outer child-center" :style="bgStyle">
        <div class="button-inner child-center">
          <img
            :src="require(`@/assets/images/${button.image}`)"
            :alt="button.image"
          />
        </div>
      </div>
    </div>
    <div v-else class="button-wrapper">
      <div class="button-outer child-center" style="box-shadow: none">
        <div class="button-inner" :style="emptySlot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameButton",
  props: {
    button: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      emptySlot: {
        background: "rgba(0, 0, 0, 0.2)",
        "box-shadow": "none",
      },
      bgStyle: {
        background: `linear-gradient(0deg, ${
          this.button && this.button.colorTop
        }, ${this.button && this.button.colorBottom})`,
      },
    };
  },
};
</script>
