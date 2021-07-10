<template>
  <footer class="">
    <div class="rules-button-w">
      <b-button variant="outline-secondary" v-b-modal="'rules-modal'">
        RULES
      </b-button>
    </div>
    <b-modal id="rules-modal" centered hide-header hide-footer>
      <div class="rule-modal-content">
        <div
          class="
            w-100
            d-flex
            align-items-center
            justify-content-center justify-content-xl-between
          "
        >
          <h2 class="m-0 text-uppercase text-primary font-weight-bold">
            Rules
          </h2>
          <b-button
            class="close d-none d-xl-block"
            @click="$bvModal.hide('rules-modal')"
          >
            <span>&times;</span>
          </b-button>
        </div>
        <img
          :src="require('@/assets/images/image-rules-bonus.svg')"
          alt="rules"
        />
        <b-button
          class="close d-none d-sm-block d-xl-none"
          @click="$bvModal.hide('rules-modal')"
        >
          <span>&times;</span>
        </b-button>
      </div>
    </b-modal>
  </footer>
</template>
