<template>
  <div id="app">
    <div class="d-flex flex-column h-100">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "@/components/Main.vue";
export default {
  name: "App",
  components: { Header, Footer, Main },
};
</script>
