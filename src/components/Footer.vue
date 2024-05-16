<template>
  <footer>
    <p>&copy; {{ currentYear }} Jobs in India. All rights reserved.</p>
  </footer>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    const currentYear = ref(new Date().getFullYear());

    return {
      currentYear,
    };
  },
});
</script>

<style scoped>
footer {
  background-color: #4062bb;
  color: #ebebeb;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
