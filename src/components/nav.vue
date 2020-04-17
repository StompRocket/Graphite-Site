<template>
  <nav class="nav">
    <router-link to="/" class="brand--link">
      <img class="brand" src="../assets/wordmarkWhite.svg" alt="Graphite Writer wordmark" />
    </router-link>
    <Locale></Locale>
    <a href="https://app.graphitewriter.com" class="btn">{{$t("loginSignup")}}</a>
  </nav>
</template>

<script>
import Locale from "@/components/locale.vue";
export default {
  name: "Nav",
  components: { Locale }
};
</script>
