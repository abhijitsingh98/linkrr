<template>
  <div class="layout">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";

export default defineComponent({
  name: "Layout",
  components: {
    Header,
    Content,
    Footer,
  },
});
</script>
