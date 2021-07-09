<template>
  <div id="app">
    <div class="d-flex flex-column h-100">
      <Header />
      <Main />
      <footer class="">
        <div class="button-w child-center">
          <b-button variant="outline-secondary">RULES</b-button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
export default {
  name: "App",
  components: { Header, Main },
};
</script>
