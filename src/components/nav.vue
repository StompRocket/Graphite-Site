<template>
  <nav class="nav">
    <router-link to="/" class="brand--link">
      <img class="brand" src="../assets/wordmarkWhite.svg" alt="Graphite Writer wordmark" />
    </router-link>
    <Locale></Locale>
    <a @click="openApp" :href="$store.getters.appUrl" class="btn">{{$t("loginSignup")}}</a>
  </nav>
</template>

<script>
import Locale from "@/components/locale.vue";
export default {
  name: "Nav",
  components: { Locale },
  methods: {
    openApp() {
      gtag("event", "sign_up");
    }
  }
};
</script>
